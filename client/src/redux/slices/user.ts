import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { userEmptyState, user } from '../../types/user.type';
// Define a type for the slice state

// Define the initial state using that type
const initialState: boolean = false;

export const userSlice = createSlice({
	name: 'user',
	initialState: userEmptyState,
	reducers: {
		isAuth: (state, action: PayloadAction<user>) => {
			return action.payload;
		},
	},
});

export const { isAuth } = userSlice.actions;

export default userSlice.reducer;
