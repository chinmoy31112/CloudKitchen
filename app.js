// ============================================================
//  CLOUD KITCHEN — APP.JS  (v2 — Enhanced)
// ============================================================

// ── IMAGE HELPER ─────────────────────────────────────────────
const U = (id, w = 400, h = 280) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

// ── DISHES DATA (36 dishes with real Unsplash images) ─────────
const DISHES = [
    // BREAKFAST
    { id: 1, name: 'Masala Omelette Wrap', chef: 'Priya S.', chefId: 1, price: 8.99, originalPrice: 11.99, category: 'Breakfast', dietary: 'Veg', rating: 4.8, emoji: '🌯', discount: '25% OFF', desc: 'Fluffy eggs with spiced veggies wrapped in a soft tortilla.', imageUrl: U('photo-1525351484163-7529414344d8') },
    { id: 2, name: 'Avocado Toast Stack', chef: 'Marco L.', chefId: 2, price: 9.99, originalPrice: null, category: 'Breakfast', dietary: 'Vegan', rating: 4.6, emoji: '🥑', discount: null, desc: 'Toasted sourdough with smashed avocado, cherry tomatoes & microgreens.', imageUrl: U('photo-1541519227354-08fa5d50c820') },
    { id: 3, name: 'French Toast with Berries', chef: 'Lena K.', chefId: 3, price: 7.99, originalPrice: null, category: 'Breakfast', dietary: 'Veg', rating: 4.7, emoji: '🍞', discount: null, desc: 'Golden brioche dipped in vanilla custard, topped with fresh berries.', imageUrl: U('photo-1484723091739-30a097e8f929') },
    { id: 4, name: 'Chicken Shakshuka', chef: 'Priya S.', chefId: 1, price: 11.49, originalPrice: null, category: 'Breakfast', dietary: 'Non-Veg', rating: 4.9, emoji: '🍳', discount: null, desc: 'Poached eggs in a rich spiced tomato sauce with chicken chunks.', imageUrl: U('photo-1586190848861-99aa4a171e90') },

    // SNACKS (Indian)
    { id: 5, name: 'Crispy Samosa', chef: 'Priya S.', chefId: 1, price: 3.99, originalPrice: null, category: 'Snacks', dietary: 'Veg', rating: 4.8, emoji: '🥟', discount: null, desc: 'Golden crispy pastry filled with spiced potatoes & green peas. Served with mint chutney.', imageUrl: U('photo-1601050690597-df0568f70950') },
    { id: 6, name: 'Vada Pav', chef: 'Priya S.', chefId: 1, price: 2.99, originalPrice: null, category: 'Snacks', dietary: 'Veg', rating: 4.7, emoji: '🫔', discount: null, desc: "Mumbai's iconic street food — spiced potato fritter in a soft bun with garlic chutney.", imageUrl: U('photo-1606491956689-2ea866880c84') },
    { id: 7, name: 'Masala Pakora', chef: 'Lena K.', chefId: 3, price: 3.49, originalPrice: 4.49, category: 'Snacks', dietary: 'Veg', rating: 4.6, emoji: '🫘', discount: '22% OFF', desc: 'Crispy gram flour fritters loaded with onion, spinach & fresh coriander.', imageUrl: U('photo-1674143683189-38c9e3e2f02a') },
    { id: 8, name: 'Aloo Tikki Chaat', chef: 'Priya S.', chefId: 1, price: 4.99, originalPrice: null, category: 'Snacks', dietary: 'Veg', rating: 4.9, emoji: '🫙', discount: null, desc: 'Crispy spiced potato patties topped with chutneys, yoghurt & sev.', imageUrl: U('photo-1668236543090-82eba5ee5976') },
    { id: 9, name: 'Pav Bhaji', chef: 'Marco L.', chefId: 2, price: 5.99, originalPrice: null, category: 'Snacks', dietary: 'Veg', rating: 4.8, emoji: '🍞', discount: null, desc: 'Thick mixed vegetable curry served with buttered toasted pav bun.', imageUrl: U('photo-1626132647523-68c12db9e1a3') },
    { id: 10, name: 'Bhel Puri', chef: 'Lena K.', chefId: 3, price: 3.49, originalPrice: null, category: 'Snacks', dietary: 'Vegan', rating: 4.5, emoji: '🥗', discount: null, desc: 'Puffed rice mixed with onion, tomato, tamarind chutney & spices.', imageUrl: U('photo-1565557623262-b51c2513a641') },

    // SOUPS
    { id: 11, name: 'Creamy Tomato Basil Soup', chef: 'Marco L.', chefId: 2, price: 6.99, originalPrice: null, category: 'Soups', dietary: 'Vegan', rating: 4.5, emoji: '🍅', discount: null, desc: 'Silky roasted tomato soup blended with fresh basil and coconut cream.', imageUrl: U('photo-1547592180-85f173990554') },
    { id: 12, name: 'Chicken Noodle Broth', chef: 'Lena K.', chefId: 3, price: 8.49, originalPrice: 10.99, category: 'Soups', dietary: 'Non-Veg', rating: 4.7, emoji: '🍜', discount: '20% OFF', desc: 'Hearty classic made with tender chicken, thin noodles & garden herbs.', imageUrl: U('photo-1569718212165-3a8278d5f624') },

    // PASTA
    { id: 13, name: 'Truffle Mushroom Pasta', chef: 'Marco L.', chefId: 2, price: 14.99, originalPrice: null, category: 'Pasta', dietary: 'Veg', rating: 4.9, emoji: '🍝', discount: null, desc: 'Tagliatelle tossed in truffle cream sauce with wild mushrooms & parmesan.', imageUrl: U('photo-1551183053-bf91798d765e') },
    { id: 14, name: 'Spicy Arrabbiata', chef: 'Priya S.', chefId: 1, price: 12.49, originalPrice: null, category: 'Pasta', dietary: 'Vegan', rating: 4.6, emoji: '🌶️', discount: null, desc: 'Penne in a fiery garlic-chilli tomato sauce — pure southern Italian.', imageUrl: U('photo-1598866594230-a7c12756260f') },

    // MAIN COURSE
    { id: 15, name: 'Butter Chicken Curry', chef: 'Priya S.', chefId: 1, price: 13.99, originalPrice: 16.99, category: 'Main Course', dietary: 'Non-Veg', rating: 5.0, emoji: '🍛', discount: '15% OFF', desc: 'Tender chicken thighs slow-cooked in velvety butter tomato gravy.', imageUrl: U('photo-1588166524941-3bf61a9c41db') },
    { id: 16, name: 'Paneer Tikka Masala', chef: 'Lena K.', chefId: 3, price: 12.99, originalPrice: null, category: 'Main Course', dietary: 'Veg', rating: 4.8, emoji: '🧀', discount: null, desc: 'Tandoor-grilled cottage cheese in smoky cashew-based masala curry.', imageUrl: U('photo-1589302168068-964664d93dc0') },
    { id: 17, name: 'Grilled Salmon Bowl', chef: 'Marco L.', chefId: 2, price: 17.99, originalPrice: null, category: 'Main Course', dietary: 'Non-Veg', rating: 4.7, emoji: '🐟', discount: null, desc: 'Atlantic salmon with garlic butter over jasmine rice and stir-fried greens.', imageUrl: U('photo-1467003909585-2f8a72700288') },
    { id: 18, name: 'Chicken Biryani', chef: 'Lena K.', chefId: 3, price: 13.49, originalPrice: null, category: 'Main Course', dietary: 'Non-Veg', rating: 4.9, emoji: '🍚', discount: null, desc: 'Fragrant long-grain basmati rice slow-cooked with marinated chicken & whole spices.', imageUrl: U('photo-1563379091339-03b21ab4a4f8') },
    { id: 19, name: 'Dal Makhani', chef: 'Priya S.', chefId: 1, price: 9.99, originalPrice: null, category: 'Main Course', dietary: 'Veg', rating: 4.8, emoji: '🫛', discount: null, desc: 'Overnight slow-cooked black lentils in rich butter-cream tomato gravy.', imageUrl: U('photo-1585937421612-70a008356fbe') },

    // BURGERS
    { id: 20, name: 'Classic Beef Burger', chef: 'Lena K.', chefId: 3, price: 11.99, originalPrice: null, category: 'Burgers', dietary: 'Non-Veg', rating: 4.6, emoji: '🍔', discount: null, desc: '200g beef patty with American cheddar, pickles, lettuce & house sauce.', imageUrl: U('photo-1568901346375-23c9450c58cd') },
    { id: 21, name: 'Crispy Veg Burger', chef: 'Priya S.', chefId: 1, price: 9.49, originalPrice: 11.49, category: 'Burgers', dietary: 'Veg', rating: 4.5, emoji: '🥦', discount: '17% OFF', desc: 'Crunchy chickpea patty with sriracha mayo, avocado & fresh slaw.', imageUrl: U('photo-1550950158-d0d960ddf409') },

    // BEVERAGES
    { id: 22, name: 'Masala Chai', chef: 'Priya S.', chefId: 1, price: 1.99, originalPrice: null, category: 'Beverages', dietary: 'Veg', rating: 4.9, emoji: '☕', discount: null, desc: 'Freshly brewed strong tea with ginger, cardamom, cinnamon & whole spices.', imageUrl: U('photo-1561336313-0bd5e0b27ec8') },
    { id: 23, name: 'Filter Coffee', chef: 'Marco L.', chefId: 2, price: 2.49, originalPrice: null, category: 'Beverages', dietary: 'Veg', rating: 4.8, emoji: '☕', discount: null, desc: 'South Indian decoction coffee with frothy milk, served hot in a traditional tumbler.', imageUrl: U('photo-1509042239860-f550ce710b93') },
    { id: 24, name: 'Rose Milk', chef: 'Lena K.', chefId: 3, price: 2.99, originalPrice: null, category: 'Beverages', dietary: 'Veg', rating: 4.6, emoji: '🌹', discount: null, desc: 'Chilled whole milk blended with rose syrup & basil seeds. Refreshing & aromatic.', imageUrl: U('photo-1553979459-d2229ba7433b') },
    { id: 25, name: 'Sweet Mango Lassi', chef: 'Priya S.', chefId: 1, price: 2.99, originalPrice: null, category: 'Beverages', dietary: 'Veg', rating: 4.9, emoji: '🥭', discount: null, desc: 'Creamy Alphonso mango blended with chilled yoghurt & a hint of cardamom.', imageUrl: U('photo-1571091718767-18b5b1457add') },
    { id: 26, name: 'Badam Milk', chef: 'Priya S.', chefId: 1, price: 3.49, originalPrice: null, category: 'Beverages', dietary: 'Veg', rating: 4.7, emoji: '🥛', discount: null, desc: 'Rich warm milk infused with almond paste, saffron & cardamom.', imageUrl: U('photo-1550583724-b2692b85b150') },

    // COLD DRINKS
    { id: 27, name: 'Nimbu Pani', chef: 'Marco L.', chefId: 2, price: 1.99, originalPrice: null, category: 'Cold Drinks', dietary: 'Vegan', rating: 4.8, emoji: '🍋', discount: null, desc: 'Fresh squeezed lemon water with black salt, cumin & mint. Indian salty lemonade.', imageUrl: U('photo-1621506289937-a8e4df240d0b') },
    { id: 28, name: 'Aam Panna', chef: 'Priya S.', chefId: 1, price: 2.49, originalPrice: null, category: 'Cold Drinks', dietary: 'Vegan', rating: 4.7, emoji: '🥭', discount: null, desc: 'Raw green mango drink with roasted cumin, black salt & mint. A summer classic.', imageUrl: U('photo-1560508180-03f285f67ded') },
    { id: 29, name: 'Jaljeera Punch', chef: 'Lena K.', chefId: 3, price: 1.99, originalPrice: null, category: 'Cold Drinks', dietary: 'Vegan', rating: 4.6, emoji: '🫙', discount: null, desc: 'Tangy cumin water punch with mint, ginger, tamarind & black salt.', imageUrl: U('photo-1570197788417-0e82375c9371') },
    { id: 30, name: 'Coconut Water', chef: 'Marco L.', chefId: 2, price: 2.99, originalPrice: null, category: 'Cold Drinks', dietary: 'Vegan', rating: 4.9, emoji: '🥥', discount: null, desc: 'Fresh tender coconut water served straight from the coconut with ice.', imageUrl: U('photo-1553361371-9b22f78e8b1d') },
    { id: 31, name: 'Sugarcane Juice', chef: 'Lena K.', chefId: 3, price: 2.49, originalPrice: null, category: 'Cold Drinks', dietary: 'Vegan', rating: 4.8, emoji: '🌿', discount: null, desc: 'Freshly pressed sugarcane juice with lemon, ginger & black salt.', imageUrl: U('photo-1615485290382-441e4d049cb5') },
    { id: 32, name: 'Thandai', chef: 'Priya S.', chefId: 1, price: 3.49, originalPrice: null, category: 'Cold Drinks', dietary: 'Veg', rating: 4.8, emoji: '🍶', discount: null, desc: 'Chilled milk blended with almonds, fennel, melon seeds, saffron & rosewater.', imageUrl: U('photo-1587049352846-4a222e784d38') },
];

