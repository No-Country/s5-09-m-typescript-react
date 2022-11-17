import { Footer, MenuNavegation } from '../components';
import { children } from '../types/interfaces';
export default function LayoutNavegation({ children }: children) {
	return (
		<>
			<MenuNavegation />
			{children}
			<Footer />
		</>
	);
}
