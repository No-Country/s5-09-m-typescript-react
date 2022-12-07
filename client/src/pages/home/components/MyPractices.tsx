import { Box, Grid, Typography } from '@mui/material';

export default function MyPractices() {
	return (
		<section>
			<Grid
				container
				sx={{
					paddingTop: '50px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography
					variant='h2'
					color='text.primary'
					sx={{ display: 'block', textAlign: 'center', fontSize: 64 }}
				>
					Mis Prácticas
				</Typography>
				<Grid container sx={{ display: 'flex' }}>
					<Grid
						item
						lg={7}
						xs={12}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alingItem: 'start',
							padding: '0 50px',
						}}
					>
						<Typography
							variant='h3'
							color={'text.secondary'}
							sx={{ fontSize: '36px', lineHeight: '40px' }}
						>
							¿Qué son los 16 Hábitos y cómo funcionan?
						</Typography>
						<Typography
							variant='body1'
							color={'text.secondary'}
							sx={{ margin: '30px 0px', fontSize: '24px', lineHeight: '32px' }}
						>
							Los 16 hábitos son un sistema de prácticas, que promueven la
							consolidación de hábitos saludables. El objetivo principal es
							mejorar el cuerpo físico, fomentar el desarrollo mental y lograr
							la elevación espiritual. Gracias a todo esto podemos equilibrar el
							cuerpo, la mente y el espíritu, entendiendo la salud como un todo
							y mejorando nuestra calidad de vida.
						</Typography>
					</Grid>
					<Grid
						item
						lg={5}
						xs={12}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'end',
							alingItem: 'center',
							marginRight: { lg: '40px', xs: '0' },
						}}
					>
						<img
							src='https://res.cloudinary.com/dlxlitkl6/image/upload/v1669855664/dise%C3%B1o%20definitivo/practicas_dnmqno.svg'
							alt='Sesión de yoga'
							className='imageMyPractices'
							style={{ width: '100%' }}
						/>
					</Grid>
				</Grid>
			</Grid>
		</section>
	);
}
