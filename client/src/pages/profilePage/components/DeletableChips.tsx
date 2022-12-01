import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

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
