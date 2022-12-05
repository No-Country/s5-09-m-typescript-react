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
			alignItems='start'
			justifyContent='space-between'
			sx={{
				minHeight: 'calc(100vh - 100px)',
				backgroundImage:
					'url(https://res.cloudinary.com/dlxlitkl6/image/upload/v1669744454/dise%C3%B1o%20definitivo/yoga_tres_amigas_hv9pjr.svg)',

				backgroundRepeat: 'no-repeat',
				backgroundPosition: '50% 90%',
				backgroundColor: 'primary.main',
				backgroundSize: '50%',
			}}
			padding={4}
		>
			<Grid
				item
				xs={8}
				gap={2}
				display='flex'
				flexDirection='column'
				marginTop='80px'
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
						width: '50%',
						color: 'text.secondary',
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
				xs={4}
				alignItems='center'
				justifyContent='center'
				display='flex'
				flexDirection='column'
				gap={2}
				marginTop='100px'
			>
				<Typography
					color='third.main'
					variant='h3'
					component='h2'
					textAlign='end'
				>
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
					<Typography variant='h2' component='h4' color='third.main'>
						16
					</Typography>
					<Typography variant='h4' component='span' color='third.main'>
						Hábitos
					</Typography>
				</Button>
			</Grid>
		</Grid>
	);
}