// ── CHEFS ────────────────────────────────────────────────────
const CHEFS = [
    { id: 1, name: 'Priya Sharma', specialty: 'Indian & Fusion', emoji: '👩‍🍳', rating: 4.9, dishes: 14, orders: 320, lat: 0.002, lng: 0.001 },
    { id: 2, name: 'Marco Lombardi', specialty: 'Italian & Mediterranean', emoji: '👨‍🍳', rating: 4.8, dishes: 9, orders: 280, lat: -0.001, lng: 0.003 },
    { id: 3, name: 'Lena Kim', specialty: 'Continental & Korean', emoji: '🧑‍🍳', rating: 4.7, dishes: 9, orders: 195, lat: 0.003, lng: -0.002 },
];

// ── AI RECIPES DATABASE (30+ recipes) ─────────────────────────
const AI_RECIPES = [
    {
        name: 'Masala Chai', emoji: '☕', time: '10 min', difficulty: 'Easy', calories: 85, dietary: 'Veg', color: '#f97316',
        ingredients: ['tea leaves', 'milk', 'ginger', 'cardamom', 'sugar', 'water', 'cinnamon'],
        steps: ['Boil water with ginger & cardamom', 'Add tea leaves and cinnamon', 'Add milk and sugar', 'Simmer 3 minutes', 'Strain and serve hot']
    },
    {
        name: 'Aloo Sabzi', emoji: '🥔', time: '20 min', difficulty: 'Easy', calories: 180, dietary: 'Veg', color: '#eab308',
        ingredients: ['potato', 'onion', 'tomato', 'garam masala', 'turmeric', 'cumin', 'salt', 'oil'],
        steps: ['Heat oil, add cumin seeds', 'Add onion cook golden', 'Add tomato & masala', 'Add boiled cubed potato', 'Cook 5 min, garnish with coriander']
    },
    {
        name: 'Dal Tadka', emoji: '🫛', time: '25 min', difficulty: 'Easy', calories: 210, dietary: 'Veg', color: '#f59e0b',
        ingredients: ['dal', 'onion', 'tomato', 'garlic', 'ginger', 'turmeric', 'cumin', 'ghee', 'coriander'],
        steps: ['Boil dal with turmeric until soft', 'Prepare tadka: heat ghee, add cumin, garlic', 'Add onion-tomato paste, cook well', 'Pour tadka over dal', 'Garnish with coriander']
    },
    {
        name: 'Chicken Curry', emoji: '🍗', time: '35 min', difficulty: 'Medium', calories: 340, dietary: 'Non-Veg', color: '#ef4444',
        ingredients: ['chicken', 'onion', 'tomato', 'ginger', 'garlic', 'garam masala', 'turmeric', 'oil', 'curd', 'coriander'],
        steps: ['Marinate chicken in curd & spices', 'Fry onions golden in oil', 'Add ginger-garlic paste, cook 2 min', 'Add tomatoes, cook till oil separates', 'Add chicken, cook covered 20 min']
    },
    {
        name: 'Vegetable Fried Rice', emoji: '🍚', time: '20 min', difficulty: 'Easy', calories: 280, dietary: 'Veg', color: '#22c55e',
        ingredients: ['rice', 'carrot', 'peas', 'corn', 'soy sauce', 'garlic', 'ginger', 'eggs', 'oil', 'spring onion'],
        steps: ['Cook rice and cool completely', 'Scramble eggs in wok, set aside', 'Stir-fry garlic, add vegetables', 'Add rice, toss on high heat', 'Add soy sauce, eggs, spring onion']
    },
    {
        name: 'Paneer Bhurji', emoji: '🧀', time: '15 min', difficulty: 'Easy', calories: 220, dietary: 'Veg', color: '#f97316',
        ingredients: ['paneer', 'onion', 'tomato', 'green chilli', 'turmeric', 'cumin', 'coriander', 'oil', 'salt'],
        steps: ['Heat oil, crackle cumin', 'Add onion, green chilli, sauté', 'Add tomato, cook till mushy', 'Crumble paneer, add spices', 'Mix well, garnish with coriander']
    },
    {
        name: 'Egg Fried Omelette', emoji: '🍳', time: '10 min', difficulty: 'Easy', calories: 160, dietary: 'Non-Veg', color: '#eab308',
        ingredients: ['eggs', 'onion', 'tomato', 'green chilli', 'coriander', 'salt', 'turmeric', 'oil'],
        steps: ['Beat eggs with salt and turmeric', 'Add chopped onion, chilli, tomato, coriander', 'Heat oil in pan', 'Pour egg mixture, cook 2-3 min', 'Fold over and serve hot']
    },
    {
        name: 'Palak Paneer', emoji: '🥬', time: '30 min', difficulty: 'Medium', calories: 240, dietary: 'Veg', color: '#16a34a',
        ingredients: ['paneer', 'spinach', 'onion', 'tomato', 'garlic', 'ginger', 'cream', 'garam masala', 'oil'],
        steps: ['Blanch spinach, blend to purée', 'Fry paneer till golden, keep aside', 'Cook onion-tomato masala in oil', 'Add spinach purée, simmer 5 min', 'Add paneer and cream, cook 3 min']
    },
    {
        name: 'Rajma', emoji: '🫘', time: '40 min', difficulty: 'Medium', calories: 260, dietary: 'Veg', color: '#b91c1c',
        ingredients: ['kidney beans', 'onion', 'tomato', 'ginger', 'garlic', 'garam masala', 'coriander', 'oil', 'turmeric'],
        steps: ['Soak & pressure cook rajma until soft', 'Fry onions golden in oil', 'Add ginger-garlic paste, cook 3 min', 'Add tomatoes & all spices, cook well', 'Add rajma with water, simmer 15 min']
    },
    {
        name: 'Upma', emoji: '🍚', time: '20 min', difficulty: 'Easy', calories: 200, dietary: 'Veg', color: '#d97706',
        ingredients: ['semolina', 'onion', 'green chilli', 'ginger', 'mustard seeds', 'curry leaves', 'water', 'salt', 'oil', 'peanuts'],
        steps: ['Dry roast semolina till fragrant', 'Fry peanuts, mustard, curry leaves', 'Add onion, chilli, ginger – sauté', 'Add boiling water and salt', 'Add roasted semolina, stir till cooked']
    },
    {
        name: 'Poha', emoji: '🍽️', time: '15 min', difficulty: 'Easy', calories: 170, dietary: 'Veg', color: '#f59e0b',
        ingredients: ['flattened rice', 'onion', 'green chilli', 'turmeric', 'mustard seeds', 'curry leaves', 'potato', 'peanuts', 'lemon'],
        steps: ['Wash poha, keep moist and fluffy', 'Roast peanuts, set aside', 'Fry mustard, curry leaves, onion, potato', 'Add turmeric, green chilli', 'Add poha, peanuts, lemon juice, mix well']
    },
    {
        name: 'Butter Garlic Naan Pizza', emoji: '🍕', time: '25 min', difficulty: 'Easy', calories: 320, dietary: 'Veg', color: '#f97316',
        ingredients: ['naan', 'tomato', 'garlic', 'butter', 'cheese', 'onion', 'bell pepper', 'oregano'],
        steps: ['Spread garlic butter on naan', 'Add tomato sauce base', 'Top with onion, bell pepper', 'Add cheese generously', 'Bake at 200°C for 12 min']
    },
    {
        name: 'Chole Bhature', emoji: '🫙', time: '35 min', difficulty: 'Medium', calories: 420, dietary: 'Veg', color: '#d97706',
        ingredients: ['chickpeas', 'onion', 'tomato', 'ginger', 'garlic', 'chole masala', 'oil', 'flour', 'curd'],
        steps: ['Pressure cook soaked chickpeas', 'Make deeply caramelised masala base', 'Add chickpeas with water, simmer', 'Make soft dough with flour and curd', 'Deep fry bhatura till puffed & golden']
    },
    {
        name: 'Jeera Rice', emoji: '🍚', time: '20 min', difficulty: 'Easy', calories: 190, dietary: 'Vegan', color: '#22c55e',
        ingredients: ['rice', 'cumin', 'ghee', 'salt', 'water'],
        steps: ['Soak rice 20 min, drain', 'Heat ghee in pot, add cumin', 'When cumin crackles, add rice', 'Add 2x water and salt', 'Cook covered on low flame 15 min']
    },
    {
        name: 'Nimbu Pani', emoji: '🍋', time: '5 min', difficulty: 'Easy', calories: 40, dietary: 'Vegan', color: '#84cc16',
        ingredients: ['lemon', 'water', 'sugar', 'black salt', 'cumin', 'mint'],
        steps: ['Squeeze lemon into glass', 'Add water and sugar, stir', 'Add black salt and cumin powder', 'Add ice and mint leaves', 'Serve chilled immediately']
    },
    {
        name: 'Raita', emoji: '🥛', time: '5 min', difficulty: 'Easy', calories: 80, dietary: 'Veg', color: '#38bdf8',
        ingredients: ['curd', 'cucumber', 'onion', 'tomato', 'cumin', 'salt', 'coriander', 'mint'],
        steps: ['Whisk curd until smooth', 'Chop cucumber, onion, tomato finely', 'Mix vegetables into curd', 'Add roasted cumin & salt', 'Garnish with mint & coriander']
    },
    {
        name: 'Bread Upma', emoji: '🍞', time: '15 min', difficulty: 'Easy', calories: 210, dietary: 'Veg', color: '#f59e0b',
        ingredients: ['bread', 'onion', 'tomato', 'green chilli', 'mustard seeds', 'curry leaves', 'oil', 'turmeric', 'salt'],
        steps: ['Tear bread into small pieces', 'Fry mustard seeds, curry leaves', 'Add onion, chilli, tomato — cook', 'Add turmeric and salt', 'Add bread pieces, mix and toss 3 min']
    },
    {
        name: 'Chicken Pulao', emoji: '🍗', time: '40 min', difficulty: 'Medium', calories: 380, dietary: 'Non-Veg', color: '#78716c',
        ingredients: ['chicken', 'rice', 'onion', 'tomato', 'ginger', 'garlic', 'garam masala', 'bay leaf', 'cloves', 'cinnamon'],
        steps: ['Soak basmati rice', 'Fry whole spices in ghee', 'Add onion till golden, add chicken', 'Add tomato-yogurt masala, cook', 'Layer rice, add water, dum cook 20 min']
    },
    {
        name: 'Mango Lassi', emoji: '🥭', time: '5 min', difficulty: 'Easy', calories: 180, dietary: 'Veg', color: '#f97316',
        ingredients: ['mango', 'curd', 'milk', 'sugar', 'cardamom', 'ice'],
        steps: ['Peel and chop ripe mango', 'Blend mango with curd and milk', 'Add sugar and cardamom powder', 'Blend until completely smooth', 'Serve chilled with ice']
    },
    {
        name: 'Aloo Paratha', emoji: '🫓', time: '30 min', difficulty: 'Medium', calories: 320, dietary: 'Veg', color: '#d97706',
        ingredients: ['potato', 'wheat flour', 'salt', 'cumin', 'coriander', 'green chilli', 'butter', 'oil'],
        steps: ['Make soft wheat dough', 'Boil, mash potatoes with spices', 'Roll dough, stuff with potato mix', 'Seal edges, roll flat gently', 'Cook on tawa with butter till golden']
    },
    {
        name: 'Tomato Soup', emoji: '🍅', time: '20 min', difficulty: 'Easy', calories: 90, dietary: 'Vegan', color: '#ef4444',
        ingredients: ['tomato', 'onion', 'garlic', 'cream', 'butter', 'salt', 'sugar', 'basil'],
        steps: ['Roast tomatoes and onion in oven', 'Blend with garlic until smooth', 'Strain through sieve for silky texture', 'Heat with butter and cream', 'Season with salt, sugar and fresh basil']
    },
    {
        name: 'Vegetable Khichdi', emoji: '🍲', time: '25 min', difficulty: 'Easy', calories: 220, dietary: 'Veg', color: '#84cc16',
        ingredients: ['rice', 'dal', 'carrot', 'peas', 'potato', 'turmeric', 'cumin', 'ghee', 'salt', 'ginger'],
        steps: ['Rinse rice and dal together', 'Pressure cook with all vegetables & water', 'Prepare tadka with ghee and cumin', 'Add ginger, half cook vegetables', 'Mix all together, adjust consistency']
    },
    {
        name: 'Egg Curry', emoji: '🥚', time: '25 min', difficulty: 'Easy', calories: 280, dietary: 'Non-Veg', color: '#f59e0b',
        ingredients: ['eggs', 'onion', 'tomato', 'ginger', 'garlic', 'garam masala', 'turmeric', 'oil', 'coriander'],
        steps: ['Hard boil eggs, peel and slit', 'Fry eggs till skin is golden', 'Make onion-tomato masala in same pan', 'Add all spices, cook well', 'Add water, slide in eggs, simmer 8 min']
    },
];

