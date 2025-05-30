import { Routes, Route } from 'react-router-dom';
import HomePage from '../../features/home/pages/HomePage';
import AboutPage from '../../features/about/pages/AboutPage';
import CatalogPage from '../../features/catalog/pages/CatalogPage';
import ContactsPage from '../../features/contacts/pages/ContactsPage';
import NotFoundPage from '../../features/error/pages/NotFoundPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter; 