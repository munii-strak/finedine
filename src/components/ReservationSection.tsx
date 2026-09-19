import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Calendar, Clock, Users, Sparkles, CheckCircle2, X } from 'lucide-react';
import { Reservation } from '../types';

export const ReservationSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [persons, setPersons] = useState(2);
  const [time, setTime] = useState('19:00');
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [seatingArea, setSeatingArea] = useState('Botanical Garden Terrace');
  const [specialRequests, setSpecialRequests] = useState('');

  const [confirmedReservation, setConfirmedReservation] = useState<Reservation | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#b5c99a', '#c6a869', '#ffffff', '#e3dac9'],
      });
    } catch {
      // fallback if canvas-confetti context not available
    }

    const reservation: Reservation = {
      id: `FD-${Math.floor(100000 + Math.random() * 900000)}`,
      name,
      phone,
      email: email || 'guest@example.com',
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
          alt="Fine Dine restaurant ambient dining background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter brightness-[0.22] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0e] via-[#0a0c0e]/80 to-[#0a0c0e]/95" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[#b5c99a] font-light block mb-2">
            Reservation
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl italic text-white font-normal">
            Reserve a Table
          </h2>
          <p className="max-w-md mx-auto text-xs sm:text-sm text-neutral-400 mt-3 font-light">
            Indulge in an unforgettable culinary escape. Reserve your preferred seating in our garden oasis.
          </p>
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
                  placeholder="e.g. Eleanor Vance"
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
                  placeholder="+380 96 000 00 00"
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
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
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
                  <span>Time</span>
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-[#181c21] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#b5c99a] transition-colors"
                >
                  <option value="11:30">11:30 AM (Lunch)</option>
                  <option value="13:00">01:00 PM (Lunch)</option>
                  <option value="14:30">02:30 PM (Afternoon)</option>
                  <option value="17:00">05:00 PM (Early Dinner)</option>
                  <option value="18:30">06:30 PM (Sunset)</option>
                  <option value="19:00">07:00 PM (Prime Dinner)</option>
                  <option value="20:30">08:30 PM (Evening)</option>
                  <option value="21:30">09:30 PM (Late Night)</option>
                </select>
              </div>
            </div>

            {/* Atmosphere Seating Preference */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-2.5 font-light flex items-center gap-1.5">
                <Sparkles size={14} className="text-[#c6a869]" />
                <span>Preferred Seating Area</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  'Botanical Garden Terrace',
                  'Main Greenhouse Hall',
                  'Private Cellar Chamber',
                  'Riverside Veranda',
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
                  Email (for confirmation voucher)
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
                  Special Notes / Dietary Needs
                </label>
                <input
                  type="text"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="e.g. Anniversary celebration, peanut allergy"
                  className="w-full bg-[#181c21] border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#b5c99a] transition-colors"
                />
              </div>
            </div>

            <div className="pt-4 flex flex-col items-center">
              <motion.button
                id="submit-reservation-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full sm:w-auto px-12 py-3.5 rounded-full bg-[#b5c99a] text-[#0d0f11] font-medium text-sm tracking-widest uppercase hover:bg-[#cde4b3] transition-colors shadow-lg shadow-[#b5c99a]/20 cursor-pointer"
              >
                Book a Table
              </motion.button>
              <span className="text-[11px] text-neutral-400 mt-2.5 font-light">
                No upfront reservation fee required. Immediate confirmation.
              </span>
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
                  We look forward to welcoming you!
                </h3>
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
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400">Atmosphere</span>
                  <span className="text-[#c6a869] font-medium">
                    {confirmedReservation.seatingArea}
                  </span>
                </div>
              </div>

              <button
                onClick={closeConfirmation}
                className="w-full py-3 rounded-full bg-[#b5c99a] text-[#0d0f11] font-medium text-xs uppercase tracking-wider hover:bg-[#cde4b3] transition-colors cursor-pointer"
              >
                Close & Return to Restaurant
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
