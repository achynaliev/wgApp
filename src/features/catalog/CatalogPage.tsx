const CatalogPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Catalog</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white shadow rounded-lg p-6">
              <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Product {item}</h2>
              <p className="text-gray-600">
                Description for product {item}. This is a placeholder text.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage; 