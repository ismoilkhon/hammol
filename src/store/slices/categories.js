import { createSlice } from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState: [],
	reducers: {
		load(state, action) {
			if (!state.length) {
				state.push(...action.payload)
			}
		},
	},
})

export const categoriesActions = categoriesSlice.actions
export const categoriesReducer = categoriesSlice.reducer
