import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Компания */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">О компании</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-white transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Контакты</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+996555123456" className="hover:text-white transition-colors">
                  +996 (555) 123-456
                </a>
              </li>
              <li>
                <a href="mailto:info@wheatgrass.global" className="hover:text-white transition-colors">
                  info@wheatgrass.global
                </a>
              </li>
              <li>
                <span>г. Бишкек, ул. Примерная 123</span>
              </li>
            </ul>
          </div>

          {/* Социальные сети */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Мы в соцсетях</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://wa.me/996555123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/your_channel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/your_account"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Режим работы */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Режим работы</h3>
            <ul className="space-y-2">
              <li>Пн-Пт: 9:00 - 18:00</li>
              <li>Сб: 10:00 - 15:00</li>
              <li>Вс: Выходной</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {new Date().getFullYear()} WheatGrass. Все права защищены.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm hover:text-white transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="text-sm hover:text-white transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 