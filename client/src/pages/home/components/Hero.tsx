import { Grid, Button, Typography, Box } from '@mui/material';

export default function Hero() {
	return (
		<Grid
			container
			alignItems='center'
			justifyContent='space-between'
			sx={{
				minHeight: 'calc(100vh - 150px)',
				backgroundImage:
					'url(https://res.cloudinary.com/dlxlitkl6/image/upload/v1668433458/ananda%20marga/home/hero_women_img.png)',

				backgroundRepeat: 'no-repeat',
				backgroundPosition: '50% 100%',
				backgroundColor: '#EDEEF0',
			}}
			padding={20}
		>
			<Grid item xs={4} gap={2} display='flex' flexDirection='column'>
				<Typography variant='h2' component='h2'>
					Lleva tu{' '}
					<Typography color={'text.secondary'} component='span' variant='h2'>
						Control
					</Typography>
				</Typography>
				<Typography component='h3' variant='h4'>
					Registra y evalua tu progreso
				</Typography>
				<Typography
					component='p'
					variant='body1'
					padding={1}
					sx={{ borderLeft: '3px solid #FC802C' }}
				>
					¿Necesitas ayuda con tu práctica de atención plena? aquí te ayudamos a
					cumplir con tus metas diarias, comienza poco a poca agregando cada día
					nuevas tareas, ve registrando y evaluando tu progreso en el
					cumplimiento de los 16 puntos.
				</Typography>
				<Button
					variant='contained'
					color='secondary'
					sx={{ maxWidth: '200px', color: '#fff' }}
				>
					Comienza ahora
				</Button>
			</Grid>
			<Grid
				item
				xs={4}
				alignItems='flex-end'
				justifyContent='center'
				display='flex'
				flexDirection='column'
			>
				<Typography
					color={'text.secondary'}
					variant='h2'
					component='h2'
					textAlign='end'
				>
					Formas Hábitos
				</Typography>
				<Box
					sx={{
						alignItems: 'center',
						backgroundColor: '#4E7D64',
						color: '#fff',
						display: 'flex',
						flexDirection: 'column',
						height: 200,
						justifyContent: 'center',
						width: 200,
						borderRadius: '50%',
					}}
				>
					<Typography variant='h2' component='h4'>
						16
					</Typography>
					<Typography variant='h4' component='span'>
						Hábitos
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
}
