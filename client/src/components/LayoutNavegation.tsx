import { Footer, MenuNavegation } from '.';
import { children } from '../types/interfaces';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export default function LayoutNavegation({ children }: children) {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<>
			<MenuNavegation />
			{children}
			<Footer />
		</>
	);
}
