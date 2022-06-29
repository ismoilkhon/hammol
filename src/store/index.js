import { queryReducer } from './slices/query'
import { countReducer } from './slices/count'
import { offsetReducer } from './slices/offset'
import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './slices/products'
import { categoriesReducer } from './slices/categories'
import { selectedCategoryReducer } from './slices/selectedCategory'

export const store = configureStore({
	reducer: {
		count: countReducer,
		query: queryReducer,
		offset: offsetReducer,
		products: productsReducer,
		categories: categoriesReducer,
		selectedCategory: selectedCategoryReducer,
	},
})
