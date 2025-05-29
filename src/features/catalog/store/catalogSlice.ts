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

const initialState: CatalogState = {
  selectedCategory: 'Все',
  categories: ['Все', 'Пакеты', 'Коробки', 'Пленка', 'Этикетки'],
  products: [],
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