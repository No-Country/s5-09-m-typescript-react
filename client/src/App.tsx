import { Home } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LayoutNavegation, PrivateRoute, PublicRoute } from './components';
import Contact from './pages/contact/Contact';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import AboutUs from './pages/aboutus/AboutUs';
import Practices from './pages/practices/Practices';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useAppSelector } from './redux/hooks';

function App() {
	const authentication = useAppSelector(state => state.user);
	return (
		<GoogleOAuthProvider
			clientId={
				'460211922745-6t4k8cs9kk2a48a6c33r20g6mjel9tfu.apps.googleusercontent.com'
			}
		>
			<BrowserRouter>
				<LayoutNavegation>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/misPracticas' element={<Practices />} />
						<Route path='/contacto' element={<Contact />} />
						<Route path='/nosotros' element={<AboutUs />} />
						<Route element={<PublicRoute isAuth={authentication.isAuth} />}>
							<Route path='/iniciarSesion' element={<Login />} />
							<Route path='/registrate' element={<Signup />} />
							<Route
								path='/recuperarContraseña'
								element={<h1>recuperar contraseña</h1>}
							/>
						</Route>
						<Route element={<PrivateRoute isAuth={authentication.isAuth} />}>
							<Route path='/perfil' element={<h1>perfil en contruccion</h1>} />
						</Route>
					</Routes>
				</LayoutNavegation>
			</BrowserRouter>
		</GoogleOAuthProvider>
	);
}

export default App;
