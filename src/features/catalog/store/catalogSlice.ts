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
    image: '/images/products/paper-bags.jpg',
    category: 'Пакеты'
  },
  {
    id: '2',
    name: 'Картонные коробки',
    description: 'Прочные картонные коробки для хранения и транспортировки товаров',
    image: '/images/products/cardboard-boxes.jpg',
    category: 'Коробки'
  },
  {
    id: '3',
    name: 'Стрейч-пленка',
    description: 'Эластичная пленка для надежной упаковки и защиты грузов',
    image: '/images/products/stretch-film.jpg',
    category: 'Пленка'
  },
  {
    id: '4',
    name: 'Самоклеящиеся этикетки',
    description: 'Этикетки с клеевым слоем для маркировки продукции',
    image: '/images/products/labels.jpg',
    category: 'Этикетки'
  },
  {
    id: '5',
    name: 'Полиэтиленовые пакеты',
    description: 'Прочные полиэтиленовые пакеты различной плотности',
    image: '/images/products/plastic-bags.jpg',
    category: 'Пакеты'
  },
  {
    id: '6',
    name: 'Гофрокороба',
    description: 'Гофрированные картонные коробки для надежной упаковки',
    image: '/images/products/corrugated-boxes.jpg',
    category: 'Коробки'
  }
];

const initialState: CatalogState = {
  selectedCategory: 'Все',
  categories: ['Все', 'Пакеты', 'Коробки', 'Пленка', 'Этикетки'],
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