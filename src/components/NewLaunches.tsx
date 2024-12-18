import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { newLaunchProducts } from '../data/products';
import NavigationButton from './CelebrityApproval/NavigationButton';

const NewLaunches: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const itemWidth = 300; // Adjust this value based on your design
  const itemsToShow = 4;
  const totalItems = newLaunchProducts.length;

  const loopedProducts = [...newLaunchProducts, ...newLaunchProducts, ...newLaunchProducts];

  const handleDragStart = () => {
    controls.stop();
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: any) => {
    const moveBy = Math.round(info.offset.x / itemWidth);
    const newIndex = (currentIndex - moveBy + totalItems) % totalItems;
    setCurrentIndex(newIndex);
    controls.start({ x: -newIndex * itemWidth, transition: { type: 'spring', stiffness: 300, damping: 30 } });
  };

  useEffect(() => {
    controls.start({ x: -currentIndex * itemWidth });
  }, [currentIndex, controls, itemWidth]);

  const handleNavigation = (direction: 'left' | 'right') => {
    const newIndex = (currentIndex + (direction === 'right' ? 3 : -3) + totalItems) % totalItems;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="container mx-auto px-4 py-16 relative">
      <h2 className="text-3xl font-medium text-center mb-12">New Launches</h2>
      <div className="overflow-hidden" ref={containerRef}>
        <motion.div
          className="flex"
          style={{ width: `${loopedProducts.length * itemWidth}px` }}
          animate={controls}
          drag="x"
          dragConstraints={{ left: -((totalItems - itemsToShow) * itemWidth), right: 0 }}
          dragElastic={0.1}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {loopedProducts.map((product, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${itemWidth}px` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="p-4">
                <motion.div
                  className="relative overflow-hidden rounded-lg"
                  style={{ height: '400px' }}
                >
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={hoveredIndex === index ? 'image2' : 'image1'}
                      src={hoveredIndex === index ? product.image2 : product.image}
                      alt={product.title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ 
                        duration: hoveredIndex === index ? 0.5 : 0.25,
                        ease: "easeInOut"
                      }}
                      className="absolute w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-4 left-4 right-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-white text-black px-4 py-2 rounded font-medium"
                    >
                      Choose options
                    </motion.button>
                  </motion.div>
                </motion.div>
                <h3 className="font-medium mt-4">{product.title}</h3>
                <div className="flex space-x-2">
                  <span className="font-bold">₹{product.price.toLocaleString()}</span>
                  <span className="line-through text-gray-500">₹{product.originalPrice.toLocaleString()}</span>
                </div>
                <div className="flex space-x-2 mt-2">
                  {product.colors?.map((color, colorIndex) => (
                    <motion.button
                      key={colorIndex}
                      className="w-6 h-6 rounded-full border-2 border-gray-300"
                      style={{ backgroundColor: color }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <NavigationButton direction="left" onClick={() => handleNavigation('left')} />
      <NavigationButton direction="right" onClick={() => handleNavigation('right')} />
    </div>
  );
};

export default NewLaunches;

