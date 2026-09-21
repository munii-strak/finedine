import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, MapPin, Clock, PhoneCall, Navigation, CheckCircle2 } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

interface StoryProps {
  onOpenReservation: () => void;
}

export const Story: React.FC<StoryProps> = ({ onOpenReservation }) => {
  return (
    <section id="story" className="py-20 sm:py-28 bg-[#0d0f11] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Delicious Story Text */}
          <div className="lg:col-span-6 relative">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c6a869] font-medium block mb-3">
              {restaurantInfo.tagline}
            </span>

            <div className="relative mb-6">
              <div className="absolute -top-10 left-0 -z-10 opacity-20 pointer-events-none select-none hidden sm:block">
                <span className="font-cormorant text-5xl sm:text-6xl lg:text-7xl italic block text-outline-layered tracking-tight leading-tight">
                  Our Delicious Story
                </span>
                <span className="font-cormorant text-5xl sm:text-6xl lg:text-7xl italic block text-outline-layered tracking-tight leading-tight">
                  Fine Dine By Bao G
                </span>
              </div>
              <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl italic text-white font-normal leading-tight">
                Our Delicious Story
              </h2>
            </div>

            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-6 max-w-xl">
              {restaurantInfo.story}
            </p>

            {/* Service badges list */}
            <div className="grid grid-cols-2 gap-3 mb-8 max-w-md">
              {restaurantInfo.services.map((service) => (
                <div key={service} className="flex items-center gap-2 text-xs text-neutral-300 font-light">
                  <CheckCircle2 size={14} className="text-[#b5c99a] shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <motion.button
                id="story-reserve-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenReservation}
                className="px-7 py-3 rounded-full border border-white/30 text-white font-light text-sm tracking-wider uppercase hover:bg-[#b5c99a] hover:text-[#0d0f11] hover:border-[#b5c99a] transition-all duration-300 flex items-center gap-2 group cursor-pointer"
              >
                <span>Reserve your table</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>

              <a
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm font-light hover:text-white hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Navigation size={14} className="text-[#b5c99a]" />
                <span>Open Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right: Atmosphere Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"
                  alt="Fine Dine restaurant cozy dining room on Susan Road Faisalabad"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10">
                <span className="font-cormorant italic text-sm text-white">Susan Road Family Dining</span>
                <span className="text-[#b5c99a] font-medium">Wheelchair Accessible</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Information Highlight Pillars */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 bg-[#13161a]/60 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1b1f24] border border-white/10 flex items-center justify-center text-[#b5c99a] shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-cormorant text-xl text-white font-normal mb-1">Locate Us</h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">{restaurantInfo.address}</p>
                <p className="text-[11px] text-neutral-400 mt-1 font-mono">Plus Code: {restaurantInfo.plusCode}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1b1f24] border border-white/10 flex items-center justify-center text-[#c6a869] shrink-0">
                <Clock size={22} />
              </div>
              <div>
                <h3 className="font-cormorant text-xl text-white font-normal mb-1">Open Hours</h3>
                <p className="text-xs sm:text-sm text-emerald-400 font-medium">{restaurantInfo.hours}</p>
                <p className="text-xs text-neutral-400 font-light mt-1">Popular times: Saturdays 6 PM – 10 PM</p>
                <p className="text-[11px] text-neutral-400 mt-0.5">Late night dining until 1:00 AM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1b1f24] border border-white/10 flex items-center justify-center text-[#b5c99a] shrink-0">
                <PhoneCall size={22} />
              </div>
              <div>
                <h3 className="font-cormorant text-xl text-white font-normal mb-1">Direct Call & WhatsApp</h3>
                <a
                  href={`tel:${restaurantInfo.phoneRaw}`}
                  className="text-xs sm:text-sm text-neutral-200 font-medium hover:text-[#b5c99a] transition-colors block"
                >
                  {restaurantInfo.phone}
                </a>
                <p className="text-xs text-neutral-400 font-light mt-1">Dine-in, Takeout & Fast Delivery</p>
                <p className="text-[11px] text-[#c6a869] mt-0.5">{restaurantInfo.priceRange}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
