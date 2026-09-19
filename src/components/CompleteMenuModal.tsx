import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, Sparkles, Leaf, Wheat, Wine, Clock, Flame } from 'lucide-react';
import { Dish, Currency } from '../types';
import { dishesData, formatPrice } from '../data/restaurantData';

interface CompleteMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  currentCurrency: Currency;
  onSelectDish: (dish: Dish) => void;
  onReserveTable: () => void;
}

export const CompleteMenuModal: React.FC<CompleteMenuModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'all',
  currentCurrency,
  onSelectDish,
  onReserveTable,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyChefSpecial, setOnlyChefSpecial] = useState(false);
  const [onlyVegetarian, setOnlyVegetarian] = useState(false);
  const [onlyGlutenFree, setOnlyGlutenFree] = useState(false);

  // Sync category if initialCategory changes when modal is opened
  React.useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory, isOpen]);

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'breakfast', label: '🥞 Breakfasts' },
    { id: 'dinner', label: '🥩 Dinners' },
    { id: 'snacks', label: '🧀 Artisan Snacks' },
    { id: 'pasta', label: '🍝 Pastas' },
    { id: 'grill', label: '🔥 Grill & Steaks' },
    { id: 'burgers', label: '🍔 Zinger & Burgers' },
    { id: 'shawarma', label: '🌯 Shawarma & Wraps' },
    { id: 'street-food', label: '🍟 Loaded Fries & Bites' },
    { id: 'dessert', label: '🍰 Desserts' },
    { id: 'drinks', label: '🍸 Cocktails & Wines' },
  ];

  const filteredDishes = useMemo(() => {
    return dishesData.filter((dish) => {
      // Category filter
      if (selectedCategory !== 'all' && dish.category !== selectedCategory) {
        return false;
      }
      // Dietary filters
      if (onlyChefSpecial && !dish.isChefSpecial) return false;
      if (onlyVegetarian && !dish.isVegetarian) return false;
      if (onlyGlutenFree && !dish.isGlutenFree) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = dish.name.toLowerCase().includes(query);
        const matchesDesc = dish.description.toLowerCase().includes(query);
        const matchesIngredients = dish.ingredients.some((ing) =>
          ing.toLowerCase().includes(query)
        );
        return matchesName || matchesDesc || matchesIngredients;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, onlyChefSpecial, onlyVegetarian, onlyGlutenFree]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#121519] border border-white/10 rounded-3xl w-full max-w-6xl max-h-[92vh] flex flex-col shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden"
        >
          {/* Modal Header */}
          <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#15191e]/80">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#b5c99a] font-light block mb-0.5">
                Gastronomic Collection
              </span>
              <h2 className="font-cormorant text-2xl sm:text-3xl italic text-white font-normal">
                Fine Dine Digital Menu & Offerings
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Filter Bar */}
          <div className="p-4 sm:px-6 bg-[#161a1f] border-b border-white/5 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {/* Search input */}
              <div className="relative flex-1 w-full">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search dishes, ingredients (e.g. truffle, lamb, brioche)..."
                  className="w-full bg-[#1e2329] border border-white/10 rounded-2xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#b5c99a]"
                />
              </div>

              {/* Dietary check toggles */}
              <div className="flex items-center gap-2 self-start sm:self-auto text-xs">
                <button
                  type="button"
                  onClick={() => setOnlyChefSpecial(!onlyChefSpecial)}
                  className={`px-3 py-1.5 rounded-full border transition-all flex items-center gap-1.5 cursor-pointer ${
                    onlyChefSpecial
                      ? 'bg-[#2b3327] border-[#b5c99a] text-[#b5c99a]'
                      : 'bg-[#1e2329] border-white/10 text-neutral-400 hover:text-white'
                  }`}
                >
                  <Sparkles size={12} />
                  <span>Chef's Special</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOnlyVegetarian(!onlyVegetarian)}
                  className={`px-3 py-1.5 rounded-full border transition-all flex items-center gap-1.5 cursor-pointer ${
                    onlyVegetarian
                      ? 'bg-[#203020] border-[#b5c99a] text-[#b5c99a]'
                      : 'bg-[#1e2329] border-white/10 text-neutral-400 hover:text-white'
                  }`}
                >
                  <Leaf size={12} />
                  <span>Vegetarian</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOnlyGlutenFree(!onlyGlutenFree)}
                  className={`px-3 py-1.5 rounded-full border transition-all flex items-center gap-1.5 cursor-pointer ${
                    onlyGlutenFree
                      ? 'bg-[#332b1a] border-[#c6a869] text-[#c6a869]'
                      : 'bg-[#1e2329] border-white/10 text-neutral-400 hover:text-white'
                  }`}
                >
                  <Wheat size={12} />
                  <span>Gluten Free</span>
                </button>
              </div>
            </div>

            {/* Category Scrollable Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#b5c99a] text-[#0d0f11] font-medium shadow-md'
                      : 'bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dishes List Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-4">
            {filteredDishes.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-cormorant text-2xl text-neutral-400 italic">
                  No delicacies matched your current filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                    setOnlyChefSpecial(false);
                    setOnlyVegetarian(false);
                    setOnlyGlutenFree(false);
                  }}
                  className="mt-4 px-5 py-2 rounded-full border border-white/20 text-xs text-white hover:bg-white/10"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredDishes.map((dish) => (
                  <motion.div
                    key={dish.id}
                    whileHover={{ y: -3 }}
                    onClick={() => {
                      onClose();
                      onSelectDish(dish);
                    }}
                    className="bg-[#171b21] border border-white/10 hover:border-white/25 rounded-2xl p-4 flex flex-col justify-between cursor-pointer group shadow-lg"
                  >
                    <div className="flex gap-4">
                      {/* Thumbnail */}
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-[#20252c]">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.src =
                              'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop';
                          }}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1 mb-1">
                          <h4 className="font-cormorant text-lg italic text-white group-hover:text-[#b5c99a] transition-colors truncate">
                            {dish.name}
                          </h4>
                          <span className="font-mono text-xs font-semibold text-[#c6a869] shrink-0">
                            {formatPrice(dish, currentCurrency)}
                          </span>
                        </div>

                        <p className="text-[11px] text-neutral-400 line-clamp-2 font-light leading-relaxed mb-2">
                          {dish.description}
                        </p>

                        <div className="flex items-center gap-2 text-[10px] text-neutral-400">
                          <span className="flex items-center gap-0.5">
                            <Clock size={11} className="text-[#b5c99a]" />
                            {dish.prepTime}
                          </span>
                          <span className="flex items-center gap-0.5">
                            <Flame size={11} className="text-amber-400" />
                            {dish.calories} kcal
                          </span>
                        </div>
                      </div>
                    </div>

                    {dish.winePairing && (
                      <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] text-[#c6a869] italic">
                        <span className="flex items-center gap-1">
                          <Wine size={11} />
                          <span className="truncate">{dish.winePairing}</span>
                        </span>
                        <span className="text-neutral-400 group-hover:text-white transition-colors">
                          View &rarr;
                        </span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Modal Footer CTA */}
          <div className="p-4 sm:p-5 border-t border-white/10 bg-[#15191e] flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-neutral-400 font-light text-center sm:text-left">
              Fresh farm ingredients sourced directly from the Fine Dine private greenhouse estate.
            </p>
            <button
              onClick={() => {
                onClose();
                onReserveTable();
              }}
              className="px-6 py-2.5 rounded-full bg-[#b5c99a] text-[#0d0f11] font-medium text-xs uppercase tracking-wider hover:bg-[#cde4b3] transition-colors cursor-pointer"
            >
              Reserve Table For Today
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
