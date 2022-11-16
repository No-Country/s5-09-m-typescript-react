import { Home, InputLogin } from './pages';
import { useState } from 'react';
import { MenuNavegation, Footer } from './components';

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
