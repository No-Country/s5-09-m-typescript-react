import {
	Link,
	Button,
	Grid,
	TextField,
	Typography,
	Checkbox,
	FormControlLabel,
	IconButton,
	InputAdornment,
} from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { useGoogleLogin } from '@react-oauth/google';
import { onLogin, onLoginGoogle } from '../../../service/authApi';
import axios from 'axios';
// import { LoginSocialFacebook } from 'reactjs-social-login';
import { isEmail } from '../../../utilities';
import { Message, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

type Inputs = {
	email: string;
	password: string;
	isChecked: boolean;
};

export default function InputLogin() {
	const [showPassword, setshowPassword] = useState(false);
	const {
		register,
		handleSubmit,

		formState: { errors },
	} = useForm<Inputs>();

	const login = useGoogleLogin({
		onSuccess: async response => {
			try {
				const data = await axios.get(
					'https://www.googleapis.com/oauth2/v3/userinfo',
					{
						headers: {
							Authorization: `Bearer ${response.access_token}`,
						},
					},
				);
				console.log(data);
			} catch (err) {
				console.log(err);
			}
		},
	});

	// async function handleLogin() {
	// 	try {
	// 		const response = await loginFacebook({
	// 			scope: 'email',
	// 		});

	// 		console.log(response.status);
	// 	} catch (error: any) {
	// 		console.log(error.message);
	// 	}
	// }

	return (
		<form onSubmit={handleSubmit(onLogin)}>
			<Grid container spacing={5} p={6}>
				<Grid item xs={12}>
					<Typography variant='h4' component='h4' color='text.secondary'>
						Iniciar Sesión
					</Typography>
				</Grid>

				<Grid item xs={12}>
					<TextField
						{...register('email', {
							required: 'Este campo es requerido',
							validate: isEmail,
						})}
						error={!!errors.email}
						helperText={errors.email?.message}
						type='email'
						label='Correo'
						variant='outlined'
						color='text'
						fullWidth
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						{...register('password', {
							required: 'Este campo es requerido',
						})}
						error={!!errors.password}
						helperText={errors.password?.message}
						label='Contraseña'
						variant='outlined'
						color='text'
						fullWidth
						InputProps={{
							endAdornment: (
								<InputAdornment position='start'>
									<IconButton
										aria-label='toggle password visibility'
										onClick={() => setshowPassword((prev: any) => !prev)}
										edge='end'
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							),
						}}
						type={showPassword ? 'text' : 'password'}
					/>
				</Grid>
				<Grid item xs={6}>
					<FormControlLabel
						control={<Checkbox {...register('isChecked')} color='secondary' />}
						label='Acuerdate de mi'
					/>
				</Grid>
				<Grid
					item
					xs={6}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'flex-end',
					}}
				>
					<RouterLink to='/'>
						<Link
							sx={{
								color: 'text.secondary',
							}}
						>
							¿Olvidaste la contraseña?
						</Link>
					</RouterLink>
				</Grid>
				<Grid
					item
					xs={12}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography component='p' variant='subtitle1'>
						Inicia sesión con
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					sx={{
						display: 'flex',
						gap: 6,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					{/* <LoginSocialFacebook
						appId='461951009397297'
						onResolve={res => {
							console.log(res);
						}}
						onReject={error => {
							console.log(error);
						}}
					>
						<Button
							variant='outlined'
							fullWidth
							sx={{ maxWidth: '100px' }}
							// onClick={handleLogin}
							// disabled={isLoading}
						>
							<img
								src='https://res.cloudinary.com/dlxlitkl6/image/upload/v1668694018/ananda%20marga/facebook_ic_ashpl3.svg'
								alt='132'
							/>
						</Button>
					</LoginSocialFacebook> */}
					<Button
						variant='outlined'
						fullWidth
						sx={{ maxWidth: '100px' }}
						onClick={() => login()}
					>
						<img
							src='https://res.cloudinary.com/dlxlitkl6/image/upload/v1668694018/ananda%20marga/google_ic_nf3jdu.svg'
							alt='132'
						/>
					</Button>
				</Grid>
				<Grid
					item
					xs={12}
					sx={{
						display: 'flex',

						justifyContent: 'flex-end',
						alignItems: 'center',
					}}
				>
					<Typography>Aún no tienes cuenta?</Typography>{' '}
					<RouterLink to='/registrate'>
						<Link
							href='/registrate'
							sx={{
								color: 'text.secondary',
							}}
						>
							Registrarse
						</Link>
					</RouterLink>
				</Grid>
				<Grid item xs={12}>
					<Button
						type='submit'
						color='secondary'
						variant='contained'
						className='circular-btn'
						size='large'
						fullWidth
					>
						Ingresar
					</Button>
				</Grid>
			</Grid>
		</form>
	);
}
