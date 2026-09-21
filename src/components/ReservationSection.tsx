import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Calendar, Clock, Users, Sparkles, CheckCircle2, X, Phone, MapPin } from 'lucide-react';
import { Reservation } from '../types';
import { restaurantInfo } from '../data/restaurantData';

export const ReservationSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [persons, setPersons] = useState(4);
  const [time, setTime] = useState('20:00');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [seatingArea, setSeatingArea] = useState('Executive Family Hall');
  const [specialRequests, setSpecialRequests] = useState('');

  const [confirmedReservation, setConfirmedReservation] = useState<Reservation | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#b5c99a', '#c6a869', '#ffffff', '#e3dac9'],
      });
    } catch {
      // fallback
    }

    const reservation: Reservation = {
      id: `BAO-G-${Math.floor(10000 + Math.random() * 90000)}`,
      name,
      phone,
      email: email || 'guest@finedine.pk',
      persons,
      time,
      date,
      seatingArea,
      specialRequests,
      createdAt: new Date().toISOString(),
    };

    setConfirmedReservation(reservation);
  };

  const closeConfirmation = () => {
    setConfirmedReservation(null);
    setName('');
    setPhone('');
    setEmail('');
    setSpecialRequests('');
  };

  return (
    <section id="reservation" className="py-24 sm:py-32 relative overflow-hidden bg-[#0a0c0e]">
      {/* Background with moody lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop"
          alt="Fine Dine By Bao G Susan Road Faisalabad ambient restaurant seating"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter brightness-[0.2] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0e] via-[#0a0c0e]/85 to-[#0a0c0e]/95" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[#b5c99a] font-medium block mb-2">
            Fine Dine By Bao G
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl italic text-white font-normal">
            Reserve a Table
          </h2>
          <p className="max-w-md mx-auto text-xs sm:text-sm text-neutral-400 mt-3 font-light">
            Susan Road, opposite Faizan e Madina, Faisalabad. Open daily with dining until 1:00 AM.
          </p>
        </div>

        {/* Quick Call Out Banner */}
        <div className="mb-4 bg-[#182616] border border-emerald-500/30 rounded-2xl p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 text-emerald-300">
            <span className="text-base">🇵🇰</span>
            <div>
              <span className="font-semibold">Available in Pakistan Only</span>
              <span className="text-neutral-300 text-[11px] block sm:inline sm:ml-2">
                Table bookings & services valid strictly for our Susan Road branch in Faisalabad, Pakistan
              </span>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-black/30 border border-white/10 text-neutral-300 text-[11px] font-mono shrink-0">
            +92 (Pakistan)
          </span>
        </div>

        <div className="mb-6 bg-[#161a1f]/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3 text-neutral-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span>Need immediate seating or direct takeout order tonight?</span>
          </div>
          <a
            href={`tel:${restaurantInfo.phoneRaw}`}
            className="px-4 py-2 rounded-full bg-[#1e251b] border border-[#b5c99a]/40 text-[#b5c99a] hover:bg-[#b5c99a] hover:text-[#0d0f11] font-medium transition-colors flex items-center gap-1.5 shrink-0"
          >
            <Phone size={13} />
            <span>Call Front Desk ({restaurantInfo.phone})</span>
          </a>
        </div>

        {/* Reservation Form Card */}
        <div className="bg-[#121519]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-light">
                  Full Name <span className="text-[#b5c99a]">*</span>
                </label>
                <input
                  id="res-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Muhammad Usman"
                  className="w-full bg-[#181c21] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#b5c99a] transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-light">
                  Phone Number <span className="text-[#b5c99a]">*</span>
                </label>
                <input
                  id="res-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+92 301 7864478"
                  className="w-full bg-[#181c21] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#b5c99a] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Number of Persons */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-light flex items-center gap-1.5">
                  <Users size={14} className="text-[#b5c99a]" />
                  <span>Guests</span>
                </label>
                <select
                  value={persons}
                  onChange={(e) => setPersons(Number(e.target.value))}
                  className="w-full bg-[#181c21] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#b5c99a] transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests (Family)'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-light flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#b5c99a]" />
                  <span>Date</span>
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#181c21] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#b5c99a] transition-colors"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-light flex items-center gap-1.5">
                  <Clock size={14} className="text-[#b5c99a]" />
                  <span>Time (Open till 1 AM)</span>
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-[#181c21] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#b5c99a] transition-colors"
                >
                  <option value="13:00">01:00 PM (Lunch Opening)</option>
                  <option value="14:30">02:30 PM (Afternoon Lunch)</option>
                  <option value="17:00">05:00 PM (Early Dinner)</option>
                  <option value="18:30">06:30 PM (Evening Rush Start)</option>
                  <option value="19:30">07:30 PM (Peak Family Hour)</option>
                  <option value="20:30">08:30 PM (Peak Dinner)</option>
                  <option value="21:30">09:30 PM (Prime Evening)</option>
                  <option value="22:30">10:30 PM (Late Night Dining)</option>
                  <option value="23:30">11:30 PM (Midnight Feast)</option>
                  <option value="00:15">12:15 AM (Late Night Seating)</option>
                </select>
              </div>
            </div>

            {/* Seating Preference */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2.5 font-light flex items-center gap-1.5">
                <Sparkles size={14} className="text-[#c6a869]" />
                <span>Preferred Dining Section</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  'Executive Family Hall',
                  'Rooftop Open-Air Terrace',
                  'Private Family Cabin',
                  'Ground Floor Dining',
                ].map((area) => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => setSeatingArea(area)}
                    className={`px-3 py-2.5 rounded-2xl text-xs text-center border transition-all cursor-pointer ${
                      seatingArea === area
                        ? 'bg-[#283222] border-[#b5c99a] text-[#b5c99a] font-medium shadow-md'
                        : 'bg-[#181c21] border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            {/* Email and Special Requests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-light">
                  Email (Optional for SMS / Voucher)
                </label>
                <input
                  id="res-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-[#181c21] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#b5c99a] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-light">
                  Notes / Fish or Steaks Pre-Order
                </label>
                <input
                  type="text"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="e.g. Birthday celebration, spicy fried fish, baby highchair"
                  className="w-full bg-[#181c21] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#b5c99a] transition-colors"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-neutral-400 font-light flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#b5c99a]" />
                <span>Instant reservation confirmed directly at the restaurant</span>
              </div>

              <button
                id="res-submit-btn"
                type="submit"
                className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-[#b5c99a] text-[#0d0f11] font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-[#cde4b3] transition-colors duration-300 shadow-lg shadow-[#b5c99a]/20 cursor-pointer"
              >
                Confirm Reservation
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Voucher Dialog */}
      <AnimatePresence>
        {confirmedReservation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#14171c] border border-[#b5c99a]/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-[0_25px_80px_rgba(0,0,0,0.9)] relative"
            >
              <button
                onClick={closeConfirmation}
                className="absolute top-5 right-5 text-neutral-400 hover:text-white p-1"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-full bg-[#b5c99a]/20 border border-[#b5c99a]/40 flex items-center justify-center text-[#b5c99a] mx-auto mb-3">
                  <CheckCircle2 size={32} />
                </div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#b5c99a] font-medium block mb-1">
                  Table Reserved Successfully
                </span>
                <h3 className="font-cormorant text-3xl italic text-white font-normal">
                  Fine Dine By Bao G
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Susan Road, opposite Faizan e Madina, Faisalabad
                </p>
              </div>

              <div className="bg-[#1b1f25] border border-white/5 rounded-2xl p-5 mb-6 space-y-3 text-xs">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-neutral-400">Reservation Reference</span>
                  <span className="font-mono font-bold text-[#b5c99a] text-sm">
                    {confirmedReservation.id}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-neutral-400">Guest Name</span>
                  <span className="text-white font-medium">{confirmedReservation.name}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-neutral-400">Date & Time</span>
                  <span className="text-white font-medium">
                    {confirmedReservation.date} at {confirmedReservation.time}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-neutral-400">Guests</span>
                  <span className="text-white font-medium">
                    {confirmedReservation.persons} {confirmedReservation.persons === 1 ? 'Guest' : 'Guests'}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-neutral-400">Dining Area</span>
                  <span className="text-[#c6a869] font-medium">
                    {confirmedReservation.seatingArea}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-neutral-400">Location</span>
                  <span className="text-emerald-400 font-medium">Susan Road, Faisalabad, Pakistan (Pakistan Only)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400">Restaurant Contact</span>
                  <span className="text-neutral-200">{restaurantInfo.phone}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={closeConfirmation}
                  className="w-full py-3 rounded-full bg-[#b5c99a] text-[#0d0f11] font-medium text-xs uppercase tracking-wider hover:bg-[#cde4b3] transition-colors cursor-pointer"
                >
                  Done & Return to Restaurant
                </button>
                <a
                  href={restaurantInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs text-center flex items-center justify-center gap-1.5 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <MapPin size={13} className="text-[#b5c99a]" />
                  <span>Get Directions to Susan Road on Google Maps</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
