import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { userEmptyState, user } from '../../models/user.type';
// Define a type for the slice state

// Define the initial state using that type
const initialState: user = userEmptyState;

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<user>) => {
			return action.payload;
		},
	},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
