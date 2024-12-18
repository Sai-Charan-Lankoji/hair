import { useEffect } from 'react';
import { AnimationControls } from 'framer-motion';

export const useTestimonialScroll = (
  isHovered: boolean,
  controls: AnimationControls
) => {
  useEffect(() => {
    controls.start({
      x: isHovered ? 0 : '-100%',
      transition: {
        duration: 20,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop'
      }
    });
  }, [isHovered, controls]);
};