import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
	name: 'products',
	initialState: [],
	reducers: {
		set(state, action) {
			state.length = 0
			state.push(...action.payload)
		},
	},
})

export const productsActions = productsSlice.actions
export const productsReducer = productsSlice.reducer