// ── STATE ─────────────────────────────────────────────────────
let cart = [], favourites = [], orders = [];
let currentCategory = 'All', currentDiet = 'All', searchQuery = '';
let orderType = 'Dine In';
let userIngredients = [];
let leafletMap = null;
let currentUser = null;
let otpTimerInterval = null;

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Check stored login
    const stored = sessionStorage.getItem('ck_user');
    if (stored) {
        currentUser = JSON.parse(stored);
        launchApp();
    }
    // else login overlay is shown by default (CSS)
});

// ── SHOW TOAST (global, works before app loads) ───────────────
function showToastGlobal(msg, type) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.className = 'toast show' + (type ? ' ' + type : '');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 2800);
}
const showToast = showToastGlobal;

// ═══════════════════════════════════════════════════════════
//  LOGIN SYSTEM
// ═══════════════════════════════════════════════════════════

function switchLoginTab(tab) {
    document.getElementById('email-login-form').style.display = tab === 'email' ? 'block' : 'none';
    document.getElementById('phone-login-form').style.display = tab === 'phone' ? 'block' : 'none';
    document.getElementById('ltab-email').classList.toggle('active', tab === 'email');
    document.getElementById('ltab-phone').classList.toggle('active', tab === 'phone');
}

function handleEmailLogin() {
    const email = document.getElementById('login-email').value.trim();
    const pass = document.getElementById('login-password').value;
    if (!email || !email.includes('@')) { showToast('⚠️ Please enter a valid email', 'error'); return; }
    if (pass.length < 4) { showToast('⚠️ Password too short', 'error'); return; }
    const btn = document.getElementById('email-login-btn');
    btn.textContent = 'Signing in…';
    setTimeout(() => {
        const name = email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        loginSuccess({ name, email, avatar: name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) });
    }, 900);
}

