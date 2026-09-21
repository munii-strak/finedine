import React, { useState } from 'react';
import { ArrowUp, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Check, ExternalLink, Navigation } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#08090b] text-neutral-400 text-xs border-t border-white/5 relative">
      {/* Upper Footer: Brand & Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1 & 2: Brand Story */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="font-cormorant text-4xl italic text-white font-normal block leading-none">
                Fine Dine
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#c6a869] font-medium font-sans mt-1 block">
                By Bao G
              </span>
            </div>
            <p className="text-neutral-400 font-light max-w-sm text-xs sm:text-sm leading-relaxed">
              Faisalabad's celebrated culinary destination on Susan Road. Famous for golden crispy fried & charcoal grilled fish, gourmet burgers, artisan shawarma, and late-night family gatherings.
            </p>

            <div className="pt-1 flex flex-wrap gap-2 text-[11px] text-neutral-300">
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-medium flex items-center gap-1">
                <span>🇵🇰</span>
                <span>Available in Pakistan Only</span>
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Dine-in</span>
              <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Takeout</span>
              <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Faisalabad Delivery</span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">♿ Wheelchair Accessible</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-[#b5c99a] hover:border-[#b5c99a] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-[#b5c99a] hover:border-[#b5c99a] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={14} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-[#b5c99a] hover:border-[#b5c99a] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Col 3: Hours */}
          <div className="space-y-3">
            <h4 className="text-white text-xs uppercase tracking-wider font-medium">
              Opening Hours
            </h4>
            <div className="space-y-1.5 font-light">
              <p className="text-white font-normal">Monday – Sunday</p>
              <p className="text-emerald-400 font-medium">1:00 PM – 1:00 AM</p>
              <p className="text-neutral-400 text-[11px] pt-1">Open Daily · Closes 1:00 AM</p>
              <p className="text-[#c6a869] text-[11px]">Popular rush: 6:00 PM – 10:00 PM</p>
            </div>
          </div>

          {/* Col 4: Location & Contact */}
          <div className="space-y-3">
            <h4 className="text-white text-xs uppercase tracking-wider font-medium">
              Contact & Address
            </h4>
            <div className="space-y-2 font-light">
              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-[#b5c99a] shrink-0 mt-0.5" />
                <span className="leading-snug">{restaurantInfo.address}</span>
              </div>
              <div className="text-[11px] text-neutral-400 pl-5 font-mono">
                {restaurantInfo.plusCode}
              </div>
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-[#b5c99a] shrink-0" />
                <a href={`tel:${restaurantInfo.phoneRaw}`} className="hover:text-white transition-colors">
                  {restaurantInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-[#b5c99a] shrink-0" />
                <a href={`mailto:${restaurantInfo.email}`} className="hover:text-white transition-colors">
                  {restaurantInfo.email}
                </a>
              </div>
              <div className="pt-1 pl-5">
                <a
                  href={restaurantInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#b5c99a] hover:underline"
                >
                  <Navigation size={12} />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 5: Newsletter */}
          <div className="space-y-3">
            <h4 className="text-white text-xs uppercase tracking-wider font-medium">
              Family Feasts Club
            </h4>
            <p className="font-light text-[11px] leading-relaxed">
              Subscribe for weekend chef specials, fish season inaugurations, and seasonal promotions in Faisalabad.
            </p>

            {isSubscribed ? (
              <div className="p-2.5 rounded-xl bg-[#1b251b] border border-[#b5c99a]/30 text-[#b5c99a] flex items-center gap-1.5 text-[11px]">
                <Check size={14} />
                <span>Subscribed to Fine Dine Gazette!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email or phone"
                  className="w-full bg-[#14171a] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#b5c99a]"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-xl bg-white/10 hover:bg-[#b5c99a] hover:text-[#0d0f11] text-white text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-light text-neutral-400">
            &copy; {new Date().getFullYear()} Fine Dine By Bao G. Susan Road, Faisalabad, Pakistan · Available in Pakistan Only. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-white text-[11px] font-light transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
              <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
