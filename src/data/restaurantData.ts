import { Dish, RestaurantInfo, Review } from '../types';

export const restaurantInfo: RestaurantInfo = {
  address: 'Kostandi, 7, Odesa, Ukraine',
  hours: 'Mon to Sun 9:00 AM - 11:00 PM',
  phone: '+380-96-777-77-77',
  phoneSecondary: '+380-777-77-77',
  email: 'finedinerest@gmail.com',
  story: 'Fine Dine is not just a restaurant, it is a paradise for your taste buds, a delight in the pristine nature. Here you will get an unforgettable feeling of unity with nature and you will not find a single forbidden fruit.',
  menuStory: 'Our team spent several months researching and testing various food concepts, ingredients, and recipes to come up with the perfect menu. Now it consists of great variety of dishes, ensuring that everyone has something to enjoy.',
};

export const dishesData: Dish[] = [
  {
    id: 'bolognese',
    name: 'Bolognese',
    category: 'pasta',
    priceUAH: 261,
    priceUSD: 7,
    priceEUR: 6.5,
    description: 'Traditional Italian pasta, the basis of which is a thick sauce made of tomatoes and minced meat.',
    ingredients: [
      'Fresh Tagliatelle',
      'Prime Minced Beef & Veal',
      'San Marzano Tomatoes',
      'Parmigiano Reggiano',
      'Aromatic Herbs',
      'Red Wine Reduction'
    ],
    image: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: false,
    isGlutenFree: false,
    calories: 580,
    prepTime: '20 min',
    winePairing: 'Chianti Classico Riserva'
  },
  {
    id: 'green-carbonara',
    name: 'Green Carbonara',
    category: 'pasta',
    priceUAH: 282,
    priceUSD: 7.5,
    priceEUR: 7,
    description: 'With the addition of chicken yolk, Hungarian bacon and Parmesan cheese infused with garden herb emulsification.',
    ingredients: [
      'Artisan Spaghettoni',
      'Crispy Hungarian Guanciale',
      'Organic Egg Yolk',
      'Aged Parmigiano',
      'Fresh Spinach & Basil Emulsion',
      'Cracked Black Pepper'
    ],
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: false,
    isGlutenFree: false,
    calories: 620,
    prepTime: '22 min',
    winePairing: 'Pinot Grigio delle Venezie'
  },
  {
    id: 'rack-of-lamb',
    name: 'Rack of Lamb',
    category: 'grill',
    priceUAH: 295,
    priceUSD: 8,
    priceEUR: 7.5,
    description: 'Served on a pillow of eggplant. With the addition of pomegranate sauce, tomato and green oil.',
    ingredients: [
      'New Zealand Herb-Crusted Lamb Rack',
      'Smoked Eggplant Purée',
      'Pomegranate Balsamic Glaze',
      'Heirloom Roasted Tomatoes',
      'Infused Green Herb Oil',
      'Micro Herbs'
    ],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: false,
    isGlutenFree: true,
    calories: 710,
    prepTime: '28 min',
    winePairing: 'Cabernet Sauvignon Reserve'
  },
  {
    id: 'avocado-poached-egg',
    name: 'Garden Truffle Benedict',
    category: 'breakfast',
    priceUAH: 230,
    priceUSD: 6,
    priceEUR: 5.5,
    description: 'Poached organic eggs on toasted brioche with mashed Hass avocado, shaved summer truffles, and citrus hollandaise.',
    ingredients: [
      'Brioche Toast',
      'Organic Free-Range Eggs',
      'Ripe Hass Avocado',
      'Fresh Summer Truffles',
      'Citrus Hollandaise Sauce',
      'Garden Microgreens'
    ],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: false,
    isVegetarian: true,
    isGlutenFree: false,
    calories: 490,
    prepTime: '15 min',
    winePairing: 'Prosecco Superiore DOCG'
  },
  {
    id: 'charred-salmon-dinner',
    name: 'Norwegian Charred Salmon',
    category: 'dinner',
    priceUAH: 340,
    priceUSD: 9,
    priceEUR: 8.5,
    description: 'Pan-seared Norwegian fjord salmon fillet accompanied by wild asparagus, baby glazed carrots, and velvety lemon velouté.',
    ingredients: [
      'Norwegian Salmon Fillet',
      'Wild Green Asparagus',
      'Honey Glazed Baby Carrots',
      'Lemon & Caper Velouté',
      'Dill Infusion',
      'Fleur de Sel'
    ],
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: false,
    isGlutenFree: true,
    calories: 540,
    prepTime: '25 min',
    winePairing: 'Chardonnay Grand Cru'
  },
  {
    id: 'craft-cheese-fruit-board',
    name: 'Fine Dine Artisan Cheese & Berries',
    category: 'snacks',
    priceUAH: 245,
    priceUSD: 6.5,
    priceEUR: 6,
    description: 'Selection of craft aged cheeses of our private production served with garden strawberries, fresh figs, walnuts, and thyme blossom honey.',
    ingredients: [
      'Aged Goat Tomme',
      'Truffle Infused Pecorino',
      'Creamy Blue Cheese',
      'Fresh Garden Berries',
      'Black Mission Figs',
      'Wildflower Comb Honey'
    ],
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: false,
    isVegetarian: true,
    isGlutenFree: true,
    calories: 420,
    prepTime: '12 min',
    winePairing: 'Sauvignon Blanc Estate'
  },
  {
    id: 'truffle-wild-mushroom-risotto',
    name: 'Forest Truffle Risotto',
    category: 'dinner',
    priceUAH: 290,
    priceUSD: 8,
    priceEUR: 7.5,
    description: 'Creamy Carnaroli rice simmered with wild chanterelles, porcini broth, 24-month Parmigiano Reggiano, and black winter truffle carpaccio.',
    ingredients: [
      'Carnaroli Rice',
      'Wild Porcini & Chanterelles',
      'Black Truffle Butter',
      'Aged Parmigiano',
      'Dry White Wine',
      'Chives'
    ],
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=800&auto=format&fit=crop',
    isPopular: false,
    isChefSpecial: true,
    isVegetarian: true,
    isGlutenFree: true,
    calories: 510,
    prepTime: '24 min',
    winePairing: 'Barolo DOCG'
  },
  {
    id: 'fine-dine-zinger-supreme',
    name: 'Fine Dine Crispy Zinger Supreme',
    category: 'burgers',
    priceUAH: 235,
    priceUSD: 6.5,
    priceEUR: 6,
    description: 'Buttermilk soaked crispy chicken breast coated with secret 11-spice herb blend, spicy jalapeño slaw, smoked melted cheddar on toasted brioche.',
    ingredients: [
      'Crispy Spice-Crusted Chicken',
      'Brioche Bun',
      'Spicy Sriracha Aioli',
      'Melted Aged Cheddar',
      'Crunchy Garden Slaw',
      'Pickled Cucumbers'
    ],
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: false,
    isGlutenFree: false,
    calories: 680,
    prepTime: '15 min',
    winePairing: 'Craft Wheat Ale or Rosé'
  },
  {
    id: 'damascus-chicken-shawarma',
    name: 'Artisan Damascus Chicken Shawarma',
    category: 'shawarma',
    priceUAH: 215,
    priceUSD: 6,
    priceEUR: 5.5,
    description: 'Slow-roasted rotisserie spiced marinated chicken carved onto warm flatbread with whipped Lebanese garlic toum, wild pickles, and hand-cut fries.',
    ingredients: [
      'Marinated Free-Range Chicken',
      'Artisan Thin Lavash',
      'Whipped Garlic Toum',
      'Pickled Turnips & Cornichons',
      'Hand-Cut Crispy Fries',
      'Pomegranate Reduction'
    ],
    image: 'https://images.unsplash.com/photo-1644704170910-a0cdf183649b?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: false,
    isVegetarian: false,
    isGlutenFree: false,
    calories: 590,
    prepTime: '12 min',
    winePairing: 'Dry Sparkling Cider'
  },
  {
    id: 'royal-lamb-beef-shawarma-platter',
    name: 'Royal Spiced Lamb & Beef Shawarma Platter',
    category: 'shawarma',
    priceUAH: 275,
    priceUSD: 7.5,
    priceEUR: 7,
    description: 'Layered prime lamb and aged beef charred on the vertical spit, served with grilled sumac red onions, roasted tomato, minted tahini, and warm pita.',
    ingredients: [
      'Spiced Spit-Roasted Lamb & Beef',
      'Stoneground Minted Tahini',
      'Sumac Onions & Fresh Parsley',
      'Charred Tomato & Pepper',
      'Fresh Clay-Oven Pita Bread'
    ],
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: false,
    isGlutenFree: false,
    calories: 720,
    prepTime: '18 min',
    winePairing: 'Syrah / Shiraz'
  },
  {
    id: 'wagyu-truffle-smash-burger',
    name: 'Double Truffle Wagyu Smash',
    category: 'burgers',
    priceUAH: 285,
    priceUSD: 8,
    priceEUR: 7.5,
    description: 'Twin smash patties of Australian Wagyu beef with crispy lace edges, black truffle mayonnaise, caramelized balsamic onions, and Gruyère cheese.',
    ingredients: [
      'Twin Wagyu Beef Patties',
      'Black Truffle Aioli',
      'Cave-Aged Gruyère',
      'Caramelized Balsamic Onions',
      'Artisan Potato Bun'
    ],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: false,
    isGlutenFree: false,
    calories: 790,
    prepTime: '15 min',
    winePairing: 'Bordeaux Blend'
  },
  {
    id: 'dynamite-prawn-shawarma-wrap',
    name: 'Dynamite Crispy Prawn Shawarma Wrap',
    category: 'shawarma',
    priceUAH: 255,
    priceUSD: 7,
    priceEUR: 6.5,
    description: 'Golden fried tiger prawns tossed in sweet-chili dynamite glaze, wrapped in toasted saj bread with shredded cabbage, fresh cilantro, and lime zest.',
    ingredients: [
      'Crispy Tiger Prawns',
      'Spicy Sweet Dynamite Glaze',
      'Toasted Saj Bread',
      'Crisp Garden Slaw',
      'Cilantro & Lime Crema'
    ],
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop',
    isPopular: false,
    isChefSpecial: false,
    isVegetarian: false,
    isGlutenFree: false,
    calories: 520,
    prepTime: '14 min',
    winePairing: 'Crisp Albariño'
  },
  {
    id: 'parmesan-truffle-fries',
    name: 'Gourmet Truffle & Parmesan Loaded Fries',
    category: 'street-food',
    priceUAH: 165,
    priceUSD: 4.5,
    priceEUR: 4,
    description: 'Triple-cooked russet potato fries tossed in aromatic white truffle oil, freshly shaved 24-month Parmigiano Reggiano, and chopped rosemary.',
    ingredients: [
      'Triple Cooked Fries',
      'Italian White Truffle Oil',
      'Aged Parmigiano Reggiano',
      'Fresh Rosemary & Sea Salt',
      'Garlic Aioli Dip'
    ],
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: false,
    isVegetarian: true,
    isGlutenFree: true,
    calories: 380,
    prepTime: '10 min',
    winePairing: 'Craft Pilsner or Prosecco'
  },
  {
    id: 'matcha-pistachio-tiramisu',
    name: 'Fine Dine Velvet Pistachio Cake',
    category: 'dessert',
    priceUAH: 180,
    priceUSD: 5,
    priceEUR: 4.5,
    description: 'Delicate Sicilian pistachio sponge layered with whipped mascarpone cream and fresh raspberries, dusted with ceremonial matcha.',
    ingredients: [
      'Sicilian Pistachio Paste',
      'Italian Mascarpone Cream',
      'Ceremonial Uji Matcha',
      'Fresh Raspberries',
      'White Chocolate Shavings'
    ],
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: true,
    isGlutenFree: false,
    calories: 360,
    prepTime: '10 min',
    winePairing: 'Moscato d’Asti'
  },
  {
    id: 'botanical-smoked-old-fashioned',
    name: 'Rosemary Smoked Old Fashioned',
    category: 'drinks',
    priceUAH: 210,
    priceUSD: 6,
    priceEUR: 5.5,
    description: 'Aged bourbon infused with toasted garden rosemary, Angostura bitters, orange peel zest, and smoked under a glass cloche with cherrywood chips.',
    ingredients: [
      'Small Batch Bourbon',
      'Garden Rosemary Syrup',
      'Aromatic Bitters',
      'Charred Orange Twist',
      'Cherrywood Aroma Smoke'
    ],
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: true,
    isGlutenFree: true,
    calories: 190,
    prepTime: '6 min',
    winePairing: 'Signature Cocktail'
  }
];

export const initialReviews: Review[] = [
  {
    id: 'rev-1',
    author: 'ANGELA',
    rating: 5,
    comment: 'I had dinner at this incredible place yesterday and was delighted. The interior is magnificent, everything is very stylish and consistent. The staff is responsive and attentive. We will come back again and again.',
    date: 'Yesterday',
    visitedFor: 'Anniversary Dinner'
  },
  {
    id: 'rev-2',
    author: 'MARIA',
    rating: 4,
    comment: 'I really love this place, it’s cozy, stylish, and most importantly, very tasty. I really like natural fruits and vegetables in dishes, as well as delicious cocktails and pasta.',
    date: '3 days ago',
    visitedFor: 'Weekend Brunch'
  },
  {
    id: 'rev-3',
    author: 'ANDREW',
    rating: 5,
    comment: 'There was pleasant music playing in the background and all the staff were very friendly. It’s simply beyond words. Service, food, drinks, desserts and atmosphere. There is everything you can dream of here.',
    date: '1 week ago',
    visitedFor: 'Business Tasting'
  },
  {
    id: 'rev-4',
    author: 'MONICA',
    rating: 4,
    comment: 'Excellent location of the restaurant. The whole family had dinner and everyone was very pleased. A very cozy atmosphere and indescribable emotions of dinner in such a heavenly place. The food is excellent.',
    date: '2 weeks ago',
    visitedFor: 'Family Celebration'
  },
  {
    id: 'rev-5',
    author: 'DMYTRO',
    rating: 5,
    comment: 'The Rack of Lamb on eggplant pillow and the Green Carbonara are sheer perfection. The wine pairings suggested by the sommelier elevated the entire evening.',
    date: 'Last month',
    visitedFor: 'Gourmet Dinner'
  }
];

export const formatPrice = (dish: Dish, currency: 'UAH' | 'USD' | 'EUR'): string => {
  switch (currency) {
    case 'USD':
      return `$${dish.priceUSD.toFixed(1)}`;
    case 'EUR':
      return `€${dish.priceEUR.toFixed(1)}`;
    case 'UAH':
    default:
      return `${dish.priceUAH} UAH`;
  }
};
