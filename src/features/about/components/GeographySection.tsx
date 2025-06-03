import { useTranslation } from 'react-i18next';

interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
}

const GeographySection = () => {
  const { t } = useTranslation();

  const advantages: Advantage[] = [
    {
      id: 'delivery',
      title: t('about.geography.advantages.delivery.title'),
      description: t('about.geography.advantages.delivery.description'),
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 'logistics',
      title: t('about.geography.advantages.logistics.title'),
      description: t('about.geography.advantages.logistics.description'),
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 'customs',
      title: t('about.geography.advantages.customs.title'),
      description: t('about.geography.advantages.customs.description'),
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  const regions = [
    t('about.geography.regions.list.0'),
    t('about.geography.regions.list.1'),
    t('about.geography.regions.list.2'),
    t('about.geography.regions.list.3'),
    t('about.geography.regions.list.4'),
    t('about.geography.regions.list.5'),
    t('about.geography.regions.list.6'),
  ];

  const countries = [
    t('about.geography.countries.list.0'),
    t('about.geography.countries.list.1'),
    t('about.geography.countries.list.2'),
    t('about.geography.countries.list.3'),
  ];

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('about.geography.title')}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            {t('about.geography.subtitle')}
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage) => (
              <div
                key={advantage.id}
                className="bg-white rounded-lg shadow-sm px-6 py-8"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      {advantage.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {advantage.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-500">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow-sm px-6 py-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {t('about.geography.regions.title')}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {regions.map((region) => (
                <div
                  key={region}
                  className="flex items-center text-gray-500"
                >
                  <svg
                    className="h-5 w-5 text-primary-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {region}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm px-6 py-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {t('about.geography.countries.title')}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {countries.map((country) => (
                <div
                  key={country}
                  className="flex items-center text-gray-500"
                >
                  <svg
                    className="h-5 w-5 text-primary-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {country}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeographySection; 