import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types';
// Define a type for the slice state

// Define the initial state using that type
const initialState: Partial<User> = {
	code: undefined,
	email: '',
	emailVerified: false,
	name: '',
	img: '',
	id: undefined,
	practices: [],
	token: '',
};
// setUser y closeSesion sin return no andan.
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			return action.payload;
		},
		closeSession: state => {
			return (state = {
				code: undefined,
				email: '',
				emailVerified: false,
				name: '',
				img: '',
				id: undefined,
				password: '',
				practices: [],
				login: false,
			});
		},
		emailVerification: (state, action: PayloadAction<Partial<User>>) => {
			state.code = action.payload.code;
			state.id = action.payload.id;
			state.email = action.payload.email;
		},
		addPractices: (state, action: PayloadAction<User>) => {
			state.practices.push(action.payload);
		},
		changeCode: (state, action: PayloadAction<User>) => {
			state.code = action.payload.code;
		},
	},
});

export const { setUser, closeSession, emailVerification, changeCode } =
	userSlice.actions;

export default userSlice.reducer;
