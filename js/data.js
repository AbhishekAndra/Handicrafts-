// Sample Product Data
const products = [
    {
        id: 1,
        name: "Handmade Ceramic Vase",
        category: "pottery",
        seller: "Pottery Studio",
        seller_id: 1,
        price: 45.99,
        original_price: 59.99,
        image: "assets/images/products/p1-ceramic-vase.webp",
        rating: 4.8,
        reviews: 124,
        description: "Beautiful handcrafted ceramic vase with traditional patterns",
        in_stock: true,
        featured: true
    },
    {
        id: 2,
        name: "Woven Wall Tapestry",
        category: "textiles",
        seller: "Textile Arts",
        seller_id: 2,
        price: 65.00,
        original_price: 85.00,
        image: "assets/images/products/p2-woven-tapestry.webp",
        rating: 4.9,
        reviews: 89,
        description: "Hand-woven tapestry with vibrant colors and patterns",
        in_stock: true,
        featured: true
    },
    {
        id: 3,
        name: "Beaded Necklace",
        category: "jewelry",
        seller: "Artisan Jewelry",
        seller_id: 3,
        price: 35.50,
        original_price: 49.99,
        image: "assets/images/products/p3-beaded-necklace.webp",
        rating: 4.7,
        reviews: 156,
        description: "Handmade beaded necklace with semi-precious stones",
        in_stock: true,
        featured: true
    },
    {
        id: 4,
        name: "Wooden Carved Box",
        category: "woodwork",
        seller: "Wood Masters",
        seller_id: 4,
        price: 72.00,
        original_price: 95.00,
        image: "assets/images/products/p4-carved-wood-box.webp",
        rating: 4.6,
        reviews: 67,
        description: "Intricately carved wooden box with traditional designs",
        in_stock: true,
        featured: true
    },
    {
        id: 5,
        name: "Hand-painted Tile Set",
        category: "pottery",
        seller: "Pottery Studio",
        seller_id: 1,
        price: 54.99,
        original_price: 69.99,
        image: "assets/images/products/p5-hand-painted-tiles.webp",
        rating: 4.5,
        reviews: 45,
        description: "Set of 6 hand-painted decorative tiles",
        in_stock: true,
        featured: false
    },
    {
        id: 6,
        name: "Embroidered Cushion Cover",
        category: "textiles",
        seller: "Textile Arts",
        seller_id: 2,
        price: 38.00,
        original_price: 48.00,
        image: "assets/images/products/p6-embroidered-cushion.webp",
        rating: 4.8,
        reviews: 112,
        description: "Hand-embroidered cushion cover with intricate patterns",
        in_stock: true,
        featured: false
    },
    {
        id: 7,
        name: "Silver Bracelet",
        category: "jewelry",
        seller: "Artisan Jewelry",
        seller_id: 3,
        price: 89.99,
        original_price: 120.00,
        image: "assets/images/products/p7-silver-bracelet.webp",
        rating: 4.9,
        reviews: 201,
        description: "Handcrafted sterling silver bracelet with gemstones",
        in_stock: true,
        featured: false
    },
    {
        id: 8,
        name: "Wooden Jewelry Box",
        category: "woodwork",
        seller: "Wood Masters",
        seller_id: 4,
        price: 65.00,
        original_price: 85.00,
        image: "assets/images/products/p8-wooden-jewelry-box.webp",
        rating: 4.7,
        reviews: 88,
        description: "Hand-crafted wooden box perfect for jewelry storage",
        in_stock: true,
        featured: false
    },
    {
        id: 9,
        name: "Ceramic Dinner Set",
        category: "pottery",
        seller: "Pottery Studio",
        seller_id: 1,
        price: 129.99,
        original_price: 169.99,
        image: "assets/images/products/p9-ceramic-dinner-set.webp",
        rating: 4.4,
        reviews: 78,
        description: "Complete 12-piece handmade ceramic dinner set",
        in_stock: true,
        featured: false
    },
    {
        id: 10,
        name: "Macramé Plant Hanger",
        category: "textiles",
        seller: "Textile Arts",
        seller_id: 2,
        price: 28.50,
        original_price: 36.00,
        image: "assets/images/products/p10-macrame-hanger.webp",
        rating: 4.6,
        reviews: 134,
        description: "Hand-knotted macramé plant hanger",
        in_stock: true,
        featured: false
    },
    {
        id: 11,
        name: "Turquoise Earrings",
        category: "jewelry",
        seller: "Artisan Jewelry",
        seller_id: 3,
        price: 42.00,
        original_price: 55.00,
        image: "assets/images/products/p11-turquoise-earrings.webp",
        rating: 4.8,
        reviews: 92,
        description: "Traditional turquoise drop earrings",
        in_stock: true,
        featured: false
    },
    {
        id: 12,
        name: "Hand-carved Wooden Mask",
        category: "woodwork",
        seller: "Wood Masters",
        seller_id: 4,
        price: 95.00,
        original_price: 125.00,
        image: "assets/images/products/p12-wooden-mask.webp",
        rating: 4.5,
        reviews: 56,
        description: "Decorative wooden mask with traditional patterns",
        in_stock: false,
        featured: false
    },
    {
        id: 13,
        name: "Terracotta Plant Pot",
        category: "pottery",
        seller: "Pottery Studio",
        seller_id: 1,
        price: 24.99,
        original_price: 32.00,
        image: "assets/images/products/p13-terracotta-pot.webp",
        rating: 4.6,
        reviews: 38,
        description: "Hand-thrown terracotta pot with a raw, unglazed finish",
        in_stock: true,
        featured: false
    },
    {
        id: 14,
        name: "Ceramic Serving Bowl",
        category: "pottery",
        seller: "Pottery Studio",
        seller_id: 1,
        price: 38.50,
        original_price: 49.00,
        image: "assets/images/products/p14-ceramic-bowl.webp",
        rating: 4.8,
        reviews: 71,
        description: "Smooth stoneware serving bowl, thrown and glazed by hand",
        in_stock: true,
        featured: true
    },
    {
        id: 15,
        name: "Linen Table Runner",
        category: "textiles",
        seller: "Textile Arts",
        seller_id: 2,
        price: 32.00,
        original_price: 42.00,
        image: "assets/images/products/p15-linen-runner.webp",
        rating: 4.7,
        reviews: 54,
        description: "Hand-hemmed pure linen table runner with a relaxed, textured weave",
        in_stock: true,
        featured: false
    },
    {
        id: 16,
        name: "Handwoven Storage Basket",
        category: "textiles",
        seller: "Textile Arts",
        seller_id: 2,
        price: 44.00,
        original_price: 58.00,
        image: "assets/images/products/p16-woven-basket.webp",
        rating: 4.8,
        reviews: 96,
        description: "Sturdy handwoven basket, perfect for storage or a market run",
        in_stock: true,
        featured: true
    },
    {
        id: 17,
        name: "Gold Hoop Earrings",
        category: "jewelry",
        seller: "Artisan Jewelry",
        seller_id: 3,
        price: 39.99,
        original_price: 52.00,
        image: "assets/images/products/p17-gold-earrings.webp",
        rating: 4.9,
        reviews: 143,
        description: "Hand-finished gold-plated hoop earrings with a soft knot detail",
        in_stock: true,
        featured: true
    },
    {
        id: 18,
        name: "Gemstone Ring",
        category: "jewelry",
        seller: "Artisan Jewelry",
        seller_id: 3,
        price: 68.00,
        original_price: 89.00,
        image: "assets/images/products/p18-gemstone-ring.webp",
        rating: 4.7,
        reviews: 62,
        description: "Handset natural gemstone ring in a recycled gold-tone band",
        in_stock: true,
        featured: false
    },
    {
        id: 19,
        name: "Carved Wooden Bowl",
        category: "woodwork",
        seller: "Wood Masters",
        seller_id: 4,
        price: 58.00,
        original_price: 75.00,
        image: "assets/images/products/p19-wooden-bowl.webp",
        rating: 4.6,
        reviews: 47,
        description: "Hand-turned wooden bowl showing the natural grain of the timber",
        in_stock: true,
        featured: true
    },
    {
        id: 20,
        name: "Wooden Cutting Board",
        category: "woodwork",
        seller: "Wood Masters",
        seller_id: 4,
        price: 46.00,
        original_price: 60.00,
        image: "assets/images/products/p20-cutting-board.webp",
        rating: 4.8,
        reviews: 85,
        description: "Solid hardwood cutting board, finished with food-safe oil",
        in_stock: true,
        featured: false
    },
    {
        id: 21,
        name: "Handstitched Leather Wallet",
        category: "leather",
        seller: "Hide & Stitch",
        seller_id: 5,
        price: 58.00,
        original_price: 72.00,
        image: "assets/images/products/p21-leather-wallet.webp",
        rating: 4.8,
        reviews: 64,
        description: "Full-grain leather wallet, hand-cut and saddle-stitched with a lifetime of character",
        in_stock: true,
        featured: true
    },
    {
        id: 22,
        name: "Leather Card Holder Set",
        category: "leather",
        seller: "Hide & Stitch",
        seller_id: 5,
        price: 32.00,
        original_price: 42.00,
        image: "assets/images/products/p22-leather-card-holder.webp",
        rating: 4.6,
        reviews: 41,
        description: "Slim vegetable-tanned card holder that ages beautifully with use",
        in_stock: true,
        featured: true
    },
    {
        id: 23,
        name: "Soy Wax Candle",
        category: "candles",
        seller: "Glow & Wick",
        seller_id: 6,
        price: 22.00,
        original_price: 28.00,
        image: "assets/images/products/p23-soy-candle.webp",
        rating: 4.9,
        reviews: 77,
        description: "Hand-poured soy wax candle in a reusable glass jar, 7oz / 40hr burn",
        in_stock: true,
        featured: true
    },
    {
        id: 24,
        name: "Hand-Poured Candle Duo",
        category: "candles",
        seller: "Glow & Wick",
        seller_id: 6,
        price: 36.00,
        original_price: 46.00,
        image: "assets/images/products/p24-candle-duo.webp",
        rating: 4.7,
        reviews: 33,
        description: "A gift-ready pair of small-batch candles in complementary scents",
        in_stock: true,
        featured: true
    },
    {
        id: 25,
        name: "Hammered Copper Bowl",
        category: "metalwork",
        seller: "Hearth & Hammer",
        seller_id: 7,
        price: 52.00,
        original_price: 68.00,
        image: "assets/images/products/p25-copper-bowl.webp",
        rating: 4.8,
        reviews: 39,
        description: "Hand-hammered copper bowl, raised from a single sheet over an anvil",
        in_stock: true,
        featured: true
    },
    {
        id: 26,
        name: "Engraved Copper Tray",
        category: "metalwork",
        seller: "Hearth & Hammer",
        seller_id: 7,
        price: 68.00,
        original_price: 85.00,
        image: "assets/images/products/p26-copper-tray.webp",
        rating: 4.7,
        reviews: 26,
        description: "Traditional hand-engraved copper serving tray with an antiqued finish",
        in_stock: true,
        featured: false
    },
    {
        id: 27,
        name: "Rattan Storage Basket",
        category: "basketry",
        seller: "Reed & Rattan",
        seller_id: 8,
        price: 36.00,
        original_price: 48.00,
        image: "assets/images/products/p27-rattan-basket.webp",
        rating: 4.8,
        reviews: 52,
        description: "Hand-woven rattan basket with sturdy handles, stacks neatly for storage",
        in_stock: true,
        featured: true
    },
    {
        id: 28,
        name: "Woven Basket Set",
        category: "basketry",
        seller: "Reed & Rattan",
        seller_id: 8,
        price: 29.00,
        original_price: 38.00,
        image: "assets/images/products/p28-woven-basket-set.webp",
        rating: 4.6,
        reviews: 30,
        description: "A nesting set of small hand-woven baskets for trinkets and desk clutter",
        in_stock: true,
        featured: false
    },
    {
        id: 29,
        name: "Hand-Blown Glass Vase",
        category: "glass",
        seller: "Ember Glassworks",
        seller_id: 9,
        price: 62.00,
        original_price: 80.00,
        image: "assets/images/products/p29-glass-vase.webp",
        rating: 4.8,
        reviews: 44,
        description: "Furnace-blown glass vase with organic bubbled texture, no two alike",
        in_stock: true,
        featured: true
    },
    {
        id: 30,
        name: "Stained Glass Suncatcher",
        category: "glass",
        seller: "Ember Glassworks",
        seller_id: 9,
        price: 28.00,
        original_price: 36.00,
        image: "assets/images/products/p30-glass-suncatcher.webp",
        rating: 4.9,
        reviews: 37,
        description: "Hand-cut and leaded stained glass piece, ready to hang in a sunny window",
        in_stock: true,
        featured: true
    }
];

