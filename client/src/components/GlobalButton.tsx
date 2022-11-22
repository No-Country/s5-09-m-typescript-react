import { Button } from '@mui/material';

interface GlobalButton {
	text: string;
	action: () => void;
	width?: string;
	height?: string;
}
export default function GlobalButton({
	text,
	action,
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
			onClick={() => action()}
		>
			{text}
		</Button>
	);
}

export function GlobalButtonWhite({
	text,
	action,
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
			color='primary'
			onClick={() => action()}
		>
			{text}
		</Button>
	);
}
