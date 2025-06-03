import { useTranslation } from 'react-i18next';

interface Certificate {
  title: string;
  description: string;
}

const CertificatesSection = () => {
  const { t } = useTranslation();

  const certificates = t<Certificate[]>('about.certificates.items', { returnObjects: true });

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('about.certificates.title')}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            {t('about.certificates.subtitle')}
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate: Certificate, index: number) => (
              <div
                key={index}
                className="relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    className="object-cover"
                    src={`https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`}
                    alt={certificate.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-lg font-semibold">
                        {certificate.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-200">
                        {certificate.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <button
                    type="button"
                    className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none"
                  >
                    <svg
                      className="h-5 w-5"
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
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-500">
            {t('about.certificates.note')}
          </p>
          <div className="mt-6">
            <button
              type="button"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
            >
              {t('about.certificates.requestButton')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection; 