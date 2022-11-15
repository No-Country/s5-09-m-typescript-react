import {
	PaletteOptions,
	Palette,
	PaletteColor,
	ThemeOptions,
	Theme,
} from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Theme {
		palette: {
			third: {
				main: string;
			};
		};
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		palette: {
			third: {
				main: string;
			};
		};
	}
	interface PaletteColor {
		light?: string;
		main: string;
		dark?: string;
		contrastText?: string;
	}

	interface Palette {
		third: Palette['primary'];
	}
	interface PaletteOptions {
		type?: string;
		complementary?: PaletteColorOptions;
		third: PaletteOptions['primary'];
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		third: true;
	}
}
