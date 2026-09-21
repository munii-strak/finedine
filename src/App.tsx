import { useState } from 'react';
import { Currency, Dish } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FineDineSpace } from './components/FineDineSpace';
import { Story } from './components/Story';
import { MenuShowcase } from './components/MenuShowcase';
import { PopularDishes } from './components/PopularDishes';
import { EventsAndServices } from './components/EventsAndServices';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';
import { CompleteMenuModal } from './components/CompleteMenuModal';
import { DishDetailModal } from './components/DishDetailModal';

export default function App() {
  const [currency, setCurrency] = useState<Currency>('PKR');
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [menuInitialCategory, setMenuInitialCategory] = useState('all');

  const scrollToReservation = () => {
    const el = document.getElementById('reservation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCategoryMenu = (category: string) => {
    setMenuInitialCategory(category);
    setIsMenuModalOpen(true);
  };

  const handleOpenFullMenu = () => {
    setMenuInitialCategory('all');
    setIsMenuModalOpen(true);
  };

  const handleReserveForDish = (dish: Dish) => {
    scrollToReservation();
    const specialInput = document.querySelector('input[placeholder*="Anniversary"]') as HTMLInputElement;
    if (specialInput) {
      specialInput.value = `Interested in tasting: ${dish.name}`;
      specialInput.focus();
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#e8e6e3] selection:bg-[#b5c99a]/30 selection:text-white font-sans">
      <Header
        currentCurrency={currency}
        onCurrencyChange={setCurrency}
        onOpenMenuModal={handleOpenFullMenu}
        onOpenReservation={scrollToReservation}
      />

      <main>
        <Hero
          onOpenReservation={scrollToReservation}
          onOpenMenu={handleOpenFullMenu}
        />

        <FineDineSpace />

        <Story onOpenReservation={scrollToReservation} />

        <MenuShowcase
          onOpenCategoryMenu={handleOpenCategoryMenu}
          onOpenFullMenu={handleOpenFullMenu}
        />

        <PopularDishes
          currentCurrency={currency}
          onSelectDish={setSelectedDish}
        />

        <EventsAndServices
          onOpenReservation={scrollToReservation}
          onOpenMenu={handleOpenFullMenu}
        />

        <ReviewsSection />

        <ReservationSection />
      </main>

      <Footer />

      {/* Complete Digital Menu Modal */}
      <CompleteMenuModal
        isOpen={isMenuModalOpen}
        onClose={() => setIsMenuModalOpen(false)}
        initialCategory={menuInitialCategory}
        currentCurrency={currency}
        onSelectDish={setSelectedDish}
        onReserveTable={scrollToReservation}
      />

      {/* Dish Details Modal */}
      <DishDetailModal
        dish={selectedDish}
        isOpen={Boolean(selectedDish)}
        onClose={() => setSelectedDish(null)}
        currentCurrency={currency}
        onReserveForDish={handleReserveForDish}
      />
    </div>
  );
}

