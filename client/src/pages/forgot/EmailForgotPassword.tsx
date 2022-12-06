import { AlertModal, ForgotPasswordModal, LayoutForms } from '../../components';
import { useAppSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { publicRoute } from '../../models/routes';
import { changeVerifyLog } from '../../redux/slices/setting';

type Inputs = {
	example: string;
	exampleRequired: string;
};

export default function EmailForgotPassword() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const verifyLog = useAppSelector(state => state.setting.verifyLog);
	const route = () => {
		dispatch(changeVerifyLog(''));
		navigate(publicRoute.login);
	};
	return (
		<LayoutForms
			tittle={'Cambiar contraseña'}
			text={'Se te olvido la contraseña? Renuevala aquí'}
		>
			<ForgotPasswordModal />
			{verifyLog == 'Email Enviado' ? (
				<AlertModal
					title='Email Enviado'
					text='Su email de reinicio de password fue enviado con exito, porfavor mire su correo'
					urlImg='https://res.cloudinary.com/dlxlitkl6/image/upload/v1670159853/dise%C3%B1o%20definitivo/icons%20alerts/Icon_asy2kx.svg'
					close={() => route()}
				/>
			) : (
				verifyLog == 'Error email' && (
					<AlertModal
						title='Error, algo salio mal'
						text='Porfavor intente de nuevo en unos minutos'
						urlImg='https://res.cloudinary.com/dlxlitkl6/image/upload/v1670160613/dise%C3%B1o%20definitivo/icons%20alerts/Icon_dhw3y4.png'
						close={() => route()}
					/>
				)
			)}
		</LayoutForms>
	);
}
