import { Home } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutNavegation from './utilities/LayoutNavegation';
import Contact from './pages/contact/Contact';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import AboutUs from './pages/aboutus/AboutUs';
import Practices from './pages/practices/Practices';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { FacebookProvider } from 'react-facebook';

function App() {
	return (
		<FacebookProvider appId={'461951009397297'}>
			<GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_ID}>
				<BrowserRouter>
					<LayoutNavegation>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/misPracticas' element={<Practices />} />
							<Route path='/contacto' element={<Contact />} />
							<Route path='/iniciarSesion' element={<Login />} />
							<Route path='/nostros' element={<AboutUs />} />
							<Route path='/registrate' element={<Signup />} />
							<Route path='/nosotros' element={<h1>en contruccion</h1>} />
						</Routes>
					</LayoutNavegation>
				</BrowserRouter>
			</GoogleOAuthProvider>
		</FacebookProvider>
	);
}

export default App;
