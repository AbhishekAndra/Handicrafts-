// Main Script for E-Commerce Marketplace

// Load Featured Products on Home Page
function loadFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;

    const featuredProducts = products.filter(p => p.featured);
    
    container.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
    attachProductCardListeners();
}

// Load Top Sellers on Home Page
function loadTopSellers() {
    const container = document.getElementById('top-sellers');
    if (!container) return;

    container.innerHTML = sellers.map(seller => createSellerCard(seller)).join('');
}

// Create Product Card HTML
function createProductCard(product) {
    const wishlistClass = isInWishlist(product.id) ? 'active' : '';
    const priceHtml = product.original_price > product.price 
        ? `<span class="original-price" style="text-decoration: line-through; color: var(--text-light); font-size: 14px; margin-left: 8px;">$${product.original_price.toFixed(2)}</span>`
        : '';
    
    const stockBadge = product.in_stock
        ? ''
        : '<span class="stock-badge">Out of stock</span>';

    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                ${productImageMarkup(product)}
                ${stockBadge}
                <button class="wishlist-btn ${wishlistClass}" data-product-id="${product.id}" title="Add to Wishlist">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-seller">by ${product.seller}</div>
                <div class="product-rating">
                    <span class="stars">${'⭐'.repeat(Math.round(product.rating))}</span>
                    <span>(${product.reviews})</span>
                </div>
                <div class="product-price">
                    $${product.price.toFixed(2)}
                    ${priceHtml}
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary btn-small add-to-cart-btn" data-product-id="${product.id}" ${product.in_stock ? '' : 'disabled'}>
                        <i class="fas fa-shopping-cart"></i> Add
                    </button>
                    <button class="btn btn-outline btn-small view-details-btn" data-product-id="${product.id}">
                        View
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Create Seller Card HTML
function createSellerCard(seller) {
    return `
        <div class="seller-card">
            <div class="seller-avatar">${seller.avatar}</div>
            <div class="seller-name">${seller.name} ${seller.verified ? '<i class="fas fa-check-circle" style="color: var(--success-color); font-size: 14px;"></i>' : ''}</div>
            <div class="seller-info">${seller.description}</div>
            <div class="seller-stats">
                <div>
                    <strong>${seller.rating}</strong>
                    Rating
                </div>
                <div>
                    <strong>${seller.products}</strong>
                    Products
                </div>
                <div>
                    <strong>${seller.followers}</strong>
                    Followers
                </div>
            </div>
            <button class="btn btn-primary" onclick="window.location.href=sitePath('pages/seller-profile.html') + '?seller=${seller.id}'">
                View Shop
            </button>
        </div>
    `;
}

// Attach Event Listeners to Product Cards
function attachProductCardListeners() {
    // Wishlist buttons
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.productId);
            toggleWishlist(productId);
            btn.classList.toggle('active');
        });
    });

    // Add to cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.productId);
            const product = products.find(p => p.id === productId);
            if (product && !product.in_stock) {
                showNotification('This item is out of stock', 'error');
                return;
            }
            addToCart(productId, 1);
            showNotification('Added to cart!', 'success');
        });
    });

    // View details buttons
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.productId);
            window.location.href = sitePath('pages/product-details.html') + `?id=${productId}`;
        });
    });
}

// Search and Filter
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const filterTags = document.querySelectorAll('.filter-tag');

    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }

    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            filterTags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            const category = tag.dataset.filter;

            // The products page owns its own filtering UI
            if (typeof onCategoryTagSelected === 'function') {
                onCategoryTagSelected(category);
                return;
            }

            const url = sitePath('pages/products.html');
            window.location.href = category === 'all' ? url : `${url}?category=${category}`;
        });
    });
}

function performSearch() {
    const query = (document.getElementById('search-input')?.value || '').trim();

    // The products page filters in place instead of navigating
    if (typeof onSearchSubmitted === 'function') {
        onSearchSubmitted(query);
        return;
    }

    if (query) {
        sessionStorage.setItem('searchQuery', query);
        window.location.href = sitePath('pages/products.html');
    }
}

// Newsletter Subscription
function setupNewsletter() {
    const form = document.getElementById('newsletter-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            
            // Save email to localStorage
            const subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];
            if (!subscribers.includes(email)) {
                subscribers.push(email);
                localStorage.setItem('subscribers', JSON.stringify(subscribers));
            }
            
            showNotification('Thank you for subscribing!', 'success');
            form.reset();
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background-color: ${type === 'success' ? 'var(--success-color)' : type === 'error' ? 'var(--error-color)' : 'var(--primary-color)'};
        color: white;
        border-radius: 6px;
        box-shadow: var(--shadow-lg);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Hero video slider (homepage only — no-ops elsewhere)
function setupHeroSlider() {
    const hero = document.querySelector('.hero-video');
    const slides = document.querySelectorAll('.hero-slide');
    const videos = document.querySelectorAll('.hero-video-bg');
    if (!slides.length) return;

    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // A looping background video counts as motion — stay on the poster frame instead.
    if (reduceMotion) {
        videos.forEach(v => { v.removeAttribute('autoplay'); v.pause(); });
    }

    let current = 0;
    let timer = null;

    function show(index) {
        current = (index + slides.length) % slides.length;
        slides.forEach((s, i) => s.classList.toggle('active', i === current));
        videos.forEach((v) => {
            const isActive = Number(v.dataset.slide) === current;
            v.classList.toggle('active', isActive);
            if (reduceMotion) return;
            if (isActive) {
                v.currentTime = 0;
                v.play().catch(() => {});
            } else {
                v.pause();
            }
        });
    }

    function next() { show(current + 1); }
    function prev() { show(current - 1); }

    function stopAutoplay() {
        if (timer) clearInterval(timer);
    }

    function startAutoplay() {
        stopAutoplay();
        if (reduceMotion) return;
        timer = setInterval(next, 6000);
    }

    // Swipe/drag gestures — left = next slide, right = previous slide.
    // Pointer events cover touch, mouse-drag and pen in one listener set.
    if (hero) {
        let startX = 0;
        let startY = 0;
        let dragging = false;
        const SWIPE_THRESHOLD = 50;

        hero.addEventListener('pointerdown', (e) => {
            dragging = true;
            startX = e.clientX;
            startY = e.clientY;
        });

        hero.addEventListener('pointerup', (e) => {
            if (!dragging) return;
            dragging = false;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            // Ignore mostly-vertical drags so page scrolling isn't hijacked.
            if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
            if (dx < 0) next(); else prev();
            startAutoplay();
        });

        hero.addEventListener('pointercancel', () => { dragging = false; });
    }

    show(0);
    startAutoplay();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedProducts();
    loadTopSellers();
    setupSearch();
    setupNewsletter();
    setupHeroSlider();
});
