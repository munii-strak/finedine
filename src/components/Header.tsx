import React, { useState, useEffect } from 'react';
import { Currency } from '../types';
import { Menu as MenuIcon, X } from 'lucide-react';

interface HeaderProps {
  currentCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  onOpenMenuModal: () => void;
  onOpenReservation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCurrency,
  onCurrencyChange,
  onOpenMenuModal,
  onOpenReservation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d0f11]/95 backdrop-blur-md border-b border-white/5 shadow-2xl'
          : 'bg-[#0d0f11]/80 backdrop-blur-sm'
      }`}
    >
      {/* Top Banner: Available in Pakistan Only */}
      <div className="bg-[#111712] border-b border-[#243322] text-[11px] text-neutral-300 py-1.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-semibold tracking-wider shrink-0 flex items-center gap-1">
              <span>🇵🇰</span>
              <span>Available in Pakistan Only</span>
            </span>
            <span className="hidden sm:inline text-neutral-500">|</span>
            <span className="text-neutral-300 font-light truncate hidden sm:inline">
              Susan Road, Officer Colony 1, Faisalabad · Dine-in, Takeaway & Local Delivery
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0 text-[11px]">
            <span className="text-[#c6a869] font-medium hidden md:inline">Currency: PKR (Rs)</span>
            <a
              href="tel:+923017864478"
              className="text-[#b5c99a] hover:text-white transition-colors font-medium flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>0301 7864478</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="group flex flex-col justify-center focus:outline-none"
        >
          <div className="flex items-baseline gap-1.5">
            <span className="font-cormorant text-2xl sm:text-3xl lg:text-4xl italic font-normal tracking-wide text-[#b5c99a] group-hover:text-[#d8f3dc] transition-colors leading-none">
              Fine Dine
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#c6a869] font-medium font-sans">
              By Bao G
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-[0.18em] text-neutral-400 font-light hidden sm:block">
            Susan Road, Faisalabad, Pakistan
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <button
            id="nav-link-home"
            onClick={() => scrollToSection('home')}
            className="text-sm tracking-wide text-[#e8e6e3] hover:text-[#b5c99a] transition-colors focus:outline-none font-normal cursor-pointer"
          >
            Home
          </button>
          <button
            id="nav-link-about"
            onClick={() => scrollToSection('story')}
            className="text-sm tracking-wide text-[#a0a5ad] hover:text-[#b5c99a] transition-colors focus:outline-none font-normal cursor-pointer"
          >
            About Us
          </button>
          <button
            id="nav-link-menu"
            onClick={() => scrollToSection('menu')}
            className="text-sm tracking-wide text-[#a0a5ad] hover:text-[#b5c99a] transition-colors focus:outline-none font-normal cursor-pointer"
          >
            Menu
          </button>
          <button
            id="nav-link-events"
            onClick={() => scrollToSection('events')}
            className="text-sm tracking-wide text-[#a0a5ad] hover:text-[#b5c99a] transition-colors focus:outline-none font-normal cursor-pointer"
          >
            Services & Delivery
          </button>
          <button
            id="nav-link-reservation"
            onClick={() => scrollToSection('reservation')}
            className="text-sm tracking-wide text-[#a0a5ad] hover:text-[#b5c99a] transition-colors focus:outline-none font-normal cursor-pointer"
          >
            Reservation
          </button>
        </nav>

        {/* Currency & Availability Indicator & Reservation CTA */}
        <div className="hidden sm:flex items-center gap-3 lg:gap-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#182317] border border-emerald-500/30 text-xs text-emerald-300">
            <span>🇵🇰</span>
            <span className="font-medium">Pakistan Only</span>
            <span className="text-neutral-500">·</span>
            <span className="font-semibold text-white">PKR (Rs)</span>
          </div>

          <button
            id="nav-book-btn"
            onClick={onOpenReservation}
            className="px-5 py-2 rounded-full border border-white/20 text-xs sm:text-sm tracking-wider font-light uppercase hover:bg-[#b5c99a] hover:text-[#0d0f11] hover:border-[#b5c99a] transition-all duration-300 focus:outline-none cursor-pointer"
          >
            Reservation
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <span className="px-2 py-0.5 rounded-full bg-[#182317] border border-emerald-500/30 text-[10px] text-emerald-300 font-medium">
            🇵🇰 PKR
          </span>

          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-300 hover:text-white bg-white/5 border border-white/10 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#111417]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left text-lg font-cormorant text-[#e8e6e3] hover:text-[#b5c99a] py-1 border-b border-white/5"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('story')}
              className="text-left text-lg font-cormorant text-[#a0a5ad] hover:text-[#b5c99a] py-1 border-b border-white/5"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-left text-lg font-cormorant text-[#a0a5ad] hover:text-[#b5c99a] py-1 border-b border-white/5"
            >
              Discover Menu
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="text-left text-lg font-cormorant text-[#a0a5ad] hover:text-[#b5c99a] py-1 border-b border-white/5"
            >
              Services & Events
            </button>
            <button
              onClick={() => scrollToSection('reservation')}
              className="text-left text-lg font-cormorant text-[#a0a5ad] hover:text-[#b5c99a] py-1 border-b border-white/5"
            >
              Book Table
            </button>

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 rounded-full bg-[#b5c99a] text-[#0d0f11] font-medium text-sm text-center uppercase tracking-wider hover:bg-[#cde4b3] transition-colors"
              >
                Book Table
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenMenuModal();
                }}
                className="w-full py-3 rounded-full border border-white/20 text-neutral-300 text-xs text-center"
              >
                View Full Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
