import { Dish, RestaurantInfo, Review, Currency } from '../types';

export const restaurantInfo: RestaurantInfo = {
  name: 'Domatos Pizza',
  byLine: 'Faisalabad',
  tagline: 'Fast Food Restaurant in Faisalabad',
  category: 'Fast food restaurant',
  address: 'Dr. Tusi Rd, Faisalabad, Pakistan',
  landmark: 'Dr. Tusi Rd',
  colony: 'Faisalabad',
  city: 'Faisalabad',
  country: 'Pakistan',
  postalCode: '38000',
  plusCode: 'F32M+7R Faisalabad, Pakistan',
  hours: 'Open · Closes 12 AM',
  closingTime: '12 AM',
  phone: '+92 331 7666919',
  phoneRaw: '+923317666919',
  email: 'domatos.pizza.fsd@gmail.com',
  rating: 4.9,
  reviewCount: 18,
  priceRange: 'Rs 1–1,000 per person',
  priceReportedBy: 'Reported by 9 people',
  services: [
    'Available in Pakistan Only',
    '✓ Dine-in',
    '✓ Takeout',
    'Dr. Tusi Rd, Faisalabad, Pakistan',
    'Open · Closes 12 AM',
  ],
  story: 'Domatos Pizza is Faisalabad’s premier fast food and burger destination on Dr. Tusi Rd. Rated 4.9 stars by local fast food lovers, we specialize in crispy zinger burgers, double beef smash burgers, loaded cheesy fries, crispy fried chicken tenders, wraps, and family combos. Perfect for cozy dining and evening takeout until 12 AM midnight.',
  menuStory: 'Crafted with toasted brioche buns, pure beef smash patties, golden crispy chicken fillets, house secret sauces, melted cheese, and seasoned fries, our menu delivers the ultimate fast food feast in Faisalabad.',
  googleMapsUrl: 'https://maps.google.com/?q=Dr.+Tusi+Rd,+Faisalabad,+Pakistan',
};

