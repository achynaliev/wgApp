const ProductionSection = () => {
  const facilities = [
    {
      id: 1,
      title: 'Современное оборудование',
      description: 'Автоматизированные линии для производства упаковки любой сложности',
      image: 'https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 2,
      title: 'Складской комплекс',
      description: 'Оборудованные помещения для хранения материалов и готовой продукции',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 3,
      title: 'Лаборатория контроля',
      description: 'Тестирование материалов и готовой продукции на соответствие стандартам',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
  ];

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Производственные мощности
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            Собственное производство полного цикла позволяет нам контролировать качество
            и оптимизировать сроки изготовления упаковки
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
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600">2000м²</div>
                  <div className="mt-2 text-sm text-gray-500">
                    производственных площадей
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600">50+</div>
                  <div className="mt-2 text-sm text-gray-500">
                    единиц оборудования
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600">100K+</div>
                  <div className="mt-2 text-sm text-gray-500">
                    единиц продукции в месяц
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600">24/7</div>
                  <div className="mt-2 text-sm text-gray-500">
                    режим работы
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionSection; 