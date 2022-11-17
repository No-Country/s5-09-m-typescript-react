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

export default function SignupForm() {
	return (
		<Stack component="form" direction={"column"} spacing="45px" sx={{
      padding: "60px",
      paddingBottom: "100px",
    }}>
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
			<TextField label='Nombre Completo' variant='outlined' />
			<TextField label='Correo' variant='outlined' />
			<TextField
				helperText='Debe contener caracteres con letras y numeros'
				label='Contraseña'
				variant='outlined'
				InputProps={{
					endAdornment: (
						<InputAdornment position='start'>
							<IconButton
								aria-label='toggle password visibility'
								onClick={() => {}}
								onMouseDown={() => {}}
								edge='end'
							>
								{false ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
			<Button
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