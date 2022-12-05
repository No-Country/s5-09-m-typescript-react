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
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useGoogleLogin } from '@react-oauth/google';
import { onLogin, onLoginGoogle } from '../../../service';
import axios from 'axios';
// import { LoginSocialFacebook } from 'reactjs-social-login';
import { isEmail } from '../../../utilities';
import { Message, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
	changeErrorPassword,
	changeForgotPasswordModal,
} from '../../../redux/slices/setting';
import { AlertModal } from '../../../components';
import { publicRoute } from '../../../models/routes';

type Inputs = {
	email: string;
	password: string;
	isChecked: boolean;
};

export default function InputLogin() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const errorPassword = useAppSelector(state => state.setting.errorPassword);

	const closeModal = () => {
		dispatch(changeErrorPassword());
	};

	const [showPassword, setshowPassword] = useState(false);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const login = useGoogleLogin({
		onSuccess: async response => {
			try {
				const { data } = await axios.get(
					'https://www.googleapis.com/oauth2/v3/userinfo',
					{
						headers: {
							Authorization: `Bearer ${response.access_token}`,
						},
					},
				);
				const { name, picture, sub, email } = data;
				onLoginGoogle(name, picture, sub, email, dispatch);
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
		<form onSubmit={handleSubmit(data => onLogin(data, dispatch))}>
			<Grid
				container
				spacing={5}
				sx={{
					flexDirection: { xs: 'column', sm: 'row' },
					padding: { xs: '15px', sm: 6 },
				}}
			>
				<Grid item xs={12}>
					<Typography
						variant='h4'
						component='h4'
						color='third.main'
						textAlign='center'
						sx={{ fontSize: { xs: 26, md: 34 } }}
					>
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

					{errorPassword && (
						<AlertModal
							title='Contraseña incorrecta'
							text=''
							urlImg='https://res.cloudinary.com/dlxlitkl6/image/upload/v1669814884/ananda%20marga/home/alerts/FeaturedIconAlert_juurtw.png'
							close={() => dispatch(changeErrorPassword())}
						/>
					)}
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControlLabel
						control={<Checkbox {...register('isChecked')} color='secondary' />}
						label='Acuerdate de mi'
					/>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					sx={{
						display: 'flex',
						flexDirection: 'column',

						justifyContent: 'center',
						alignItems: { sx: 'flex-start', sm: 'flex-end' },
					}}
				>
					<Link
						sx={{
							color: 'secondary.main',
						}}
						onClick={() => dispatch(changeForgotPasswordModal())}
					>
						¿Olvidaste la contraseña?
					</Link>
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
						gap: 1,
						justifyContent: 'flex-end',
						flexDirection: { xs: 'column', sm: 'row' },
						alignItems: 'center',
					}}
				>
					<Typography>Aún no tienes cuenta?</Typography>
					<Link
						onClick={() => navigate(publicRoute.register)}
						sx={{
							cursor: 'pointer',
							color: 'secondary.main',
						}}
					>
						Registrarse
					</Link>
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
