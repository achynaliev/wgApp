import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './shared/store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './features/home/pages/HomePage';
import AboutPage from './features/about/pages/AboutPage';
import CatalogPage from './features/catalog/pages/CatalogPage';
import ContactsPage from './features/contacts/pages/ContactsPage';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-semibold text-gray-900">
              WGglobal
            </span>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link
              to="/"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors ${isActive('/')
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:border-primary-300 hover:text-gray-900'
                }`}
            >
              Главная
            </Link>
            <Link
              to="/about"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors ${isActive('/about')
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:border-primary-300 hover:text-gray-900'
                }`}
            >
              О компании
            </Link>
            <Link
              to="/catalog"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors ${isActive('/catalog')
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:border-primary-300 hover:text-gray-900'
                }`}
            >
              Каталог
            </Link>
            <Link
              to="/contacts"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors ${isActive('/contacts')
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:border-primary-300 hover:text-gray-900'
                }`}
            >
              Контакты
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className={`block pl-3 pr-4 py-2 text-base font-medium ${isActive('/')
                ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-500'
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
          >
            Главная
          </Link>
          <Link
            to="/about"
            className={`block pl-3 pr-4 py-2 text-base font-medium ${isActive('/about')
                ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-500'
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
          >
            О компании
          </Link>
          <Link
            to="/catalog"
            className={`block pl-3 pr-4 py-2 text-base font-medium ${isActive('/catalog')
                ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-500'
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
          >
            Каталог
          </Link>
          <Link
            to="/contacts"
            className={`block pl-3 pr-4 py-2 text-base font-medium ${isActive('/contacts')
                ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-500'
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
          >
            Контакты
          </Link>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
          </main>
          <ToastContainer position="bottom-right" />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
