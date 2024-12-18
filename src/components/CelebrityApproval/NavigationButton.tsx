import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors duration-200 z-10"
      style={{ [direction]: '1rem' }}
    >
      {direction === 'left' ? (
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      ) : (
        <ChevronRight className="w-6 h-6 text-gray-700" />
      )}
    </button>
  );
}

export default NavigationButton;