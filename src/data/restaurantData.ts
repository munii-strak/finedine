import { Dish, RestaurantInfo, Review, Currency } from '../types';

export const restaurantInfo: RestaurantInfo = {
  name: 'Fine Dine',
  byLine: 'By Bao G',
  tagline: 'Best Restaurant in Faisalabad',
  address: 'Susan Road, opposite Faizan e Madina, Officer Colony 1, Faisalabad, 38000, Pakistan',
  landmark: 'Opposite Faizan e Madina',
  colony: 'Officer Colony 1',
  city: 'Faisalabad',
  country: 'Pakistan',
  postalCode: '38000',
  plusCode: 'C4F9+27 Faisalabad, Pakistan',
  hours: 'Open daily · Closes 1:00 AM',
  closingTime: '1:00 AM',
  phone: '+92 301 7864478',
  phoneRaw: '+923017864478',
  email: 'finedine.baog@gmail.com',
  rating: 4.0,
  reviewCount: 502,
  priceRange: 'Rs 1,000 – 4,000 per person',
  services: [
    'Available in Pakistan Only',
    'Dine-in (Susan Road, FSD)',
    'Takeout & Curbside Pickup',
    'Faisalabad Citywide Delivery',
    'Wheelchair Accessible Entrance',
  ],
  story: 'Fine Dine By Bao G operates exclusively in Pakistan as Faisalabad’s most celebrated culinary destination on Susan Road, opposite Faizan e Madina. Renowned for signature golden fried and charcoal grilled river fish, mouthwatering barbecue, gourmet zinger burgers, authentic shawarmas, and rich pasta specialties, we offer an inviting atmosphere for Pakistani family gatherings and late-night feasts till 1 AM.',
  menuStory: 'Our chefs hand-select fresh local produce, high-grade spices, and prime cuts to craft an expansive menu spanning sizzling grilled meats, fresh coastal fish, artisan burgers, loaded fries, and decadent desserts.',
  googleMapsUrl: 'https://maps.google.com/?q=Susan+Road,+opposite+Faizan+e+Madina,+Officer+Colony+1,+Faisalabad,+38000,+Pakistan',
};

