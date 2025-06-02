import HeroSection from '../components/HeroSection';
import AudienceSection from '../components/AudienceSection';
import CatalogSection from '../components/CatalogSection';
import GallerySection from '../components/GallerySection';
import FeaturesSection from '../components/FeaturesSection';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <AudienceSection />
      <CatalogSection />
      <GallerySection />
      <FeaturesSection />
      <ContactForm />
    </div>
  );
};

export default HomePage; 