function sendOTP() {
    const phone = document.getElementById('login-phone').value.trim();
    if (phone.length !== 10) { showToast('⚠️ Enter a valid 10-digit number', 'error'); return; }
    const btn = document.getElementById('send-otp-btn');
    btn.textContent = 'Sending…';
    setTimeout(() => {
        document.getElementById('phone-step-1').style.display = 'none';
        document.getElementById('phone-step-2').style.display = 'block';
        document.getElementById('otp-phone-display').textContent = '+91 ' + phone;
        document.getElementById('otp0').focus();
        startOTPTimer();
        showToast('📲 OTP sent to +91 ' + phone, 'success');
        btn.textContent = 'Send OTP 📲';
    }, 1000);
}

function startOTPTimer() {
    let sec = 30;
    clearInterval(otpTimerInterval);
    document.getElementById('otp-countdown').textContent = sec;
    document.getElementById('otp-timer').style.display = 'block';
    otpTimerInterval = setInterval(() => {
        sec--;
        document.getElementById('otp-countdown').textContent = sec;
        if (sec <= 0) { clearInterval(otpTimerInterval); document.getElementById('otp-timer').textContent = 'Resend OTP'; }
    }, 1000);
}

function otpAutoFocus(el, idx) {
    el.value = el.value.replace(/\D/, '');
    if (el.value && idx < 5) document.getElementById('otp' + (idx + 1)).focus();
    if (idx === 5 && el.value) verifyOTP();
}

