import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Leaf, Wheat, Clock, Flame, Wine, Calendar } from 'lucide-react';
import { Dish, Currency } from '../types';
import { formatPrice } from '../data/restaurantData';

interface DishDetailModalProps {
  dish: Dish | null;
  isOpen: boolean;
  onClose: () => void;
  currentCurrency: Currency;
  onReserveForDish: (dish: Dish) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  isOpen,
  onClose,
  currentCurrency,
  onReserveForDish,
}) => {
  if (!isOpen || !dish) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93 }}
          className="bg-[#13171c] border border-white/10 rounded-3xl max-w-2xl w-full overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95)] relative flex flex-col max-h-[90vh]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close details"
          >
            <X size={18} />
          </button>

          {/* Top Hero Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#1c222a] shrink-0">
            <img
              src={dish.image}
              alt={dish.name}
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop';
              }}
              className="w-full h-full object-cover filter brightness-95 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#13171c] via-[#13171c]/30 to-transparent" />

            {/* Badges */}
            <div className="absolute bottom-4 left-6 flex flex-wrap items-center gap-2">
              {dish.isChefSpecial && (
                <span className="px-3 py-1 rounded-full bg-[#b5c99a] text-[#0d0f11] font-semibold text-xs uppercase tracking-wider flex items-center gap-1 shadow-lg">
                  <Sparkles size={12} />
                  <span>Chef's Masterpiece</span>
                </span>
              )}
              {dish.isVegetarian && (
                <span className="px-3 py-1 rounded-full bg-[#203020]/90 backdrop-blur-sm border border-[#b5c99a]/40 text-[#b5c99a] text-xs flex items-center gap-1">
                  <Leaf size={12} />
                  <span>Vegetarian</span>
                </span>
              )}
              {dish.isGlutenFree && (
                <span className="px-3 py-1 rounded-full bg-[#332b1a]/90 backdrop-blur-sm border border-[#c6a869]/40 text-[#c6a869] text-xs flex items-center gap-1">
                  <Wheat size={12} />
                  <span>Gluten Free</span>
                </span>
              )}
            </div>
          </div>

          {/* Scrollable details */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/5 pb-4">
              <h3 className="font-cormorant text-3xl sm:text-4xl italic text-white font-normal">
                {dish.name}
              </h3>
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#c6a869]">
                {formatPrice(dish, currentCurrency)}
              </span>
            </div>

            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
              {dish.description}
            </p>

            {/* Meta Row (Prep, Calories, Wine) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-[#1a2027] p-3 rounded-2xl border border-white/5 flex items-center gap-3">
                <Clock size={18} className="text-[#b5c99a] shrink-0" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-light">
                    Preparation
                  </span>
                  <span className="text-xs text-white font-medium">{dish.prepTime}</span>
                </div>
              </div>

              <div className="bg-[#1a2027] p-3 rounded-2xl border border-white/5 flex items-center gap-3">
                <Flame size={18} className="text-amber-400 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-light">
                    Energy
                  </span>
                  <span className="text-xs text-white font-medium">{dish.calories} kcal</span>
                </div>
              </div>

              <div className="bg-[#1a2027] p-3 rounded-2xl border border-white/5 flex items-center gap-3">
                <Wine size={18} className="text-[#c6a869] shrink-0" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-light">
                    Pairing
                  </span>
                  <span className="text-xs text-[#c6a869] font-medium truncate block">
                    {dish.winePairing || 'Sommelier Choice'}
                  </span>
                </div>
              </div>
            </div>

            {/* Ingredients Chips */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-neutral-400 mb-3 font-light">
                Key Artisan Ingredients
              </h4>
              <div className="flex flex-wrap gap-2">
                {dish.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full bg-[#1c222a] border border-white/5 text-xs text-neutral-300"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onReserveForDish(dish);
                }}
                className="flex-1 py-3.5 rounded-full bg-[#b5c99a] text-[#0d0f11] font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-[#cde4b3] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#b5c99a]/20"
              >
                <Calendar size={16} />
                <span>Reserve Table For This Dish</span>
              </button>
              <button
                onClick={onClose}
                className="py-3.5 px-6 rounded-full border border-white/20 text-neutral-300 hover:text-white text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Return to Menu
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
