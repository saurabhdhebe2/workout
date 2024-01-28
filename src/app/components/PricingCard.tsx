// components/PricingCard.tsx
import React from 'react';

interface PricingCardProps {
  title: string;
  price: number;
  points: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, points }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
      <div className="mb-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="bg-yellow-400 text-white px-4 py-1 inline-block rounded-tl-lg rounded-br-lg">
          RS. {price} Only
        </div>
      </div>
      <ul className="list-disc mb-4 ml-6">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300">
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;
