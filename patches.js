// ── PATCHES: Prices in ₹ + Correct Image Fixes + New dishes ─────
window.addEventListener('load', () => {

    const BASE = 'https://images.unsplash.com/';
    const S = '?auto=format&fit=crop&w=400&h=280&q=80';

    // ── Verified Unsplash IDs matched to each dish type ─────────────
    const imageMap = {
        1: 'photo-1525351484163-7529414344d8', // Omelette wrap
        2: 'photo-1541519227354-08fa5d50c820', // Avocado toast
        3: 'photo-1484723091739-30a097e8f929', // French toast
        4: 'photo-1586190848861-99aa4a171e90', // Shakshuka (eggs in sauce)
        5: 'photo-1601050690597-df0568f70950', // Samosa
        6: 'photo-1512058564366-18510be2db19', // Vada Pav (bread roll)
        7: 'photo-1599487488170-d11ec9c172f0', // Pakora (fried fritters)
        8: 'photo-1559847844-5315695dadae', // Aloo Tikki Chaat
        9: 'photo-1626132647523-68c12db9e1a3', // Pav Bhaji
        10: 'photo-1512621776951-a57141f2eefd', // Bhel Puri (salad style)
        11: 'photo-1547592180-85f173990554', // Tomato Soup
        12: 'photo-1569718212165-3a8278d5f624', // Chicken Noodle Broth
        13: 'photo-1473093295043-cdd812d0e601', // Truffle Mushroom Pasta
        14: 'photo-1598866594230-a7c12756260f', // Arrabbiata (red pasta)
        15: 'photo-1588166524941-3bf61a9c41db', // Butter Chicken (orange curry)
        16: 'photo-1631452180519-c014fe946bc7', // Paneer Tikka Masala (NOT biryani)
        17: 'photo-1467003909585-2f8a72700288', // Grilled Salmon
        18: 'photo-1563379091339-03b21ab4a4f8', // Chicken Biryani (rice dish)
        19: 'photo-1585937421612-70a008356fbe', // Dal Makhani (dark lentils)
        20: 'photo-1568901346375-23c9450c58cd', // Beef Burger
        21: 'photo-1550950158-d0d960ddf409', // Veg Burger
        22: 'photo-1561336313-0bd5e0b27ec8', // Masala Chai (tea)
        23: 'photo-1509042239860-f550ce710b93', // Filter Coffee
        24: 'photo-1553979459-d2229ba7433b', // Rose Milk (pink drink)
        25: 'photo-1520218625930-5fc2b2ade6c8', // Mango Lassi (yellow drink)
        26: 'photo-1550583724-b2692b85b150', // Badam Milk
        27: 'photo-1621506289937-a8e4df240d0b', // Nimbu Pani (lemon water)
        28: 'photo-1560508180-03f285f67ded', // Aam Panna (green drink)
        29: 'photo-1570197788417-0e82375c9371', // Jaljeera Punch
        30: 'photo-1553361371-9b22f78e8b1d', // Coconut Water
        31: 'photo-1615485290382-441e4d049cb5', // Sugarcane Juice
        32: 'photo-1587049352846-4a222e784d38', // Thandai (creamy milk)
    };

    DISHES.forEach(d => {
        if (imageMap[d.id]) d.imageUrl = BASE + imageMap[d.id] + S;
    });

    // ── Prices in Indian Rupees ──────────────────────────────────────
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

    // ── New juice & curd dishes ─────────────────────────────────────
    const newDishes = [
        { id: 33, name: 'Sweet Lime Juice', chef: 'Marco L.', chefId: 2, price: 59, originalPrice: null, category: 'Cold Drinks', dietary: 'Vegan', rating: 4.7, emoji: '🍊', discount: null, desc: 'Freshly squeezed mosambi (sweet lime) juice. Rich in Vitamin C, served chilled.', imageUrl: BASE + 'photo-1622720704786-b2d78bc4af75' + S },
        { id: 34, name: 'Watermelon Juice', chef: 'Lena K.', chefId: 3, price: 49, originalPrice: null, category: 'Cold Drinks', dietary: 'Vegan', rating: 4.8, emoji: '🍉', discount: null, desc: 'Fresh watermelon blended smooth and served over crushed ice.', imageUrl: BASE + 'photo-1568702846914-96b305d2aaeb' + S },
        { id: 35, name: 'Mixed Fruit Juice', chef: 'Marco L.', chefId: 2, price: 89, originalPrice: 109, category: 'Cold Drinks', dietary: 'Vegan', rating: 4.6, emoji: '🍹', discount: '18% OFF', desc: 'Seasonal fruits freshly blended — mango, pineapple, pomegranate & more.', imageUrl: BASE + 'photo-1613478223719-2ab802602423' + S },
        { id: 36, name: 'Fresh Pineapple Juice', chef: 'Priya S.', chefId: 1, price: 59, originalPrice: null, category: 'Cold Drinks', dietary: 'Vegan', rating: 4.5, emoji: '🍍', discount: null, desc: 'Freshly pressed pineapple juice with a hint of black salt and chaat masala.', imageUrl: BASE + 'photo-1490885578174-acda8905c2c6' + S },
        { id: 37, name: 'Fresh Dahi (Curd)', chef: 'Priya S.', chefId: 1, price: 39, originalPrice: null, category: 'Beverages', dietary: 'Veg', rating: 4.7, emoji: '🥛', discount: null, desc: 'Thick, fresh home-set curd made from full-fat milk. Plain or lightly sweetened.', imageUrl: BASE + 'photo-1488477181946-6428a0291777' + S },
        { id: 38, name: 'Shrikhand', chef: 'Priya S.', chefId: 1, price: 99, originalPrice: null, category: 'Beverages', dietary: 'Veg', rating: 4.9, emoji: '🍮', discount: null, desc: 'Strained hung curd sweetened with sugar, flavoured with saffron & cardamom.', imageUrl: BASE + 'photo-1563805042-7684c019e1cb' + S },
        { id: 39, name: 'Mishti Doi', chef: 'Lena K.', chefId: 3, price: 79, originalPrice: null, category: 'Beverages', dietary: 'Veg', rating: 4.8, emoji: '🫙', discount: null, desc: 'Bengali sweet yoghurt set with caramelised sugar. Rich and creamy.', imageUrl: BASE + 'photo-1488477181946-6428a0291777' + S },
    ];
    newDishes.forEach(nd => { if (!DISHES.find(d => d.id === nd.id)) DISHES.push(nd); });

    // ── Re-render with updated data ─────────────────────────────────
    if (typeof renderDishes === 'function') renderDishes();

    // ── Seed test account ───────────────────────────────────────────
    const ACCT_KEY = 'ck_accounts';
    if (!localStorage.getItem(ACCT_KEY)) {
        localStorage.setItem(ACCT_KEY, JSON.stringify([
            { email: 'test@cloudkitchen.com', name: 'Test User', password: 'pass1234', avatar: 'TU' }
        ]));
    }
});