function verifyOTP() {
    const otp = [0, 1, 2, 3, 4, 5].map(i => document.getElementById('otp' + i).value).join('');
    if (otp.length < 6) { showToast('⚠️ Enter all 6 digits', 'error'); return; }
    const phone = document.getElementById('login-phone').value;
    loginSuccess({ name: 'Mobile User', email: '', phone, avatar: 'US' });
}

function backToPhone() {
    document.getElementById('phone-step-1').style.display = 'block';
    document.getElementById('phone-step-2').style.display = 'none';
    clearInterval(otpTimerInterval);
}

function handleSocialLogin(provider) {
    showToast(`🔒 ${provider} login coming soon!`, '');
}
function quickSignup() { showToast('📝 Sign up form coming soon!', ''); }

function loginSuccess(user) {
    clearInterval(otpTimerInterval);
    currentUser = user;
    sessionStorage.setItem('ck_user', JSON.stringify(user));
    // Hide login, show location modal
    document.getElementById('login-overlay').style.display = 'none';
    document.getElementById('location-modal').style.display = 'flex';
}

function handleLogout() {
    sessionStorage.removeItem('ck_user');
    sessionStorage.removeItem('ck_location');
    currentUser = null;
    document.getElementById('app-wrapper').style.display = 'none';
    document.getElementById('login-overlay').style.display = 'flex';
    document.getElementById('location-modal').style.display = 'none';
    // Reset OTP/phone step
    document.getElementById('phone-step-1').style.display = 'block';
    document.getElementById('phone-step-2').style.display = 'none';
}

// ═══════════════════════════════════════════════════════════
//  GEOLOCATION
// ═══════════════════════════════════════════════════════════

function requestLocation() {
    document.getElementById('location-modal').style.display = 'none';
    if (!navigator.geolocation) { launchApp(); return; }
    navigator.geolocation.getCurrentPosition(
        pos => {
            const { latitude: lat, longitude: lng } = pos.coords;
            sessionStorage.setItem('ck_location', JSON.stringify({ lat, lng }));
            reverseGeocode(lat, lng);
            launchApp({ lat, lng });
        },
        () => { launchApp(); showToast('📍 Location not granted, using default', ''); }
    );
}

function skipLocation() {
    document.getElementById('location-modal').style.display = 'none';
    launchApp();
}

function reverseGeocode(lat, lng) {
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
        .then(r => r.json())
        .then(d => {
            const city = d.address.city || d.address.town || d.address.village || d.address.county || 'Your Location';
            updateLocationUI(city);
        })
        .catch(() => updateLocationUI('Location detected'));
}

function updateLocationUI(city) {
    const locEl = document.getElementById('sidebar-location');
    const locTxt = document.getElementById('user-location-text');
    locEl.style.display = 'flex';
    locTxt.textContent = city;
}

function launchApp(loc) {
    document.getElementById('app-wrapper').style.display = 'flex';
    document.getElementById('login-overlay').style.display = 'none';
    // Set user info
    if (currentUser) {
        document.getElementById('user-display-name').textContent = currentUser.name;
        document.getElementById('user-avatar-text').textContent = currentUser.avatar || 'U';
    }
    renderDishes();
    renderChefs();
    renderFavourites();
    updateCartUI();
    // If location was stored, restore
    const stored = sessionStorage.getItem('ck_location');
    if (stored) {
        const { lat, lng } = JSON.parse(stored);
        reverseGeocode(lat, lng);
    }
}

// ═══════════════════════════════════════════════════════════
//  SECTION NAVIGATION
// ═══════════════════════════════════════════════════════════

function showSection(name) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('section-' + name).classList.add('active');
    const navEl = document.getElementById('nav-' + name);
    if (navEl) navEl.classList.add('active');
    if (name === 'favourites') renderFavourites();
    if (name === 'orders') renderOrders();
    if (name === 'nearby') initNearbyMap();
}

// ═══════════════════════════════════════════════════════════
//  DISH RENDERING
// ═══════════════════════════════════════════════════════════

function getFilteredDishes() {
    return DISHES.filter(d => {
        const matchCat = currentCategory === 'All' || d.category === currentCategory;
        const matchDiet = currentDiet === 'All' || d.dietary === currentDiet;
        const matchSrc = !searchQuery || [d.name, d.desc, d.chef].join(' ').toLowerCase().includes(searchQuery);
        return matchCat && matchDiet && matchSrc;
    });
}

