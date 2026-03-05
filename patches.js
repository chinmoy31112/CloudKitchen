// ── PATCHES: Indian Rupee prices + new dishes + image fix ──────
window.addEventListener('load', () => {

    // 1. Fix Truffle Mushroom Pasta image
    const pasta = DISHES.find(d => d.id === 13);
    if (pasta) pasta.imageUrl = 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=400&h=280&q=80';

    // 2. Update all prices to Indian Rupees
    const prices = {
        1: 149, 2: 199, 3: 149, 4: 229, 5: 49, 6: 39, 7: 59, 8: 89, 9: 99, 10: 59,
        11: 129, 12: 149, 13: 299, 14: 249, 15: 299, 16: 259, 17: 349, 18: 269, 19: 199,
        20: 249, 21: 189, 22: 29, 23: 39, 24: 49, 25: 59, 26: 69, 27: 29, 28: 39, 29: 29,
        30: 49, 31: 39, 32: 69
    };
    const origPrices = { 1: 199, 7: 79, 12: 189, 15: 349, 21: 229 };
    const fixedDiscounts = { 1: '25% OFF', 7: '25% OFF', 12: '21% OFF', 15: '14% OFF', 21: '17% OFF' };
    DISHES.forEach(d => {
        if (prices[d.id] !== undefined) d.price = prices[d.id];
        d.originalPrice = origPrices[d.id] || null;
        d.discount = fixedDiscounts[d.id] || null;
    });

    // 3. Add new juice & curd dishes
    const U = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&h=280&q=80`;
    const newDishes = [
        { id: 33, name: 'Sweet Lime Juice', chef: 'Marco L.', chefId: 2, price: 59, originalPrice: null, category: 'Cold Drinks', dietary: 'Vegan', rating: 4.7, emoji: '🍊', discount: null, desc: 'Freshly squeezed mosambi juice. Packed with Vitamin C, served chilled.', imageUrl: U('photo-1622720704786-b2d78bc4af75') },
        { id: 34, name: 'Watermelon Juice', chef: 'Lena K.', chefId: 3, price: 49, originalPrice: null, category: 'Cold Drinks', dietary: 'Vegan', rating: 4.8, emoji: '🍉', discount: null, desc: 'Fresh watermelon blended smooth and served over crushed ice. Naturally sweet.', imageUrl: U('photo-1568702846914-96b305d2aaeb') },
        { id: 35, name: 'Mixed Fruit Juice', chef: 'Marco L.', chefId: 2, price: 89, originalPrice: 109, category: 'Cold Drinks', dietary: 'Vegan', rating: 4.6, emoji: '🍹', discount: '18% OFF', desc: 'Seasonal fruits freshly blended — mango, pineapple, pomegranate & more.', imageUrl: U('photo-1613478223719-2ab802602423') },
        { id: 36, name: 'Fresh Pineapple Juice', chef: 'Priya S.', chefId: 1, price: 59, originalPrice: null, category: 'Cold Drinks', dietary: 'Vegan', rating: 4.5, emoji: '🍍', discount: null, desc: 'Freshly pressed pineapple juice with a hint of black salt and chaat masala.', imageUrl: U('photo-1490885578174-acda8905c2c6') },
        { id: 37, name: 'Fresh Dahi (Curd)', chef: 'Priya S.', chefId: 1, price: 39, originalPrice: null, category: 'Beverages', dietary: 'Veg', rating: 4.7, emoji: '🥛', discount: null, desc: 'Thick, fresh home-set curd made from full-fat milk. Plain or lightly sweetened.', imageUrl: U('photo-1488477181946-6428a0291777') },
        { id: 38, name: 'Shrikhand', chef: 'Priya S.', chefId: 1, price: 99, originalPrice: null, category: 'Beverages', dietary: 'Veg', rating: 4.9, emoji: '🍮', discount: null, desc: 'Strained hung curd sweetened with sugar, flavoured with saffron & cardamom.', imageUrl: U('photo-1563805042-7684c019e1cb') },
        { id: 39, name: 'Mishti Doi', chef: 'Lena K.', chefId: 3, price: 79, originalPrice: null, category: 'Beverages', dietary: 'Veg', rating: 4.8, emoji: '🫙', discount: null, desc: 'Bengali sweet yoghurt set with caramelised sugar. Rich, creamy and divine.', imageUrl: U('photo-1488477181946-6428a0291777') },
    ];
    // Only push if not already added (prevent duplicates on hot reload)
    newDishes.forEach(nd => { if (!DISHES.find(d => d.id === nd.id)) DISHES.push(nd); });

    // 4. Re-render everything with updated data
    if (typeof renderDishes === 'function') renderDishes();

    // 5. Update category count labels
    const allCount = document.querySelector('[data-cat="All"] small');
    if (allCount) allCount.textContent = DISHES.length;
    const coldCount = document.querySelector('[data-cat="Cold Drinks"] small');
    if (coldCount) coldCount.textContent = DISHES.filter(d => d.category === 'Cold Drinks').length;
    const bevCount = document.querySelector('[data-cat="Beverages"] small');
    if (bevCount) bevCount.textContent = DISHES.filter(d => d.category === 'Beverages').length;

    // 6. Seed a test account if none exist
    const ACCT_KEY = 'ck_accounts';
    if (!localStorage.getItem(ACCT_KEY)) {
        localStorage.setItem(ACCT_KEY, JSON.stringify([
            { email: 'test@cloudkitchen.com', name: 'Test User', password: 'pass1234', avatar: 'TU' }
        ]));
    }
});
