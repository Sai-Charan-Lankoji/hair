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
      "https://www.hairoriginals.com/cdn/shop/files/scalp-topper_27c3e05b-9fc5-487d-8afd-df9aac1d475e.webp?v=1711695398&width=360",
  },
  {
    id: "2",
    name: "VOLUMIZER",
    image:
      "https://www.hairoriginals.com/cdn/shop/files/Volumizer-and-Clip-Set_74ad16cf-6f5c-41bb-85f6-404d56c69d2f.jpg?v=1694502518&width=360",
  },
  {
    id: "3",
    name: "HAIR PATCH",
    image:
      "https://www.hairoriginals.com/cdn/shop/files/Hair-Toppers_042e98dc-5ed8-4f44-a5c6-694408e2b2a2.jpg?v=1694502517&width=360",
  },
  {
    id: "4",
    name: "BUNS",
    image:
      "https://www.hairoriginals.com/cdn/shop/files/1_3.jpg?v=1710424895&width=360",
  },
  {
    id: "5",
    name: "Hair Topper",
    image:
      "https://www.hairoriginals.com/cdn/shop/files/Hair-Toppers_042e98dc-5ed8-4f44-a5c6-694408e2b2a2.jpg?v=1694502517&width=360",
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
                  index % 2 === 0 ? "text-[#C19A6B]" : "text-[#474747]"
                }`}
              >
                {product.name}
              </h3>
              <div className="w-20 h-20 flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg"
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
