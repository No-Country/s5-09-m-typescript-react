import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function DeletableChips() {
	const handleDelete = () => {
		console.info('You clicked the delete icon.');
	};

	return (
		<Stack direction='row' spacing={2}>
			<Chip label='Deletable' variant='outlined' onDelete={handleDelete} />
			<Chip label='Deletable' variant='outlined' onDelete={handleDelete} />
		</Stack>
	);
}
