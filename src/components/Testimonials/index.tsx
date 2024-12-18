import React, { useRef, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import { testimonials } from './data';
import { useTestimonialScroll } from './hooks/useTestimonialScroll';
import { testimonialStyles as styles } from './utils/styles';

const Testimonials: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);

  // Custom hook for scroll animation
  useTestimonialScroll(isHovered, controls);

  // Double the testimonials for seamless infinite scroll
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        What People Say About Us
      </h2>

      <div 
        ref={containerRef}
        className={styles.scrollContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className={styles.cardContainer}
          animate={controls}
        >
          {doubledTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.id}-${index}`}
              {...testimonial}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;