// components/PricingSection.tsx
import React from 'react';
import PricingCard from './PricingCard';

const PricingSection: React.FC = () => {
  const virtualGroupClassPoints = [
    'Virtual group fitness classes',
    'Personalized workout plans',
    'Access to exclusive content',
  ];

  const virtual1on1Points = [
    'One-on-one virtual training sessions',
    'Customized fitness programs',
    'Nutritional guidance',
  ];

  const virtualLivePoints = [
    'Live virtual workout sessions',
    'Interactive Q&A with instructors',
    'Access to recorded sessions',
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-100 mx-10">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Pricing and Plans We Offer
        </h2>
        <p className="text-lg text-gray-700">
          Choose a plan that fits your needs and start your fitness journey
          today.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          title="Virtual Group Class"
          price={2499}
          points={virtualGroupClassPoints}
        />
        <PricingCard
          title="Virtual 1-on-1"
          price={6999}
          points={virtual1on1Points}
        />
        <PricingCard
          title="Virtual Live"
          price={999}
          points={virtualLivePoints}
        />
      </div>
    </section>
  );
};

export default PricingSection;
