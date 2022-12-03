import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface modalState {
	isLoading: Boolean;
	showHabitModal: Boolean;
	showForgotPasswordModal: Boolean;
	errorPassword: Boolean;
}

const initialState: modalState = {
	isLoading: false,
	showHabitModal: false,
	showForgotPasswordModal: false,
	errorPassword: false,
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
		changeErrorPassword(state){
			state.errorPassword = !state.errorPassword;;
		}
	},
});

export const { changeState, changeShowHabitModal, changeForgotPasswordModal, changeErrorPassword } =
	settingSlice.actions;
export default settingSlice.reducer;