function renderDishes() {
    const grid = document.getElementById('dish-grid');
    const filtered = getFilteredDishes();
    if (!filtered.length) {
        grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
      <div style="font-size:3rem;">🔍</div><h3>No dishes found</h3>
      <p>Try a different search or category.</p></div>`;
        return;
    }
    grid.innerHTML = filtered.map(d => dishCardHTML(d)).join('');
}

function dishCardHTML(d) {
    const qty = (cart.find(c => c.id === d.id) || {}).qty || 0;
    const isFav = favourites.includes(d.id);
    const badgeClass = d.dietary === 'Veg' ? 'badge-veg' : d.dietary === 'Vegan' ? 'badge-vegan' : 'badge-nonveg';
    const ctrlHTML = qty > 0
        ? `<div class="qty-control"><button class="qty-btn" onclick="updateQty(${d.id},-1)">−</button><span class="qty-display">${qty}</span><button class="qty-btn" onclick="updateQty(${d.id},1)">+</button></div>`
        : `<button class="add-btn" onclick="addToCart(${d.id})">+ Add</button>`;

    const imgHTML = d.imageUrl
        ? `<img class="dish-real-img" src="${d.imageUrl}" alt="${d.name}" loading="lazy"
         onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='block';" />
       <span class="dish-emoji-fb" style="display:none">${d.emoji}</span>`
        : `<span>${d.emoji}</span>`;

    return `<div class="dish-card" id="dish-${d.id}">
    <div class="dish-img-wrap">
      ${imgHTML}
      <span class="dish-badge ${badgeClass}">${d.dietary}</span>
      <button class="fav-btn" onclick="toggleFav(${d.id})">${isFav ? '❤️' : '🤍'}</button>
      ${d.discount ? `<span class="discount-tag">${d.discount}</span>` : ''}
    </div>
    <div class="dish-body">
      <div class="dish-chef">👨‍🍳 ${d.chef} &nbsp;<span class="dish-rating">⭐ ${d.rating}</span></div>
      <div class="dish-name">${d.name}</div>
      <div class="dish-desc">${d.desc}</div>
      <div class="dish-footer">
        <div class="dish-price">$${d.price.toFixed(2)}${d.originalPrice ? `<small>$${d.originalPrice.toFixed(2)}</small>` : ''}</div>
        ${ctrlHTML}
      </div>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════════
//  CART
// ═══════════════════════════════════════════════════════════

function addToCart(id) {
    const dish = DISHES.find(d => d.id === id);
    const ex = cart.find(c => c.id === id);
    ex ? ex.qty++ : cart.push({ id, name: dish.name, price: dish.price, emoji: dish.emoji, qty: 1 });
    updateCartUI(); renderDishes();
    showToast(`🛒 ${dish.name} added!`, 'success');
}

function updateQty(id, delta) {
    const idx = cart.findIndex(c => c.id === id);
    if (idx === -1) return;
    cart[idx].qty += delta;
    if (cart[idx].qty <= 0) cart.splice(idx, 1);
    updateCartUI(); renderDishes();
    if (document.getElementById('cart-sidebar').classList.contains('open')) renderCartItems();
}

function updateCartUI() {
    const total = cart.reduce((s, c) => s + c.qty, 0);
    document.getElementById('cart-count').textContent = total;
    document.getElementById('order-badge').textContent = orders.length;
    if (document.getElementById('cart-sidebar').classList.contains('open')) renderCartItems();
}

function renderCartItems() {
    const container = document.getElementById('cart-items');
    const footer = document.getElementById('cart-footer');
    if (!cart.length) {
        container.innerHTML = `<div class="cart-empty"><div style="font-size:3rem;">🍽️</div><p>Your cart is empty.<br/>Add some dishes!</p></div>`;
        footer.style.display = 'none'; return;
    }
    footer.style.display = 'block';
    container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info"><div class="cart-item-name">${item.name}</div><div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div></div>
      <div class="cart-item-qty">
        <button class="cart-qty-btn" onclick="updateQty(${item.id},-1)">−</button>
        <span class="cart-qty-val">${item.qty}</span>
        <button class="cart-qty-btn" onclick="updateQty(${item.id},1)">+</button>
      </div>
    </div>`).join('');
    const sub = cart.reduce((s, c) => s + c.price * c.qty, 0);
    document.getElementById('subtotal').textContent = `$${sub.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${(sub * 0.05).toFixed(2)}`;
    document.getElementById('total').textContent = `$${(sub * 1.05).toFixed(2)}`;
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
    document.getElementById('cart-overlay').classList.toggle('show');
    if (document.getElementById('cart-sidebar').classList.contains('open')) renderCartItems();
}

function setOrderType(btn, type) {
    document.querySelectorAll('.otype').forEach(b => b.classList.remove('active'));
    btn.classList.add('active'); orderType = type;
}

function selectPay(btn) {
    document.querySelectorAll('.pay-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function placeOrder() {
    if (!cart.length) return;
    const sub = cart.reduce((s, c) => s + c.price * c.qty, 0);
    const id = '#' + Math.floor(10000 + Math.random() * 90000);
    const now = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    orders.unshift({ id, items: [...cart], total: (sub * 1.05).toFixed(2), type: orderType, status: 'Pending', time: now });
    cart = []; toggleCart(); updateCartUI(); renderDishes();
    showToast(`🎉 Order ${id} placed!`, 'success');
    setTimeout(() => { const o = orders.find(x => x.id === id); if (o) o.status = 'Cooking'; showToast('👨‍🍳 Your order is being cooked!', ''); }, 5000);
    setTimeout(() => { const o = orders.find(x => x.id === id); if (o) o.status = 'Completed'; }, 15000);
}

// ═══════════════════════════════════════════════════════════
//  FILTERING
// ═══════════════════════════════════════════════════════════

function filterCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
    renderDishes();
}

function filterDiet(diet) {
    currentDiet = diet;
    document.querySelectorAll('.diet-chip').forEach(c => c.classList.toggle('active', c.dataset.diet === diet));
    renderDishes();
}

function filterDishes() {
    searchQuery = document.getElementById('search-input').value.toLowerCase();
    renderDishes();
}

function toggleFilters() { showToast('🔧 Advanced filters coming soon!', ''); }

// ═══════════════════════════════════════════════════════════
//  FAVOURITES
// ═══════════════════════════════════════════════════════════

function toggleFav(id) {
    const idx = favourites.indexOf(id);
    idx === -1 ? (favourites.push(id), showToast('❤️ Added to favourites!', 'success')) : (favourites.splice(idx, 1), showToast('💔 Removed from favourites', ''));
    renderDishes(); renderFavourites();
}

function renderFavourites() {
    const grid = document.getElementById('fav-grid');
    if (!grid) return;
    const favDishes = DISHES.filter(d => favourites.includes(d.id));
    grid.innerHTML = favDishes.length
        ? favDishes.map(d => dishCardHTML(d)).join('')
        : `<div class="empty-state"><div style="font-size:4rem;">❤️</div><h3>No favourites yet</h3><p>Tap the heart on any dish to save it here.</p><button class="btn-primary" onclick="showSection('menu')">Browse Menu</button></div>`;
}

// ═══════════════════════════════════════════════════════════
//  ORDERS
// ═══════════════════════════════════════════════════════════

function renderOrders() {
    const list = document.getElementById('orders-list');
    if (!orders.length) {
        list.innerHTML = `<div class="empty-state"><div style="font-size:4rem;">📦</div><h3>No orders yet</h3><p>Start ordering!</p><button class="btn-primary" onclick="showSection('menu')">Browse Menu</button></div>`;
        return;
    }
    list.innerHTML = orders.map(o => {
        const sc = o.status === 'Completed' ? 'status-completed' : o.status === 'Cooking' ? 'status-cooking' : 'status-pending';
        const em = o.status === 'Completed' ? '✅' : o.status === 'Cooking' ? '🍳' : '⏳';
        const items = o.items.map(i => `${i.emoji} ${i.name} ×${i.qty}`).join(', ');
        return `<div class="order-card">
      <div class="order-info"><h4>${o.id} — ${o.type}</h4><p>${items}</p><p style="margin-top:4px;font-size:0.75rem;color:#9ca3af;">🕐 ${o.time}</p></div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;">
        <span class="order-status ${sc}">${em} ${o.status}</span>
        <span class="order-total">$${o.total}</span>
      </div>
    </div>`;
    }).join('');
}

// ═══════════════════════════════════════════════════════════
//  CHEFS
// ═══════════════════════════════════════════════════════════

function renderChefs() {
    const grid = document.getElementById('chefs-grid');
    if (!grid) return;
    grid.innerHTML = CHEFS.map((c, i) => `
    <div class="chef-card" style="animation-delay:${i * 0.1}s">
      <div class="chef-emoji">${c.emoji}</div>
      <div class="chef-name">${c.name}</div>
      <div class="chef-specialty">${c.specialty}</div>
      <div class="chef-rating">⭐ ${c.rating} Rating</div>
      <div class="chef-dishes">${c.dishes} dishes · ${c.orders}+ orders</div>
    </div>`).join('');
}

// ═══════════════════════════════════════════════════════════
//  NEARBY MAP (Leaflet.js + OpenStreetMap)
// ═══════════════════════════════════════════════════════════

function initNearbyMap() {
    const stored = sessionStorage.getItem('ck_location');
    const userLoc = stored ? JSON.parse(stored) : { lat: 19.076, lng: 72.8777 }; // Default: Mumbai

    const tip = document.getElementById('map-tip');
    const subEl = document.getElementById('nearby-subtitle');

    if (!leafletMap) {
        leafletMap = L.map('map', { zoomControl: true }).setView([userLoc.lat, userLoc.lng], 14);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
            maxZoom: 19
        }).addTo(leafletMap);
    } else {
        leafletMap.setView([userLoc.lat, userLoc.lng], 14);
    }

    // User marker
    const userIcon = L.divIcon({ html: '<div style="background:#22c55e;width:16px;height:16px;border-radius:50%;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3)"></div>', iconSize: [16, 16], className: '' });
    L.marker([userLoc.lat, userLoc.lng], { icon: userIcon })
        .addTo(leafletMap)
        .bindPopup('<div class="map-popup"><h4>📍 You are here</h4></div>');

    // Chef markers
    const chefIcon = emoji => L.divIcon({
        html: `<div style="background:white;border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;font-size:1.4rem;box-shadow:0 3px 10px rgba(0,0,0,0.2);border:2px solid #22c55e;">${emoji}</div>`,
        iconSize: [40, 40], iconAnchor: [20, 20], className: ''
    });

    CHEFS.forEach(chef => {
        const cLat = userLoc.lat + chef.lat;
        const cLng = userLoc.lng + chef.lng;
        const distKm = (Math.sqrt(chef.lat ** 2 + chef.lng ** 2) * 111).toFixed(1);
        L.marker([cLat, cLng], { icon: chefIcon(chef.emoji) })
            .addTo(leafletMap)
            .bindPopup(`<div class="map-popup">
        <h4>${chef.emoji} ${chef.name}</h4>
        <p>${chef.specialty}</p>
        <p class="mp-rating">⭐ ${chef.rating} · ${distKm} km away</p>
      </div>`);
    });

    tip.style.opacity = '0';
    subEl.textContent = 'Showing chefs near your location';
    renderNearbyChefs(userLoc);
}

function renderNearbyChefs(userLoc) {
    const grid = document.getElementById('nearby-chefs-grid');
    grid.innerHTML = CHEFS.map((c, i) => {
        const distKm = (Math.sqrt(c.lat ** 2 + c.lng ** 2) * 111).toFixed(1);
        return `<div class="nearby-chef-card" style="animation-delay:${i * 0.1}s" onclick="showSection('menu')">
      <div class="nearby-chef-emoji">${c.emoji}</div>
      <div class="nearby-chef-info">
        <div class="nearby-chef-name">${c.name}</div>
        <div class="nearby-chef-spec">${c.specialty}</div>
        <div class="nearby-chef-meta">
          <span class="nearby-rating">⭐ ${c.rating}</span>
          <span class="nearby-dist">📍 ${distKm} km</span>
        </div>
      </div>
      <button class="nearby-order-btn">Order</button>
    </div>`;
    }).join('');
}

function refreshNearbyMap() {
    if (leafletMap) { leafletMap.remove(); leafletMap = null; }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            const { latitude: lat, longitude: lng } = pos.coords;
            sessionStorage.setItem('ck_location', JSON.stringify({ lat, lng }));
            reverseGeocode(lat, lng);
            initNearbyMap();
        }, () => initNearbyMap());
    } else { initNearbyMap(); }
}

// ═══════════════════════════════════════════════════════════
//  AI DISH GENERATOR
// ═══════════════════════════════════════════════════════════

function addIngredientTag() {
    const input = document.getElementById('ingredient-input');
    const raw = input.value.trim().split(',').map(s => s.trim()).filter(Boolean);
    raw.forEach(ing => {
        const norm = ing.toLowerCase();
        if (!userIngredients.includes(norm)) userIngredients.push(norm);
    });
    input.value = '';
    renderIngredientTags();
}

function quickAddIng(name) {
    const norm = name.toLowerCase();
    if (!userIngredients.includes(norm)) { userIngredients.push(norm); renderIngredientTags(); }
}

function renderIngredientTags() {
    document.getElementById('ingredient-tags').innerHTML = userIngredients.map((ing, i) =>
        `<span class="ing-tag">${ing}<button onclick="removeIngredient(${i})">✕</button></span>`
    ).join('');
}

function removeIngredient(idx) {
    userIngredients.splice(idx, 1);
    renderIngredientTags();
}

function generateRecipes() {
    if (!userIngredients.length) { showToast('⚠️ Add at least one ingredient!', 'error'); return; }
    const btn = document.getElementById('ai-generate-btn');
    document.getElementById('ai-btn-text').textContent = '⏳ Analyzing ingredients...';
    btn.classList.add('loading');

    setTimeout(() => {
        btn.classList.remove('loading');
        document.getElementById('ai-btn-text').textContent = '🤖 Generate Recipes';

        // Score recipes
        const scored = AI_RECIPES.map(recipe => {
            const have = recipe.ingredients.filter(ing =>
                userIngredients.some(ui => ing.toLowerCase().includes(ui) || ui.includes(ing.toLowerCase()))
            );
            const need = recipe.ingredients.filter(ing =>
                !userIngredients.some(ui => ing.toLowerCase().includes(ui) || ui.includes(ing.toLowerCase()))
            );
            const pct = Math.round((have.length / recipe.ingredients.length) * 100);
            return { ...recipe, have, need, pct };
        }).sort((a, b) => b.pct - a.pct).slice(0, 6);

        renderAIResults(scored);
    }, 1200);
}

function renderAIResults(results) {
    const area = document.getElementById('ai-results-area');
    const grid = document.getElementById('ai-results-grid');
    const title = document.getElementById('ai-results-title');
    area.style.display = 'block';
    title.textContent = `✨ Top ${results.length} Recipe Matches for ${userIngredients.length} ingredient${userIngredients.length !== 1 ? 's' : ''}`;
    grid.innerHTML = results.map((r, i) => `
    <div class="ai-recipe-card" style="animation-delay:${i * 0.08}s">
      <div class="ai-recipe-color" style="background:${r.color}"></div>
      <div class="ai-recipe-body">
        <div class="ai-recipe-header">
          <div class="ai-recipe-info">
            <h4>${r.emoji} ${r.name}</h4>
            <div class="ai-meta">
              <span class="ai-meta-pill">⏱ ${r.time}</span>
              <span class="ai-meta-pill">📊 ${r.difficulty}</span>
              <span class="ai-meta-pill">🔥 ${r.calories} cal</span>
              <span class="ai-meta-pill">${r.dietary === 'Veg' ? '🟢' : '🔴'} ${r.dietary}</span>
            </div>
          </div>
          <div class="ai-match-score" style="border-color:${r.color};color:${r.color}">${r.pct}%<small>match</small></div>
        </div>
        <div class="ai-ingredients-section">
          <div class="ai-ingredients-label">Ingredients</div>
          <div class="ai-ing-list">
            ${r.have.map(ing => `<span class="ai-ing-have">✓ ${ing}</span>`).join('')}
            ${r.need.map(ing => `<span class="ai-ing-need">+ ${ing}</span>`).join('')}
          </div>
        </div>
        <div class="ai-steps-section">
          <div class="ai-steps-label">Quick Steps</div>
          ${r.steps.map((s, i) => `<div class="ai-step"><div class="ai-step-num">${i + 1}</div><span>${s}</span></div>`).join('')}
        </div>
      </div>
    </div>`).join('');
    area.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearAIResults() {
    document.getElementById('ai-results-area').style.display = 'none';
    userIngredients = [];
    renderIngredientTags();
}
