import {
	Button,
	IconButton,
	InputAdornment,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { onRegister } from '../../../service/register';

type FormInput = {
	fullName: string;
	email: string;
	password: string;
};

export default function SignupForm() {
	const [showPassword, setshowPassword] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInput>();
	const onSubmit = (data: FormInput) => {
		onRegister(data);
	};

	return (
		<Stack
			component='form'
			direction={'column'}
			spacing='45px'
			sx={{
				padding: '60px',
				paddingBottom: '100px',
			}}
		>
			<Typography
				variant='h3'
				sx={{
					alignSelf: 'center',
					color: 'text.secondary',
					fontWeight: 700,
					fontSize: '32px',
					lineHeight: '38px',
				}}
			>
				Crea tu Cuenta
			</Typography>
			<TextField
				error={errors.fullName ? true : false}
				helperText={errors.fullName ? errors.fullName.message?.toString() : ''}
				{...register('fullName', { required: 'Ingrese un nombre' })}
				label='Nombre Completo'
				variant='outlined'
			/>
			<TextField
				error={errors.email ? true : false}
				helperText={errors.email ? errors.email.message?.toString() : ''}
				{...register('email', {
					pattern: {
						message: 'Ingrese un correo valido',
						value:
							/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
					},
				})}
				label='Correo'
				variant='outlined'
			/>
			<TextField
				error={errors.password ? true : false}
				type={showPassword ? 'text' : 'password'}
				{...register('password', {
					pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
				})}
				helperText='Debe contener 8 caracteres con al menos una letra mayuscula, minuscula y un numero'
				label='Contraseña'
				variant='outlined'
				InputProps={{
					endAdornment: (
						<InputAdornment position='start'>
							<IconButton
								aria-label='toggle password visibility'
								onClick={() => setshowPassword(prev => !prev)}
								edge='end'
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
			<Button
				onClick={handleSubmit(onSubmit)}
				variant='contained'
				sx={{
					backgroundColor: 'secondary.main',
					color: '#FFFFFF',
					fontWeight: 500,
					fontSize: '18px',
					lineHeight: '24px',
					height: '52px',
					textTransform: 'capitalize',
				}}
			>
				Registrarse
			</Button>
			<Typography
				sx={{
					alignSelf: 'flex-end',
					fontWeight: 500,
					fontSize: '20px',
					lineHeight: '28px',
				}}
			>
				¿Tienes una cuenta?{' '}
				<Typography
					component='span'
					sx={{
						color: 'text.secondary',
						fontWeight: 600,
						fontSize: '20px',
						lineHeight: '28px',
					}}
				>
					Inicia Sesión
				</Typography>
			</Typography>
		</Stack>
	);
}
