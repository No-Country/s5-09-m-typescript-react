import { LayoutForms } from '../../components';
import SignupForm from './components/SignupForm';

export default function Signup() {
	return (
		<LayoutForms
			tittle='Bienvenido'
			text='Crea tu cuenta  y disfruta de todo lo que tenemos para ti.'
		>
			<SignupForm />
		</LayoutForms>
	);
}
