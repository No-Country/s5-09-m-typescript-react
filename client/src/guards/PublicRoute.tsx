import { Navigate, Outlet } from 'react-router-dom';
import { privateRoute } from '../models/routes';
import { useAppSelector } from '../redux/hooks';
export default function PublicRoute({}) {
	const user = useAppSelector(store => store.user);
	return !user.isAuth ? (
		<Outlet />
	) : (
		<Navigate replace to={privateRoute.dashboard} />
	);
}
