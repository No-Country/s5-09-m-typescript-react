import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LayoutForms, ForgotPasswordModal, AlertModal } from '../../components';
import { publicRoute } from '../../models/routes';
import { useAppSelector } from '../../redux/hooks';
import { changeVerifyLog } from '../../redux/slices/setting';

export default function ForgotPassword() {
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
			imgUrl='https://res.cloudinary.com/dlxlitkl6/image/upload/v1670295417/dise%C3%B1o%20definitivo/formularios/img-recuperar-contrase%C3%B1a_kts8ma.svg'
		>
			{/* <ForgotPasswordModal /> */}
			<h1>Recover Password</h1>
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
