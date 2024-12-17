import React, { useRef, useEffect } from 'react';
import { shopProducts } from '../data/products';

const ShopTheLook = () => {
  const videoRefs = useRef([]);

  useEffect(() => {
    // Ensure videos loop and play
    videoRefs.current.forEach(video => {
      if (video) {
        video.loop = true;
        video.muted = true; // Mute to allow autoplay in most browsers
        video.playsinline = true; // For mobile devices
        video.play().catch(error => {
          console.log('Autoplay was prevented:', error);
        });
      }
    });
  }, []);

  return (
    <div className="bg-[#fdf4eb] py-16">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-medium text-center mb-12">Shop The Look</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {shopProducts.map((product, index) => (
            <div key={index} className="relative group">
              <div className="relative overflow-hidden rounded-lg">
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 text-sm rounded z-10">
                    {product.tag}
                  </span>
                )}
                <video 
                  ref={el => videoRefs.current[index] = el}
                  preload="auto"
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                >
                  <source src={product.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2   opacity-100 transition-opacity duration-300">
                <h3 className="font-medium">{product.title}</h3>
                <div className="flex space-x-2">
                  <span className="font-bold">{product.price}</span>
                  <span className="line-through ">{product.originalPrice}</span>
                </div>
                </div>
              </div>
              
              <div className="mt-4">
                
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopTheLook;