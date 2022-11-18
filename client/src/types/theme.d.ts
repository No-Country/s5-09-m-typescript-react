import {
	ThemeOptions,
	PaletteOptions,
	Palette,
	PaletteColor,
} from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		third: Palette['primary'];
	}
	interface PaletteOptions {
		type: string;
		complementary: PaletteColorOptions;
		third: PaletteOptions['primary'];
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		third: true;
	}
}
declare module '@mui/material/TextField' {
	interface TextFieldPropsColorOverrides {
		third: true;
		text: true;
	}
}
