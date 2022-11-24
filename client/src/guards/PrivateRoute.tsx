import { Navigate, Outlet } from 'react-router-dom';
import { publicRoute } from '../models/routes';
import { useAppSelector } from '../redux/hooks';

interface Props {
	isAuth?: boolean | undefined;
	redirectTo?: string;
}

export default function PrivateRoute({}) {
	const user = useAppSelector(store => store.user);
	return user.isAuth ? <Outlet /> : <Navigate replace to={publicRoute.login} />;
}