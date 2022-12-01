import {
	Avatar,
	Box,
	Button,
	createStyles,
	IconButton,
	InputAdornment,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { onRegister } from '../../../service/register';
import { Link, useNavigate } from 'react-router-dom';
import { DragAndDrop } from '../../../components/imgDrag';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/hooks';

type FormInput = {
	fullname: string;
	email: string;
	password: string;
};

const styles = () =>
	createStyles({
		h: {
			'&:hover': {
				background: '#2F6117',
				color: '#fff',
			},
		},
	});

export default function SignupForm() {
	const [showPassword, setshowPassword] = useState(false);
	const [url, setUrl] = useState('');
	const dispatch = useDispatch();
	const { isLoading } = useAppSelector(store => store.setting);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInput>();

	const onSubmit = (data: FormInput) => {
		const modifiedData = { ...data, img: url };
		onRegister(modifiedData, dispatch);
		navigate('/iniciarSesion');
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
			<Stack
				justifyContent={'center'}
				alignItems={'center'}
				sx={{
					position: 'relative',
				}}
			>
				<Box>
					{url.length > 0 && (
						<IconButton
							onClick={() => setUrl('')}
							aria-label='update img'
							sx={{
								background: '#2F8919',

								color: '#fff',
								position: 'absolute',
								zIndex: 2,
								top: '53%',
								left: '53%',

								transition:
									'color .2s ease, background .2s linear, transform .1s linear',
								'&:hover': {
									background: '#2F6117',
									color: '#fff',
									transform: 'scale(1.2)',
									transition:
										'color .2s ease, background .2s linear, transform .1s linear',
								},
								// transform: 'translate(-50%, -50%);',
								// width: 80,
								// height: 80,
							}}
						>
							<AddOutlinedIcon />
						</IconButton>
					)}
					<Avatar
						alt='avatar provisional'
						src={url}
						sx={{
							width: 80,
							height: 80,
							objectFit: 'contain',
						}}
						style={{
							border: '2px solid #2F6117',
						}}
					/>
				</Box>
			</Stack>

			<TextField
				error={errors.fullname ? true : false}
				helperText={errors.fullname ? errors.fullname.message?.toString() : ''}
				{...register('fullname', { required: 'Ingrese un nombre' })}
				label='Nombre Completo'
				variant='outlined'
				color='text'
			/>
			<TextField
				color='text'
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
				color='text'
				error={errors.password ? true : false}
				type={showPassword ? 'text' : 'password'}
				{...register('password', {
					pattern:
						/^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[!@#\][:()"`;+\-'|_?,.</\\>=$%}{^&*~]).{8,}$/,
				})}
				helperText='Debe contener 8 caracteres con al menos una letra mayuscula, minuscula y un numero, caracter especial'
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
			{url.length < 1 && <DragAndDrop url={setUrl} />}
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
				<Link to='/iniciarSesion'>
					<Typography
						component='span'
						sx={{
							fontWeight: 600,
							fontSize: '20px',
							lineHeight: '28px',
						}}
					>
						Inicia Sesión
					</Typography>
				</Link>
			</Typography>
		</Stack>
	);
}
