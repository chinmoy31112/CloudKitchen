// ==============================
//  CLOUD KITCHEN — APP.JS
// ==============================

// ── Data ──────────────────────────────────────────────────

const DISHES = [
    {
        id: 1, name: 'Masala Omelette Wrap', chef: 'Priya S.', chefId: 1,
        price: 8.99, originalPrice: 11.99, category: 'Breakfast', dietary: 'Veg',
        rating: 4.8, emoji: '🌯', discount: '25% OFF',
        desc: 'Fluffy eggs with spiced veggies wrapped in a soft tortilla.'
    },
    {
        id: 2, name: 'Avocado Toast Stack', chef: 'Marco L.', chefId: 2,
        price: 9.99, originalPrice: null, category: 'Breakfast', dietary: 'Vegan',
        rating: 4.6, emoji: '🥑', discount: null,
        desc: 'Toasted sourdough with smashed avocado, cherry tomatoes & microgreens.'
    },
    {
        id: 3, name: 'French Toast with Berries', chef: 'Lena K.', chefId: 3,
        price: 7.99, originalPrice: null, category: 'Breakfast', dietary: 'Veg',
        rating: 4.7, emoji: '🍞', discount: null,
        desc: 'Golden brioche dipped in vanilla custard, topped with fresh berries.'
    },
    {
        id: 4, name: 'Chicken Shakshuka', chef: 'Priya S.', chefId: 1,
        price: 11.49, originalPrice: null, category: 'Breakfast', dietary: 'Non-Veg',
        rating: 4.9, emoji: '🍳', discount: null,
        desc: 'Poached eggs in a rich spiced tomato sauce with chicken chunks.'
    },
    {
        id: 5, name: 'Creamy Tomato Basil Soup', chef: 'Marco L.', chefId: 2,
        price: 6.99, originalPrice: null, category: 'Soups', dietary: 'Vegan',
        rating: 4.5, emoji: '🍅', discount: null,
        desc: 'Silky roasted tomato soup blended with fresh basil and coconut cream.'
    },
    {
        id: 6, name: 'Chicken Noodle Broth', chef: 'Lena K.', chefId: 3,
        price: 8.49, originalPrice: 10.99, category: 'Soups', dietary: 'Non-Veg',
        rating: 4.7, emoji: '🍜', discount: '20% OFF',
        desc: 'Hearty classic made with tender chicken, thin noodles & garden herbs.'
    },
    {
        id: 7, name: 'Truffle Mushroom Pasta', chef: 'Marco L.', chefId: 2,
        price: 14.99, originalPrice: null, category: 'Pasta', dietary: 'Veg',
        rating: 4.9, emoji: '🍝', discount: null,
        desc: 'Tagliatelle tossed in truffle cream sauce with wild mushrooms & parmesan.'
    },
    {
        id: 8, name: 'Spicy Arrabbiata', chef: 'Priya S.', chefId: 1,
        price: 12.49, originalPrice: null, category: 'Pasta', dietary: 'Vegan',
        rating: 4.6, emoji: '🌶️', discount: null,
        desc: 'Penne in a fiery garlic-chilli tomato sauce — pure southern Italian.'
    },
    {
        id: 9, name: 'Butter Chicken Curry', chef: 'Priya S.', chefId: 1,
        price: 13.99, originalPrice: 16.99, category: 'Main Course', dietary: 'Non-Veg',
        rating: 5.0, emoji: '🍛', discount: '15% OFF',
        desc: 'Tender chicken thighs slow-cooked in velvety butter tomato gravy.'
    },
    {
        id: 10, name: 'Paneer Tikka Masala', chef: 'Lena K.', chefId: 3,
        price: 12.99, originalPrice: null, category: 'Main Course', dietary: 'Veg',
        rating: 4.8, emoji: '🧀', discount: null,
        desc: 'Tandoor-grilled cottage cheese in smoky cashew-based masala curry.'
    },
    {
        id: 11, name: 'Grilled Salmon Bowl', chef: 'Marco L.', chefId: 2,
        price: 17.99, originalPrice: null, category: 'Main Course', dietary: 'Non-Veg',
        rating: 4.7, emoji: '🐟', discount: null,
        desc: 'Atlantic salmon with garlic butter over jasmine rice and stir-fried greens.'
    },
    {
        id: 12, name: 'Classic Beef Burger', chef: 'Lena K.', chefId: 3,
        price: 11.99, originalPrice: null, category: 'Burgers', dietary: 'Non-Veg',
        rating: 4.6, emoji: '🍔', discount: null,
        desc: '200g beef patty with American cheddar, pickles, lettuce & house sauce.'
    },
    {
        id: 13, name: 'Crispy Veg Burger', chef: 'Priya S.', chefId: 1,
        price: 9.49, originalPrice: 11.49, category: 'Burgers', dietary: 'Veg',
        rating: 4.5, emoji: '🥦', discount: '17% OFF',
        desc: 'Crunchy chickpea patty with sriracha mayo, avocado & fresh slaw.'
    },
    {
        id: 14, name: 'Fresh Orange Juice', chef: 'Marco L.', chefId: 2,
        price: 4.49, originalPrice: null, category: 'Drinks', dietary: 'Vegan',
        rating: 4.8, emoji: '🍊', discount: null,
        desc: 'Freshly squeezed Valencia oranges, no sugar added, served chilled.'
    },
    {
        id: 15, name: 'Mango Lassi', chef: 'Priya S.', chefId: 1,
        price: 4.99, originalPrice: null, category: 'Drinks', dietary: 'Veg',
        rating: 4.9, emoji: '🥭', discount: null,
        desc: 'Creamy blended Alphonso mangoes with chilled yoghurt and a hint of cardamom.'
    }
];

