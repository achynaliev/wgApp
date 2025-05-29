import { useAppSelector } from '../../../shared/store/hooks';
import type { RootState } from '../../../shared/store/store';
import type { Product } from '../store/catalogSlice';
import CategoryFilter from '../components/CategoryFilter';
import ProductCard from '../components/ProductCard';

const CatalogPage = () => {
  const selectedCategory = useAppSelector((state: RootState) => state.catalog.selectedCategory);
  const products = useAppSelector((state: RootState) => {
    const allProducts = state.catalog.products;
    return selectedCategory === 'Все'
      ? allProducts
      : allProducts.filter(product => product.category === selectedCategory);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Каталог продукции</h1>
      
      <CategoryFilter />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage; 