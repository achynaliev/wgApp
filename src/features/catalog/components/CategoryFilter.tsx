import { useAppDispatch, useAppSelector } from '../../../shared/store/hooks';
import { setSelectedCategory } from '../store/catalogSlice';
import type { RootState } from '../../../shared/store/store';
import { useTranslation } from 'react-i18next';

const CategoryFilter = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector((state: RootState) => state.catalog.selectedCategory);
  const categories = useAppSelector((state: RootState) => state.catalog.categories);

  return (
    <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('catalog.title')}</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((category: string) => (
          <button
            key={category}
            onClick={() => dispatch(setSelectedCategory(category))}
            className={`px-6 py-2.5 rounded-full transition-all duration-200 font-medium ${
              selectedCategory === category
                ? 'bg-gray-100 text-gray-900 shadow-sm transform scale-105 ring-2 ring-gray-300 border border-gray-200'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
            }`}
          >
            {category === 'Все' ? t('catalog.allCategories') : category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter; 