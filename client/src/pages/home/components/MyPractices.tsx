import { fontFamily, lineHeight } from '@mui/system';
import { Box, Typography } from '@mui/material';
import { globalTheme } from '../../../themes';

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
					backgroundColor: 'secondary',
				}}
			>
				<Typography
					variant='h2'
					color='text.secondary'
					sx={{ textAlign: 'center', fontSize: 64, fontWeight: 600 }}
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
							color={'text.primary'}
							sx={{ marginTop: '30px', fontSize: '24px', lineHeight: '32px' }}
						>
							Los 16 puntos son un sistema de prácticas, que promueven la
							consolidación de hábitos en el estado físico y mental. Todo esto
							con el objetivo de conseguir una salud física, desarrollo mental y
							elevación espiritual. Está claro que por medio de hábitos
							adecuados se contribuye al funcionamiento adecuado de ellas.
							Segundo, se puede conseguir un cuerpo saludable y una mente
							serena.
						</Typography>
					</div>

					<img
						src='https://res.cloudinary.com/dlxlitkl6/image/upload/v1668435967/ananda%20marga/home/my_practices_nsp7fc.jpg'
						alt='Sesión de yoga'
						className='imageMyPractices'
						style={{ width: '554px', height: '334px', marginRight: '40px' }}
					/>
				</div>
			</Box>
		</section>
	);
}
