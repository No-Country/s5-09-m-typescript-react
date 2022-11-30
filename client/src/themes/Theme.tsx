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
