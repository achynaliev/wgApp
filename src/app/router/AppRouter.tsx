import { Routes, Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import AboutPage from '../../features/about/AboutPage';
import CatalogPage from '../../features/catalog/CatalogPage';
import ContactsPage from '../../features/contacts/ContactsPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  );
};

export default AppRouter; 