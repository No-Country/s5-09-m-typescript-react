import { createSlice } from '@reduxjs/toolkit';

interface modalState {
	isLoading: Boolean;
}

const initialState: modalState = {
	isLoading: false,
};

const settingSlice = createSlice({
	name: 'setting',
	initialState,
	reducers: {
		changeState(state) {
			state.isLoading = !state.isLoading;
		},
	},
});

export const { changeState } = settingSlice.actions;
export default settingSlice.reducer;