// Sample Seller Data
const sellers = [
    {
        id: 1,
        name: "Pottery Studio",
        avatar: "🏺",
        rating: 4.8,
        reviews: 245,
        products: 15,
        description: "Creating beautiful handmade pottery for over 20 years",
        followers: 1240,
        verified: true
    },
    {
        id: 2,
        name: "Textile Arts",
        avatar: "🧵",
        rating: 4.9,
        reviews: 189,
        products: 22,
        description: "Traditional textile weaving and embroidery",
        followers: 956,
        verified: true
    },
    {
        id: 3,
        name: "Artisan Jewelry",
        avatar: "💎",
        rating: 4.7,
        reviews: 312,
        products: 28,
        description: "Handcrafted jewelry with semi-precious stones",
        followers: 2150,
        verified: true
    },
    {
        id: 4,
        name: "Wood Masters",
        avatar: "🎨",
        rating: 4.6,
        reviews: 156,
        products: 18,
        description: "Master woodcarvers creating unique pieces",
        followers: 1080,
        verified: true
    },
    {
        id: 5,
        name: "Hide & Stitch",
        avatar: "👜",
        rating: 4.7,
        reviews: 132,
        products: 12,
        description: "Full-grain leather goods, hand-cut and stitched to order",
        followers: 780,
        verified: true
    },
    {
        id: 6,
        name: "Glow & Wick",
        avatar: "🕯️",
        rating: 4.9,
        reviews: 98,
        products: 10,
        description: "Small-batch soy wax candles, hand-poured with natural scents",
        followers: 640,
        verified: true
    },
    {
        id: 7,
        name: "Hearth & Hammer",
        avatar: "🔨",
        rating: 4.7,
        reviews: 71,
        products: 14,
        description: "Hand-hammered copper and metalware, shaped over an open forge",
        followers: 520,
        verified: true
    },
    {
        id: 8,
        name: "Reed & Rattan",
        avatar: "🧺",
        rating: 4.8,
        reviews: 58,
        products: 16,
        description: "Traditional basket weaving using sustainably sourced rattan and reed",
        followers: 410,
        verified: true
    },
    {
        id: 9,
        name: "Ember Glassworks",
        avatar: "🔥",
        rating: 4.8,
        reviews: 64,
        products: 13,
        description: "Furnace-blown and leaded glass pieces, shaped while the glass is still molten",
        followers: 590,
        verified: true
    }
];

