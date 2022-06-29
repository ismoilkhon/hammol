import { createSlice } from '@reduxjs/toolkit'

export const offsetSlice = createSlice({
	name: 'offset',
	initialState: { value: 0 },
	reducers: {
		set(state, action) {
			state.value = action.payload
		},
	},
})

export const offsetActions = offsetSlice.actions
export const offsetReducer = offsetSlice.reducer
