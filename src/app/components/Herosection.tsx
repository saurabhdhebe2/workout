// components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/image/heroImage.avif"
        alt="Hero Image"
        width={1920} // Replace with the actual width of your image
        height={1080} // Replace with the actual height of your image
      />
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div>
          <h1 className="text-xl md:text-4xl font-bold mb-4">
            Healthy you with Yoga,Nutrition & Dynamic Exercise
          </h1>
          <p className="text-lg mb-6">
            Feeling a healthier world through innovation & community.Join Us in
            the journey to make wellness accessible to all.
          </p>
          <button>
            <Link
              href={'#about'}
              className="bg-secondary hover:bg-secondary-dark text-white py-2 px-4 rounded-full"
            >
              Know More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
