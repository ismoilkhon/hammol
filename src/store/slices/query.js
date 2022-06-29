import { createSlice } from '@reduxjs/toolkit'

export const querySlice = createSlice({
	name: 'query',
	initialState: { value: '' },
	reducers: {
		set(state, action) {
			state.value = action.payload
		},
	},
})

export const queryActions = querySlice.actions
export const queryReducer = querySlice.reducer
