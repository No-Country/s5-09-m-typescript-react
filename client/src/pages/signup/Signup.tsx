import { AlertModal, HabitsModal, LayoutForms } from '../../components';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import SignupForm from './components/SignupForm';
import {
	changeShowHabitModal,
	changeVerifyLog,
} from '../../redux/slices/setting';
import { useNavigate } from 'react-router-dom';
import { publicRoute } from '../../models/routes';

export default function Signup() {
	const dispatch = useAppDispatch();
	const showModal = useAppSelector(state => state.setting.showHabitModal);
	const verifyLog = useAppSelector(state => state.setting.verifyLog);
	const navigate = useNavigate();
	const route = () => {
		dispatch(changeVerifyLog(''));
		navigate(publicRoute.login);
	};
	return (
		<LayoutForms
			tittle='Bienvenido'
			text='Crea tu cuenta  y disfruta de todo lo que tenemos para ti.'
		>
			{!showModal ? (
				<SignupForm />
			) : (
				<HabitsModal closeModal={() => dispatch(changeShowHabitModal())} />
			)}
			{verifyLog == 'Usuario creado' ? (
				<AlertModal
					title='Usuario creado'
					text='Su cuenta a sido creada con exito'
					urlImg='https://res.cloudinary.com/dlxlitkl6/image/upload/v1670159853/dise%C3%B1o%20definitivo/icons%20alerts/Icon_asy2kx.svg'
					close={() => route()}
				/>
			) : (
				verifyLog == 'El usuario ya existe.' && (
					<AlertModal
						title='El usuario ya existe'
						text='Este usuario esta registrado, ¿olvido su contraseña?'
						urlImg='https://res.cloudinary.com/dlxlitkl6/image/upload/v1670160613/dise%C3%B1o%20definitivo/icons%20alerts/Icon_dhw3y4.png'
						close={() => route()}
					/>
				)
			)}
		</LayoutForms>
	);
}
