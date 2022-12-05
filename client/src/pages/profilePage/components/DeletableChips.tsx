import { Stack, Chip } from '@mui/material';
export default function DeletableChips() {
	const handleDelete = () => {
		console.info('You clicked the delete icon.');
	};

	return (
		<Stack direction='row' spacing={2}>
			<Chip
				label='Meditar'
				component='h1'
				variant='outlined'
				onDelete={handleDelete}
			/>
		</Stack>
	);
}
