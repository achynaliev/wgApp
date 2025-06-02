import HeroSection from '../components/HeroSection';
import AdvantagesSection from '../components/AdvantagesSection';
import CatalogSection from '../components/CatalogSection';
import GallerySection from '../components/GallerySection';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <AdvantagesSection />
      <CatalogSection />
      <GallerySection />
      <ContactForm />
    </div>
  );
};

export default HomePage; 