import { createTheme } from '@mui/material';

export const globalTheme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#FFFFFF',
		},
		secondary: {
			main: '#9C51B7',
			light: '#B691C3',
		},
		third: {
			main: '#279F87',
		},
		complementary: {
			main: '#112734',
		},
		text: {
			primary: '#112734',
			secondary: '#41525D',
		},
	},
});
