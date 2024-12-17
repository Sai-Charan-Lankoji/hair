import React from "react";
import { motion } from "framer-motion";

interface Brand {
  id: string;
  name: string;
  image: string;
}

const brands: Brand[] = [
  {
    id: "1",
    name: "India Today",
    image:
      "https://www.hairoriginals.com/cdn/shop/files/image_157.png?v=1711609518",
  },
  {
    id: "2",
    name: "BW Wellbeing",
    image:
      "https://www.hairoriginals.com/cdn/shop/files/image_159.png?v=1711609600",
  },
  {
    id: "3",
    name: "Bollyinside",
    image:
      "https://www.hairoriginals.com/cdn/shop/files/image_160.png?v=1711609622",
  },
  {
    id: "4",
    name: "enablers",
    image:
      "https://www.hairoriginals.com/cdn/shop/files/image_155.png?v=1711608307&width=165",
  },
  {
    id: "5",
    name: "Business World",
    image:
      "https://www.hairoriginals.com/cdn/shop/files/image_156.png?v=1711608567",
  },
  {
    id: "6",
    name: "Her zindagi",
    image:
      "https://www.hairoriginals.com/cdn/shop/files/image_158.png?v=1711609554",
  },
];

const BrandScroll: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-12">
      <motion.div
        animate={{
          x: [0, -1920, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex items-center gap-16"
      >
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={`${brand.id}-${index}`}
            className="flex-none grayscale-0 "
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="h-12 object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandScroll;
