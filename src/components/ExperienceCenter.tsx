import React, { useState } from "react";
import { motion } from "framer-motion";

interface Location {
  id: string;
  city: string;
  address: string;
  phone: string;
  image: string;
}

const locations: Location[] = [
  {
    id: "1",
    city: "Gurgaon",
    address: "F 104-107, Atlanta Tower, Gurgaon, Haryana, India",
    phone: "+91-9638370000",
    image:
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    city: "Bangalore",
    address: "Phoenix Market City Mall, Bangalore, Karnataka, India",
    phone: "+91-9638371111",
    image:
      "https://images.unsplash.com/photo-1621799754526-a0d52c49fad5?auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    city: "Hyderabad",
    address: "Jubilee Hills, Hyderabad, Telangana, India",
    phone: "+91-9638372222",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80",
  },
  {
    id: "4",
    city: "Mumbai East",
    address: "Powai, Mumbai, Maharashtra, India",
    phone: "+91-9638373333",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80",
  },
  {
    id: "5",
    city: "Mumbai West",
    address: "Bandra West, Mumbai, Maharashtra, India",
    phone: "+91-9638374444",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80",
  },
  {
    id: "6",
    city: "Pune",
    address: "Koregaon Park, Pune, Maharashtra, India",
    phone: "+91-9638375555",
    image:
      "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?auto=format&fit=crop&q=80",
  },
  {
    id: "7",
    city: "Ahmedabad",
    address: "Gulbai Tekra, Ahmedabad, Gujarat, India",
    phone: "+91-9638376666",
    image:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80",
  },
  {
    id: "8",
    city: "Lucknow",
    address: "Gomti Nagar, Lucknow, Uttar Pradesh, India",
    phone: "+91-9638377777",
    image:
      "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&q=80",
  },
];

const ExperienceCenter: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location>(
    locations[0]
  );

  return (
    <div className=" mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif text-center mb-12">
        Hair Originals Experience Center
      </h1>

      <div className="flex flex-col gap-8">
        {/* City Navigation */}
        <div className="flex justify-center gap-6 flex-wrap">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => setSelectedLocation(location)}
              className={`px-6 py-2 text-lg transition-all ${
                selectedLocation.id === location.id
                  ? "text-[#C19A6B] border-b-2 border-[#C19A6B] font-medium"
                  : "text-gray-600 hover:text-[#C19A6B]"
              }`}
            >
              {location.city}
            </button>
          ))}
        </div>

        {/* Location Details */}
        <motion.div
          key={selectedLocation.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-8 bg-[#FAF3E7] rounded-lg overflow-hidden max-w-screen-2xl mx-auto"
        >
          <div className="h-[400px] w-2/3 overflow-hidden">
            <img
              src={selectedLocation.image}
              alt={selectedLocation.city}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-8">
            <h2 className="text-3xl font-serif mb-4">
              {selectedLocation.city}
            </h2>
            <p className="text-gray-600 mb-4">{selectedLocation.address}</p>
            <p className="text-gray-600 mb-6">{selectedLocation.phone}</p>
            <button className="bg-[#C19A6B] text-white px-8 py-3 rounded-md hover:bg-[#A88959] transition-colors w-fit">
              Contact
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceCenter;