export const dishesData: Dish[] = [
  {
    id: 'bao-g-grilled-fish',
    name: 'Bao G Crispy Fried & Charcoal Grilled Fish',
    category: 'grill',
    pricePKR: 1950,
    priceUSD: 7.0,
    priceEUR: 6.5,
    description: 'Fine Dine signature specialty: Fresh river catch marinated in traditional roasted spices, garlic, and lemon, pan-crisped or flame-grilled over coals, served with spicy tamarind chutney.',
    ingredients: [
      'Fresh River Catch / Fish Fillet',
      'Special 12-Spice Lahori Marinade',
      'Roasted Cumin & Crushed Coriander',
      'Tangy Tamarind & Plum Glaze',
      'Mint Coriander Raita',
      'Lemon Wedges & Fresh Onion Rings'
    ],
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: false,
    isGlutenFree: true,
    calories: 520,
    prepTime: '22 min',
    winePairing: 'Fresh Mint Cooler or Chilled Lime Soda'
  },
  {
    id: 'fine-dine-zinger-supreme',
    name: 'Fine Dine Crispy Zinger Supreme',
    category: 'burgers',
    pricePKR: 850,
    priceUSD: 3.0,
    priceEUR: 2.8,
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
    winePairing: 'Iced Peach Tea or Mint Slush'
  },
  {
    id: 'damascus-chicken-shawarma',
    name: 'Artisan Damascus Chicken Shawarma',
    category: 'shawarma',
    pricePKR: 750,
    priceUSD: 2.7,
    priceEUR: 2.5,
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
    winePairing: 'Fresh Lemon Mint Sparkler'
  },
  {
    id: 'royal-lamb-beef-shawarma-platter',
    name: 'Royal Spiced Lamb & Beef Shawarma Platter',
    category: 'shawarma',
    pricePKR: 1650,
    priceUSD: 6.0,
    priceEUR: 5.5,
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
    winePairing: 'Traditional Pomegranate Fizz'
  },
  {
    id: 'wagyu-truffle-smash-burger',
    name: 'Double Truffle Wagyu Smash',
    category: 'burgers',
    pricePKR: 1450,
    priceUSD: 5.2,
    priceEUR: 4.8,
    description: 'Twin smash patties of tender prime beef with crispy lace edges, black truffle mayonnaise, caramelized balsamic onions, and melted cheese.',
    ingredients: [
      'Twin Prime Beef Smash Patties',
      'Black Truffle Aioli',
      'Cave-Aged Cheddar & Swiss',
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
    winePairing: 'Berry Mojito Mocktail'
  },
  {
    id: 'parmesan-truffle-fries',
    name: 'Gourmet Truffle & Parmesan Loaded Fries',
    category: 'street-food',
    pricePKR: 650,
    priceUSD: 2.3,
    priceEUR: 2.1,
    description: 'Triple-cooked potato fries tossed in aromatic white truffle essence, freshly shaved aged cheese, and chopped herbs with signature garlic aioli.',
    ingredients: [
      'Triple Cooked Russet Fries',
      'White Truffle Essence',
      'Shaved Aged Parmesan',
      'Fresh Rosemary & Sea Salt',
      'House Garlic Aioli Dip'
    ],
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: false,
    isVegetarian: true,
    isGlutenFree: true,
    calories: 380,
    prepTime: '10 min',
    winePairing: 'Blue Lagoon Cooler'
  },
  {
    id: 'dynamite-prawn-shawarma-wrap',
    name: 'Dynamite Crispy Prawn Wrap',
    category: 'shawarma',
    pricePKR: 1250,
    priceUSD: 4.5,
    priceEUR: 4.2,
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
    winePairing: 'Virgin Mango Passion Mojito'
  },
  {
    id: 'bolognese',
    name: 'Bolognese Tagliatelle',
    category: 'pasta',
    pricePKR: 1350,
    priceUSD: 4.8,
    priceEUR: 4.5,
    description: 'Traditional Italian pasta with a slow-simmered rich sauce made of San Marzano tomatoes, minced beef, and Parmigiano Reggiano.',
    ingredients: [
      'Fresh Tagliatelle',
      'Prime Minced Beef',
      'San Marzano Tomatoes',
      'Parmigiano Reggiano',
      'Aromatic Herbs',
      'Garlic Olive Oil'
    ],
    image: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: false,
    isVegetarian: false,
    isGlutenFree: false,
    calories: 580,
    prepTime: '20 min',
    winePairing: 'Pomegranate Spritzer'
  },
  {
    id: 'green-carbonara',
    name: 'Green Carbonara',
    category: 'pasta',
    pricePKR: 1400,
    priceUSD: 5.0,
    priceEUR: 4.7,
    description: 'With rich egg yolk, savory smoked crisps, and Parmesan cheese infused with garden herb emulsification.',
    ingredients: [
      'Artisan Spaghettoni',
      'Crispy Smoked Strips',
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
    winePairing: 'Green Apple Sparkler'
  },
  {
    id: 'rack-of-lamb',
    name: 'Charcoal BBQ Lamb Chops',
    category: 'grill',
    pricePKR: 2850,
    priceUSD: 10.2,
    priceEUR: 9.5,
    description: 'Served on a bed of smoked eggplant purée. Finished with pomegranate glaze, blistered tomatoes, and green herb drizzle.',
    ingredients: [
      'Tender Marinated Lamb Chops',
      'Smoked Eggplant Purée',
      'Pomegranate Glaze',
      'Charred Tomatoes',
      'Infused Green Herb Oil',
      'Micro Greens'
    ],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: false,
    isGlutenFree: true,
    calories: 710,
    prepTime: '28 min',
    winePairing: 'Spiced Plum Cooler'
  },
  {
    id: 'charred-salmon-dinner',
    name: 'Pan-Seared Herb Salmon',
    category: 'dinner',
    pricePKR: 2650,
    priceUSD: 9.5,
    priceEUR: 8.8,
    description: 'Pan-seared salmon fillet accompanied by wild asparagus, honey glazed baby carrots, and velvety lemon caper velouté.',
    ingredients: [
      'Salmon Fillet',
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
    winePairing: 'Citrus Mint Refresher'
  },
  {
    id: 'craft-cheese-fruit-board',
    name: 'Fine Dine Artisan Cheese & Fruit Platter',
    category: 'snacks',
    pricePKR: 1250,
    priceUSD: 4.5,
    priceEUR: 4.2,
    description: 'Selection of craft aged cheeses served with fresh seasonal berries, sweet figs, roasted walnuts, and wildflower honey.',
    ingredients: [
      'Aged Cheddar & Gouda',
      'Truffle Infused Cheese',
      'Creamy Soft Cheese',
      'Fresh Seasonal Berries',
      'Black Mission Figs',
      'Wildflower Honey'
    ],
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop',
    isPopular: false,
    isChefSpecial: false,
    isVegetarian: true,
    isGlutenFree: true,
    calories: 420,
    prepTime: '12 min',
    winePairing: 'Iced Hibiscus Tea'
  },
  {
    id: 'matcha-pistachio-tiramisu',
    name: 'Fine Dine Velvet Pistachio Cake',
    category: 'dessert',
    pricePKR: 750,
    priceUSD: 2.7,
    priceEUR: 2.5,
    description: 'Delicate pistachio sponge layered with whipped mascarpone cream and fresh raspberries, dusted with roasted chopped pistachios.',
    ingredients: [
      'Pistachio Cream',
      'Mascarpone Cream',
      'Delicate Sponge',
      'Fresh Berries',
      'White Chocolate Shavings'
    ],
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: true,
    isGlutenFree: false,
    calories: 360,
    prepTime: '10 min',
    winePairing: 'Cardamom Saffron Milk Tea'
  },
  {
    id: 'botanical-smoked-old-fashioned',
    name: 'Rosemary Smoked Mocktail',
    category: 'drinks',
    pricePKR: 650,
    priceUSD: 2.3,
    priceEUR: 2.1,
    description: 'Craft non-alcoholic botanical blend infused with toasted garden rosemary, fresh citrus, Angostura bitters aroma, smoked under a cloche with oak wood chips.',
    ingredients: [
      'Craft Botanical Cordial',
      'Garden Rosemary Syrup',
      'Citrus Twist',
      'Sparkling Mineral Water',
      'Aroma Smoke'
    ],
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: true,
    isGlutenFree: true,
    calories: 140,
    prepTime: '6 min',
    winePairing: 'Signature Craft Mocktail'
  }
];

export const initialReviews: Review[] = [
  {
    id: 'rev-1',
    author: 'HAMZA TARIQ',
    rating: 5,
    comment: 'Best dining experience in Faisalabad! The fried and grilled fish here is second to none on Susan Road. The Bao G crispy zinger was super juicy and fresh. Highly recommended for families.',
    date: '2 days ago',
    visitedFor: 'Family Dinner'
  },
  {
    id: 'rev-2',
    author: 'FATIMA NOOR',
    rating: 4,
    comment: 'Really cozy ambiance right opposite Faizan e Madina in Officer Colony 1. The food quality is top notch and love that it stays open till 1 AM for late cravings. Great takeout packaging too.',
    date: '1 week ago',
    visitedFor: 'Late Night Gathering'
  },
  {
    id: 'rev-3',
    author: 'USMAN CHAUDHRY',
    rating: 5,
    comment: 'Their BBQ chops, loaded truffle fries, and dynamite prawns exceeded all expectations. Price per person was around Rs 1,500-2,000, worth every single rupee. 4.0+ rating well deserved!',
    date: '2 weeks ago',
    visitedFor: 'Birthday Celebration'
  },
  {
    id: 'rev-4',
    author: 'AYESHA MALIK',
    rating: 4,
    comment: 'Attentive staff, clean environment, wheelchair accessible entrance which was really helpful for my grandparents. The shawarma platter and grilled fish are must-tries.',
    date: '3 weeks ago',
    visitedFor: 'Weekend Dinner'
  },
  {
    id: 'rev-5',
    author: 'BILAL RIAZ',
    rating: 5,
    comment: 'The best restaurant on Susan Road without a doubt. We ordered the grilled fish, double smash burgers, and pistachio dessert. Everything tasted fresh and flavorful.',
    date: 'Last month',
    visitedFor: 'Friends Meetup'
  }
];

export const formatPrice = (dish: Dish, currency: Currency): string => {
  switch (currency) {
    case 'USD':
      return `$${dish.priceUSD.toFixed(1)}`;
    case 'EUR':
      return `€${dish.priceEUR.toFixed(1)}`;
    case 'PKR':
    default:
      return `Rs ${dish.pricePKR.toLocaleString()}`;
  }
};
