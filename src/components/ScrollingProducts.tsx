import { useRef } from 'react';
import { scrollingProducts } from '../data/scrollingProducts';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ScrollingProducts = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-8">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll('left')}
          className="bg-white rounded-full p-2 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide gap-8 px-12"
        style={{ scrollBehavior: 'smooth' }}
      >
        {scrollingProducts.map((product, index) => (
          <div key={index} className="flex-none w-48">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="text-center mt-2 font-medium">{product.title}</p>
          </div>
        ))}
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll('right')}
          className="bg-white rounded-full p-2 shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ScrollingProducts;