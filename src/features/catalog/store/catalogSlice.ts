import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CatalogState {
  selectedCategory: string;
  categories: string[];
  products: Product[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Бумажные пакеты',
    description: 'Экологичные бумажные пакеты различных размеров с возможностью брендирования',
    image: 'https://images.unsplash.com/photo-1572377261114-1aa49fdaeebb?q=80&w=800&auto=format&fit=crop',
    category: 'Пакеты'
  },
  {
    id: '2',
    name: 'Картонные коробки',
    description: 'Прочные картонные коробки для хранения и транспортировки товаров',
    image: 'https://images.unsplash.com/photo-1607166452427-7e4477079cb9?q=80&w=800&auto=format&fit=crop',
    category: 'Коробки'
  },
  {
    id: '3',
    name: 'Стрейч-пленка',
    description: 'Эластичная пленка для надежной упаковки и защиты грузов',
    image: 'https://images.unsplash.com/photo-1611275484845-52a61153d4c9?q=80&w=800&auto=format&fit=crop',
    category: 'Пленка'
  },
  {
    id: '4',
    name: 'Самоклеящиеся этикетки',
    description: 'Этикетки с клеевым слоем для маркировки продукции',
    image: 'https://images.unsplash.com/photo-1589384267710-7a25bc3b9e0f?q=80&w=800&auto=format&fit=crop',
    category: 'Этикетки'
  },
  {
    id: '5',
    name: 'Полиэтиленовые пакеты',
    description: 'Прочные полиэтиленовые пакеты различной плотности',
    image: 'https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?q=80&w=800&auto=format&fit=crop',
    category: 'Пакеты'
  },
  {
    id: '6',
    name: 'Гофрокороба',
    description: 'Гофрированные картонные коробки для надежной упаковки',
    image: 'https://images.unsplash.com/photo-1605164599901-db74670c5e87?q=80&w=800&auto=format&fit=crop',
    category: 'Коробки'
  }
];

const ALL_CATEGORIES = 'Все';

const initialState: CatalogState = {
  selectedCategory: ALL_CATEGORIES,
  categories: [ALL_CATEGORIES, 'Пакеты', 'Коробки', 'Пленка', 'Этикетки'],
  products: initialProducts,
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setSelectedCategory, setProducts } = catalogSlice.actions;
export default catalogSlice.reducer; 