import { useAppDispatch, useAppSelector } from '../../../shared/store/hooks';
import { setSelectedCategory } from '../store/catalogSlice';
import type { RootState } from '../../../shared/store/store';

const CategoryFilter = () => {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector((state: RootState) => state.catalog.selectedCategory);
  const categories = useAppSelector((state: RootState) => state.catalog.categories);

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Категории</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category: string) => (
          <button
            key={category}
            onClick={() => dispatch(setSelectedCategory(category))}
            className={`px-4 py-2 rounded-full transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-primary-600 text-white font-medium shadow-md transform scale-105 ring-2 ring-primary-300'
                : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter; 