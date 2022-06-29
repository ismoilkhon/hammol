import { createSlice } from '@reduxjs/toolkit'

export const selectedCategorySlice = createSlice({
	name: 'selectedCategory',
	initialState: { value: '' },
	reducers: {
		set(state, action) {
			state.value = action.payload
		},
	},
})

export const selectedCategoryActions = selectedCategorySlice.actions
export const selectedCategoryReducer = selectedCategorySlice.reducer