// Sample Review Data (keyed by product id)
const reviews = {
    1: [
        { user: "John Smith", rating: 5, date: "2026-07-28", text: "Absolutely stunning craftsmanship. The glaze is even nicer in person." },
        { user: "Priya Menon", rating: 5, date: "2026-07-12", text: "Arrived beautifully packed. Exactly as pictured." },
        { user: "Daniel Cruz", rating: 4, date: "2026-06-30", text: "Lovely piece, slightly smaller than I expected but great quality." }
    ],
    2: [
        { user: "Emily Davis", rating: 5, date: "2026-08-02", text: "The colours are so rich. It transformed my living room wall." },
        { user: "Marcus Webb", rating: 5, date: "2026-07-19", text: "You can tell it is hand-woven. Worth every penny." }
    ],
    3: [
        { user: "Sarah Johnson", rating: 5, date: "2026-08-05", text: "Wear it every day. The stones catch the light beautifully." },
        { user: "Aisha Rahman", rating: 4, date: "2026-07-01", text: "Pretty and well made. Clasp is a little fiddly." }
    ],
    4: [
        { user: "Michael Brown", rating: 5, date: "2026-07-22", text: "The carving detail is incredible for the price." },
        { user: "Lena Fischer", rating: 4, date: "2026-06-18", text: "Solid wood, smells wonderful. Very happy with it." }
    ]
};

