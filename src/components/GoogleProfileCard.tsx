import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  X,
  Camera,
  Star,
  Navigation,
  Bookmark,
  Compass,
  Smartphone,
  Share2,
  MapPin,
  Clock,
  Banknote,
  Phone,
  Grid,
  History,
  Tag,
  Edit3,
  HelpCircle,
  Globe,
  ChevronDown,
  ChevronRight,
  Check,
  Copy,
} from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

interface GoogleProfileCardProps {
  onOpenMenu?: () => void;
  onOpenReviews?: () => void;
  onOpenAbout?: () => void;
}

export const GoogleProfileCard: React.FC<GoogleProfileCardProps> = ({
  onOpenMenu,
  onOpenReviews,
  onOpenAbout,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'menu' | 'reviews' | 'about'>('overview');
  const [isSaved, setIsSaved] = useState(false);
  const [isHoursOpen, setIsHoursOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [showHistoryMsg, setShowHistoryMsg] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [customLabel, setCustomLabel] = useState<string | null>(null);
  const [isEditingLabel, setIsEditingLabel] = useState(false);
  const [labelInput, setLabelInput] = useState('');
  const [showPhotosModal, setShowPhotosModal] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    showToast(!isSaved ? 'Saved Domatos Pizza to your Google Maps Favorites' : 'Removed from saved places');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Domatos Pizza - Dr. Tusi Rd, Faisalabad`,
          text: `Check out Domatos Pizza on Dr. Tusi Rd, Faisalabad, Pakistan! 4.9 ⭐ rated fast food & pizza restaurant.`,
          url: window.location.href,
        });
      } catch {
        navigator.clipboard.writeText(window.location.href);
        showToast('Link copied to clipboard!');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link copied to clipboard!');
    }
  };

  const handleSendToPhone = () => {
    navigator.clipboard.writeText(restaurantInfo.phone);
    showToast(`Phone number ${restaurantInfo.phone} copied! Calling...`);
    window.location.href = `tel:${restaurantInfo.phoneRaw}`;
  };

  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText(restaurantInfo.plusCode);
    showToast(`Plus Code copied: ${restaurantInfo.plusCode}`);
  };

  const handleTabClick = (tab: 'overview' | 'menu' | 'reviews' | 'about') => {
    setActiveTab(tab);
    if (tab === 'menu' && onOpenMenu) {
      onOpenMenu();
    } else if (tab === 'reviews' && onOpenReviews) {
      onOpenReviews();
    } else if (tab === 'about' && onOpenAbout) {
      onOpenAbout();
    }
  };

  return (
    <div className="relative bg-[#111418] border border-white/10 rounded-3xl overflow-hidden shadow-2xl text-neutral-200">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-3 left-1/2 -translate-x-1/2 z-50 bg-[#1f2937] border border-emerald-500/40 text-emerald-300 text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
          >
            <Check size={14} />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Google Maps Search Bar (As shown in screenshot) */}
      <div className="p-3 bg-[#111418] border-b border-white/10">
        <div className="bg-white text-neutral-800 rounded-full px-4 py-2.5 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2 flex-1">
            <span className="text-neutral-700 font-medium text-sm">Domatos Pizza</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-500">
            <Search size={18} className="cursor-pointer hover:text-neutral-800" />
            <span className="w-px h-4 bg-neutral-300" />
            <X size={18} className="cursor-pointer hover:text-neutral-800" />
          </div>
        </div>
      </div>

      {/* Photo Header with "See photos" badge (Exact match with screenshot) */}
      <div className="relative w-full h-52 sm:h-64 bg-neutral-900 overflow-hidden group">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop"
          alt="Domatos Pizza cozy restaurant interior with colorful seating and ambient lights"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111418] via-transparent to-black/30" />
        
        {/* "See photos" badge */}
        <button
          onClick={() => {
            setShowPhotosModal(true);
            showToast('Opening Domatos Pizza photo gallery');
          }}
          className="absolute bottom-3 left-3 bg-black/75 hover:bg-black/90 backdrop-blur-sm border border-white/20 text-white text-xs px-3.5 py-1.5 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
        >
          <Camera size={14} />
          <span className="font-medium">See photos</span>
        </button>
      </div>

      {/* Business Name, Rating, Category from Screenshot */}
      <div className="px-5 sm:px-6 pt-4 pb-3">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Domatos Pizza
        </h2>

        <div className="flex items-center flex-wrap gap-1.5 mt-1.5 text-xs sm:text-sm">
          <span className="font-semibold text-white">4.9</span>
          <div className="flex items-center text-[#fbbc04]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-[#fbbc04]" />
            ))}
          </div>
          <span className="text-neutral-400">({restaurantInfo.reviewCount})</span>
          <span className="text-neutral-500">·</span>
          <span className="text-neutral-300 font-medium">Rs 1–1,000</span>
        </div>

        <p className="text-xs text-neutral-400 mt-1 font-medium">
          Fast food restaurant
        </p>
      </div>

      {/* Google Maps Tabs: Overview | Menu | Reviews | About */}
      <div className="flex items-center border-b border-white/10 px-4 sm:px-6">
        <button
          onClick={() => handleTabClick('overview')}
          className={`pb-3 px-3 text-sm font-medium transition-colors relative ${
            activeTab === 'overview'
              ? 'text-[#00c4cc] font-semibold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          Overview
          {activeTab === 'overview' && (
            <motion.div
              layoutId="gmap-active-tab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00c4cc]"
            />
          )}
        </button>

        <button
          onClick={() => handleTabClick('menu')}
          className={`pb-3 px-3 text-sm font-medium transition-colors relative ${
            activeTab === 'menu'
              ? 'text-[#00c4cc] font-semibold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          Menu
          {activeTab === 'menu' && (
            <motion.div
              layoutId="gmap-active-tab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00c4cc]"
            />
          )}
        </button>

        <button
          onClick={() => handleTabClick('reviews')}
          className={`pb-3 px-3 text-sm font-medium transition-colors relative ${
            activeTab === 'reviews'
              ? 'text-[#00c4cc] font-semibold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          Reviews
          {activeTab === 'reviews' && (
            <motion.div
              layoutId="gmap-active-tab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00c4cc]"
            />
          )}
        </button>

        <button
          onClick={() => handleTabClick('about')}
          className={`pb-3 px-3 text-sm font-medium transition-colors relative ${
            activeTab === 'about'
              ? 'text-[#00c4cc] font-semibold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          About
          {activeTab === 'about' && (
            <motion.div
              layoutId="gmap-active-tab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00c4cc]"
            />
          )}
        </button>
      </div>

      {/* Action Buttons Row matching screenshot: Directions, Save, Nearby, Send to phone, Share */}
      <div className="px-5 sm:px-6 py-5 border-b border-white/5 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
        {/* Directions */}
        <a
          href={restaurantInfo.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1.5 min-w-[64px] group focus:outline-none"
        >
          <div className="w-11 h-11 rounded-full bg-[#0b57d0] group-hover:bg-[#1a73e8] text-white flex items-center justify-center transition-transform group-hover:scale-105 shadow-md">
            <Navigation size={18} className="fill-white" />
          </div>
          <span className="text-[11px] text-neutral-300 group-hover:text-white">Directions</span>
        </a>

        {/* Save */}
        <button
          onClick={handleSave}
          className="flex flex-col items-center gap-1.5 min-w-[64px] group focus:outline-none cursor-pointer"
        >
          <div
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 ${
              isSaved
                ? 'bg-[#00c4cc] text-black shadow-md'
                : 'bg-[#1b2633] text-[#78a9ff] group-hover:bg-[#223244]'
            }`}
          >
            <Bookmark size={18} className={isSaved ? 'fill-black' : ''} />
          </div>
          <span className="text-[11px] text-neutral-300 group-hover:text-white">
            {isSaved ? 'Saved' : 'Save'}
          </span>
        </button>

        {/* Nearby */}
        <a
          href={`https://www.google.com/maps/search/food+near+Dr.+Tusi+Rd,+Faisalabad,+Pakistan`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1.5 min-w-[64px] group focus:outline-none"
        >
          <div className="w-11 h-11 rounded-full bg-[#1b2633] text-[#78a9ff] group-hover:bg-[#223244] flex items-center justify-center transition-transform group-hover:scale-105">
            <Compass size={18} />
          </div>
          <span className="text-[11px] text-neutral-300 group-hover:text-white">Nearby</span>
        </a>

        {/* Send to phone */}
        <button
          onClick={handleSendToPhone}
          className="flex flex-col items-center gap-1.5 min-w-[64px] group focus:outline-none cursor-pointer"
        >
          <div className="w-11 h-11 rounded-full bg-[#1b2633] text-[#78a9ff] group-hover:bg-[#223244] flex items-center justify-center transition-transform group-hover:scale-105">
            <Smartphone size={18} />
          </div>
          <span className="text-[11px] text-neutral-300 group-hover:text-white whitespace-nowrap">
            Send to phone
          </span>
        </button>

        {/* Share */}
        <button
          onClick={handleShare}
          className="flex flex-col items-center gap-1.5 min-w-[64px] group focus:outline-none cursor-pointer"
        >
          <div className="w-11 h-11 rounded-full bg-[#1b2633] text-[#78a9ff] group-hover:bg-[#223244] flex items-center justify-center transition-transform group-hover:scale-105">
            <Share2 size={18} />
          </div>
          <span className="text-[11px] text-neutral-300 group-hover:text-white">Share</span>
        </button>
      </div>

      {/* Service Highlights: ✓ Dine-in · ✓ Takeout */}
      <div
        className="px-5 sm:px-6 py-4 border-b border-white/5 flex items-center justify-between hover:bg-white/[0.02] transition-colors cursor-pointer"
        onClick={() => showToast('Service options: Dine-in and Takeout available daily at Domatos Pizza!')}
      >
        <div className="flex items-center gap-2 text-sm text-neutral-200">
          <span className="text-emerald-400 font-semibold">✓</span>
          <span className="font-medium">Dine-in</span>
          <span className="text-neutral-500 font-bold">·</span>
          <span className="text-emerald-400 font-semibold">✓</span>
          <span className="font-medium">Takeout</span>
        </div>
        <ChevronRight size={16} className="text-neutral-500" />
      </div>

      {/* Information Rows */}
      <div className="divide-y divide-white/5 text-xs sm:text-sm">
        {/* Row 1: Address */}
        <a
          href={restaurantInfo.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 sm:px-6 py-4 flex items-center gap-4 hover:bg-white/[0.02] transition-colors group"
        >
          <MapPin size={20} className="text-[#00c4cc] shrink-0" />
          <span className="text-neutral-200 group-hover:text-white group-hover:underline">
            {restaurantInfo.address}
          </span>
        </a>

        {/* Row 2: Hours */}
        <div className="px-5 sm:px-6 py-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setIsHoursOpen(!isHoursOpen)}
          >
            <div className="flex items-center gap-4">
              <Clock size={20} className="text-[#00c4cc] shrink-0" />
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-medium">Open</span>
                <span className="text-neutral-500">·</span>
                <span className="text-neutral-300">Closes 12 AM</span>
              </div>
            </div>
            <ChevronDown
              size={16}
              className={`text-neutral-400 transition-transform ${isHoursOpen ? 'rotate-180' : ''}`}
            />
          </div>

          <AnimatePresence>
            {isHoursOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 pl-9 space-y-1.5 text-xs text-neutral-400"
              >
                <div className="flex justify-between py-0.5">
                  <span className="text-white font-medium">Monday – Sunday</span>
                  <span className="text-emerald-400 font-mono">1:00 PM – 12:00 AM</span>
                </div>
                <div className="text-[11px] text-neutral-500 italic">
                  Fresh stone-baked pizzas prepared fresh daily. Dine-in and Takeout until midnight.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Row 3: Price */}
        <div className="px-5 sm:px-6 py-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setIsPriceOpen(!isPriceOpen)}
          >
            <div className="flex items-center gap-4">
              <Banknote size={20} className="text-[#00c4cc] shrink-0" />
              <div>
                <p className="text-neutral-200 font-medium">{restaurantInfo.priceRange}</p>
                <p className="text-xs text-neutral-400">{restaurantInfo.priceReportedBy}</p>
              </div>
            </div>
            <ChevronDown
              size={16}
              className={`text-neutral-400 transition-transform ${isPriceOpen ? 'rotate-180' : ''}`}
            />
          </div>

          <AnimatePresence>
            {isPriceOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 pl-9 space-y-1.5 text-xs text-neutral-400"
              >
                <p className="text-neutral-300">Average spending reported by Google Maps visitors:</p>
                <div className="flex justify-between">
                  <span>Pizzas (Crown Crust, Fajita, Malai Boti):</span>
                  <span className="text-white font-mono">Rs 750 – 950</span>
                </div>
                <div className="flex justify-between">
                  <span>Burgers, Shawarma & Loaded Pizza Fries:</span>
                  <span className="text-white font-mono">Rs 450 – 850</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Row 4: Phone */}
        <a
          href={`tel:${restaurantInfo.phoneRaw}`}
          className="px-5 sm:px-6 py-4 flex items-center gap-4 hover:bg-white/[0.02] transition-colors group"
        >
          <Phone size={20} className="text-[#00c4cc] shrink-0" />
          <span className="text-neutral-200 group-hover:text-white font-mono text-sm">
            {restaurantInfo.phone}
          </span>
        </a>

        {/* Row 5: Plus Code */}
        <div
          onClick={handleCopyPlusCode}
          className="px-5 sm:px-6 py-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors cursor-pointer group"
        >
          <div className="flex items-center gap-4">
            <div className="w-5 h-5 flex items-center justify-center text-[#00c4cc] shrink-0">
              <Grid size={18} />
            </div>
            <span className="text-neutral-200 group-hover:text-white font-mono text-xs sm:text-sm">
              {restaurantInfo.plusCode}
            </span>
          </div>
          <Copy size={14} className="text-neutral-500 group-hover:text-neutral-300" />
        </div>

        {/* Row 6: Your Maps history */}
        <div
          onClick={() => {
            setShowHistoryMsg(!showHistoryMsg);
            showToast('You are viewing the official Google profile for Domatos Pizza.');
          }}
          className="px-5 sm:px-6 py-4 flex items-center gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer group"
        >
          <History size={20} className="text-[#00c4cc] shrink-0" />
          <div className="flex-1">
            <span className="text-neutral-200 group-hover:text-white">Your Maps history</span>
            {showHistoryMsg && (
              <p className="text-xs text-neutral-400 mt-1">
                Browsed today · Official Verified Google Profile in Faisalabad, Pakistan
              </p>
            )}
          </div>
        </div>

        {/* Row 7: Add a label */}
        <div className="px-5 sm:px-6 py-4 flex items-center gap-4">
          <Tag size={20} className="text-[#00c4cc] shrink-0" />
          <div className="flex-1">
            {isEditingLabel ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={labelInput}
                  onChange={(e) => setLabelInput(e.target.value)}
                  placeholder="e.g. Favorite Pizza Place in Faisalabad"
                  className="bg-[#1a1f26] border border-white/20 rounded-lg px-2.5 py-1 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#00c4cc]"
                />
                <button
                  onClick={() => {
                    setCustomLabel(labelInput.trim() || null);
                    setIsEditingLabel(false);
                    if (labelInput.trim()) {
                      showToast(`Label "${labelInput.trim()}" saved!`);
                    }
                  }}
                  className="px-2.5 py-1 bg-[#00c4cc] text-black text-xs font-medium rounded-lg"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditingLabel(false)}
                  className="text-xs text-neutral-400 hover:text-white"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setLabelInput(customLabel || '');
                  setIsEditingLabel(true);
                }}
                className="text-left text-neutral-200 hover:text-white flex items-center gap-2 cursor-pointer"
              >
                <span>{customLabel ? `Label: ${customLabel}` : 'Add a label'}</span>
                {customLabel && <span className="text-[10px] text-[#00c4cc]">(Edit)</span>}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Action Button: Suggest an edit */}
      <div className="px-5 sm:px-6 py-5 flex justify-center border-b border-white/5 bg-white/[0.01]">
        <a
          href={restaurantInfo.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#c2e7ff] hover:bg-[#b2ddff] text-[#001d35] text-xs sm:text-sm font-medium transition-colors shadow-sm"
        >
          <Edit3 size={15} />
          <span>Suggest an edit</span>
        </a>
      </div>

      {/* Add missing information section */}
      <div className="px-5 sm:px-6 py-5 space-y-3 bg-[#0e1013]">
        <div className="flex items-center justify-between text-xs text-neutral-400">
          <span className="font-medium text-white">Add missing information</span>
          <HelpCircle size={14} className="text-neutral-500" />
        </div>

        <div className="flex items-center gap-3 text-xs text-neutral-300 pl-1">
          <Globe size={18} className="text-[#00c4cc] shrink-0" />
          <div className="flex items-center gap-2">
            <span className="text-neutral-400">Website:</span>
            <span className="text-white font-medium underline">
              Domatos Pizza (Official Web App)
            </span>
          </div>
        </div>
      </div>

      {/* Photos Modal Lightbox */}
      <AnimatePresence>
        {showPhotosModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#181c21] border border-white/10 rounded-3xl max-w-2xl w-full p-6 text-neutral-200 relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-lg font-bold text-white">Domatos Pizza Gallery</h3>
                  <p className="text-xs text-neutral-400">Dr. Tusi Rd, Faisalabad, Pakistan</p>
                </div>
                <button
                  onClick={() => setShowPhotosModal(false)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                <div className="rounded-xl overflow-hidden aspect-video bg-neutral-900 border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop"
                    alt="Domatos Pizza cozy dining seating"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden aspect-video bg-neutral-900 border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop"
                    alt="Domatos Royal Crown Crust Pizza"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden aspect-video bg-neutral-900 border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop"
                    alt="Chicken Fajita Sensation Pizza"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden aspect-video bg-neutral-900 border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600&auto=format&fit=crop"
                    alt="Creamy Malai Boti Feast Pizza"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden aspect-video bg-neutral-900 border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=600&auto=format&fit=crop"
                    alt="Domatos Loaded Pizza Fries"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden aspect-video bg-neutral-900 border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=600&auto=format&fit=crop"
                    alt="Spicy Chicken Tikka Overload Pizza"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-5 text-center">
                <button
                  onClick={() => setShowPhotosModal(false)}
                  className="px-6 py-2 rounded-full bg-[#00c4cc] text-black font-semibold text-xs"
                >
                  Close Gallery
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

