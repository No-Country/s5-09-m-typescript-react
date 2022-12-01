import { Grid, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GlobalButton } from '../../../components';
import { publicRoute } from '../../../models/routes';

export default function Hero() {
	const navegation = useNavigate();
	const navegacion = () => {
		navegation(publicRoute.login);
	};
	return (
		<Grid
			container
			alignItems='center'
			justifyContent='space-between'
			sx={{
				minHeight: 'calc(100vh - 100px)',
				backgroundImage:
					'url(https://res.cloudinary.com/dlxlitkl6/image/upload/v1669744454/dise%C3%B1o%20definitivo/yoga_tres_amigas_hv9pjr.svg)',

				backgroundRepeat: 'no-repeat',
				backgroundPosition: '50% 90%',
				backgroundColor: 'primary.main',
				backgroundSize: '60%',
			}}
			padding={4}
		>
			<Grid item xs={8} gap={2} display='flex' flexDirection='column'>
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
					¿Necesitas ayuda con tu práctica de atención plena? aquí te ayudamos a
					cumplir con tus metas diarias, comienza poco a poca agregando cada día
					nuevas tareas, ve registrando y evaluando tu progreso en el
					cumplimiento de los 16 puntos.
				</Typography>
				<GlobalButton text='Comienza ahora' action={navegacion} />
			</Grid>

			<Grid
				item
				xs={4}
				alignItems='center'
				justifyContent='center'
				display='flex'
				flexDirection='column'
				gap={2}
			>
				<Typography
					color='third.main'
					variant='h3'
					component='h2'
					textAlign='end'
					borderBottom='2px solid'
				>
					Registra Aquí
				</Typography>
				<Box
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
				</Box>
			</Grid>
		</Grid>
	);
}
