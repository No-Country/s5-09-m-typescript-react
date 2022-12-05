import { Typography } from '@mui/material';

export default function DeletableChips({ name }: any) {
	return (
		<Typography
			variant='body1'
			component='span'
			sx={{
				padding: '10px',
				borderRadius: '30px',
				color: 'secondary.main',
				backgroundColor: 'primary.dark',
				fontWeight: '600',
				boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
			}}
		>
			{name}
		</Typography>
	);
}
