import HistorySection from '../components/HistorySection';
import ProductionSection from '../components/ProductionSection';
import CertificatesSection from '../components/CertificatesSection';
import GeographySection from '../components/GeographySection';

const AboutPage = () => {
  return (
    <div className="bg-white">
      <HistorySection />
      <ProductionSection />
      <CertificatesSection />
      <GeographySection />
    </div>
  );
};

export default AboutPage; 