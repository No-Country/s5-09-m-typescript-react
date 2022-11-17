import { Typography } from '@mui/material';
import { useState } from 'react';
import Footer from './components/Footer';
import MenuNavegation from './components/MenuNavegation';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';


function App() {
	const [count, setCount] = useState(0);

	return (
		<>
		{/* <InputLogin /> */}
			<MenuNavegation />
			<Home />
			<Footer />
		</>
	);
}

export default App;
