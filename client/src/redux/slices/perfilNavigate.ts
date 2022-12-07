import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Navegation {
	route: string;
}

const initialState: Navegation = {
	route: 'perfil',
};

const navegationSlice = createSlice({
	name: 'navegation',
	initialState,
	reducers: {
		changeRoute(state, action: PayloadAction<string>) {
			state.route = action.payload;
		},
	},
});

export const { changeRoute } = navegationSlice.actions;
export default navegationSlice.reducer;
