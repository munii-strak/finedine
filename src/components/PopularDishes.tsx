import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Clock, Flame, Wine, Leaf, Wheat } from 'lucide-react';
import { Dish, Currency } from '../types';
import { dishesData, formatPrice } from '../data/restaurantData';

interface PopularDishesProps {
  currentCurrency: Currency;
  onSelectDish: (dish: Dish) => void;
}

export const PopularDishes: React.FC<PopularDishesProps> = ({
  currentCurrency,
  onSelectDish,
}) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filterMode, setFilterMode] = useState<'classic' | 'modern' | 'all'>('classic');

  const classicDishes = dishesData.filter((dish) =>
    ['bao-g-grilled-fish', 'bolognese', 'green-carbonara', 'rack-of-lamb'].includes(dish.id)
  );

  const modernDishes = dishesData.filter((dish) =>
    [
      'fine-dine-zinger-supreme',
      'damascus-chicken-shawarma',
      'wagyu-truffle-smash-burger',
      'royal-lamb-beef-shawarma-platter',
      'parmesan-truffle-fries',
    ].includes(dish.id)
  );

  const displayedDishes =
    filterMode === 'classic'
      ? classicDishes
      : filterMode === 'modern'
      ? modernDishes
      : [...classicDishes, ...modernDishes];

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="popular-dishes" className="py-24 bg-[#0d0f11] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Toggle */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#b5c99a] font-light block">
                Popular & Chef's Special
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-medium">
                🇵🇰 Available in Pakistan Only
              </span>
            </div>
            <h2 className="font-cormorant text-4xl sm:text-5xl italic text-white font-normal">
              Dishes of the House
            </h2>
            <p className="text-xs text-neutral-400 font-light mt-1">
              Freshly prepared daily in Faisalabad · All prices in Pakistani Rupees (PKR / Rs)
            </p>
          </div>

          {/* Filter segment tabs */}
          <div className="flex items-center rounded-full bg-[#15191d] border border-white/10 p-1 self-start md:self-auto text-xs">
            <button
              onClick={() => setFilterMode('classic')}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                filterMode === 'classic'
                  ? 'bg-[#2b3327] text-[#b5c99a] font-medium border border-[#b5c99a]/30 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Classic Fine Dining
            </button>
            <button
              onClick={() => setFilterMode('modern')}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                filterMode === 'modern'
                  ? 'bg-[#332b1a] text-[#c6a869] font-medium border border-[#c6a869]/30 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Street Gourmet & Grill
            </button>
            <button
              onClick={() => setFilterMode('all')}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                filterMode === 'all'
                  ? 'bg-white/10 text-white font-medium border border-white/20 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Offerings
            </button>
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedDishes.map((dish) => {
            const isFav = favorites.includes(dish.id);
            return (
              <motion.div
                key={dish.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                onClick={() => onSelectDish(dish)}
                className="bg-[#13161a] border border-white/10 hover:border-white/25 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between group cursor-pointer"
              >
                {/* Image Header with floating tags */}
                <div className="relative h-56 w-full overflow-hidden bg-[#181c22]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop';
                    }}
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13161a] via-transparent to-black/30 pointer-events-none" />

                  {/* Favorite Heart Button */}
                  <button
                    onClick={(e) => toggleFavorite(e, dish.id)}
                    className={`absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full backdrop-blur-md border flex items-center justify-center transition-all cursor-pointer ${
                      isFav
                        ? 'bg-rose-950/80 border-rose-500/50 text-rose-400'
                        : 'bg-black/50 border-white/15 text-white/70 hover:text-white hover:bg-black/80'
                    }`}
                    aria-label="Add to favorites"
                  >
                    <Heart size={16} className={isFav ? 'fill-rose-500 text-rose-500' : ''} />
                  </button>

                  {/* Category & Chef Tag */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5">
                    {dish.isChefSpecial && (
                      <span className="px-2.5 py-1 rounded-full bg-[#b5c99a] text-[#0d0f11] font-semibold text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-md">
                        <Sparkles size={11} />
                        <span>Chef Special</span>
                      </span>
                    )}
                    {dish.isVegetarian && (
                      <span className="px-2.5 py-1 rounded-full bg-[#203020] border border-[#b5c99a]/30 text-[#b5c99a] text-[10px] flex items-center gap-1">
                        <Leaf size={11} />
                        <span>Veg</span>
                      </span>
                    )}
                    {dish.isGlutenFree && (
                      <span className="px-2.5 py-1 rounded-full bg-[#332b1a] border border-[#c6a869]/30 text-[#c6a869] text-[10px] flex items-center gap-1">
                        <Wheat size={11} />
                        <span>GF</span>
                      </span>
                    )}
                  </div>

                  {/* Price Tag in bottom left of image */}
                  <div className="absolute bottom-3 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                    <span className="font-mono text-sm font-semibold text-[#e3dac9]">
                      {formatPrice(dish, currentCurrency)}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-cormorant text-2xl italic text-white font-normal group-hover:text-[#b5c99a] transition-colors mb-2">
                      {dish.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 font-light line-clamp-2 leading-relaxed mb-4">
                      {dish.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-white/5">
                    {/* Meta info row */}
                    <div className="flex items-center justify-between text-xs text-neutral-400">
                      <div className="flex items-center gap-1 text-neutral-300">
                        <Clock size={13} className="text-[#b5c99a]" />
                        <span>{dish.prepTime}</span>
                      </div>
                      <div className="flex items-center gap-1 text-neutral-300">
                        <Flame size={13} className="text-amber-400" />
                        <span>{dish.calories} kcal</span>
                      </div>
                    </div>

                    {/* Wine Pairing */}
                    {dish.winePairing && (
                      <div className="flex items-center gap-1.5 text-[11px] text-[#c6a869] italic truncate">
                        <Wine size={12} className="shrink-0" />
                        <span className="truncate">{dish.winePairing}</span>
                      </div>
                    )}

                    {/* Quick action button */}
                    <div className="pt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectDish(dish);
                        }}
                        className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-300 hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
