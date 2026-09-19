import React, { useState } from 'react';
import { ArrowUp, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Check } from 'lucide-react';
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
            <span className="font-cormorant text-4xl italic text-white font-normal block">
              Fine Dine
            </span>
            <p className="text-neutral-400 font-light max-w-sm text-xs sm:text-sm leading-relaxed">
              A paradise for your taste buds, a delight in the pristine nature. Experience culinary artistry where nature and gastronomy harmonize.
            </p>

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
              <p>9:00 AM – 11:00 PM</p>
              <p className="text-neutral-500 pt-1">Kitchen closes at 10:30 PM</p>
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
                <span>{restaurantInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-[#b5c99a] shrink-0" />
                <a href={`tel:${restaurantInfo.phone}`} className="hover:text-white transition-colors">
                  {restaurantInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-[#b5c99a] shrink-0" />
                <a href={`mailto:${restaurantInfo.email}`} className="hover:text-white transition-colors">
                  {restaurantInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 5: Newsletter */}
          <div className="space-y-3">
            <h4 className="text-white text-xs uppercase tracking-wider font-medium">
              Private Gastronomy Club
            </h4>
            <p className="font-light text-[11px] leading-relaxed">
              Subscribe to receive private invitations to seasonal tasting menus and chef masterclasses.
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
                  placeholder="Enter your email address"
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
            &copy; {new Date().getFullYear()} Fine Dine Restaurant. All rights reserved.
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
