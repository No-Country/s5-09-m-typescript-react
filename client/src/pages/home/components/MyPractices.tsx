import { Box, Typography, Grid } from '@mui/material';
import { GlobalButton } from '../../../components';

export default function MyPractices() {
	const navegacion = () => {
		console.log('probando boton');
	};
	return (
		<section>
			<Box
				style={{
					paddingTop: '50px',
					display: 'flex',
					alignItems: 'center',
					fontFamily: 'Lora',
					flexWrap: 'wrap',
					justifyContent: 'center',
				}}
			>
				<Grid item sm={12} xs={6}>
					<Typography
						variant='h2'
						color='text.secondary'
						sx={{ textAlign: 'center', fontSize: 64, fontWeight: 600 }}
					>
						Mis Prácticas
					</Typography>
				</Grid>
				<div
					className='containerHabits'
					style={{ display: 'flex', width: '81%', marginTop: '56px' }}
				>
					<div
						className='containerText'
						style={{
							width: '70%',
							height: '50%',
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
							color={'text.primary'}
							sx={{
								margin: '30px 0px',
								fontSize: '24px',
								lineHeight: '32px',
							}}
						>
							Los 16 puntos son un sistema de prácticas, que promueven la
							consolidación de hábitos en el estado físico y mental. Todo esto
							con el objetivo de conseguir una salud física, desarrollo mental y
							elevación espiritual. Está claro que por medio de hábitos
							adecuados se contribuye al funcionamiento adecuado de ellas.
							Segundo, se puede conseguir un cuerpo saludable y una mente
							serena.
						</Typography>
						<GlobalButton
							text='Conoce Más'
							action={() => console.log('hola')}
						/>
					</div>
					<img
						src='https://res.cloudinary.com/dlxlitkl6/image/upload/v1668435967/ananda%20marga/home/my_practices_nsp7fc.jpg'
						alt='Sesión de yoga'
						className='imageMyPractices'
						style={{ width: '40%', height: '40%', marginRight: '40px' }}
					/>
				</div>
			</Box>
		</section>
	);
}
