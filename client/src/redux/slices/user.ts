import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { userEmptyState, user } from '../../models/user.type';
import { json } from 'stream/consumers';
// Define a type for the slice state

// Define the initial state using that type
const initialState: user = JSON.parse(
	localStorage.getItem('user') || JSON.stringify(userEmptyState),
);

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<user>) => {
			return action.payload;
		},
		resetUser: state => {
			localStorage.clear();
			return (state = userEmptyState);
		},
	},
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
