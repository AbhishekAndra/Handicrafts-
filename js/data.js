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
        featured: false
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
    },
    {
        id: 31,
        name: "Macrame Wall Hanging",
        category: "textiles",
        seller: "Loop & Fiber",
        seller_id: 10,
        price: 38.00,
        original_price: 48.00,
        image: "assets/images/products/p31-macrame-wall-hanging.webp",
        rating: 4.7,
        reviews: 29,
        description: "Hand-knotted cotton cord wall hanging with a woven wood dowel",
        in_stock: true,
        featured: true
    },
    {
        id: 32,
        name: "Macrame Plant Hanger",
        category: "textiles",
        seller: "Loop & Fiber",
        seller_id: 10,
        price: 22.00,
        original_price: 28.00,
        image: "assets/images/products/p32-macrame-plant-hanger.webp",
        rating: 4.8,
        reviews: 23,
        description: "Adjustable cotton rope plant hanger, hand-knotted in a classic diamond pattern",
        in_stock: true,
        featured: false
    },
    {
        id: 33,
        name: "Pressed Flower Candle",
        category: "candles",
        seller: "Petal Press Co.",
        seller_id: 11,
        price: 24.00,
        original_price: 30.00,
        image: "assets/images/products/p33-pressed-flower-candle.webp",
        rating: 4.9,
        reviews: 22,
        description: "Soy wax candle embedded with real dried botanicals, poured by hand",
        in_stock: true,
        featured: true
    },
    {
        id: 34,
        name: "Lavender Botanical Candle Set",
        category: "candles",
        seller: "Petal Press Co.",
        seller_id: 11,
        price: 32.00,
        original_price: 40.00,
        image: "assets/images/products/p34-lavender-candle-set.webp",
        rating: 4.8,
        reviews: 19,
        description: "Set of two lavender soy candles topped with pressed lavender buds",
        in_stock: true,
        featured: false
    },
    {
        id: 35,
        name: "Hand-Turned Wooden Bowl",
        category: "woodwork",
        seller: "Anvil & Oak",
        seller_id: 12,
        price: 48.00,
        original_price: 60.00,
        image: "assets/images/products/p35-turned-wooden-bowl.webp",
        rating: 4.6,
        reviews: 18,
        description: "Lathe-turned bowl from a single piece of walnut, finished with food-safe oil",
        in_stock: true,
        featured: true
    },
    {
        id: 36,
        name: "Live-Edge Serving Board",
        category: "woodwork",
        seller: "Anvil & Oak",
        seller_id: 12,
        price: 36.00,
        original_price: 45.00,
        image: "assets/images/products/p36-live-edge-board.webp",
        rating: 4.7,
        reviews: 15,
        description: "Live-edge maple serving board with a hand-carved handle",
        in_stock: true,
        featured: false
    },
    {
        id: 37,
        name: "Hand-Painted Ceramic Mug",
        category: "pottery",
        seller: "Pottery Studio",
        seller_id: 1,
        price: 22.00,
        original_price: 28.00,
        image: "assets/images/products/p37-ceramic-mug.webp",
        rating: 4.7,
        reviews: 34,
        description: "Wheel-thrown stoneware mug, hand-painted with a one-of-a-kind glaze pattern",
        in_stock: true,
        featured: false
    },
    {
        id: 38,
        name: "Ceramic Fruit Bowl",
        category: "pottery",
        seller: "Pottery Studio",
        seller_id: 1,
        price: 42.00,
        original_price: 54.00,
        image: "assets/images/products/p38-ceramic-fruit-bowl.webp",
        rating: 4.6,
        reviews: 27,
        description: "Wide stoneware bowl thrown for the table, glazed in a warm earthenware finish",
        in_stock: true,
        featured: false
    },
    {
        id: 39,
        name: "Stoneware Pitcher",
        category: "pottery",
        seller: "Pottery Studio",
        seller_id: 1,
        price: 36.00,
        original_price: 46.00,
        image: "assets/images/products/p39-stoneware-pitcher.webp",
        rating: 4.8,
        reviews: 19,
        description: "Hand-thrown stoneware pitcher with a pulled handle, glazed food-safe white",
        in_stock: true,
        featured: false
    },
    {
        id: 40,
        name: "Ceramic Planter Vase",
        category: "pottery",
        seller: "Pottery Studio",
        seller_id: 1,
        price: 29.00,
        original_price: 38.00,
        image: "assets/images/products/p40-ceramic-planter-vase.webp",
        rating: 4.7,
        reviews: 22,
        description: "Textured stoneware planter, thrown with a wide mouth for easy repotting",
        in_stock: true,
        featured: false
    },
    {
        id: 41,
        name: "Woven Placemat Set",
        category: "textiles",
        seller: "Textile Arts",
        seller_id: 2,
        price: 26.00,
        original_price: 34.00,
        image: "assets/images/products/p41-woven-placemat-set.webp",
        rating: 4.7,
        reviews: 31,
        description: "Set of four hand-loomed placemats in a natural cotton weave",
        in_stock: true,
        featured: false
    },
    {
        id: 42,
        name: "Wool Throw Blanket",
        category: "textiles",
        seller: "Textile Arts",
        seller_id: 2,
        price: 58.00,
        original_price: 75.00,
        image: "assets/images/products/p42-wool-throw-blanket.webp",
        rating: 4.9,
        reviews: 46,
        description: "Fringed wool throw, hand-loomed in a soft textured weave",
        in_stock: true,
        featured: false
    },
    {
        id: 43,
        name: "Embroidered Wall Hanging",
        category: "textiles",
        seller: "Textile Arts",
        seller_id: 2,
        price: 45.00,
        original_price: 60.00,
        image: "assets/images/products/p43-embroidered-wall-hanging.webp",
        rating: 4.8,
        reviews: 24,
        description: "Hand-embroidered fibre art hoop, stitched with a floral motif",
        in_stock: true,
        featured: false
    },
    {
        id: 44,
        name: "Handwoven Scarf",
        category: "textiles",
        seller: "Textile Arts",
        seller_id: 2,
        price: 34.00,
        original_price: 44.00,
        image: "assets/images/products/p44-handwoven-scarf.webp",
        rating: 4.6,
        reviews: 29,
        description: "Lightweight scarf hand-loomed in a traditional check pattern",
        in_stock: true,
        featured: false
    },
    {
        id: 45,
        name: "Beaded Anklet",
        category: "jewelry",
        seller: "Artisan Jewelry",
        seller_id: 3,
        price: 19.00,
        original_price: 26.00,
        image: "assets/images/products/p45-beaded-anklet.webp",
        rating: 4.7,
        reviews: 38,
        description: "Hand-strung beaded anklet with a delicate bell charm",
        in_stock: true,
        featured: false
    },
    {
        id: 46,
        name: "Silver Pendant Necklace",
        category: "jewelry",
        seller: "Artisan Jewelry",
        seller_id: 3,
        price: 48.00,
        original_price: 62.00,
        image: "assets/images/products/p46-silver-pendant-necklace.webp",
        rating: 4.9,
        reviews: 51,
        description: "Minimalist sterling silver pendant on a fine chain, cast by hand",
        in_stock: true,
        featured: false
    },
    {
        id: 47,
        name: "Gemstone Cuff Bracelet",
        category: "jewelry",
        seller: "Artisan Jewelry",
        seller_id: 3,
        price: 52.00,
        original_price: 68.00,
        image: "assets/images/products/p47-gemstone-cuff-bracelet.webp",
        rating: 4.8,
        reviews: 33,
        description: "Open cuff bracelet set with a raw semi-precious stone",
        in_stock: true,
        featured: false
    },
    {
        id: 48,
        name: "Drop Earrings",
        category: "jewelry",
        seller: "Artisan Jewelry",
        seller_id: 3,
        price: 36.00,
        original_price: 48.00,
        image: "assets/images/products/p48-drop-earrings.webp",
        rating: 4.7,
        reviews: 28,
        description: "Oxidized silver drop earrings with a hand-set freshwater pearl",
        in_stock: true,
        featured: false
    },
    {
        id: 49,
        name: "Carved Wooden Spoon Set",
        category: "woodwork",
        seller: "Wood Masters",
        seller_id: 4,
        price: 24.00,
        original_price: 32.00,
        image: "assets/images/products/p49-carved-spoon-set.webp",
        rating: 4.8,
        reviews: 41,
        description: "Set of three hand-carved cooking spoons in solid hardwood",
        in_stock: true,
        featured: false
    },
    {
        id: 50,
        name: "Wooden Coaster Set",
        category: "woodwork",
        seller: "Wood Masters",
        seller_id: 4,
        price: 22.00,
        original_price: 29.00,
        image: "assets/images/products/p50-wooden-coaster-set.webp",
        rating: 4.6,
        reviews: 25,
        description: "Set of four hand-sanded coasters, finished with food-safe oil",
        in_stock: true,
        featured: false
    },
    {
        id: 51,
        name: "Wooden Candle Holder",
        category: "woodwork",
        seller: "Wood Masters",
        seller_id: 4,
        price: 28.00,
        original_price: 36.00,
        image: "assets/images/products/p51-wooden-candle-holder.webp",
        rating: 4.7,
        reviews: 18,
        description: "Lathe-turned candle holder from a single piece of hardwood",
        in_stock: true,
        featured: false
    },
    {
        id: 52,
        name: "Hand-Carved Picture Frame",
        category: "woodwork",
        seller: "Wood Masters",
        seller_id: 4,
        price: 34.00,
        original_price: 44.00,
        image: "assets/images/products/p52-carved-picture-frame.webp",
        rating: 4.8,
        reviews: 22,
        description: "Solid wood picture frame with a hand-carved edge detail",
        in_stock: true,
        featured: false
    },
    {
        id: 53,
        name: "Leather Journal Cover",
        category: "leather",
        seller: "Hide & Stitch",
        seller_id: 5,
        price: 38.00,
        original_price: 48.00,
        image: "assets/images/products/p53-leather-journal-cover.webp",
        rating: 4.8,
        reviews: 29,
        description: "Full-grain leather journal cover with a hand-stitched wrap closure",
        in_stock: true,
        featured: false
    },
    {
        id: 54,
        name: "Leather Belt",
        category: "leather",
        seller: "Hide & Stitch",
        seller_id: 5,
        price: 42.00,
        original_price: 55.00,
        image: "assets/images/products/p54-leather-belt.webp",
        rating: 4.7,
        reviews: 36,
        description: "Hand-cut full-grain leather belt with a solid brass buckle",
        in_stock: true,
        featured: false
    },
    {
        id: 55,
        name: "Leather Tote Bag",
        category: "leather",
        seller: "Hide & Stitch",
        seller_id: 5,
        price: 88.00,
        original_price: 115.00,
        image: "assets/images/products/p55-leather-tote-bag.webp",
        rating: 4.9,
        reviews: 44,
        description: "Structured leather tote, hand-cut and saddle-stitched with an interior pocket",
        in_stock: true,
        featured: false
    },
    {
        id: 56,
        name: "Leather Keychain Set",
        category: "leather",
        seller: "Hide & Stitch",
        seller_id: 5,
        price: 16.00,
        original_price: 22.00,
        image: "assets/images/products/p56-leather-keychain-set.webp",
        rating: 4.6,
        reviews: 21,
        description: "Set of two hand-cut leather keychains with a brass hardware finish",
        in_stock: true,
        featured: false
    },
    {
        id: 57,
        name: "Cinnamon Spice Candle",
        category: "candles",
        seller: "Glow & Wick",
        seller_id: 6,
        price: 20.00,
        original_price: 26.00,
        image: "assets/images/products/p57-cinnamon-spice-candle.webp",
        rating: 4.8,
        reviews: 32,
        description: "Hand-poured soy candle scented with warm cinnamon and clove",
        in_stock: true,
        featured: false
    },
    {
        id: 58,
        name: "Citrus Soy Candle",
        category: "candles",
        seller: "Glow & Wick",
        seller_id: 6,
        price: 20.00,
        original_price: 26.00,
        image: "assets/images/products/p58-citrus-soy-candle.webp",
        rating: 4.7,
        reviews: 27,
        description: "Bright citrus-scented soy candle, hand-poured in a reusable jar",
        in_stock: true,
        featured: false
    },
    {
        id: 59,
        name: "Scented Wax Melts Set",
        category: "candles",
        seller: "Glow & Wick",
        seller_id: 6,
        price: 14.00,
        original_price: 18.00,
        image: "assets/images/products/p59-wax-melts-set.webp",
        rating: 4.6,
        reviews: 20,
        description: "Set of hand-poured soy wax melts in a mixed floral scent pack",
        in_stock: true,
        featured: false
    },
    {
        id: 60,
        name: "Beeswax Taper Candles",
        category: "candles",
        seller: "Glow & Wick",
        seller_id: 6,
        price: 18.00,
        original_price: 24.00,
        image: "assets/images/products/p60-beeswax-tapers.webp",
        rating: 4.9,
        reviews: 25,
        description: "Pair of hand-dipped pure beeswax tapers with a natural honey scent",
        in_stock: true,
        featured: false
    },
    {
        id: 61,
        name: "Copper Wall Art",
        category: "metalwork",
        seller: "Hearth & Hammer",
        seller_id: 7,
        price: 65.00,
        original_price: 85.00,
        image: "assets/images/products/p61-copper-wall-art.webp",
        rating: 4.7,
        reviews: 17,
        description: "Hand-hammered copper wall disc with a repoussé floral pattern",
        in_stock: true,
        featured: false
    },
    {
        id: 62,
        name: "Hammered Copper Mug",
        category: "metalwork",
        seller: "Hearth & Hammer",
        seller_id: 7,
        price: 34.00,
        original_price: 44.00,
        image: "assets/images/products/p62-copper-mug.webp",
        rating: 4.6,
        reviews: 23,
        description: "Hand-hammered copper mug, lined for everyday drinkware use",
        in_stock: true,
        featured: false
    },
    {
        id: 63,
        name: "Iron Candle Sconce",
        category: "metalwork",
        seller: "Hearth & Hammer",
        seller_id: 7,
        price: 48.00,
        original_price: 62.00,
        image: "assets/images/products/p63-iron-candle-sconce.webp",
        rating: 4.8,
        reviews: 15,
        description: "Hand-forged wrought iron wall sconce for a single taper candle",
        in_stock: true,
        featured: false
    },
    {
        id: 64,
        name: "Copper Wind Chime",
        category: "metalwork",
        seller: "Hearth & Hammer",
        seller_id: 7,
        price: 38.00,
        original_price: 50.00,
        image: "assets/images/products/p64-copper-wind-chime.webp",
        rating: 4.7,
        reviews: 19,
        description: "Hand-hammered copper wind chime, tuned for a soft chime tone",
        in_stock: true,
        featured: false
    },
    {
        id: 65,
        name: "Woven Fruit Basket",
        category: "basketry",
        seller: "Reed & Rattan",
        seller_id: 8,
        price: 32.00,
        original_price: 42.00,
        image: "assets/images/products/p65-woven-fruit-basket.webp",
        rating: 4.8,
        reviews: 30,
        description: "Shallow hand-woven rattan basket, ideal for fruit or a catch-all bowl",
        in_stock: true,
        featured: false
    },
    {
        id: 66,
        name: "Rattan Wall Decor",
        category: "basketry",
        seller: "Reed & Rattan",
        seller_id: 8,
        price: 40.00,
        original_price: 52.00,
        image: "assets/images/products/p66-rattan-wall-decor.webp",
        rating: 4.7,
        reviews: 16,
        description: "Hand-woven rattan wall disc with an intricate radial pattern",
        in_stock: true,
        featured: false
    },
    {
        id: 67,
        name: "Seagrass Laundry Basket",
        category: "basketry",
        seller: "Reed & Rattan",
        seller_id: 8,
        price: 46.00,
        original_price: 60.00,
        image: "assets/images/products/p67-seagrass-laundry-basket.webp",
        rating: 4.8,
        reviews: 27,
        description: "Sturdy hand-woven seagrass hamper with reinforced handles",
        in_stock: true,
        featured: false
    },
    {
        id: 68,
        name: "Woven Bread Basket",
        category: "basketry",
        seller: "Reed & Rattan",
        seller_id: 8,
        price: 24.00,
        original_price: 32.00,
        image: "assets/images/products/p68-woven-bread-basket.webp",
        rating: 4.6,
        reviews: 21,
        description: "Lined wicker bread basket, hand-woven with a folded cloth liner",
        in_stock: true,
        featured: false
    },
    {
        id: 69,
        name: "Glass Paperweight",
        category: "glass",
        seller: "Ember Glassworks",
        seller_id: 9,
        price: 26.00,
        original_price: 34.00,
        image: "assets/images/products/p69-glass-paperweight.webp",
        rating: 4.8,
        reviews: 23,
        description: "Furnace-blown solid glass sphere, polished to a clear optical finish",
        in_stock: true,
        featured: false
    },
    {
        id: 70,
        name: "Glass Candle Holder",
        category: "glass",
        seller: "Ember Glassworks",
        seller_id: 9,
        price: 24.00,
        original_price: 32.00,
        image: "assets/images/products/p70-glass-candle-holder.webp",
        rating: 4.7,
        reviews: 18,
        description: "Hand-blown glass votive holder with a softly ribbed texture",
        in_stock: true,
        featured: false
    },
    {
        id: 71,
        name: "Stained Glass Panel",
        category: "glass",
        seller: "Ember Glassworks",
        seller_id: 9,
        price: 58.00,
        original_price: 75.00,
        image: "assets/images/products/p71-stained-glass-panel.webp",
        rating: 4.9,
        reviews: 14,
        description: "Hand-cut and leaded stained glass panel in a geometric design",
        in_stock: true,
        featured: false
    },
    {
        id: 72,
        name: "Glass Bud Vase",
        category: "glass",
        seller: "Ember Glassworks",
        seller_id: 9,
        price: 22.00,
        original_price: 29.00,
        image: "assets/images/products/p72-glass-bud-vase.webp",
        rating: 4.8,
        reviews: 26,
        description: "Small furnace-blown bud vase, perfect for a single stem",
        in_stock: true,
        featured: false
    },
    {
        id: 73,
        name: "Glazed Ceramic Teapot",
        category: "pottery",
        seller: "Pottery Studio",
        seller_id: 1,
        price: 44.00,
        original_price: 58.00,
        image: "assets/images/products/p73-ceramic-teapot.webp",
        rating: 4.7,
        reviews: 24,
        description: "Wheel-thrown teapot with a pulled spout and handle, glazed in satin white",
        in_stock: true,
        featured: false
    },
    {
        id: 74,
        name: "Speckled Stoneware Plate Set",
        category: "pottery",
        seller: "Pottery Studio",
        seller_id: 1,
        price: 48.00,
        original_price: 62.00,
        image: "assets/images/products/p74-speckled-plate-set.webp",
        rating: 4.8,
        reviews: 31,
        description: "Set of four speckled stoneware dinner plates, hand-thrown and glazed",
        in_stock: true,
        featured: false
    },
    {
        id: 75,
        name: "Ceramic Soap Dish",
        category: "pottery",
        seller: "Pottery Studio",
        seller_id: 1,
        price: 16.00,
        original_price: 21.00,
        image: "assets/images/products/p75-ceramic-soap-dish.webp",
        rating: 4.6,
        reviews: 18,
        description: "Hand-thrown draining soap dish, glazed in a warm stoneware finish",
        in_stock: true,
        featured: false
    },
    {
        id: 76,
        name: "Ceramic Sugar Bowl",
        category: "pottery",
        seller: "Pottery Studio",
        seller_id: 1,
        price: 19.00,
        original_price: 25.00,
        image: "assets/images/products/p76-ceramic-sugar-bowl.webp",
        rating: 4.7,
        reviews: 15,
        description: "Small lidded stoneware sugar bowl, thrown to match the dinner set",
        in_stock: true,
        featured: false
    },
    {
        id: 77,
        name: "Chunky Knit Throw Pillow",
        category: "textiles",
        seller: "Textile Arts",
        seller_id: 2,
        price: 36.00,
        original_price: 46.00,
        image: "assets/images/products/p77-knit-throw-pillow.webp",
        rating: 4.8,
        reviews: 27,
        description: "Hand-knit chunky wool throw pillow cover with a removable insert",
        in_stock: true,
        featured: false
    },
    {
        id: 78,
        name: "Hand-Dyed Tapestry",
        category: "textiles",
        seller: "Textile Arts",
        seller_id: 2,
        price: 52.00,
        original_price: 68.00,
        image: "assets/images/products/p78-hand-dyed-tapestry.webp",
        rating: 4.9,
        reviews: 21,
        description: "Indigo hand-dyed wall tapestry with a graduated wave pattern",
        in_stock: true,
        featured: false
    },
    {
        id: 79,
        name: "Woven Market Bag",
        category: "textiles",
        seller: "Textile Arts",
        seller_id: 2,
        price: 30.00,
        original_price: 40.00,
        image: "assets/images/products/p79-woven-market-bag.webp",
        rating: 4.7,
        reviews: 35,
        description: "Hand-woven straw market bag with reinforced stitched handles",
        in_stock: true,
        featured: false
    },
    {
        id: 80,
        name: "Linen Napkin Set",
        category: "textiles",
        seller: "Textile Arts",
        seller_id: 2,
        price: 24.00,
        original_price: 32.00,
        image: "assets/images/products/p80-linen-napkin-set.webp",
        rating: 4.8,
        reviews: 19,
        description: "Set of six hand-hemmed pure linen napkins, tied with cotton twine",
        in_stock: true,
        featured: false
    },
    {
        id: 81,
        name: "Layered Chain Necklace",
        category: "jewelry",
        seller: "Artisan Jewelry",
        seller_id: 3,
        price: 44.00,
        original_price: 58.00,
        image: "assets/images/products/p81-layered-chain-necklace.webp",
        rating: 4.9,
        reviews: 42,
        description: "Set of three layered gold-fill chains with a hand-set mother-of-pearl charm",
        in_stock: true,
        featured: false
    },
    {
        id: 82,
        name: "Hammered Stud Earrings",
        category: "jewelry",
        seller: "Artisan Jewelry",
        seller_id: 3,
        price: 28.00,
        original_price: 37.00,
        image: "assets/images/products/p82-hammered-stud-earrings.webp",
        rating: 4.7,
        reviews: 24,
        description: "Hand-hammered gold-fill stud earrings with a organic, textured finish",
        in_stock: true,
        featured: false
    },
    {
        id: 83,
        name: "Beaded Choker",
        category: "jewelry",
        seller: "Artisan Jewelry",
        seller_id: 3,
        price: 26.00,
        original_price: 34.00,
        image: "assets/images/products/p83-beaded-choker.webp",
        rating: 4.6,
        reviews: 20,
        description: "Hand-strung beaded choker with an adjustable clasp and pendant drop",
        in_stock: true,
        featured: false
    },
    {
        id: 84,
        name: "Wrap Bracelet",
        category: "jewelry",
        seller: "Artisan Jewelry",
        seller_id: 3,
        price: 32.00,
        original_price: 42.00,
        image: "assets/images/products/p84-wrap-bracelet.webp",
        rating: 4.7,
        reviews: 17,
        description: "Hand-braided leather wrap bracelet with a brushed metal clasp",
        in_stock: true,
        featured: false
    },
    {
        id: 85,
        name: "Wooden Serving Tray",
        category: "woodwork",
        seller: "Wood Masters",
        seller_id: 4,
        price: 38.00,
        original_price: 49.00,
        image: "assets/images/products/p85-wooden-serving-tray.webp",
        rating: 4.8,
        reviews: 26,
        description: "Hand-carved serving tray with an inlaid geometric pattern",
        in_stock: true,
        featured: false
    },
    {
        id: 86,
        name: "Carved Wall Clock",
        category: "woodwork",
        seller: "Wood Masters",
        seller_id: 4,
        price: 46.00,
        original_price: 60.00,
        image: "assets/images/products/p86-carved-wall-clock.webp",
        rating: 4.6,
        reviews: 14,
        description: "Solid wood wall clock, hand-turned and finished with a natural oil",
        in_stock: true,
        featured: false
    },
    {
        id: 87,
        name: "Wooden Trivet Set",
        category: "woodwork",
        seller: "Wood Masters",
        seller_id: 4,
        price: 26.00,
        original_price: 34.00,
        image: "assets/images/products/p87-wooden-trivet-set.webp",
        rating: 4.7,
        reviews: 22,
        description: "Set of two hand-carved trivets, sized for pots and teapots alike",
        in_stock: true,
        featured: false
    },
    {
        id: 88,
        name: "Hand-Turned Wooden Vase",
        category: "woodwork",
        seller: "Wood Masters",
        seller_id: 4,
        price: 42.00,
        original_price: 55.00,
        image: "assets/images/products/p88-turned-wooden-vase.webp",
        rating: 4.8,
        reviews: 19,
        description: "Lathe-turned vase with a spiralled profile, from a single block of timber",
        in_stock: true,
        featured: false
    },
    {
        id: 89,
        name: "Leather Passport Holder",
        category: "leather",
        seller: "Hide & Stitch",
        seller_id: 5,
        price: 32.00,
        original_price: 42.00,
        image: "assets/images/products/p89-leather-passport-holder.webp",
        rating: 4.8,
        reviews: 28,
        description: "Full-grain leather passport cover with card slots, hand-stitched",
        in_stock: true,
        featured: false
    },
    {
        id: 90,
        name: "Leather Camera Strap",
        category: "leather",
        seller: "Hide & Stitch",
        seller_id: 5,
        price: 34.00,
        original_price: 45.00,
        image: "assets/images/products/p90-leather-camera-strap.webp",
        rating: 4.7,
        reviews: 16,
        description: "Padded leather camera strap with hand-stitched edges",
        in_stock: true,
        featured: false
    },
    {
        id: 91,
        name: "Leather Coin Purse",
        category: "leather",
        seller: "Hide & Stitch",
        seller_id: 5,
        price: 18.00,
        original_price: 24.00,
        image: "assets/images/products/p91-leather-coin-purse.webp",
        rating: 4.6,
        reviews: 23,
        description: "Compact leather coin purse with a snap button closure",
        in_stock: true,
        featured: false
    },
    {
        id: 92,
        name: "Leather Laptop Sleeve",
        category: "leather",
        seller: "Hide & Stitch",
        seller_id: 5,
        price: 58.00,
        original_price: 75.00,
        image: "assets/images/products/p92-leather-laptop-sleeve.webp",
        rating: 4.9,
        reviews: 31,
        description: "Slim leather laptop sleeve, hand-cut and stitched with a felt lining",
        in_stock: true,
        featured: false
    },
    {
        id: 93,
        name: "Rose Soy Candle",
        category: "candles",
        seller: "Glow & Wick",
        seller_id: 6,
        price: 20.00,
        original_price: 26.00,
        image: "assets/images/products/p93-rose-soy-candle.webp",
        rating: 4.8,
        reviews: 29,
        description: "Hand-poured soy candle topped with dried rose and lavender petals",
        in_stock: true,
        featured: false
    },
    {
        id: 94,
        name: "Sea Salt & Driftwood Candle",
        category: "candles",
        seller: "Glow & Wick",
        seller_id: 6,
        price: 22.00,
        original_price: 28.00,
        image: "assets/images/products/p94-sea-salt-driftwood-candle.webp",
        rating: 4.7,
        reviews: 18,
        description: "Coastal-scented soy candle, hand-poured in a frosted glass jar",
        in_stock: true,
        featured: false
    },
    {
        id: 95,
        name: "Coconut Vanilla Candle",
        category: "candles",
        seller: "Glow & Wick",
        seller_id: 6,
        price: 21.00,
        original_price: 27.00,
        image: "assets/images/products/p95-coconut-vanilla-candle.webp",
        rating: 4.9,
        reviews: 33,
        description: "Soy wax candle hand-poured into a natural coconut shell vessel",
        in_stock: true,
        featured: false
    },
    {
        id: 96,
        name: "Mini Votive Candle Set",
        category: "candles",
        seller: "Glow & Wick",
        seller_id: 6,
        price: 16.00,
        original_price: 21.00,
        image: "assets/images/products/p96-mini-votive-set.webp",
        rating: 4.6,
        reviews: 14,
        description: "Set of four mini soy votives in a rotating seasonal scent selection",
        in_stock: true,
        featured: false
    },
    {
        id: 97,
        name: "Copper Fruit Bowl",
        category: "metalwork",
        seller: "Hearth & Hammer",
        seller_id: 7,
        price: 58.00,
        original_price: 75.00,
        image: "assets/images/products/p97-copper-fruit-bowl.webp",
        rating: 4.8,
        reviews: 21,
        description: "Hand-hammered copper fruit bowl with a hinged lid",
        in_stock: true,
        featured: false
    },
    {
        id: 98,
        name: "Brass Wall Hooks Set",
        category: "metalwork",
        seller: "Hearth & Hammer",
        seller_id: 7,
        price: 28.00,
        original_price: 36.00,
        image: "assets/images/products/p98-brass-wall-hooks.webp",
        rating: 4.7,
        reviews: 25,
        description: "Set of three hand-cast solid brass wall hooks",
        in_stock: true,
        featured: false
    },
    {
        id: 99,
        name: "Copper Measuring Spoons Set",
        category: "metalwork",
        seller: "Hearth & Hammer",
        seller_id: 7,
        price: 24.00,
        original_price: 32.00,
        image: "assets/images/products/p99-copper-measuring-spoons.webp",
        rating: 4.6,
        reviews: 16,
        description: "Set of four hand-hammered copper measuring spoons on a ring",
        in_stock: true,
        featured: false
    },
    {
        id: 100,
        name: "Copper Turkish Coffee Pot",
        category: "metalwork",
        seller: "Hearth & Hammer",
        seller_id: 7,
        price: 46.00,
        original_price: 60.00,
        image: "assets/images/products/p100-copper-coffee-pot.webp",
        rating: 4.8,
        reviews: 20,
        description: "Hand-hammered copper cezve, forged for stovetop Turkish coffee",
        in_stock: true,
        featured: false
    },
    {
        id: 101,
        name: "Rattan Pendant Lampshade",
        category: "basketry",
        seller: "Reed & Rattan",
        seller_id: 8,
        price: 54.00,
        original_price: 70.00,
        image: "assets/images/products/p101-rattan-pendant-lamp.webp",
        rating: 4.8,
        reviews: 22,
        description: "Hand-woven rattan pendant lampshade, wired for a standard fitting",
        in_stock: true,
        featured: false
    },
    {
        id: 102,
        name: "Woven Picnic Basket",
        category: "basketry",
        seller: "Reed & Rattan",
        seller_id: 8,
        price: 44.00,
        original_price: 58.00,
        image: "assets/images/products/p102-woven-picnic-basket.webp",
        rating: 4.7,
        reviews: 28,
        description: "Hand-woven wicker picnic basket with a hinged lid and carry handle",
        in_stock: true,
        featured: false
    },
    {
        id: 103,
        name: "Seagrass Placemat Set",
        category: "basketry",
        seller: "Reed & Rattan",
        seller_id: 8,
        price: 28.00,
        original_price: 36.00,
        image: "assets/images/products/p103-seagrass-placemat-set.webp",
        rating: 4.6,
        reviews: 17,
        description: "Set of four braided seagrass placemats, hand-woven in a tight weave",
        in_stock: true,
        featured: false
    },
    {
        id: 104,
        name: "Stacked Rattan Storage Baskets",
        category: "basketry",
        seller: "Reed & Rattan",
        seller_id: 8,
        price: 48.00,
        original_price: 62.00,
        image: "assets/images/products/p104-stacked-rattan-baskets.webp",
        rating: 4.8,
        reviews: 19,
        description: "Nesting set of three hand-woven rattan storage baskets",
        in_stock: true,
        featured: false
    },
    {
        id: 105,
        name: "Glass Pitcher",
        category: "glass",
        seller: "Ember Glassworks",
        seller_id: 9,
        price: 42.00,
        original_price: 55.00,
        image: "assets/images/products/p105-glass-pitcher.webp",
        rating: 4.8,
        reviews: 24,
        description: "Furnace-blown glass pitcher with a hand-pulled spout and handle",
        in_stock: true,
        featured: false
    },
    {
        id: 106,
        name: "Glass Trinket Dish",
        category: "glass",
        seller: "Ember Glassworks",
        seller_id: 9,
        price: 20.00,
        original_price: 27.00,
        image: "assets/images/products/p106-glass-trinket-dish.webp",
        rating: 4.7,
        reviews: 15,
        description: "Small hand-blown glass dish for rings and everyday trinkets",
        in_stock: true,
        featured: false
    },
    {
        id: 107,
        name: "Decorative Glass Bowl",
        category: "glass",
        seller: "Ember Glassworks",
        seller_id: 9,
        price: 36.00,
        original_price: 47.00,
        image: "assets/images/products/p107-decorative-glass-bowl.webp",
        rating: 4.8,
        reviews: 20,
        description: "Furnace-blown glass bowl with a swirled colour-in-glass finish",
        in_stock: true,
        featured: false
    },
    {
        id: 108,
        name: "Hand-Blown Tumbler Set",
        category: "glass",
        seller: "Ember Glassworks",
        seller_id: 9,
        price: 38.00,
        original_price: 50.00,
        image: "assets/images/products/p108-glass-tumbler-set.webp",
        rating: 4.9,
        reviews: 27,
        description: "Set of four hand-blown drinking tumblers with a faceted cut pattern",
        in_stock: true,
        featured: false
    }
];

