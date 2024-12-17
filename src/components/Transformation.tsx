import React, { useState } from 'react';
import ReactCompareImage from 'react-compare-image';
import { UnfoldHorizontal } from 'lucide-react';

const HairTransformation: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  const CustomHandle = () => (
    <div 
      className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg cursor-move"
    >
      <UnfoldHorizontal className="text-gray-700" size={24} />
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center h-screen p-4">
      <h2 className="text-3xl font-medium text-center mb-12">Hair Transformation</h2>
      <div className="relative w-full  mx-auto">
        <div className="absolute z-10 top-0 left-0 ml-4 mt-2">
          <span className="text-white font-bold text-lg bg-black/50 px-2 py-1 rounded">
            Before
          </span>
        </div>
        <div className="absolute z-10 top-0 right-0 mr-4 mt-2">
          <span className="text-white font-bold text-lg bg-black/50 px-2 py-1 rounded">
            After
          </span>
        </div>
        <ReactCompareImage
          leftImage="https://www.hairoriginals.com/cdn/shop/files/1_16221f30-bae3-4795-8437-86abb5c90026.png?v=1712646062&width=2000"
          rightImage="https://www.hairoriginals.com/cdn/shop/files/after.webp?v=1717655687&width=2000"
          sliderLineColor="transparent"
          sliderLineWidth={0}
          handle={<CustomHandle />}
          handleSize={48}
          onSliderPositionChange={handleSliderChange}
        />
      </div>
    </div>
  );
};

export default HairTransformation;