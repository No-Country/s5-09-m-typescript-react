import { Button } from '@mui/material';

interface GlobalButton {
	text: string;
	navegacion: () => void;
	width?: string;
	height?: string;
}
export default function GlobalButton({
	text,
	navegacion,
	width = '250px',
	height = '50px',
}: GlobalButton) {
	return (
		<Button
			variant='contained'
			sx={{
				width: width,
				height: height,
			}}
			color='secondary'
			onClick={() => navegacion()}
		>
			{text}
		</Button>
	);
}
