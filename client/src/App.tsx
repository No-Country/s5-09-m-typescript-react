import { Home } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutNavegation from './utilities/LayoutNavegation';
import Contact from './pages/contact/Contact';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';

function App() {
	return (
		<BrowserRouter>
			<LayoutNavegation>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/misPracticas' element={<h1>en contruccion</h1>} />
					<Route path='/contacto' element={<Contact />} />
					<Route path='/iniciarSesion' element={<Login />} />
					<Route path='/registrate' element={<Signup />} />
					<Route path='/nosotros' element={<h1>en contruccion</h1>} />
				</Routes>
			</LayoutNavegation>
		</BrowserRouter>
	);
}

export default App;
