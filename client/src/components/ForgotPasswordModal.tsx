import {
	Grid,
	Paper,
	Typography,
	IconButton,
	TextField,
	Box,
} from '@mui/material';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { SubmitHandler, useForm } from 'react-hook-form';
import GlobalButton from './GlobalButton';
import { useAppDispatch } from '../redux/hooks';
import { changeForgotPasswordModal } from '../redux/slices/setting';
import axios from 'axios';
import { postForgetPassword } from '../service';

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
	const formSubmitHandler: SubmitHandler<FormData> = data => {
		postForgetPassword(data, dispatch);
	};
	return (
		<Grid sx={{ width: '100%', padding: 5 }}>
			<Paper
				sx={{
					minHeight: '700px',
					flexDirection: 'column',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
				}}
				elevation={0}
			>
				<Box
					sx={{
						width: '100%',
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
						{/* <CloseIcon /> */}
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
					¿Olvidaste la contraseña?, no te preocupes ingresa la dirección de
					correo electrónico vinculada con tu cuenta.
				</Typography>

				<Grid item sx={{ margin: '30px 0', width: '100%' }}>
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
