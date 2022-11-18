import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GlobalButton from '../../components/GlobalButton';
type Props = {};

function Copyright(props: any) {
	return (
		<Typography
			variant='body2'
			color='text.secondary'
			align='center'
			{...props}
		>
			{'Copyright © '}
			<Link color='inherit' href='https://mui.com/'>
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const Form = (props: Props) => {
	const navegacion = () => {
		console.log('probando boton');
	};
	return (
		<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
			<Box
				sx={{
					my: 8,
					mx: 4,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar
					sx={{
						m: 1,
						bgcolor: 'secondary.main',
						alignSelf: 'center',
						width: '120px',
						height: '120px',
					}}
				>
					<AccountCircleIcon fontSize='large' />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign in
				</Typography>
				<Box component='form' noValidate sx={{ mt: 1 }}>
					<TextField
						margin='normal'
						fullWidth
						name='nombreCompleto'
						label='Nombre Completo'
						type='password'
						id='password'
						autoComplete='current-password'
						placeholder='Ingresa tu nombre completo'
					/>
					<TextField
						margin='normal'
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						autoComplete='email'
						autoFocus
						placeholder='Ingresa tu correo'
					/>
					<TextField
						margin='normal'
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
						placeholder='Ingresa tu contraseña'
					/>

					<FormControlLabel
						control={<Checkbox value='remember' color='primary' />}
						label='Remember me'
					/>
					<GlobalButton text='Cancelar' action={navegacion} />
					<GlobalButton text='Guardar Cambios' action={navegacion} />

					<Grid container>
						<Grid item xs>
							<Link href='#' variant='body2'>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href='#' variant='body2'>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
					<Copyright sx={{ mt: 5 }} />
				</Box>
			</Box>
		</Grid>
	);
};

export default Form;
