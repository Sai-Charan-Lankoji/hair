import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  date: string;
  rating: number;
  comment: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  date,
  rating,
  comment,
  image
}) => {
  return (
    <div className="flex-none w-[400px] bg-white rounded-lg overflow-hidden shadow-md">
      <div className="h-[250px] overflow-hidden">
        <img
          src={image}
          alt={`${name}'s review`}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`w-4 h-4 ${
                index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 mb-3">
          <h3 className="font-medium text-gray-900">{name}</h3>
          <span className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString()}
          </span>
        </div>
        <p className="text-gray-600 line-clamp-3">{comment}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;