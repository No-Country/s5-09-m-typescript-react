import { ForgotPasswordModal, LayoutForms } from '../../components';
import { useAppSelector } from '../../redux/hooks';
import EmailVerification from './components/EmailVerification';
import InputLogin from './components/InputLogin';
export default function Login() {
	const showModal = useAppSelector(
		store => store.setting.showForgotPasswordModal,
	);
	const user = useAppSelector(store => store.user);
	return (
		<LayoutForms
			tittle='Bienvenido'
			text='Inicia Sesion y disfruta de todo lo que tenemos para ti.'
			imgUrl='https://res.cloudinary.com/dlxlitkl6/image/upload/v1670295392/dise%C3%B1o%20definitivo/formularios/img-inicio-sesion_h3n3bw.svg'
		>
			<InputLogin />
			{showModal && <ForgotPasswordModal />}
			{user.code && <EmailVerification />}
		</LayoutForms>
	);
}