const CHEFS = [
    { id: 1, name: 'Priya Sharma', specialty: 'Indian & Fusion', emoji: '👩‍🍳', rating: 4.9, dishes: 6, orders: 320 },
    { id: 2, name: 'Marco Lombardi', specialty: 'Italian & Mediterranean', emoji: '👨‍🍳', rating: 4.8, dishes: 5, orders: 280 },
    { id: 3, name: 'Lena Kim', specialty: 'Continental & Korean', emoji: '🧑‍🍳', rating: 4.7, dishes: 4, orders: 195 },
];

// ── State ─────────────────────────────────────────────────

let cart = [];          // { id, name, price, emoji, qty }
let favourites = [];    // ids
let orders = [];        // placed orders
let currentCategory = 'All';
let currentDiet = 'All';
let searchQuery = '';
let orderType = 'Dine In';

// ── Init ──────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    renderDishes();
    renderChefs();
    renderFavourites();
    updateCartUI();
});

// ── Section Switching ─────────────────────────────────────

function showSection(name) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('section-' + name).classList.add('active');
    document.getElementById('nav-' + name).classList.add('active');
    if (name === 'favourites') renderFavourites();
    if (name === 'orders') renderOrders();
}

// ── Dish Rendering ────────────────────────────────────────

function getFilteredDishes() {
    return DISHES.filter(d => {
        const matchCat = currentCategory === 'All' || d.category === currentCategory;
        const matchDiet = currentDiet === 'All' || d.dietary === currentDiet;
        const matchSearch = !searchQuery || d.name.toLowerCase().includes(searchQuery) ||
            d.desc.toLowerCase().includes(searchQuery) || d.chef.toLowerCase().includes(searchQuery);
        return matchCat && matchDiet && matchSearch;
    });
}

