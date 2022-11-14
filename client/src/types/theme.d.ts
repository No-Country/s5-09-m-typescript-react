import { ThemeOptions, PaletteOptions, Palette } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface PaletteOptions {
		type?: string;
		success?: PaletteColorOptions;
		warning?: PaletteColorOptions;
		third?: PaletteColorOptions;
		complementary?: PaletteColorOptions;
	}
}