// Coupon Codes
const coupons = {
    CRAFT10: { type: 'percent', value: 10, label: '10% off your order' },
    HANDMADE20: { type: 'percent', value: 20, label: '20% off your order' },
    WELCOME5: { type: 'fixed', value: 5, label: '$5 off your order' },
    FREESHIP: { type: 'shipping', value: 0, label: 'Free standard shipping' }
};

// Resolve a path that works from both the site root and the /pages/ folder
function sitePath(pathFromRoot) {
    const inPages = window.location.pathname.replace(/\\/g, '/').includes('/pages/');
    if (inPages) {
        return pathFromRoot.startsWith('pages/')
            ? pathFromRoot.slice('pages/'.length)
            : '../' + pathFromRoot;
    }
    return pathFromRoot;
}

// Renders a product/cart-item's `image` field as either a real photo
// (webp/jpg/png path) or, for emoji placeholders (e.g. custom listings
// added from the seller dashboard), the emoji itself.
function productImageMarkup(item, className) {
    const isPhoto = typeof item.image === 'string' && /\.(webp|jpe?g|png)$/i.test(item.image);
    if (!isPhoto) return item.image;

    const cls = className ? ` class="${className}"` : '';
    return `<img src="${sitePath(item.image)}" alt="${item.name}" loading="lazy"${cls}>`;
}

