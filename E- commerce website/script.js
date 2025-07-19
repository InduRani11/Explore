// Users data structure
let users = [];

// Cart data structure
let cart = {
    items: [],
    addItem: function(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({...product, quantity: 1});
        }
        this.updateCartUI();
        showNotification(`${product.title} added to cart`);
    },
    removeItem: function(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.updateCartUI();
        showNotification('Item removed from cart');
    },
    updateQuantity: function(productId, newQuantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = newQuantity;
            if (item.quantity <= 0) {
                this.removeItem(productId);
            }
        }
        this.updateCartUI();
    },
    clearCart: function() {
        this.items = [];
        this.updateCartUI();
    },
    getSubtotal: function() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    updateCartUI: function() {
        const cartItemsContainer = document.getElementById('cart-items-container');
        const cartSummary = document.getElementById('cart-summary');
        const cartCount = document.getElementById('cart-count');
        
        // Update cart count
        cartCount.textContent = this.items.reduce((total, item) => total + item.quantity, 0);
        
        if (this.items.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="text-center py-10 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p>Your cart is empty</p>
                </div>
            `;
            cartSummary.classList.add('hidden');
        } else {
            cartItemsContainer.innerHTML = this.items.map(item => `
                <div class="cart-item flex items-center justify-between p-4 bg-white rounded-lg border">
                    <div class="flex items-center space-x-4">
                        <img src="${item.image}" alt="${item.title}" class="w-16 h-16 object-cover rounded">
                        <div>
                            <h4 class="font-medium text-gray-800">${item.title}</h4>
                            <p class="text-sm text-gray-500">$${item.price.toFixed(2)}</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-2">
                        <button onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})" class="w-8 h-8 flex items-center justify-center border rounded text-gray-500 hover:bg-gray-100">-</button>
                        <span class="w-8 text-center">${item.quantity}</span>
                        <button onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})" class="w-8 h-8 flex items-center justify-center border rounded text-gray-500 hover:bg-gray-100">+</button>
                        <button onclick="cart.removeItem(${item.id})" class="ml-2 text-red-500 hover:text-red-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            `).join('');
            
            document.getElementById('cart-subtotal').textContent = `$${this.getSubtotal().toFixed(2)}`;
            document.getElementById('cart-total').textContent = `$${this.getSubtotal().toFixed(2)}`;
            cartSummary.classList.remove('hidden');
        }
    }
};

// DOM Elements
const authBtn = document.getElementById('auth-btn');
const authModal = document.getElementById('auth-modal');
const closeAuthModal = document.getElementById('close-auth-modal');
const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

const cartBtn = document.getElementById('cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');

// Event Listeners
authBtn.addEventListener('click', () => {
    authModal.classList.remove('hidden');
});

closeAuthModal.addEventListener('click', () => {
    authModal.classList.add('hidden');
});

loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    loginTab.classList.remove('text-gray-500');
    loginTab.classList.add('text-indigo-600');
    loginTab.classList.add('border-indigo-600');
    
    signupTab.classList.remove('active');
    signupTab.classList.add('text-gray-500');
    signupTab.classList.remove('text-indigo-600');
    signupTab.classList.remove('border-indigo-600');
    
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
});

signupTab.addEventListener('click', () => {
    signupTab.classList.add('active');
    signupTab.classList.remove('text-gray-500');
    signupTab.classList.add('text-indigo-600');
    signupTab.classList.add('border-indigo-600');
    
    loginTab.classList.remove('active');
    loginTab.classList.add('text-gray-500');
    loginTab.classList.remove('text-indigo-600');
    loginTab.classList.remove('border-indigo-600');
    
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
});

cartBtn.addEventListener('click', () => {
    cartSidebar.classList.remove('translate-x-full');
});

closeCart.addEventListener('click', () => {
    cartSidebar.classList.add('translate-x-full');
});

// Auth Functions
function signupUser(event) {
    event.preventDefault();
    
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    
    if (password !== confirmPassword) {
        showNotification('Passwords do not match', 'error');
        return;
    }
    
    if (users.some(user => user.email === email)) {
        showNotification('Email already registered', 'error');
        return;
    }
    
    users.push({ name, email, password });
    showNotification('Account created successfully! Please login.', 'success');
    
    // Switch to login tab
    loginTab.click();
    
    // Clear form
    event.target.reset();
}

function loginUser(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    const user = users.find(user => user.email === email && user.password === password);
    
    if (!user) {
        showNotification('Invalid email or password', 'error');
        return;
    }
    
    showNotification(`Welcome back, ${user.name}!`, 'success');
    authModal.classList.add('hidden');
    authBtn.textContent = user.name;
    
    // Clear form
    event.target.reset();
}

// Utility Functions
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notification-message');
    
    notificationMessage.textContent = message;
    
    // Set color based on type
    if (type === 'success') {
        notification.classList.remove('bg-red-500');
        notification.classList.add('bg-green-500');
    } else {
        notification.classList.remove('bg-green-500');
        notification.classList.add('bg-red-500');
    }
    
    notification.classList.remove('hidden');
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}

// Fetch products from API
async function loadProducts() {
    try {
        // Using dummy API - in a real app, replace with your API endpoint
        const response = await fetch('https://fakestoreapi.com/products?limit=8');
        const products = await response.json();
        
        const productsContainer = document.getElementById('products-container');
        
        productsContainer.innerHTML = products.map(product => `
            <div class="product-card bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
                <div class="relative">
                    <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-contain p-4">
                    <div class="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
                        -${Math.floor(Math.random() * 30) + 10}%
                    </div>
                </div>
                <div class="p-4">
                    <h3 class="font-semibold text-lg mb-1 truncate">${product.title}</h3>
                    <div class="flex items-center mb-2">
                        ${renderStars(product.rating.rate)}
                        <span class="text-sm text-gray-500 ml-1">(${product.rating.count})</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-lg">$${product.price}</span>
                        <button onclick="cart.addItem(${JSON.stringify({ 
                            id: product.id,
                            title: product.title,
                            price: product.price,
                            image: product.image
                        }).replace(/"/g, '&quot;')})" class="bg-indigo-600 text-white px-3 py-1 rounded-lg hover:bg-indigo-700 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading products:', error);
        showNotification('Failed to load products', 'error');
    }
}

function renderStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = (rating - fullStars) >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>';
        } else {
            stars += '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>';
        }
    }
    
    return stars;
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    
    // Add some dummy users for testing (remove in production)
    users = [
        { name: 'Admin User', email: 'admin@example.com', password: 'admin123' },
        { name: 'Test User', email: 'test@example.com', password: 'test123' }
    ];
});
