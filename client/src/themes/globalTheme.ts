import { createTheme } from '@mui/material';

export const globalTheme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#E7E8EA',
		},
		secondary: {
			main: '#FC802C',
			light: '#FEA060',
		},
		third: {
			main: '#4E7D64',
		},
		complementary: {
			main: '#112734',
		},
		text: {
			primary: '#112734',
			secondary: '#2F6117',
		},
	},
});
