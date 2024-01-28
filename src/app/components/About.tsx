// components/AboutUs.tsx
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 mt-10 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row bg-white p-8 rounded-lg shadow-lg">
        <div className="w-full md:w-1/3 md:mr-8">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-800">
            About Us - HYYND
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            Healthy You with Yoga, Nutrition, and Dynamic Exercises
          </p>
        </div>
        <div className="w-full md:w-2/3 max-w-2xl space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-4">WHAT :</h3>
            <p className="text-gray-800">
              At HYYND, we are dedicated to fostering a holistic approach to
              fitness through the integration of yoga, nutrition, and dynamic
              exercises. Our platform is designed to empower individuals on
              their journey to optimal health, providing a comprehensive and
              balanced wellness experience.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">WHY :</h3>
            <p className="text-gray-800">
              We believe that true health extends beyond physical fitness alone.
              HYYND is founded on the principle that a harmonious blend of yoga
              for mental balance, nutrition for sustained energy, and dynamic
              exercises for physical strength creates a foundation for overall
              well-being. Our mission is to inspire and guide individuals
              towards a healthier lifestyle that transcends the boundaries of
              conventional fitness routines.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">WHEN :</h3>
            <p className="text-gray-800">
              The time for prioritizing your health is now. Whether you’re a
              beginner seeking a mindful introduction to wellness or a fitness
              enthusiast looking to elevate your routine, HYYND offers a
              supportive community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
