import { Footer, MenuNavegation } from '../components';

interface children {
	children: JSX.Element;
}
export default function LayoutNavegation({ children }: children) {
	return (
		<>
			<MenuNavegation />
			{children}
			<Footer />
		</>
	);
}