// Cart and Wishlist Management (LocalStorage)
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function getWishlist() {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
}

function saveWishlist(wishlist) {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function addToCart(productId, quantity = 1) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push({
                ...product,
                quantity: quantity
            });
        }
    }
    
    saveCart(cart);
    updateCartCount();
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    updateCartCount();
}

function updateCartQuantity(productId, quantity) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            saveCart(cart);
        }
    }
    updateCartCount();
}

function toggleWishlist(productId) {
    const wishlist = getWishlist();
    const index = wishlist.indexOf(productId);
    
    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(productId);
    }
    
    saveWishlist(wishlist);
    updateWishlistCount();
}

function isInWishlist(productId) {
    return getWishlist().includes(productId);
}

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
}

function updateWishlistCount() {
    const wishlist = getWishlist();
    const badge = document.getElementById('wishlist-count');
    if (badge) {
        badge.textContent = wishlist.length;
        badge.style.display = wishlist.length > 0 ? 'flex' : 'none';
    }
}

// ============ COUPONS ============
function getAppliedCoupon() {
    const code = localStorage.getItem('coupon');
    return code && coupons[code] ? { code, ...coupons[code] } : null;
}

function applyCouponCode(code) {
    const normalized = (code || '').trim().toUpperCase();
    if (!coupons[normalized]) return null;
    localStorage.setItem('coupon', normalized);
    return { code: normalized, ...coupons[normalized] };
}

function clearCoupon() {
    localStorage.removeItem('coupon');
}

// ============ TOTALS (single source of truth) ============
const TAX_RATE = 0.1;
const FREE_SHIPPING_THRESHOLD = 50;

function calcShipping(subtotal, method) {
    if (method === 'express') return 15;
    if (method === 'overnight') return 30;
    return subtotal > FREE_SHIPPING_THRESHOLD ? 0 : 10;
}

function getCartTotals(shippingMethod = 'standard') {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const coupon = getAppliedCoupon();

    let discount = 0;
    let shipping = calcShipping(subtotal, shippingMethod);

    if (coupon) {
        if (coupon.type === 'percent') {
            discount = subtotal * (coupon.value / 100);
        } else if (coupon.type === 'fixed') {
            discount = Math.min(coupon.value, subtotal);
        } else if (coupon.type === 'shipping' && shippingMethod === 'standard') {
            shipping = 0;
        }
    }

    const taxable = Math.max(subtotal - discount, 0);
    const tax = taxable * TAX_RATE;

    return {
        subtotal,
        discount,
        shipping,
        tax,
        total: taxable + shipping + tax,
        coupon
    };
}

// ============ ORDERS ============
function getOrders() {
    return JSON.parse(localStorage.getItem('orders')) || [];
}

function saveOrder(order) {
    const orders = getOrders();
    orders.unshift(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    return order;
}

function createOrderId() {
    const orders = getOrders();
    return '#ORD-' + String(1235 + orders.length).padStart(6, '0');
}

// ============ ACCOUNT ============
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser')) || null;
}

function setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

function logoutUser() {
    localStorage.removeItem('currentUser');
}

function getRegisteredUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function registerUser(user) {
    const users = getRegisteredUsers();
    if (users.some(u => u.email.toLowerCase() === user.email.toLowerCase())) {
        return { ok: false, error: 'An account with that email already exists.' };
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return { ok: true };
}

function authenticateUser(email, password) {
    const user = getRegisteredUsers().find(
        u => u.email.toLowerCase() === (email || '').trim().toLowerCase() && u.password === password
    );
    return user || null;
}

// Initialize counts on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    updateWishlistCount();
});
