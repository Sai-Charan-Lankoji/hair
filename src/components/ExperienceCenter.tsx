import { useState } from 'react';
import { experienceCenters } from '../data/experienceCenters';

const ExperienceCenter = () => {
  const [selectedCity, setSelectedCity] = useState(experienceCenters[0].city);
  const selectedCenter = experienceCenters.find(center => center.city === selectedCity);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium text-center mb-12">Hairoriginals Experience Center</h2>
        <div className="flex justify-center space-x-6 mb-8">
          {experienceCenters.map((center) => (
            <button
              key={center.city}
              onClick={() => setSelectedCity(center.city)}
              className={`px-4 py-2 ${
                selectedCity === center.city
                  ? 'border-b-2 border-black font-medium'
                  : 'text-gray-500'
              }`}
            >
              {center.city}
            </button>
          ))}
        </div>
        {selectedCenter && (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img
                src={selectedCenter.image}
                alt={selectedCenter.city}
                className="w-full rounded-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-medium">{selectedCenter.city}</h3>
              <p className="text-gray-600">{selectedCenter.address}</p>
              <p className="text-gray-600">{selectedCenter.phone}</p>
              <button className="bg-[#C4A484] text-white px-6 py-3 rounded">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCenter;