import {
	Link,
	Button,
	Grid,
	TextField,
	Typography,
	Checkbox,
	FormControlLabel,
} from '@mui/material';
import { useForm } from 'react-hook-form';

type Inputs = {
	email: string;
	password: string;
	isChecked: boolean;
};

export default function InputLogin() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	return (
		<form>
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
							minLength: { value: 6, message: 'Mínimo 6 caracteres' },
						})}
						error={!!errors.password}
						helperText={errors.password?.message}
						label='Contraseña'
						type='password'
						variant='outlined'
						color='text'
						fullWidth
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
					<Link
						href='#'
						sx={{
							color: 'text.secondary',
						}}
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
					<Button variant='outlined' fullWidth sx={{ maxWidth: '100px' }}>
						<img
							src='https://res.cloudinary.com/dlxlitkl6/image/upload/v1668694018/ananda%20marga/facebook_ic_ashpl3.svg'
							alt='132'
						/>
					</Button>
					<Button variant='outlined' fullWidth sx={{ maxWidth: '100px' }}>
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
					<Typography>Aún no tienes cuenta?</Typography>
					<Link
						href='#'
						sx={{
							color: 'text.secondary',
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
