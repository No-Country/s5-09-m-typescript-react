import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface modalState {
	isLoading: Boolean;
	showHabitModal: Boolean;
	showForgotPasswordModal: Boolean;
	errorPassword: Boolean;
	errorEmail: Boolean;
	verifyLog: string;
}

const initialState: modalState = {
	isLoading: false,
	showHabitModal: false,
	showForgotPasswordModal: false,
	errorPassword: false,
	errorEmail: false,
	verifyLog: '',
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
		changeErrorPassword(state) {
			state.errorPassword = !state.errorPassword;
		},
		changeErrorEmail(state) {
			state.errorEmail = !state.errorEmail;
		},
		changeVerifyLog(state, action: PayloadAction<string>) {
			state.verifyLog = action.payload;
		},
	},
});

export const {
	changeState,
	changeShowHabitModal,
	changeForgotPasswordModal,
	changeErrorPassword,
	changeErrorEmail,
	changeVerifyLog,
} = settingSlice.actions;
export default settingSlice.reducer;
