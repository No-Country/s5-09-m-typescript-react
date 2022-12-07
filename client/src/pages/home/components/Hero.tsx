import { Grid, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GlobalButton } from '../../../components';
import { publicRoute, privateRoute } from '../../../models/routes';

export default function Hero() {
	const navegation = useNavigate();
	const redirection = () => {
		navegation(publicRoute.login);
	};
	return (
		<Grid
			container
			sx={{
				minHeight: 'calc(100vh - 100px)',
				backgroundImage:
					'url(https://res.cloudinary.com/dlxlitkl6/image/upload/v1669744454/dise%C3%B1o%20definitivo/yoga_tres_amigas_hv9pjr.svg)',

				backgroundRepeat: 'no-repeat',
				backgroundPosition: '50% 90%',
				backgroundColor: 'primary.main',
				backgroundSize: '50%',
				padding: { lg: '0 50px', xs: '0 50px 200px 50px' },
			}}
		>
			<Grid
				item
				lg={8}
				md={12}
				gap={2}
				sx={{
					display: 'flex',
					marginTop: '80px',
					flexDirection: 'column',
				}}
			>
				<Typography variant='h2' component='h2'>
					Lleva tu{' '}
					<Typography color='third.main' component='span' variant='h2'>
						Control
					</Typography>
				</Typography>
				<Typography component='h3' variant='h4' color='text.secondary'>
					Registra y evalúa tu progreso
				</Typography>
				<Typography
					component='p'
					variant='body1'
					padding={1}
					sx={{
						borderLeft: '3px solid',
						borderColor: 'secondary.main',
						width: { lg: '50%', md: '80%' },
						color: 'text.secondary',
						fontSize: '1.5rem',
					}}
				>
					¿Necesitas ayuda con tu práctica diaria de atención plena? Comienza
					agregando tareas. Has un seguimiento de tu progreso y observa tu
					evolución.
				</Typography>
				<GlobalButton text='Comienza ahora' action={redirection} />
			</Grid>

			<Grid
				item
				lg={4}
				md={12}
				gap={2}
				sx={{
					display: { lg: 'flex', xs: 'none' },
					flexDirection: 'column',
					alignItems: { lg: 'center', md: 'end' },
					justifyContent: { lg: 'start', md: 'end' },
					marginTop: { lg: '100px', md: '0px' },
					width: '100%',
				}}
			>
				<Typography color='third.main' variant='h3' component='h2'>
					Registra Aquí
				</Typography>
				<Button
					variant='text'
					onClick={() => navegation(privateRoute.dashboard)}
					// bgcolor='third'
					sx={{
						alignItems: 'center',
						backgroundColor: 'primary.dark',
						color: 'white',
						display: 'flex',
						flexDirection: 'column',
						height: 200,
						justifyContent: 'center',
						width: 200,
						borderRadius: '50%',
						filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35))',
					}}
				>
					<Typography variant='h3' component='h4' color='third.main'>
						16
					</Typography>
					<Typography variant='h5' component='span' color='third.main'>
						Hábitos
					</Typography>
				</Button>
			</Grid>
		</Grid>
	);
}
