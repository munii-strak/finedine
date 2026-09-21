import React from 'react';
import { motion } from 'motion/react';
import { UtensilsCrossed, ChevronDown, Star, MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
  onOpenMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onOpenMenu }) => {
  const scrollToSpace = () => {
    const el = document.getElementById('fine-dine-space');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#0d0f11] via-[#0f1215] to-[#0d0f11]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#b5c99a]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-[#c6a869]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-6 flex flex-col justify-center relative select-none">
            {/* Verified Google Maps & Pakistan Exclusivity Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex flex-wrap items-center gap-2 mb-4"
            >
              <span className="px-3 py-1 rounded-full bg-[#182616] border border-emerald-500/40 text-emerald-300 text-xs font-medium flex items-center gap-1.5 shadow-sm">
                <span>🇵🇰</span>
                <span className="font-semibold">Available in Pakistan Only</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-[#181d15] border border-[#b5c99a]/30 text-[#b5c99a] text-xs font-medium flex items-center gap-1.5 shadow-sm">
                <Star size={13} className="fill-[#b5c99a] text-[#b5c99a]" />
                <span className="font-semibold">{restaurantInfo.rating.toFixed(1)}</span>
                <span className="text-neutral-400">({restaurantInfo.reviewCount} Reviews)</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-light">
                {restaurantInfo.priceRange}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open · Closes 1 AM</span>
              </span>
            </motion.div>

            {/* Layered decorative stroke background */}
            <div className="absolute -top-10 left-0 -z-10 opacity-25 select-none pointer-events-none hidden sm:block">
              <span className="font-cormorant text-6xl sm:text-7xl lg:text-8xl italic block text-outline-layered tracking-tight leading-none">
                Fine Dine
              </span>
              <span className="font-cormorant text-5xl sm:text-6xl lg:text-7xl italic block text-outline-layered tracking-tight leading-none mt-1">
                By Bao G
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            >
              <div className="mb-2">
                <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#c6a869] font-medium block">
                  Best Restaurant in Faisalabad
                </span>
              </div>

              <h1 className="font-cormorant text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal leading-[1.06] tracking-tight text-white mb-4">
                <span className="block italic">Welcome</span>
                <span className="block italic">to Fine Dine</span>
                <span className="block italic text-[#e3dac9] text-3xl sm:text-4xl md:text-5xl font-light">
                  By Bao G
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6 max-w-lg">
                Faisalabad's celebrated destination on Susan Road for famous fried & charcoal grilled fish, gourmet burgers, artisan shawarmas, barbecue, and family feasts.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <motion.button
                  id="hero-reservation-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenReservation}
                  className="px-7 py-3 rounded-full border border-white/40 text-white font-light text-xs sm:text-sm tracking-widest uppercase hover:bg-white hover:text-[#0d0f11] hover:border-white transition-all duration-300 shadow-lg shadow-black/40 focus:outline-none cursor-pointer"
                >
                  Reserve Table
                </motion.button>

                <motion.button
                  id="hero-viewmenu-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenMenu}
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-light text-xs sm:text-sm tracking-wider hover:bg-white/10 hover:text-white transition-all duration-300 focus:outline-none flex items-center gap-2 cursor-pointer"
                >
                  <UtensilsCrossed size={14} className="text-[#b5c99a]" />
                  <span>Explore Menu</span>
                </motion.button>

                <a
                  href={`tel:${restaurantInfo.phoneRaw}`}
                  className="px-5 py-3 rounded-full bg-[#181d15] border border-[#b5c99a]/30 text-[#b5c99a] text-xs sm:text-sm font-medium hover:bg-[#b5c99a] hover:text-[#0d0f11] transition-all flex items-center gap-2"
                >
                  <Phone size={14} />
                  <span>{restaurantInfo.phone}</span>
                </a>
              </div>

              {/* Location and service attributes */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-400 font-light">
                <div className="flex items-start gap-2">
                  <MapPin size={15} className="text-[#b5c99a] shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{restaurantInfo.address}</span>
                </div>

                <a
                  href={restaurantInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#b5c99a] hover:text-white transition-colors shrink-0 text-xs underline"
                >
                  <Navigation size={13} />
                  <span>Google Maps</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Image Showcase */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="relative w-full max-w-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#b5c99a]/15 via-transparent to-[#c6a869]/10 rounded-full filter blur-2xl transform scale-90 pointer-events-none" />

              <div className="relative group cursor-pointer" onClick={onOpenMenu}>
                <div className="relative aspect-square rounded-full overflow-hidden p-2 sm:p-4 transition-transform duration-700 group-hover:scale-[1.02]">
                  <img
                    src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1000&auto=format&fit=crop"
                    alt="Bao G Crispy Fried & Charcoal Grilled Fish served fresh"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter contrast-105 brightness-95"
                  />
                  <div className="absolute inset-2 sm:inset-4 rounded-full border border-white/10 pointer-events-none" />
                </div>

                {/* Floating Chef Signature Badge for Fried & Grilled Fish */}
                <div className="absolute -bottom-2 sm:bottom-4 left-4 sm:left-8 bg-[#15181c]/95 backdrop-blur-md border border-[#b5c99a]/30 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#b5c99a]/20 flex items-center justify-center text-[#b5c99a] shrink-0">
                    <UtensilsCrossed size={17} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#c6a869] font-medium">
                      Storefront Specialty
                    </p>
                    <p className="text-xs sm:text-sm font-cormorant font-semibold text-white">
                      Bao G Crispy Fried & Grilled Fish
                    </p>
                  </div>
                </div>

                {/* Opening Hours & Services badge */}
                <div className="absolute top-10 right-6 bg-[#15181c]/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-[11px] text-[#b5c99a] hidden sm:flex items-center gap-1.5">
                  <Clock size={12} />
                  <span>Open till 1:00 AM</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll down trigger */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={scrollToSpace}
            className="text-neutral-500 hover:text-[#b5c99a] transition-colors p-2 focus:outline-none flex flex-col items-center gap-1 cursor-pointer"
            aria-label="Scroll to atmosphere"
          >
            <span className="text-[10px] tracking-widest uppercase opacity-60">Discover</span>
            <ChevronDown size={18} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