// Sample Seller Data
const sellers = [
    {
        id: 1,
        name: "Pottery Studio",
        avatar: "🏺",
        image: "assets/images/sellers/pottery-studio.webp",
        rating: 4.8,
        reviews: 245,
        products: 23,
        description: "Creating beautiful handmade pottery for over 20 years",
        followers: 1240,
        verified: true
    },
    {
        id: 2,
        name: "Textile Arts",
        avatar: "🧵",
        image: "assets/images/sellers/textile-arts.webp",
        rating: 4.9,
        reviews: 189,
        products: 30,
        description: "Traditional textile weaving and embroidery",
        followers: 956,
        verified: true
    },
    {
        id: 3,
        name: "Artisan Jewelry",
        avatar: "💎",
        image: "assets/images/sellers/artisan-jewelry.webp",
        rating: 4.7,
        reviews: 312,
        products: 36,
        description: "Handcrafted jewelry with semi-precious stones",
        followers: 2150,
        verified: true
    },
    {
        id: 4,
        name: "Wood Masters",
        avatar: "🎨",
        image: "assets/images/sellers/wood-masters.webp",
        rating: 4.6,
        reviews: 156,
        products: 26,
        description: "Master woodcarvers creating unique pieces",
        followers: 1080,
        verified: true
    },
    {
        id: 5,
        name: "Hide & Stitch",
        avatar: "👜",
        image: "assets/images/sellers/hide-and-stitch.webp",
        rating: 4.7,
        reviews: 132,
        products: 20,
        description: "Full-grain leather goods, hand-cut and stitched to order",
        followers: 780,
        verified: true
    },
    {
        id: 6,
        name: "Glow & Wick",
        avatar: "🕯️",
        image: "assets/images/sellers/glow-and-wick.webp",
        rating: 4.9,
        reviews: 98,
        products: 18,
        description: "Small-batch soy wax candles, hand-poured with natural scents",
        followers: 640,
        verified: true
    },
    {
        id: 7,
        name: "Hearth & Hammer",
        avatar: "🔨",
        image: "assets/images/sellers/hearth-and-hammer.webp",
        rating: 4.7,
        reviews: 71,
        products: 22,
        description: "Hand-hammered copper and metalware, shaped over an open forge",
        followers: 520,
        verified: true
    },
    {
        id: 8,
        name: "Reed & Rattan",
        avatar: "🧺",
        image: "assets/images/sellers/reed-and-rattan.webp",
        rating: 4.8,
        reviews: 58,
        products: 24,
        description: "Traditional basket weaving using sustainably sourced rattan and reed",
        followers: 410,
        verified: true
    },
    {
        id: 9,
        name: "Ember Glassworks",
        avatar: "🔥",
        image: "assets/images/sellers/ember-glassworks.webp",
        rating: 4.8,
        reviews: 64,
        products: 21,
        description: "Furnace-blown and leaded glass pieces, shaped while the glass is still molten",
        followers: 590,
        verified: true
    },
    {
        id: 10,
        name: "Loop & Fiber",
        avatar: "🪢",
        image: "assets/images/sellers/loop-and-fiber.webp",
        rating: 4.7,
        reviews: 52,
        products: 2,
        description: "Macrame wall hangings and plant hangers, hand-knotted from natural cotton cord",
        followers: 340,
        verified: true
    },
    {
        id: 11,
        name: "Petal Press Co.",
        avatar: "🌸",
        image: "assets/images/sellers/petal-press.webp",
        rating: 4.9,
        reviews: 41,
        products: 2,
        description: "Botanical soy candles pressed with real dried flowers, poured in small batches",
        followers: 410,
        verified: true
    },
    {
        id: 12,
        name: "Anvil & Oak",
        avatar: "🪵",
        image: "assets/images/sellers/anvil-and-oak.webp",
        rating: 4.6,
        reviews: 33,
        products: 2,
        description: "Hand-turned wooden bowls and boards, finished with food-safe oils",
        followers: 275,
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

// Renders a seller's `image` field as a real photo, falling back to the
// `avatar` emoji when no photo is set.
function sellerAvatarMarkup(seller, className) {
    if (typeof seller.image !== 'string') return seller.avatar;

    const cls = className ? ` class="${className}"` : '';
    return `<img src="${sitePath(seller.image)}" alt="${seller.name}" loading="lazy"${cls}>`;
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
