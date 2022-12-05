import { ForgotPasswordModal, LayoutForms } from '../../components';
import { useAppSelector } from '../../redux/hooks';
import InputLogin from './components/InputLogin';
export default function Login() {
	const showModal = useAppSelector(
		store => store.setting.showForgotPasswordModal,
	);
	return (
		<LayoutForms
			tittle='Bienvenido'
			text='Inicia Sesion y disfruta de todo lo que tenemos para ti.'
		>
			<InputLogin />
			{showModal && <ForgotPasswordModal />}
		</LayoutForms>
	);
}
