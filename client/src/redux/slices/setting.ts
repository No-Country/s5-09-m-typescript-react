import { createSlice } from '@reduxjs/toolkit';

interface modalState {
	isLoading: Boolean;
	showHabitModal: Boolean;
	showForgotPasswordModal: Boolean;
}

const initialState: modalState = {
	isLoading: false,
	showHabitModal: false,
	showForgotPasswordModal: false,
};

const settingSlice = createSlice({
	name: 'setting',
	initialState,
	reducers: {
		changeState(state) {
			state.isLoading = !state.isLoading;
		},
		changeShowHabitModal(state) {
			state.showHabitModal = !state.showHabitModal;
		},
		changeForgotPasswordModal(state) {
			state.showForgotPasswordModal = !state.showForgotPasswordModal;
		},
	},
});

export const { changeState, changeShowHabitModal, changeForgotPasswordModal } =
	settingSlice.actions;
export default settingSlice.reducer;
