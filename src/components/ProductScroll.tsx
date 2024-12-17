import React from "react";
import { motion } from "framer-motion";

interface Product {
  id: string;
  name: string;
  image: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "SCALP TOPPER",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    name: "VOLUMIZER",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    name: "HAIR PATCH",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80",
  },
  {
    id: "4",
    name: "BUNS",
    image:
      "https://images.unsplash.com/photo-1522337659844-8635c5c7b1f9?auto=format&fit=crop&q=80",
  },
];

const ProductScroll: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-12">
      <div className="relative h-32 flex items-center">
        <motion.div
          animate={{
            x: [0, -2000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex gap-24 absolute whitespace-nowrap"
        >
          {[...products, ...products, ...products].map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="flex items-center gap-8"
            >
              <h3
                className={`text-2xl font-medium ${
                  index % 2 === 0 ? "text-[#C19A6B]" : "text-[#4A90E2]"
                }`}
              >
                {product.name}
              </h3>
              <div className="w-32 h-32 flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductScroll;
