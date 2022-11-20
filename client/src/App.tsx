import { Home } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutNavegation from './utilities/LayoutNavegation';
import Contact from './pages/contact/Contact';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import AboutUs from './pages/aboutus/AboutUs';
import Practices from './pages/practices/Practices';
import ProfilePage from './pages/profilePage/ProfilePage';

function App() {
	return (
		<BrowserRouter>
			<LayoutNavegation>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/misPracticas' element={<Practices />} />
					<Route path='/contacto' element={<Contact />} />
					<Route path='/iniciarSesion' element={<Login />} />
					<Route path='/registrate' element={<Signup />} />
					<Route path='/nosotros' element={<AboutUs />} />
					<Route path='/perfil' element={<ProfilePage />} />
				</Routes>
			</LayoutNavegation>
		</BrowserRouter>
	);
}

export default App;
