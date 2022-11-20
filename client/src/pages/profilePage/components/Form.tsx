import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
	Typography,
	TextField,
	Paper,
	Link,
	Grid,
	Box,
	Avatar,
} from '@mui/material';
import GlobalButton from '../../../components/GlobalButton';
import TopBarProfile from './TopBarProfile';

export default function Form() {
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
				</Box>
			</Box>
		</Grid>
	);
}
