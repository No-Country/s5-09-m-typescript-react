import { Typography } from '@mui/material';
import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	return (
		<Typography variant='h1' color={'third.main'}>
			Hero
		</Typography>
	);
}

export default App;
