// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.nav-overlay');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    navOverlay.classList.toggle('active');
});

navOverlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    navOverlay.classList.remove('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        navOverlay.classList.remove('active');
    });
});

// Product Data
const products = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        category: "electronics",
        price: 299.99,
        originalPrice: 349.99,
        rating: 4.8,
        reviews: 234,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
    },
    {
        id: 2,
        name: "Minimalist Smart Watch",
        category: "electronics",
        price: 199.99,
        originalPrice: null,
        rating: 4.9,
        reviews: 156,
        badge: "new",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
    },
    {
        id: 3,
        name: "Classic Cotton Jacket",
        category: "clothing",
        price: 89.99,
        originalPrice: 119.99,
        rating: 4.5,
        reviews: 89,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80"
    },
    {
        id: 4,
        name: "Handcrafted Leather Bag",
        category: "accessories",
        price: 159.99,
        originalPrice: null,
        rating: 4.7,
        reviews: 312,
        badge: null,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80"
    },
    {
        id: 5,
        name: "Design Studio Desk Lamp",
        category: "home",
        price: 45.99,
        originalPrice: 65.99,
        rating: 4.4,
        reviews: 78,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80"
    },
    {
        id: 6,
        name: "Urban Performance Sneakers",
        category: "clothing",
        price: 129.99,
        originalPrice: null,
        rating: 4.7,
        reviews: 445,
        badge: "new",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
    },
    {
        id: 7,
        name: "Home Office Sound System",
        category: "electronics",
        price: 149.99,
        originalPrice: 179.99,
        rating: 4.6,
        reviews: 187,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80"
    },
    {
        id: 8,
        name: "Steel Insulated Bottle",
        category: "accessories",
        price: 24.99,
        originalPrice: null,
        rating: 4.5,
        reviews: 523,
        badge: null,
        image: "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=800&q=80"
    },
    {
        id: 9,
        name: "Essential Cotton T-Shirt",
        category: "clothing",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.3,
        reviews: 167,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&q=80"
    },
    {
        id: 10,
        name: "Modern Ceramic Pot Set",
        category: "home",
        price: 34.99,
        originalPrice: null,
        rating: 4.8,
        reviews: 92,
        badge: "new",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80"
    },
    {
        id: 11,
        name: "Wireless Charging Dock",
        category: "electronics",
        price: 49.99,
        originalPrice: 64.99,
        rating: 4.5,
        reviews: 278,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=800&q=80"
    },
    {
        id: 12,
        name: "Signature UV Sunglasses",
        category: "accessories",
        price: 89.99,
        originalPrice: null,
        rating: 4.6,
        reviews: 156,
        badge: null,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80"
    },
    {
        id: 13,
        name: "Architectural Coffee Press",
        category: "home",
        price: 75.00,
        originalPrice: null,
        rating: 4.9,
        reviews: 42,
        badge: "new",
        image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80"
    },
    {
        id: 14,
        name: "Mechanical Keyboard",
        category: "electronics",
        price: 180.00,
        originalPrice: 210.00,
        rating: 4.8,
        reviews: 124,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&q=80"
    },
    {
        id: 15,
        name: "Premium Linen Shirt",
        category: "clothing",
        price: 110.00,
        originalPrice: null,
        rating: 4.7,
        reviews: 67,
        badge: null,
        image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80"
    },
    {
        id: 16,
        name: "Leather Passport Holder",
        category: "accessories",
        price: 45.00,
        originalPrice: 55.00,
        rating: 4.6,
        reviews: 89,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80"
    },
    {
        id: 17,
        name: "Noise Cancelling Earbuds",
        category: "electronics",
        price: 159.00,
        originalPrice: null,
        rating: 4.5,
        reviews: 143,
        badge: "new",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80"
    },
    {
        id: 18,
        name: "Concrete Desktop Organizer",
        category: "home",
        price: 35.00,
        originalPrice: null,
        rating: 4.4,
        reviews: 31,
        badge: null,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
    },
    {
        id: 19,
        name: "Portable Bluetooth Speaker",
        category: "electronics",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.6,
        reviews: 198,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80"
    },
    {
        id: 20,
        name: "Ultra-Slim Laptop Mouse",
        category: "electronics",
        price: 59.99,
        originalPrice: null,
        rating: 4.7,
        reviews: 87,
        badge: "new",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80"
    },
    {
        id: 21,
        name: "Slim Fit shoes",
        category: "clothing",
        price: 69.99,
        originalPrice: 89.99,
        rating: 4.5,
        reviews: 213,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800&q=80"
    },
    {
        id: 22,
        name: "Wool Blend Winter Scarf",
        category: "clothing",
        price: 39.99,
        originalPrice: null,
        rating: 4.4,
        reviews: 56,
        badge: "new",
        image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80"
    },
    {
        id: 23,
        name: "Canvas Tote Bag",
        category: "accessories",
        price: 119.99,
        originalPrice: null,
        rating: 4.8,
        reviews: 142,
        badge: null,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80"
    },
    {
        id: 24,
        name: "Minimalist Analog Watch",
        category: "accessories",
        price: 149.99,
        originalPrice: 179.99,
        rating: 4.7,
        reviews: 201,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80"
    },
    {
        id: 25,
        name: "Aromatherapy Candle Set",
        category: "home",
        price: 29.99,
        originalPrice: null,
        rating: 4.9,
        reviews: 178,
        badge: "new",
        image: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=800&q=80"
    },
    {
        id: 26,
        name: "Woven Storage Basket",
        category: "home",
        price: 42.99,
        originalPrice: 54.99,
        rating: 4.5,
        reviews: 63,
        badge: "sale",
        image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=800&q=80"
    }
];

