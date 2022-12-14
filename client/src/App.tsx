import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LayoutNavegation } from './components';
import { PrivateRoute, PublicRoute } from './guards';
import {
	Practices,
	AboutUs,
	Login,
	Signup,
	Contact,
	Home,
	Profile,
	EmailForgotPassword,
	ForgotPassword,
} from './pages';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { publicRoute } from './models/routes';
import { useAppDispatch } from './redux/hooks';
import { initialState, setUser } from './redux/slices/user';
import TerminosLegales from './pages/legals/legals';

function App() {
	const dispatch = useAppDispatch();
	dispatch(
		setUser(
			JSON.parse(localStorage.getItem('User') || JSON.stringify(initialState)),
		),
	);

	return (
		<GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_ID}>
			<BrowserRouter>
				<LayoutNavegation>
					<Routes>
						<Route path='/*' element={<Home />} />
						<Route path='/' element={<Home />} />
						<Route path={publicRoute.Legal} element={<TerminosLegales />} />
						<Route path={publicRoute.practices} element={<Practices />} />
						<Route path={publicRoute.contact} element={<Contact />} />
						<Route path={publicRoute.AboutUs} element={<AboutUs />} />
						<Route element={<PublicRoute />}>
							<Route path={publicRoute.login} element={<Login />} />
							<Route path={publicRoute.register} element={<Signup />} />
							<Route
								path={publicRoute.recoverPassword}
								element={<EmailForgotPassword />}
							/>
							<Route
								path={publicRoute.forgotPassword}
								element={<ForgotPassword />}
							/>
						</Route>
						<Route element={<PrivateRoute />}>
							<Route path='/perfil' element={<Profile />} />
						</Route>
					</Routes>
				</LayoutNavegation>
			</BrowserRouter>
		</GoogleOAuthProvider>
	);
}

export default App;
