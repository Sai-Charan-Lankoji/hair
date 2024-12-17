import React, { useState } from 'react';
import { newLaunchProducts } from '../data/products';

const NewLaunches = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-medium text-center mb-12">New Launches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {newLaunchProducts.map((product, index) => (
          <div
            key={index}
            className="space-y-4 group"  // Added 'group' class here
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div 
              className="relative"
              style={{ height: '600px' }}
            >
              <img
                src={hoveredIndex === index ? product.image2 : product.image}
                alt={product.title}
                className="w-full h-full object-cover rounded-lg transition-all duration-500 ease-in-out"
              />
              <button 
                className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded 
                           opacity-0 group-hover:opacity-100 
                           transition-opacity duration-300"
              >
                Choose options
              </button>
            </div>
            <h3 className="font-medium">{product.title}</h3>
            <div className="flex space-x-2">
              <span className="font-bold">₹{product.price.toLocaleString()}</span>
              <span className="line-through text-gray-500">₹{product.originalPrice.toLocaleString()}</span>
            </div>
            <div className="flex space-x-2">
              {product.colors?.map((color, colorIndex) => (
                <button
                  key={colorIndex}
                  className="w-6 h-6 rounded-full border-2 border-gray-300"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewLaunches;