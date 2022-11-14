import { ThemeOptions, PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface PaletteOptions {
		type?: string;
		success?: PaletteColorOptions;
		warning?: PaletteColorOptions;
		third?: PaletteColorOptions;
		complementary?: PaletteColorOptions;
	}
}
