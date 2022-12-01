import {
	Grid,
	Paper,
	Typography,
	IconButton,
	TextField,
	Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { SubmitHandler, useForm } from 'react-hook-form';
import GlobalButton from './GlobalButton';
import { useAppDispatch } from '../redux/hooks';
import { changeForgotPasswordModal } from '../redux/slices/setting';

type FormData = {
	email: string;
};
export default function ForgotPasswordModal() {
	const dispatch = useAppDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	//Para probar si funcionan los formularios
	const formSubmitHandler: SubmitHandler<FormData> = (data: FormData) => {
		console.log('email ', data);
		() => close();
	};
	return (
		<Grid
			sx={{
				position: 'fixed',
				top: 0,
				left: 0,
				zIndex: 999,
				display: 'flex',
				justifyContent: 'center',
				width: '100%',
				height: '100%',
				backgroundColor: 'rgba(0,0,0,0.25)',
			}}
		>
			<Paper
				sx={{
					marginTop: '100px',
					width: '400px',
					height: '390px',
					display: 'block',
					flexDirection: 'column',
					padding: '20px 20px',
					border: 'solid gray',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						position: 'relative',
					}}
				>
					<MailOutlineIcon
						sx={{
							color: 'secondary.main',
						}}
					/>

					<IconButton
						sx={{
							position: 'absolute',
							right: '0',
						}}
						aria-label='close'
						onClick={() => dispatch(changeForgotPasswordModal())}
					>
						<CloseIcon />
					</IconButton>
				</Box>
				<Typography
					variant='h4'
					color='text.primary'
					sx={{
						fontSize: '18px',
						fontWeight: 600,
						lineHeight: '28px',
						margin: '5px 0',
						textAlign: 'center',
					}}
				>
					Olvidó su contraseña?
				</Typography>

				<Typography
					variant='body1'
					color='text.primary'
					sx={{
						fontSize: '16px',
						fontWeight: 400,
						lineHeight: '24px',
						textAlign: 'center',
					}}
				>
					¡No te preocupes! Ingrese la dirección de correo electrónico vinculada
					con su cuenta.
				</Typography>

				<Grid item xs={12} sx={{ margin: '30px 0' }}>
					<TextField
						{...register('email', {
							required: 'Este campo es requerido',
							pattern: {
								message: 'Ingrese un correo valido',
								value:
									/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							},
						})}
						error={!!errors.email}
						helperText={errors.email?.message}
						type='email'
						placeholder='you@example.com'
						label='Correo'
						variant='outlined'
						color='text'
						fullWidth
					/>
				</Grid>

				<Grid
					item
					xs={12}
					style={{ display: 'flex', justifyContent: 'center' }}
				>
					<GlobalButton
						text='Enviar'
						action={handleSubmit(formSubmitHandler)}
					/>
				</Grid>
			</Paper>
		</Grid>
	);
}
