import { useTranslation } from 'react-i18next';

const ProductionSection = () => {
  const { t } = useTranslation();

  const facilities = [
    {
      id: 'equipment',
      title: t('about.production.facilities.equipment.title'),
      description: t('about.production.facilities.equipment.description'),
      image: 'https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 'warehouse',
      title: t('about.production.facilities.warehouse.title'),
      description: t('about.production.facilities.warehouse.description'),
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 'lab',
      title: t('about.production.facilities.lab.title'),
      description: t('about.production.facilities.lab.description'),
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
  ];

  const stats = [
    {
      id: 'area',
      value: t('about.production.stats.area.value'),
      label: t('about.production.stats.area.label'),
    },
    {
      id: 'equipment',
      value: t('about.production.stats.equipment.value'),
      label: t('about.production.stats.equipment.label'),
    },
    {
      id: 'production',
      value: t('about.production.stats.production.value'),
      label: t('about.production.stats.production.label'),
    },
    {
      id: 'operation',
      value: t('about.production.stats.operation.value'),
      label: t('about.production.stats.operation.label'),
    },
  ];

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('about.production.title')}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            {t('about.production.subtitle')}
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {facilities.map((facility) => (
              <div key={facility.id} className="relative">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    className="object-cover shadow-lg rounded-lg"
                    src={facility.image}
                    alt={facility.title}
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {facility.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-8 sm:p-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.id} className="text-center">
                    <div className="text-4xl font-bold text-primary-600">{stat.value}</div>
                    <div className="mt-2 text-sm text-gray-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionSection; 