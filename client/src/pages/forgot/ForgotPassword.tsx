import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LayoutForms, ForgotPasswordModal, AlertModal } from '../../components';
import { publicRoute } from '../../models/routes';
import { useAppSelector } from '../../redux/hooks';
import { changeVerifyLog } from '../../redux/slices/setting';
import ForgotForm from './components/ForgotForm';

export default function ForgotPassword() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const verifyLog = useAppSelector(state => state.setting.verifyLog);
	const route = () => {
		dispatch(changeVerifyLog(''));
		navigate(publicRoute.login);
	};
	const closeOnly = () => {
		dispatch(changeVerifyLog(''));
	};
	return (
		<LayoutForms
			tittle={'Cambiar contraseña'}
			text={'Se te olvido la contraseña? Renuevala aquí'}
			imgUrl='https://res.cloudinary.com/dlxlitkl6/image/upload/v1670295417/dise%C3%B1o%20definitivo/formularios/img-recuperar-contrase%C3%B1a_kts8ma.svg'
		>
			<ForgotForm />

			{verifyLog == 'Contraseña cambiada' ? (
				<AlertModal
					title='Contraseña Actualizada'
					text='Su contraseña fue cambiada con exito'
					urlImg='https://res.cloudinary.com/dlxlitkl6/image/upload/v1670159853/dise%C3%B1o%20definitivo/icons%20alerts/Icon_asy2kx.svg'
					close={() => route()}
				/>
			) : (
				verifyLog == 'Error contraseña' && (
					<AlertModal
						title='Error, algo salio mal'
						text='Porfavor intente de nuevo en unos minutos'
						urlImg='https://res.cloudinary.com/dlxlitkl6/image/upload/v1670160613/dise%C3%B1o%20definitivo/icons%20alerts/Icon_dhw3y4.png'
						close={() => closeOnly()}
					/>
				)
			)}
		</LayoutForms>
	);
}
