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
	FormProfileWithUserInfo2,
} from './pages';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { publicRoute } from './models/routes';

function App() {
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
						<Route path={publicRoute.practices} element={<Practices />} />
						<Route path={publicRoute.contact} element={<Contact />} />
						<Route path={publicRoute.AboutUs} element={<AboutUs />} />
						<Route element={<PublicRoute />}>
							<Route path={publicRoute.login} element={<Login />} />
							<Route path={publicRoute.register} element={<Signup />} />
							<Route path={publicRoute.register} element={<h1>recuperar</h1>} />
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
