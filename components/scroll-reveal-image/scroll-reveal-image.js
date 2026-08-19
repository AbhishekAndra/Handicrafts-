/**
 * Scroll Reveal Image — vanilla JS
 * ------------------------------------------------------------
 * Reproduces a Framer Motion useScroll + useTransform + useSpring
 * effect with plain JavaScript: as an element scrolls up through
 * the viewport, its width grows, its (deliberately oversized)
 * inner image scales down, and its border radius rounds off.
 *
 * Usage: give any element class="scroll-reveal-image" containing
 * a ".scroll-reveal-image-inner" > "img", configure it with
 * data-* attributes (see README block at the bottom), and include
 * this script anywhere on the page. Multiple instances are fully
 * supported and share one scroll listener / animation loop.
 * ------------------------------------------------------------
 */
(function () {
    "use strict";

    var reduceMotionQuery = window.matchMedia
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;

    function prefersReducedMotion() {
        return !!(reduceMotionQuery && reduceMotionQuery.matches);
    }

    // ---------- small numeric helpers ----------

    function lerp(start, end, amount) {
        return start + (end - start) * amount;
    }

    function clamp01(n) {
        return Math.max(0, Math.min(1, n));
    }

    // Splits "40vw" -> { number: 40, unit: "vw" }, "1.6" -> { number: 1.6, unit: "" }
    function parseValue(str) {
        var match = /^(-?\d*\.?\d+)\s*([a-z%]*)$/i.exec(String(str).trim());
        if (!match) return { number: parseFloat(str) || 0, unit: "" };
        return { number: parseFloat(match[1]), unit: match[2] };
    }

    // Interpolates between two CSS-value strings that share a unit ("40vw" -> "95vw")
    function interpolateValue(fromStr, toStr, t) {
        var from = parseValue(fromStr);
        var to = parseValue(toStr);
        var unit = from.unit || to.unit;
        var value = lerp(from.number, to.number, t);
        return unit === "" ? value : value + unit;
    }

    // ---------- a tiny damped-spring integrator ----------
    // Mirrors the feel of Framer Motion's useSpring: instead of
    // jumping straight to the scroll-derived target, the current
    // value chases it under spring physics (stiffness pulls it in,
    // damping removes energy so it settles instead of oscillating
    // forever).

    function createSpring(initialValue, stiffness, damping) {
        return {
            value: initialValue,
            target: initialValue,
            velocity: 0,
            stiffness: stiffness,
            damping: damping,
            mass: 1
        };
    }

    function stepSpring(spring, dtSeconds) {
        // Sub-step for stability so the spring doesn't blow up on
        // long frames (tab switches, slow devices, etc).
        var substeps = 4;
        var subDt = Math.min(dtSeconds, 1 / 30) / substeps;

        for (var i = 0; i < substeps; i++) {
            var springForce = -spring.stiffness * (spring.value - spring.target);
            var dampingForce = -spring.damping * spring.velocity;
            var acceleration = (springForce + dampingForce) / spring.mass;

            spring.velocity += acceleration * subDt;
            spring.value += spring.velocity * subDt;
        }
    }

    function springSettled(spring) {
        return (
            Math.abs(spring.target - spring.value) < 0.05 &&
            Math.abs(spring.velocity) < 0.05
        );
    }

    // ---------- component controller ----------

    function readConfig(el) {
        var data = el.dataset;
        return {
            height: data.height || "80vh",
            fromWidth: data.fromWidth || "40%",
            toWidth: data.toWidth || "95%",
            fromRadius: data.fromRadius || "0px",
            toRadius: data.toRadius || "22px",
            radiusStart: data.radiusStart !== undefined ? parseFloat(data.radiusStart) : 0.5,
            innerWidth: data.innerWidth || "95%",
            fromScale: data.fromScale !== undefined ? parseFloat(data.fromScale) : 1.6,
            toScale: data.toScale !== undefined ? parseFloat(data.toScale) : 1,
            stiffness: data.stiffness !== undefined ? parseFloat(data.stiffness) : 120,
            damping: data.damping !== undefined ? parseFloat(data.damping) : 80
        };
    }

    function createInstance(el) {
        var inner = el.querySelector(".scroll-reveal-image-inner");
        if (!inner) return null;

        var config = readConfig(el);

        el.style.height = config.height;
        inner.style.width = config.innerWidth;

        var reduced = prefersReducedMotion();

        if (reduced) {
            // Show the "revealed" resting state immediately, no motion.
            el.style.width = config.toWidth;
            el.style.borderRadius = config.toRadius;
            inner.style.transform = "translateX(-50%) scale(" + config.toScale + ")";
            return { el: el, inner: inner, config: config, reduced: true, progress: 1 };
        }

        var startWidth = interpolateValue(config.fromWidth, config.toWidth, 0);
        var startRadius = interpolateValue(config.fromRadius, config.toRadius, 0);

        el.style.width = startWidth;
        el.style.borderRadius = startRadius;
        inner.style.transform = "translateX(-50%) scale(" + config.fromScale + ")";

        return {
            el: el,
            inner: inner,
            config: config,
            reduced: false,
            progress: 0,
            active: false, // toggled by the IntersectionObserver
            springs: {
                width: createSpring(0, config.stiffness, config.damping), // 0..1 progress space
                scale: createSpring(0, config.stiffness, config.damping),
                radius: createSpring(0, config.stiffness, config.damping)
            }
        };
    }

    // ---------- scroll progress ----------
    // Mirrors framer-motion's default offset ["start end", "start start"]:
    // progress 0  -> element's top edge is at the bottom of the viewport
    // progress 1  -> element's top edge has reached the top of the viewport
    // (window.scrollY is implicit in getBoundingClientRect()'s output —
    // the rect is always reported relative to the current scroll position.)

    function getScrollProgress(el) {
        var rect = el.getBoundingClientRect();
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        var progress = (viewportHeight - rect.top) / viewportHeight;
        return clamp01(progress);
    }

    // ---------- orchestration ----------

    var instances = [];
    var activeInstances = new Set(); // populated by IntersectionObserver, read on scroll
    var ticking = false; // scroll-event coalescing flag
    var rafId = null;
    var lastFrameTime = null;

    function refreshTargets() {
        // "Read" phase: for every currently-visible instance, compute
        // scroll progress and set spring targets. Done once per animation
        // frame (via the ticking flag) rather than on every scroll event.
        activeInstances.forEach(function (instance) {
            if (instance.reduced) return;

            var progress = clamp01(getScrollProgress(instance.el));
            instance.progress = progress;

            instance.springs.width.target = progress;
            instance.springs.scale.target = progress;

            var radiusT =
                instance.config.radiusStart >= 1
                    ? 0
                    : clamp01(
                          (progress - instance.config.radiusStart) /
                              (1 - instance.config.radiusStart)
                      );
            instance.springs.radius.target = radiusT;
        });

        ticking = false;
        wakeAnimationLoop();
    }

    function onScrollOrResize() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(refreshTargets);
        }
    }

    function wakeAnimationLoop() {
        if (rafId === null) {
            lastFrameTime = null;
            rafId = requestAnimationFrame(animationLoop);
        }
    }

    function animationLoop(timestamp) {
        if (lastFrameTime === null) lastFrameTime = timestamp;
        var dt = (timestamp - lastFrameTime) / 1000;
        lastFrameTime = timestamp;

        var anyUnsettled = false;

        // "Step" phase (physics) — cheap, no DOM reads.
        activeInstances.forEach(function (instance) {
            if (instance.reduced) return;
            var s = instance.springs;
            stepSpring(s.width, dt);
            stepSpring(s.scale, dt);
            stepSpring(s.radius, dt);

            if (!springSettled(s.width) || !springSettled(s.scale) || !springSettled(s.radius)) {
                anyUnsettled = true;
            }
        });

        // "Write" phase (DOM) — batched separately from the reads above
        // to avoid interleaved read/write layout thrashing.
        activeInstances.forEach(function (instance) {
            if (instance.reduced) return;
            applyInstanceStyles(instance);
        });

        if (anyUnsettled) {
            rafId = requestAnimationFrame(animationLoop);
        } else {
            rafId = null; // pause the loop entirely until the next scroll/resize
        }
    }

    function applyInstanceStyles(instance) {
        var config = instance.config;
        var s = instance.springs;

        var width = interpolateValue(config.fromWidth, config.toWidth, s.width.value);
        var scale = lerp(config.fromScale, config.toScale, s.scale.value);
        var radius = interpolateValue(config.fromRadius, config.toRadius, s.radius.value);

        instance.el.style.width = width;
        instance.el.style.borderRadius = radius;
        instance.inner.style.transform = "translateX(-50%) scale(" + scale + ")";
    }

    function init() {
        var elements = document.querySelectorAll(".scroll-reveal-image");
        if (!elements.length) return;

        elements.forEach(function (el) {
            var instance = createInstance(el);
            if (instance) instances.push(instance);
        });

        var animatedInstances = instances.filter(function (i) {
            return !i.reduced;
        });
        if (!animatedInstances.length) return; // nothing to animate — reduced motion or bad markup

        // Only pay the per-frame cost for instances that are actually
        // near the viewport. A generous rootMargin keeps the effect
        // seamless (springs already have momentum by the time the
        // element is visible) without animating far-offscreen images.
        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    var instance = animatedInstances.find(function (i) {
                        return i.el === entry.target;
                    });
                    if (!instance) return;

                    if (entry.isIntersecting) {
                        activeInstances.add(instance);
                        onScrollOrResize(); // pick up correct progress immediately
                    } else {
                        activeInstances.delete(instance);
                    }
                });
            },
            { rootMargin: "50% 0px 50% 0px", threshold: 0 }
        );

        animatedInstances.forEach(function (instance) {
            observer.observe(instance.el);
        });

        window.addEventListener("scroll", onScrollOrResize, { passive: true });
        window.addEventListener("resize", onScrollOrResize);

        // Re-evaluate immediately in case some instances start in view.
        onScrollOrResize();

        if (reduceMotionQuery && reduceMotionQuery.addEventListener) {
            reduceMotionQuery.addEventListener("change", function () {
                window.location.reload();
            });
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();

/**
 * ------------------------------------------------------------
 * Markup contract & configuration reference
 * ------------------------------------------------------------
 * <div class="scroll-reveal-image"
 *      data-height="80vh"
 *      data-from-width="40%"
 *      data-to-width="95%"
 *      data-from-radius="0px"
 *      data-to-radius="22px"
 *      data-radius-start="0.5"
 *      data-inner-width="95%"
 *      data-from-scale="1.6"
 *      data-to-scale="1"
 *      data-stiffness="120"
 *      data-damping="80">
 *   <div class="scroll-reveal-image-inner">
 *     <img src="..." alt="Meaningful description" loading="lazy">
 *   </div>
 * </div>
 *
 * All data-* attributes are optional; the values above are the
 * defaults applied when an attribute is omitted.
 * ------------------------------------------------------------
 */