// State
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCategory = 'all';
let searchQuery = '';

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const cartFooter = document.getElementById('cartFooter');
const checkoutBtn = document.getElementById('checkoutBtn');
const searchInput = document.getElementById('searchInput');
const categoryTabs = document.querySelectorAll('.category-tab');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// Render Products
function renderProducts() {
    let filtered = products;

    if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }

    if (searchQuery) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    productsGrid.innerHTML = filtered.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge}</span>` : ''}
                <button class="product-wishlist" data-id="${product.id}">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <i class="fas fa-star"></i>
                    <span>${product.rating} (${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <button class="add-to-cart-btn" data-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');

    // Add event listeners
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(parseInt(btn.dataset.id));
        });
    });

    document.querySelectorAll('.product-wishlist').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            btn.classList.toggle('active');
            const icon = btn.querySelector('i');
            icon.classList.toggle('far');
            icon.classList.toggle('fas');
        });
    });
}

function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCart();
    showToast(`${product.name} added to cart`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCart();
        }
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartCount.textContent = totalItems;
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" data-id="${item.id}" data-change="-1">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" data-id="${item.id}" data-change="1">+</button>
                        <button class="remove-item" data-id="${item.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        cartFooter.style.display = 'block';

        // Add event listeners
        document.querySelectorAll('.quantity-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                updateQuantity(parseInt(btn.dataset.id), parseInt(btn.dataset.change));
            });
        });

        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', () => {
                removeFromCart(parseInt(btn.dataset.id));
            });
        });
    }
}

function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('active');
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// Cart Toggle
function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

cartBtn.addEventListener('click', openCart);
closeCart.addEventListener('click', closeCartSidebar);
cartOverlay.addEventListener('click', closeCartSidebar);

// Checkout
checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        alert(`Thank you for your order!\n\nTotal: $${total.toFixed(2)}\n\nThis is a demo - no actual payment will be processed.`);
        cart = [];
        saveCart();
        updateCart();
        closeCartSidebar();
    }
});

// Search
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProducts();
});

// Category Filter
categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        categoryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentCategory = tab.dataset.category;
        renderProducts();
    });
});

// Initial Render
renderProducts();
updateCart();
