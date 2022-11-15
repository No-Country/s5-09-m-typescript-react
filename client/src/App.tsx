import { Typography } from '@mui/material';
import { useState } from 'react';
import MenuNavegation from './components/MenuNavegation';
import Home from './pages/home/Home';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<MenuNavegation></MenuNavegation>
			<Home />
		</>
	);
}

export default App;
