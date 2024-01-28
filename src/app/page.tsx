import AboutUs from './components/About';
import HeroSection from './components/Herosection';
import PricingSection from './components/PricingSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <PricingSection />
    </div>
  );
}