function renderDishes() {
    const grid = document.getElementById('dish-grid');
    const filtered = getFilteredDishes();
    if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
      <div style="font-size:3rem;">🔍</div>
      <h3>No dishes found</h3>
      <p>Try a different search or category.</p>
    </div>`;
        return;
    }
    grid.innerHTML = filtered.map(d => dishCardHTML(d)).join('');
}

function dishCardHTML(d) {
    const cartItem = cart.find(c => c.id === d.id);
    const qty = cartItem ? cartItem.qty : 0;
    const isFav = favourites.includes(d.id);

    const badgeClass = d.dietary === 'Veg' ? 'badge-veg' : d.dietary === 'Vegan' ? 'badge-vegan' : 'badge-nonveg';
    const badgeLabel = d.dietary;

    const ctrlHTML = qty > 0
        ? `<div class="qty-control">
        <button class="qty-btn" onclick="updateQty(${d.id}, -1)">−</button>
        <span class="qty-display">${qty}</span>
        <button class="qty-btn" onclick="updateQty(${d.id}, 1)">+</button>
       </div>`
        : `<button class="add-btn" onclick="addToCart(${d.id})">+ Add</button>`;

    return `
  <div class="dish-card" id="dish-${d.id}">
    <div class="dish-img-wrap">
      <span>${d.emoji}</span>
      <span class="dish-badge ${badgeClass}">${badgeLabel}</span>
      <button class="fav-btn" onclick="toggleFav(${d.id})" title="Favourite">${isFav ? '❤️' : '🤍'}</button>
      ${d.discount ? `<span class="discount-tag">${d.discount}</span>` : ''}
    </div>
    <div class="dish-body">
      <div class="dish-chef">👨‍🍳 ${d.chef} &nbsp;
        <span class="dish-rating">⭐ ${d.rating}</span>
      </div>
      <div class="dish-name">${d.name}</div>
      <div class="dish-desc">${d.desc}</div>
      <div class="dish-footer">
        <div class="dish-price">
          $${d.price.toFixed(2)}
          ${d.originalPrice ? `<small>$${d.originalPrice.toFixed(2)}</small>` : ''}
        </div>
        ${ctrlHTML}
      </div>
    </div>
  </div>`;
}

// ── Cart Operations ───────────────────────────────────────

function addToCart(id) {
    const dish = DISHES.find(d => d.id === id);
    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ id, name: dish.name, price: dish.price, emoji: dish.emoji, qty: 1 });
    }
    updateCartUI();
    renderDishes();
    showToast(`🛒 ${dish.name} added to cart!`, 'success');
}

function updateQty(id, delta) {
    const idx = cart.findIndex(c => c.id === id);
    if (idx === -1) return;
    cart[idx].qty += delta;
    if (cart[idx].qty <= 0) cart.splice(idx, 1);
    updateCartUI();
    renderDishes();
    if (document.getElementById('cart-sidebar').classList.contains('open')) renderCartItems();
}

function updateCartUI() {
    const total = cart.reduce((s, c) => s + c.qty, 0);
    document.getElementById('cart-count').textContent = total;
    document.getElementById('order-badge').textContent = orders.length;

    // Update cart UI if sidebar is open
    if (document.getElementById('cart-sidebar').classList.contains('open')) {
        renderCartItems();
    }
}

function renderCartItems() {
    const container = document.getElementById('cart-items');
    const footer = document.getElementById('cart-footer');
    const empty = document.getElementById('cart-empty');

    if (cart.length === 0) {
        container.innerHTML = `<div class="cart-empty">
      <div style="font-size:3rem;">🍽️</div>
      <p>Your cart is empty.<br/>Add some delicious dishes!</p>
    </div>`;
        footer.style.display = 'none';
        return;
    }

    footer.style.display = 'block';

    container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
      </div>
      <div class="cart-item-qty">
        <button class="cart-qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
        <span class="cart-qty-val">${item.qty}</span>
        <button class="cart-qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
      </div>
    </div>
  `).join('');

    const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
    const tax = subtotal * 0.05;
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${(subtotal + tax).toFixed(2)}`;
}

// ── Cart Sidebar Toggle ───────────────────────────────────

function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
    if (sidebar.classList.contains('open')) renderCartItems();
}

// ── Order Type ────────────────────────────────────────────

function setOrderType(btn, type) {
    document.querySelectorAll('.otype').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    orderType = type;
}

// ── Payment Method ────────────────────────────────────────

function selectPay(btn) {
    document.querySelectorAll('.pay-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

// ── Place Order ───────────────────────────────────────────

function placeOrder() {
    if (cart.length === 0) return;
    const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
    const tax = subtotal * 0.05;
    const orderId = '#' + Math.floor(10000 + Math.random() * 90000);
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    orders.unshift({
        id: orderId,
        items: [...cart],
        total: (subtotal + tax).toFixed(2),
        type: orderType,
        status: 'Pending',
        time: timeStr
    });

    cart = [];
    toggleCart();
    updateCartUI();
    renderDishes();

    const btn = document.getElementById('place-order-btn');
    btn.textContent = '✅ Order Placed!';
    btn.style.background = 'linear-gradient(135deg, #1d4ed8, #3b82f6)';
    setTimeout(() => {
        btn.textContent = '✅ Place Order';
        btn.style.background = '';
    }, 2000);

    showToast(`🎉 Order ${orderId} placed successfully!`, 'success');

    // Simulate status change
    setTimeout(() => {
        const order = orders.find(o => o.id === orderId);
        if (order) {
            order.status = 'Cooking';
            showToast(`👨‍🍳 Your order is being cooked!`, '');
        }
    }, 5000);
    setTimeout(() => {
        const order = orders.find(o => o.id === orderId);
        if (order) {
            order.status = 'Completed';
        }
    }, 15000);
}

// ── Filtering ─────────────────────────────────────────────

function filterCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.cat === cat);
    });
    renderDishes();
}

function filterDiet(diet) {
    currentDiet = diet;
    document.querySelectorAll('.diet-chip').forEach(c => {
        c.classList.toggle('active', c.dataset.diet === diet);
    });
    renderDishes();
}

function filterDishes() {
    searchQuery = document.getElementById('search-input').value.toLowerCase();
    renderDishes();
}

function toggleFilters() {
    showToast('🔧 Advanced filters coming soon!', '');
}

// ── Favourites ────────────────────────────────────────────

function toggleFav(id) {
    const idx = favourites.indexOf(id);
    if (idx === -1) {
        favourites.push(id);
        showToast('❤️ Added to favourites!', 'success');
    } else {
        favourites.splice(idx, 1);
        showToast('💔 Removed from favourites', '');
    }
    renderDishes();
    renderFavourites();
}

function renderFavourites() {
    const grid = document.getElementById('fav-grid');
    const empty = document.getElementById('fav-empty');
    if (!grid) return;

    const favDishes = DISHES.filter(d => favourites.includes(d.id));
    if (favDishes.length === 0) {
        grid.innerHTML = `<div class="empty-state">
      <div style="font-size:4rem;">❤️</div>
      <h3>No favourites yet</h3>
      <p>Tap the heart on any dish to save it here.</p>
      <button class="btn-primary" onclick="showSection('menu')">Browse Menu</button>
    </div>`;
        return;
    }
    grid.innerHTML = favDishes.map(d => dishCardHTML(d)).join('');
}

// ── Orders ────────────────────────────────────────────────

function renderOrders() {
    const list = document.getElementById('orders-list');
    if (orders.length === 0) {
        list.innerHTML = `<div class="empty-state">
      <div style="font-size:4rem;">📦</div>
      <h3>No orders yet</h3>
      <p>Start ordering delicious meals from our chefs!</p>
      <button class="btn-primary" onclick="showSection('menu')">Browse Menu</button>
    </div>`;
        return;
    }
    list.innerHTML = orders.map(o => {
        const statusClass = o.status === 'Completed' ? 'status-completed'
            : o.status === 'Cooking' ? 'status-cooking' : 'status-pending';
        const statusEmoji = o.status === 'Completed' ? '✅' : o.status === 'Cooking' ? '🍳' : '⏳';
        const itemNames = o.items.map(i => `${i.emoji} ${i.name} ×${i.qty}`).join(', ');
        return `
      <div class="order-card">
        <div class="order-info">
          <h4>${o.id} — ${o.type}</h4>
          <p>${itemNames}</p>
          <p style="margin-top:4px;color:#9ca3af;font-size:0.78rem;">🕐 ${o.time}</p>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;">
          <span class="order-status ${statusClass}">${statusEmoji} ${o.status}</span>
          <span class="order-total">$${o.total}</span>
        </div>
      </div>
    `;
    }).join('');
}

// ── Chefs ─────────────────────────────────────────────────

function renderChefs() {
    const grid = document.getElementById('chefs-grid');
    grid.innerHTML = CHEFS.map((c, i) => `
    <div class="chef-card" style="animation-delay:${i * 0.1}s">
      <div class="chef-emoji">${c.emoji}</div>
      <div class="chef-name">${c.name}</div>
      <div class="chef-specialty">${c.specialty}</div>
      <div class="chef-rating">⭐ ${c.rating} Rating</div>
      <div class="chef-dishes">${c.dishes} dishes · ${c.orders}+ orders</div>
    </div>
  `).join('');
}

// ── Toast ─────────────────────────────────────────────────

function showToast(msg, type) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.className = 'toast show' + (type ? ' ' + type : '');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}
