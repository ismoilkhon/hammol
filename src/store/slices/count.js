import { createSlice } from '@reduxjs/toolkit'

export const countSlice = createSlice({
	name: 'count',
	initialState: { value: 0 },
	reducers: {
		set(state, action) {
			state.value = action.payload
		},
	},
})

export const countActions = countSlice.actions
export const countReducer = countSlice.reducer
