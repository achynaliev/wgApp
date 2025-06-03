import { useTranslation } from 'react-i18next';

const HistorySection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('about.history.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {t('about.history.subtitle')}
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="prose prose-lg prose-primary">
            <p className="text-gray-500 mb-6">
              {t('about.history.content.p1')}
            </p>
            
            <p className="text-gray-500 mb-6">
              {t('about.history.content.p2')}
            </p>

            <p className="text-gray-500">
              {t('about.history.content.p3')}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600">{t('about.history.stats.experience.value')}</div>
              <div className="mt-2 text-gray-500">{t('about.history.stats.experience.label')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600">{t('about.history.stats.projects.value')}</div>
              <div className="mt-2 text-gray-500">{t('about.history.stats.projects.label')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600">{t('about.history.stats.clients.value')}</div>
              <div className="mt-2 text-gray-500">{t('about.history.stats.clients.label')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection; 