export const dishesData: Dish[] = [
  {
    id: 'domatos-crown-crust-pizza',
    name: 'Domatos Royal Crown Crust Pizza',
    category: 'pizza',
    pricePKR: 1450,
    priceUSD: 5.2,
    priceEUR: 4.8,
    description: 'Signature crown-folded edges filled with rich cream cheese and savory fillings, topped with aromatic spiced chicken, crunchy peppers, sliced olives, and bubbling mozzarella.',
    ingredients: [
      'Cream Cheese Stuffed Crown Crust',
      'Spiced Chicken Chunks',
      'Molten Whole Milk Mozzarella',
      'Sliced Black Olives & Crisp Capsicum',
      'Domatos Secret Tomato-Herb Sauce'
    ],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: false,
    isGlutenFree: false,
    calories: 780,
    prepTime: '15 min',
    winePairing: 'Chilled Fountain Cola or Mint Lemonade'
  },
  {
    id: 'domatos-fajita-supreme',
    name: 'Chicken Fajita Sensation Pizza',
    category: 'pizza',
    pricePKR: 1250,
    priceUSD: 4.5,
    priceEUR: 4.1,
    description: 'Crisp stone-baked dough topped with marinated fajita chicken strips, sweet bell peppers, red onions, and rich melted mozzarella cheese sprinkled with oregano.',
    ingredients: [
      'Marinated Fajita Chicken Strips',
      'Stone-Baked Dough Base',
      'Crisp Bell Peppers & Red Onions',
      'Whole Milk Melted Mozzarella',
      'Italian Oregano & Herb Oil'
    ],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: false,
    isGlutenFree: false,
    calories: 720,
    prepTime: '14 min',
    winePairing: 'Chilled Ice Soda'
  },
  {
    id: 'domatos-malai-boti-pizza',
    name: 'Creamy Malai Boti Feast Pizza',
    category: 'pizza',
    pricePKR: 1350,
    priceUSD: 4.8,
    priceEUR: 4.4,
    description: 'Succulent malai boti chicken chunks over rich garlic cream sauce, covered with premium mozzarella and fragrant crushed coriander and spices.',
    ingredients: [
      'Tender Malai Boti Chicken',
      'Rich White Garlic Cream Sauce',
      'Golden Melted Mozzarella',
      'Sliced Jalapeños & Fresh Herbs',
      'Handcrafted Hand-Tossed Crust'
    ],
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: false,
    isGlutenFree: false,
    calories: 760,
    prepTime: '15 min',
    winePairing: 'Iced Lime Soda'
  },
  {
    id: 'domatos-tikka-overload',
    name: 'Spicy Chicken Tikka Overload Pizza',
    category: 'pizza',
    pricePKR: 1200,
    priceUSD: 4.3,
    priceEUR: 3.9,
    description: 'Fiery tandoori chicken tikka pieces, pickled jalapeños, sweet red onions, and stretchy mozzarella baked on our signature crisp pizza crust.',
    ingredients: [
      'Tandoori Spiced Chicken Tikka',
      'Pickled Mexican Jalapeños',
      'Sweet Crisp Red Onions',
      'Molten Mozzarella Cheese',
      'Domatos Zesty Tomato Reduction'
    ],
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: false,
    isVegetarian: false,
    isGlutenFree: false,
    calories: 710,
    prepTime: '13 min',
    winePairing: 'Chilled Mint Slush'
  },
  {
    id: 'domatos-four-cheese-pepperoni',
    name: 'Domatos Molten Double Cheese Pizza',
    category: 'pizza',
    pricePKR: 1100,
    priceUSD: 3.9,
    priceEUR: 3.6,
    description: 'Generous double layers of bubbling whole milk mozzarella and sharp golden cheddar, seasoned with aromatic oregano and garlic herb oil.',
    ingredients: [
      'Double Whole Milk Mozzarella',
      'Aged Sharp Cheddar Cheese',
      'Sun-Ripened Tomato Marinara',
      'Roasted Garlic Herb Oil',
      'Italian Dried Oregano'
    ],
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=800&auto=format&fit=crop',
    isPopular: false,
    isChefSpecial: false,
    isVegetarian: true,
    isGlutenFree: false,
    calories: 680,
    prepTime: '12 min',
    winePairing: 'Chilled Soda'
  },
  {
    id: 'domatos-stuffed-calzone',
    name: 'Domatos Stuffed Folded Calzone',
    category: 'pizza',
    pricePKR: 850,
    priceUSD: 3.0,
    priceEUR: 2.8,
    description: 'Crispy folded pizza turnover packed with spiced chicken, sautéed mushrooms, molten mozzarella, and ricotta cheese, brushed with garlic herb butter.',
    ingredients: [
      'Crisp Folded Pizza Dough',
      'Spiced Seasoned Chicken',
      'Molten Mozzarella & Ricotta',
      'Sautéed Mushrooms & Herbs',
      'Garlic Herb Butter Glaze'
    ],
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: false,
    isGlutenFree: false,
    calories: 690,
    prepTime: '15 min',
    winePairing: 'Fresh Mint Mojito'
  },
  {
    id: 'domatos-bbq-chicken-pizza',
    name: 'Smokey BBQ Ranch Chicken Pizza',
    category: 'pizza',
    pricePKR: 1300,
    priceUSD: 4.6,
    priceEUR: 4.2,
    description: 'Succulent barbecue grilled chicken chunks, hickory BBQ sauce, creamy ranch drizzle, sweet golden corn, and melted mozzarella cheese.',
    ingredients: [
      'Grilled BBQ Chicken Breast',
      'Hickory Smoked BBQ Glaze',
      'Creamy Ranch Swirl',
      'Sweet Golden Corn & Onions',
      'Molten Mozzarella'
    ],
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=800&auto=format&fit=crop',
    isPopular: false,
    isChefSpecial: false,
    isVegetarian: false,
    isGlutenFree: false,
    calories: 740,
    prepTime: '14 min',
    winePairing: 'Chilled Vanilla Shake'
  },
  {
    id: 'domatos-loaded-pizza-fries',
    name: 'Domatos Signature Loaded Pizza Fries',
    category: 'street-food',
    pricePKR: 550,
    priceUSD: 2.0,
    priceEUR: 1.8,
    description: 'Crisp golden french fries loaded with diced spicy chicken fajita, rich pizza herb sauce, molten mozzarella, sliced black olives, and jalapeños, baked bubbling hot.',
    ingredients: [
      'Crispy Seasoned Potato Fries',
      'Spicy Diced Chicken Fajita Bits',
      'Melted Mozzarella & Cheddar',
      'Sliced Black Olives & Jalapeños',
      'Domatos Herb Seasoning'
    ],
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: false,
    isGlutenFree: true,
    calories: 580,
    prepTime: '10 min',
    winePairing: 'Mint Mojito Mocktail'
  },
  {
    id: 'domatos-cheesy-garlic-bread',
    name: 'Molten Cheesy Garlic Bread Sticks',
    category: 'snacks',
    pricePKR: 450,
    priceUSD: 1.6,
    priceEUR: 1.5,
    description: 'Freshly baked artisan dough sticks brushed with roasted garlic herb butter and smothered with bubbly melted mozzarella cheese.',
    ingredients: [
      'Artisan Pizza Dough Sticks',
      'Roasted Garlic Herb Butter',
      'Melted Whole Milk Mozzarella',
      'Crushed Chili Flakes & Oregano',
      'Side of Marinara Dip'
    ],
    image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: false,
    isVegetarian: true,
    isGlutenFree: false,
    calories: 420,
    prepTime: '10 min',
    winePairing: 'Chilled Lemon Soda'
  },
  {
    id: 'domatos-grand-family-pizza-feast',
    name: 'Grand Domatos Family Pizza Combo Feast',
    category: 'pizza',
    pricePKR: 2850,
    priceUSD: 10.2,
    priceEUR: 9.4,
    description: 'The ultimate pizza party: 2 Large Signature Pizzas (Crown Crust or Fajita), Loaded Pizza Fries, Cheesy Garlic Bread Sticks, and a chilled 1.5L drink.',
    ingredients: [
      '2 Large Signature Pizzas of Choice',
      'Full Platter Loaded Pizza Fries',
      'Cheesy Garlic Bread Sticks (8 Pcs)',
      'Chilled 1.5L Soft Drink of Choice'
    ],
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: true,
    isVegetarian: false,
    isGlutenFree: false,
    calories: 1450,
    prepTime: '18 min',
    winePairing: 'Chilled Cola with Ice'
  },
  {
    id: 'domatos-veggie-supreme-pizza',
    name: 'Garden Fresh Vegetarian Supreme Pizza',
    category: 'pizza',
    pricePKR: 1050,
    priceUSD: 3.8,
    priceEUR: 3.5,
    description: 'Loaded with sweet bell peppers, sliced button mushrooms, black olives, juicy sweet corn, and red onions over melted mozzarella.',
    ingredients: [
      'Fresh Sliced Bell Peppers',
      'Button Mushrooms & Sweet Corn',
      'Sliced Black Olives & Red Onions',
      'Whole Milk Mozzarella',
      'Fresh Pizza Tomato Sauce'
    ],
    image: 'https://images.unsplash.com/photo-1576458088443-04a19bb13da6?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: false,
    isVegetarian: true,
    isGlutenFree: false,
    calories: 590,
    prepTime: '12 min',
    winePairing: 'Chilled Lemonade'
  },
  {
    id: 'domatos-chilled-cola-cooler',
    name: 'Chilled Fountain Soda & Mint Cooler',
    category: 'drinks',
    pricePKR: 250,
    priceUSD: 0.9,
    priceEUR: 0.8,
    description: 'Ice-cold fountain drink served with fresh lime wedge and crushed mint leaves on ice, the perfect companion for hot cheesy pizzas.',
    ingredients: [
      'Ice-Cold Fountain Soda',
      'Fresh Mint Leaves',
      'Sliced Lime Wedges',
      'Crushed Ice'
    ],
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isChefSpecial: false,
    isVegetarian: true,
    isGlutenFree: true,
    calories: 120,
    prepTime: '3 min',
    winePairing: 'Pizza Pair'
  }
];

