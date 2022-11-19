import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import GlobalButton from '../../components/GlobalButton';
import TopBarProfile from './TopBarProfile';
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
				Amanda Marga
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
		<Grid
			item
			xs={12}
			component={Paper}
			elevation={6}
			style={{ height: '750px' }}
		>
			<Grid>
				<TopBarProfile />
			</Grid>
			<Box
				sx={{
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
						label='Correo'
						name='Correo'
						autoComplete='email'
						autoFocus
						placeholder='Ingresa tu correo'
					/>
					<TextField
						margin='normal'
						fullWidth
						name='password'
						label='Contraseña'
						type='password'
						id='password'
						autoComplete='current-password'
						placeholder='Ingresa tu contraseña'
					/>
					<Grid spacing={8} style={{ display: 'flex', flexDirection: 'row' }}>
						<Grid
							style={{ display: 'flex', justifyContent: 'center' }}
							item
							xs={6}
						>
							<GlobalButton text='Guardar Cambios' action={navegacion} />
						</Grid>
						<Grid
							style={{ display: 'flex', justifyContent: 'center' }}
							item
							xs={6}
						>
							<GlobalButton text='Cancelar' action={navegacion} />
						</Grid>
					</Grid>

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
