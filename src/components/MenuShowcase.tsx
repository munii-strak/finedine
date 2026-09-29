import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, UtensilsCrossed } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

interface MenuShowcaseProps {
  onOpenCategoryMenu: (category: string) => void;
  onOpenFullMenu: () => void;
}

export const MenuShowcase: React.FC<MenuShowcaseProps> = ({
  onOpenCategoryMenu,
  onOpenFullMenu,
}) => {
  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#0c0e10] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#b5c99a]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#c6a869]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-6 relative">
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-light block mb-3">
              Discover
            </span>
            <div className="relative">
              <div className="absolute -top-10 left-0 -z-10 opacity-20 pointer-events-none select-none hidden sm:block">
                <span className="font-cormorant text-5xl sm:text-6xl lg:text-7xl italic block text-outline-layered tracking-tight leading-none">
                  Our Menu
                </span>
                <span className="font-cormorant text-5xl sm:text-6xl lg:text-7xl italic block text-outline-layered tracking-tight leading-none mt-1">
                  Our Menu
                </span>
              </div>
              <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl italic text-white font-normal">
                Our Menu
              </h2>
            </div>
          </div>
          <div className="lg:col-span-6">
            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed max-w-xl">
              {restaurantInfo.menuStory}
            </p>
          </div>
        </div>

        {/* 3 Showcase Pillars with circular plates */}
        <div className="space-y-24 sm:space-y-32">
          {/* Pillar 1: Royal Crown Crust Pizzas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
                className="relative cursor-pointer group"
                onClick={() => onOpenCategoryMenu('pizza')}
              >
                <div className="absolute -inset-4 sm:-inset-6 bg-radial from-[#b5c99a]/10 via-transparent to-transparent rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden p-3 bg-[#14171a] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
                  <img
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop"
                    alt="Royal Crown Crust Pizza with molten cheese and savory toppings"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none" />
                </div>
                <div className="absolute bottom-2 right-4 bg-[#14171a]/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#b5c99a] flex items-center gap-1.5 shadow-lg">
                  <Sparkles size={12} />
                  <span>Crown Crust Masterpiece</span>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              <h3 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl italic text-white font-normal mb-3">
                Royal Crown Crust Pizzas
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base font-light max-w-md mb-8 leading-relaxed">
                Signature crown-folded edges filled with rich cream cheese and savory fillings, topped with aromatic spiced chicken, sweet peppers, and bubbling mozzarella.
              </p>
              <motion.button
                id="menu-crown-pizza-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenCategoryMenu('pizza')}
                className="px-8 py-3 rounded-full border border-white/30 text-white font-light text-xs sm:text-sm tracking-widest uppercase hover:bg-white hover:text-[#0d0f11] hover:border-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>View Menu</span>
                <ArrowRight size={15} />
              </motion.button>
            </div>
          </div>

          {/* Pillar 2: Chicken Fajita & Tikka Pizzas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
              <h3 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl italic text-white font-normal mb-3">
                Chicken Fajita & Tikka Pizzas
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base font-light max-w-md mb-8 leading-relaxed">
                Stone-baked artisan crust topped with tender tandoori chicken tikka cubes, crunchy capsicum, red onions, black olives, and Domatos secret tomato-herb sauce.
              </p>
              <motion.button
                id="menu-fajita-pizza-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenCategoryMenu('pizza')}
                className="px-8 py-3 rounded-full border border-white/30 text-white font-light text-xs sm:text-sm tracking-widest uppercase hover:bg-white hover:text-[#0d0f11] hover:border-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>View Menu</span>
                <ArrowRight size={15} />
              </motion.button>
            </div>

            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
                className="relative cursor-pointer group"
                onClick={() => onOpenCategoryMenu('pizza')}
              >
                <div className="absolute -inset-4 sm:-inset-6 bg-radial from-[#c6a869]/10 via-transparent to-transparent rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden p-3 bg-[#14171a] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
                  <img
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop"
                    alt="Chicken Fajita Pizza stone-baked with roasted peppers and stretchy cheese"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none" />
                </div>
                <div className="absolute bottom-2 left-4 bg-[#14171a]/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#c6a869] flex items-center gap-1.5 shadow-lg">
                  <Sparkles size={12} />
                  <span>Fajita Sensation</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Pillar 3: Creamy Malai Boti & Cheese Pizzas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
                className="relative cursor-pointer group"
                onClick={() => onOpenCategoryMenu('pizza')}
              >
                <div className="absolute -inset-4 sm:-inset-6 bg-radial from-[#b5c99a]/10 via-transparent to-transparent rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden p-3 bg-[#14171a] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
                  <img
                    src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop"
                    alt="Creamy Malai Boti Pizza with garlic white sauce and melted mozzarella"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none" />
                </div>
                <div className="absolute bottom-2 right-4 bg-[#14171a]/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#b5c99a] flex items-center gap-1.5 shadow-lg">
                  <Sparkles size={12} />
                  <span>Creamy Malai Boti</span>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              <h3 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl italic text-white font-normal mb-3">
                Creamy Malai Boti Feast
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base font-light max-w-md mb-8 leading-relaxed">
                Melt-in-your-mouth creamy malai boti chicken pieces bathed in decadent white garlic cream sauce, sprinkled with oregano and toasted golden mozzarella.
              </p>
              <motion.button
                id="menu-malai-pizza-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenCategoryMenu('pizza')}
                className="px-8 py-3 rounded-full border border-white/30 text-white font-light text-xs sm:text-sm tracking-widest uppercase hover:bg-white hover:text-[#0d0f11] hover:border-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>View Menu</span>
                <ArrowRight size={15} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Quick Menu Category Navigation & Complete Menu CTA */}
        <div className="mt-20 flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenCategoryMenu('pizza')}
              className="px-4 py-1.5 rounded-full bg-[#1e231a] border border-[#b5c99a]/30 hover:border-[#b5c99a] text-xs text-[#b5c99a] hover:text-white transition-colors cursor-pointer"
            >
              🍕 Royal Crown Crust Pizzas
            </button>
            <button
              onClick={() => onOpenCategoryMenu('pizza')}
              className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#b5c99a] text-xs text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              🍕 Chicken Fajita & Tikka
            </button>
            <button
              onClick={() => onOpenCategoryMenu('pizza')}
              className="px-4 py-1.5 rounded-full bg-[#2a2416] border border-[#c6a869]/30 hover:border-[#c6a869] text-xs text-[#c6a869] hover:text-white transition-colors cursor-pointer"
            >
              🍕 Creamy Malai Boti
            </button>
            <button
              onClick={() => onOpenCategoryMenu('pizza')}
              className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#b5c99a] text-xs text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              🥟 Stuffed Calzones
            </button>
            <button
              onClick={() => onOpenCategoryMenu('street-food')}
              className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#b5c99a] text-xs text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              🍟 Loaded Pizza Fries
            </button>
          </div>

          <button
            onClick={onOpenFullMenu}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#181c20] hover:bg-[#20252b] border border-white/15 text-sm tracking-wider text-white font-light uppercase transition-all duration-300 hover:border-[#b5c99a] shadow-lg shadow-black/40 mt-2 cursor-pointer"
          >
            <UtensilsCrossed size={16} className="text-[#b5c99a]" />
            <span>Open Complete Digital Pizza Menu</span>
          </button>
        </div>
      </div>
    </section>
  );
};
