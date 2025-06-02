import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AudienceSection from '../components/AudienceSection';
import GallerySection from '../components/GallerySection';
import FeaturesSection from '../components/FeaturesSection';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <ServicesSection />
      <AudienceSection />
      <GallerySection />
      <FeaturesSection />
      <ContactForm />
    </div>
  );
};

export default HomePage; 