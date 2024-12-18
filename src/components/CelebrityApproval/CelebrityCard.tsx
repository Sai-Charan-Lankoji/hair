import React from 'react';
import { motion } from 'framer-motion';

interface CelebrityCardProps {
  name: string;
  image: string;
}

const CelebrityCard: React.FC<CelebrityCardProps> = ({ name, image }) => {
  return (
    <motion.div 
      className="flex-none w-[300px] overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden rounded-lg">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          src={image}
          alt={name}
          className="w-full h-[400px] object-cover"
        />
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>
    </motion.div>
  );
}

export default CelebrityCard;