import { LayoutForms } from '../../components';
import SignupForm from './components/SignupForm';

export default function Signup() {
	return (
		<LayoutForms
			tittle='Bienvenido'
			text='Inicia Sesion y disfruta de todo lo que tenemos para ti.'
		>
			<SignupForm />
		</LayoutForms>
	);
}
