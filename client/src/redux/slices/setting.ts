import { createSlice } from '@reduxjs/toolkit';

interface modalState {
	isLoading: Boolean;
  showHabitModal: Boolean;
}

const initialState: modalState = {
	isLoading: false,
  showHabitModal: false,
};

const settingSlice = createSlice({
	name: 'setting',
	initialState,
	reducers: {
		changeState(state) {
			state.isLoading = !state.isLoading;
		},
    changeShowHabitModal(state) {
      state.showHabitModal = !state.showHabitModal
    }
	},
});

export const { changeState, changeShowHabitModal } = settingSlice.actions;
export default settingSlice.reducer;
