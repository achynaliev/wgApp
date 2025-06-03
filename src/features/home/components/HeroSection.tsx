import { useTranslation } from 'react-i18next';
import catalogPDF from '../../../assets/APT_catalog.pdf';

const HeroSection = () => {
  const { t } = useTranslation();

  const buttonBaseClasses = "w-full sm:w-[280px] flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-md text-white transform transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 md:text-lg";

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = catalogPDF;
    link.download = 'APT_catalog.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative bg-white overflow-hidden min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative z-10 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mx-auto max-w-4xl">
              <div className="min-h-[200px] flex flex-col items-center justify-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block min-h-[48px]">{t('home.hero.title')}</span>
                  <span className="block text-primary-600 min-h-[48px]">{t('home.hero.subtitle')}</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl min-h-[96px]">
                  {t('home.hero.description')}
                </p>
              </div>
              <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row justify-center items-stretch space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="rounded-md w-full sm:w-auto">
                  <a
                    href="https://wa.me/77768472061"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${buttonBaseClasses} bg-primary-600 hover:bg-primary-700 focus:ring-primary-500`}
                  >
                    <svg 
                      className="w-5 h-5 mr-3 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span className="whitespace-nowrap">Заказать тестовой продукции на 150$</span>
                  </a>
                </div>
                <div className="rounded-md w-full sm:w-auto">
                  <a
                    href="https://wa.me/77768472061"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${buttonBaseClasses} bg-blue-600 hover:bg-blue-700 focus:ring-blue-500`}
                  >
                    <svg 
                      className="w-5 h-5 mr-3 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span className="whitespace-nowrap">Consult now</span>
                  </a>
                </div>
                <div className="rounded-md w-full sm:w-auto">
                  <button
                    onClick={handleDownload}
                    className={`${buttonBaseClasses} bg-primary-600 hover:bg-primary-700 focus:ring-primary-500`}
                  >
                    <svg 
                      className="w-5 h-5 mr-3 flex-shrink-0" 
                      fill="none"
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    <span className="whitespace-nowrap">{t('home.hero.downloadCatalog')}</span>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 