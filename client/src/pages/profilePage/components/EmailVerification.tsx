import { Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { GlobalButton } from '../../../components';

export default function EmailVerification() {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100vw',
				height: '100vh',
				background: 'rgba(0,0,0,0.3)',
				position: 'fixed',
				top: '0',
				zIndex: '10',
			}}
		>
			<Grid
				container
				sx={{
					width: '400px',
					height: '400px',
					backgroundColor: 'primary.main',
					borderRadius: '10px',
				}}
			>
				<Grid
					item
					xs={12}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<MailOutlineIcon fontSize='large' />
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
					<Typography variant='body1'>
						Introduce el codigo de validación
					</Typography>
					<Typography variant='body1'>
						Confirma tu cuenta. olivia@gmail.com
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '10px',
					}}
				>
					<TextField
						type='number'
						variant='outlined'
						color='secondary'
						focused
						sx={{
							width: '250px',
							height: '80px',
							textAlign: 'center',
						}}
					/>
				</Grid>
				<Grid
					item
					xs={12}
					sx={{
						display: 'flex',
						justifyContent: 'start',
						alignItems: 'center',
					}}
				>
					<Typography variant='body1'>
						¿No recibiste un código? Haga clic para reenviar.
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<GlobalButton text='enviar' action={() => console.log('enviar')} />
				</Grid>
			</Grid>
		</Box>
	);
}
