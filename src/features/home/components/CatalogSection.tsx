const CatalogSection = () => {
  const products = [
    {
      id: 1,
      name: 'Картонная упаковка',
      description: 'Экологичная упаковка из переработанного картона различных размеров',
      price: 'от 50 ₽/шт',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      name: 'Пластиковая упаковка',
      description: 'Прочная защитная упаковка для хрупких товаров',
      price: 'от 80 ₽/шт',
      image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 3,
      name: 'Подарочная упаковка',
      description: 'Премиальная упаковка для подарков и люксовых товаров',
      price: 'от 150 ₽/шт',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 4,
      name: 'Брендированные пакеты',
      description: 'Пакеты с вашим логотипом и фирменным дизайном',
      price: 'от 30 ₽/шт',
      image: 'https://images.unsplash.com/photo-1572799454914-d3c2252e3a05?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Наши решения
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Выберите подходящий вариант упаковки для ваших товаров
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-48 rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {product.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-900">
                    {product.price}
                  </span>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#calculate"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
          >
            Рассчитать стоимость
          </a>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection; 