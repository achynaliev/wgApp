import { useAppSelector } from '../../../shared/store/hooks';
import type { RootState } from '../../../shared/store/store';
import type { Product } from '../store/catalogSlice';
import CategoryFilter from '../components/CategoryFilter';
import ProductCard from '../components/ProductCard';
import { useTranslation } from 'react-i18next';

const CatalogPage = () => {
  const { t } = useTranslation();
  const selectedCategory = useAppSelector((state: RootState) => state.catalog.selectedCategory);
  const products = useAppSelector((state: RootState) => {
    const allProducts = state.catalog.products;
    return selectedCategory === 'Все'
      ? allProducts
      : allProducts.filter(product => product.category === selectedCategory);
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('catalog.title')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('catalog.subtitle')}
          </p>
        </div>

        <CategoryFilter />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {products.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-600">
                {t('catalog.noProducts')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage; 