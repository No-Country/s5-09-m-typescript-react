import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types';
// Define a type for the slice state

// Define the initial state using that type
const initialState: User = {
	code: undefined,
	email: '',
	emailVerified: false,
	name: '',
	img: '',
	id: undefined,
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
			});
		},
		emailVerification: (state, action: PayloadAction<User>) => {
			state.code = action.payload.code;
			state.id = action.payload.id;
		},
	},
});

export const { setUser, closeSession, emailVerification } = userSlice.actions;

export default userSlice.reducer;
