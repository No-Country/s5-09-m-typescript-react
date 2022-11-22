import { Navigate, Outlet } from 'react-router-dom';

interface Props {
	isAuth: boolean | undefined;
	children?: React.ReactNode;
	redirectTo?: string;
}

export default function PrivateRoute({
	isAuth,
	children,
	redirectTo = '/',
}: Props) {
	if (!isAuth) return <Navigate to={redirectTo} />;

	return children ? <>children</> : <Outlet />;
}
