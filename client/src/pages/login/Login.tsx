import { LayoutForms } from '../../components';
import InputLogin from './components/InputLogin';
export default function Login() {
	return (
		<LayoutForms
			tittle='Bienvenido'
			text='Inicia Sesion y disfruta de todo lo que tenemos para ti.'
		>
			<InputLogin />
		</LayoutForms>
	);
}
