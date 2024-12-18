import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CelebrityCard from './CelebrityCard';
import NavigationButton from './NavigationButton';
import { celebrities } from './data';

const CelebrityApproval: React.FC = () => {
  const [showControls, setShowControls] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // card width + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-serif text-center mb-12">
        Approved By Celebrities
      </h2>

      <div 
        className="relative"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <AnimatePresence>
          {showControls && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <NavigationButton direction="left" onClick={() => scroll('left')} />
                <NavigationButton direction="right" onClick={() => scroll('right')} />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <div 
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {celebrities.map((celebrity) => (
            <CelebrityCard
              key={celebrity.id}
              name={celebrity.name}
              image={celebrity.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CelebrityApproval;