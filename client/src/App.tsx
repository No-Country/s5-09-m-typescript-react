import { Home } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutNavegation from './utilities/LayoutNavegation';

function App() {
	return (
		<BrowserRouter>
			<LayoutNavegation>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/misPracticas' element={<h1>en contruccion</h1>} />
					<Route path='/contacto' element={<h1>en contruccion</h1>} />
					<Route path='/iniciarSesion' element={<h1>en contruccion</h1>} />
					<Route path='/registrate' element={<h1>en contruccion</h1>} />
					<Route path='/nosotros' element={<h1>en contruccion</h1>} />
				</Routes>
			</LayoutNavegation>
		</BrowserRouter>
	);
}

export default App;
