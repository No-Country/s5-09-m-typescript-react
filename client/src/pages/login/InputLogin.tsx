import { ErrorOutline } from '@mui/icons-material';
import { Box, Button, Chip, Grid, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

type Inputs = {
	email: string;
	password: string;
};

export default function InputLogin() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	return (
		<Box sx={{ width: '500px' }}>
			<form>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography variant='h4' component='h4'>
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
							fullWidth
						/>
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
		</Box>
	);
}
