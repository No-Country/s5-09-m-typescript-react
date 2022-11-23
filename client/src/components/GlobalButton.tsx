import { Button, SxProps, Theme } from '@mui/material';

interface GlobalButton {
	text: string;
	action: () => void;
	width?: string;
	height?: string;
  sx?: SxProps<Theme>,
}
export default function GlobalButton({
	text,
	action,
	width = '250px',
	height = '50px',
  sx,
}: GlobalButton) {
	return (
		<Button
			variant='contained'
			sx={{
				width: width,
				height: height,
        ...sx,
			}}
			color='secondary'
			onClick={() => action()}
		>
			{text}
		</Button>
	);
}
