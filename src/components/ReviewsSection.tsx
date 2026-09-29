import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, PenLine, X, CheckCircle, MapPin, ExternalLink } from 'lucide-react';
import { Review } from '../types';
import { initialReviews, restaurantInfo } from '../data/restaurantData';
import { GoogleProfileCard } from './GoogleProfileCard';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Review Form State
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [visitedFor, setVisitedFor] = useState('Dinner with Friends');
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 >= reviews.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? reviews.length - 1 : prev - 1));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author: author.toUpperCase(),
      rating,
      comment,
      date: 'Just now',
      visitedFor,
    };

    setReviews([newRev, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setSubmitted(false);
      setAuthor('');
      setComment('');
    }, 1500);
  };

  // Get current pair of reviews (with wrapping)
  const displayedReviews = reviews
    .slice(currentIndex, currentIndex + 2)
    .concat(reviews.slice(0, Math.max(0, 2 - (reviews.length - currentIndex))))
    .slice(0, 2);

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#0d0f11] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c6a869] font-medium block">
                Google Verified Profile
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#b5c99a]" />
              <span className="text-xs text-neutral-400 font-light">Dr. Tusi Rd, Faisalabad, Pakistan</span>
            </div>
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl italic text-white font-normal">
              What Our Visitors Say
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300 hover:text-white hover:border-white/30 flex items-center gap-2 transition-colors mr-2 cursor-pointer"
            >
              <PenLine size={14} className="text-[#b5c99a]" />
              <span>Share Experience</span>
            </button>
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-white/15 bg-[#14171a] flex items-center justify-center text-neutral-300 hover:text-white hover:border-[#b5c99a] transition-colors cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-white/15 bg-[#14171a] flex items-center justify-center text-neutral-300 hover:text-white hover:border-[#b5c99a] transition-colors cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Content Layout: Left Google Profile Card from Screenshot, Right Review Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Google Maps Profile Card Widget */}
          <div className="lg:col-span-5 w-full">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-[#b5c99a] font-medium flex items-center gap-1.5">
                <span>📍</span>
                <span>Google Business Profile</span>
              </span>
              <span className="text-[11px] text-neutral-400 font-light">Dr. Tusi Rd, Faisalabad</span>
            </div>
            <GoogleProfileCard />
          </div>

          {/* Right Review Cards & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
            <div className="bg-[#13161a] border border-white/10 rounded-3xl p-6 sm:p-7 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-semibold text-white font-sans">
                      {restaurantInfo.rating.toFixed(1)}
                    </span>
                    <Star size={20} className="fill-[#c6a869] text-[#c6a869]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Fast Food Restaurant</p>
                    <p className="text-neutral-400 text-xs">{restaurantInfo.reviewCount} Verified Ratings</p>
                  </div>
                </div>

                <div className="text-xs text-right">
                  <p className="text-[#b5c99a] font-medium">✓ Dine-in · ✓ Takeout</p>
                  <p className="text-neutral-400 text-[11px] font-mono">{restaurantInfo.priceRange}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {displayedReviews.map((rev) => (
                  <motion.div
                    key={`${rev.id}-${currentIndex}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="bg-[#181c21] border border-white/5 rounded-2xl p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-3">
                        <span className="font-mono text-xs font-semibold tracking-wider text-white">
                          {rev.author}
                        </span>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className={
                                i < rev.rating
                                  ? 'text-[#c6a869] fill-[#c6a869]'
                                  : 'text-neutral-600'
                              }
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-neutral-300 text-xs font-light leading-relaxed">
                        "{rev.comment}"
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-neutral-400 mt-4">
                      <span className="text-[#b5c99a]">{rev.visitedFor}</span>
                      <span>{rev.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Google Reviews Callout Banner */}
            <div className="bg-[#182317] border border-emerald-500/30 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-cormorant text-2xl italic text-white font-normal">
                  Visited Domatos Pizza?
                </h4>
                <p className="text-xs text-neutral-300 font-light mt-1">
                  Share your dining experience on Google Maps or rate our Royal Crown Crust pizzas & loaded fries.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs tracking-wider uppercase transition-colors shrink-0 cursor-pointer"
              >
                Write a Review
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Review Submission Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#14171b] border border-white/10 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-neutral-400 hover:text-white p-1"
              >
                <X size={20} />
              </button>

              {submitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <CheckCircle size={48} className="text-[#b5c99a] mb-3" />
                  <h3 className="font-cormorant text-2xl text-white">Thank you!</h3>
                  <p className="text-xs text-neutral-400 mt-1">Your review has been shared.</p>
                </div>
              ) : (
                <>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#b5c99a] font-light block mb-1">
                    Guest Feedback
                  </span>
                  <h3 className="font-cormorant text-2xl sm:text-3xl italic text-white font-normal mb-6">
                    Share Your Experience
                  </h3>

                  <form onSubmit={handleSubmitReview} className="space-y-4">
                    <div>
                      <label className="block text-xs text-neutral-300 mb-1.5 font-light">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="e.g. Sophia"
                        className="w-full bg-[#1c2026] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#b5c99a]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-neutral-300 mb-1.5 font-light">
                        Rating
                      </label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setRating(star)}
                            className="p-1 focus:outline-none"
                          >
                            <Star
                              size={22}
                              className={
                                star <= rating
                                  ? 'text-[#c6a869] fill-[#c6a869]'
                                  : 'text-neutral-600'
                              }
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-neutral-300 mb-1.5 font-light">
                        Occasion
                      </label>
                      <select
                        value={visitedFor}
                        onChange={(e) => setVisitedFor(e.target.value)}
                        className="w-full bg-[#1c2026] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#b5c99a]"
                      >
                        <option value="Dinner with Friends">Dinner with Friends</option>
                        <option value="Romantic Date">Romantic Date</option>
                        <option value="Family Celebration">Family Celebration</option>
                        <option value="Weekend Brunch">Weekend Brunch</option>
                        <option value="Business Tasting">Business Tasting</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-neutral-300 mb-1.5 font-light">
                        Your Thoughts
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Tell us about the atmosphere, food, and hospitality..."
                        className="w-full bg-[#1c2026] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#b5c99a] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-full bg-[#b5c99a] text-[#0d0f11] font-medium text-xs uppercase tracking-wider hover:bg-[#cde4b3] transition-colors cursor-pointer"
                    >
                      Publish Review
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
