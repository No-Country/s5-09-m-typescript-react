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
			imgUrl='https://res.cloudinary.com/dlxlitkl6/image/upload/v1670295392/dise%C3%B1o%20definitivo/formularios/img-inicio-sesion_h3n3bw.svg'
		>
			<InputLogin />
			{showModal && <ForgotPasswordModal />}
		</LayoutForms>
	);
}
