import { Typography, TextField, Paper, Grid, Box } from '@mui/material';
import GlobalButton, {
	GlobalButtonWhite,
} from '../../../components/GlobalButton';
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
				<img
					src='https://res.cloudinary.com/dlxlitkl6/image/upload/v1669229543/ananda%20marga/perfil/Ellipse19_x3azbk.png'
					alt='perfil de usuario'
				/>

				<Typography component='h1' variant='h5'>
					Malia Sanchez
				</Typography>
				<Box
					component='form'
					noValidate
					sx={{ mt: 1, display: 'flex', flexDirection: 'column' }}
				>
					<TextField
						sx={{ width: '527px' }}
						margin='normal'
						name='nombreCompleto'
						label='Nombre Completo'
						type='password'
						id='password'
						autoComplete='current-password'
						placeholder='Ingresa tu nombre completo'
					/>
					<TextField
						margin='normal'
						sx={{ width: '527px' }}
						id='email'
						label='Correo'
						name='Correo'
						autoComplete='email'
						placeholder='Ingresa tu correo'
					/>
					<TextField
						margin='normal'
						sx={{ width: '527px' }}
						name='password'
						label='Contraseña'
						type='password'
						id='password'
						autoComplete='current-password'
						placeholder='Ingresa tu contraseña'
					/>
					<Grid
						spacing={10}
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							marginTop: '15px',
						}}
					>
						<Grid
							style={{
								display: 'flex',
								justifyContent: 'center',
								width: '237px',
								marginRight: '18px',
							}}
							item
							xs={6}
						>
							<GlobalButtonWhite text='Guardar Cambios' action={navegacion} />
						</Grid>
						<Grid
							style={{
								display: 'flex',
								justifyContent: 'center',
								width: '237px',
							}}
							item
							xs={6}
						>
							<GlobalButton text='Cancelar' action={navegacion} />
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Grid>
	);
}
