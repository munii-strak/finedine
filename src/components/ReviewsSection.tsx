import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, PenLine, X, CheckCircle } from 'lucide-react';
import { Review } from '../types';
import { initialReviews } from '../data/restaurantData';

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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-light block mb-2">
              Learn more about
            </span>
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

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Decorative Image Tile */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="relative h-full rounded-3xl overflow-hidden border border-white/10 min-h-[360px]">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop"
                alt="Tropical foliage and warm sunlight at Fine Dine restaurant"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-85 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <p className="font-cormorant italic text-xl text-white">
                  "A paradise for your taste buds"
                </p>
                <div className="flex items-center justify-center gap-1 mt-2 text-[#c6a869]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#c6a869]" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Review Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              {displayedReviews.map((rev) => (
                <motion.div
                  key={`${rev.id}-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#13161a] border border-white/10 rounded-3xl p-7 flex flex-col justify-between shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                      <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-white">
                        {rev.author}
                      </span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={
                              i < rev.rating
                                ? 'text-[#c6a869] fill-[#c6a869]'
                                : 'text-neutral-600'
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
                    <span className="text-[#b5c99a]">{rev.visitedFor}</span>
                    <span>{rev.date}</span>
                  </div>
                </motion.div>
              ))}
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
