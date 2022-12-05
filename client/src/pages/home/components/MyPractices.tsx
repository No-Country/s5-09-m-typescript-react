import { Box, Typography } from '@mui/material';

export default function MyPractices() {
	return (
		<section>
			<Box
				style={{
					paddingTop: '50px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					fontFamily: 'Lora',
				}}
			>
				<Typography
					variant='h2'
					color='text.primary'
					sx={{ textAlign: 'center', fontSize: 64 }}
				>
					Mis Prácticas
				</Typography>

				<div
					className='containerHabits'
					style={{ display: 'flex', width: '1442px', marginTop: '56px' }}
				>
					<div
						className='containerText'
						style={{
							width: '785px',
							height: '368px',
							marginLeft: '40px',
							marginRight: '23px',
							fontWeight: '400',
							letterSpacing: '-0,015em',
							textAlign: 'left',
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
					</div>

					<img
						src='https://res.cloudinary.com/dlxlitkl6/image/upload/v1669855664/dise%C3%B1o%20definitivo/practicas_dnmqno.svg'
						alt='Sesión de yoga'
						className='imageMyPractices'
						style={{ marginRight: '40px' }}
					/>
				</div>
			</Box>
		</section>
	);
}