export const initialReviews: Review[] = [
  {
    id: 'rev-1',
    author: 'HAMZA TARIQ',
    rating: 5,
    comment: 'Best pizza and fast food on Dr. Tusi Rd! The Domatos Royal Crown Crust pizza is unbeatable in Faisalabad. Cheesy, piping hot, and full of flavor. 4.9 rating is so well deserved!',
    date: 'Yesterday',
    visitedFor: 'Family Dinner'
  },
  {
    id: 'rev-2',
    author: 'FATIMA NOOR',
    rating: 5,
    comment: 'Lovely welcoming atmosphere with comfortable seating. Open till 12 AM which is ideal for late night pizza cravings. The loaded pizza fries and zinger burger are delicious.',
    date: '3 days ago',
    visitedFor: 'Late Night Pizza'
  },
  {
    id: 'rev-3',
    author: 'USMAN CHAUDHRY',
    rating: 5,
    comment: 'Tried the Chicken Fajita Pizza and Cheesy Garlic Bread. Incredible taste, huge cheese pull, and average spending is easily within Rs 1–1,000 per person. Fast takeout service!',
    date: '1 week ago',
    visitedFor: 'Takeout'
  },
  {
    id: 'rev-4',
    author: 'AYESHA MALIK',
    rating: 5,
    comment: 'Such a cozy spot on Dr. Tusi Rd! Great service, friendly staff, and the Malai Boti Pizza is my personal favorite. Perfect family fast food spot.',
    date: '2 weeks ago',
    visitedFor: 'Weekend Dine-in'
  },
  {
    id: 'rev-5',
    author: 'BILAL RIAZ',
    rating: 5,
    comment: '10/10 experience. The dough is freshly baked and toppings are generous. Definitely the go-to pizza place in Faisalabad.',
    date: '3 weeks ago',
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
