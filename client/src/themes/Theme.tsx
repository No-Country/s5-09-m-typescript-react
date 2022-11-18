import { createContext, useContext, useMemo, useState } from 'react';
import {
	ThemeProvider,
	StyledEngineProvider,
	CssBaseline,
	createTheme,
} from '@mui/material';
import React, { ReactNode, FC } from 'react';
// import { createTheme } from '@mui/material/styles'

export const useThemeContext = () => useContext(ThemeContext);

const ThemeContext = createContext({});

interface Props {
	children?: ReactNode;
	// any props that come into the component
}

const Theme: FC<Props> = ({ children }) => {
	const [mode, setMode] = useState('light');

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[],
	);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					primary: {
						main: '#E7E8EA',
						dark: '#194067',
						light: '#9CC0DF',
					},
					secondary: {
						main: '#FC802C',
						light: '#FEA060',
						dark: '#DD6F10',
						contrastText: '#fff',
					},
					third: {
						main: '#4E7D64',
						contrastText: '#fff',
					},
					complementary: {
						main: '#112734',
					},
					text: {
						primary: '#112734',
						secondary: '#2F6117',
					},
				},
				// typography: {
				// 	htmlFontSize: 10,
				// 	fontSize: 10,
				// 	fontFamily: ['Roboto', 'Merriweather'].join(','),
				// },
			}),
		[mode],
	);

	return (
		<StyledEngineProvider injectFirst>
			<ThemeContext.Provider value={{ colorMode, theme }}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					{children}
				</ThemeProvider>
			</ThemeContext.Provider>
		</StyledEngineProvider>
	);
};

export default Theme;
