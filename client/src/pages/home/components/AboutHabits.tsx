import {
	Box,
	Button,
	Typography,
	CardMedia,
	CardContent,
	CardActions,
	Card,
} from '@mui/material';
import { GlobalButton } from '../../../components';

const itemList = [
	{
		about: 'Uso del Agua',
		image:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1668435967/ananda%20marga/home/water_usrv38.jpg',
		url: 'link',
	},
	{
		about: 'La Comida',
		image:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1668435966/ananda%20marga/home/food_lifp0h.jpg',
		url: 'link',
	},
	{
		about: 'Lectura',
		image:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1668435966/ananda%20marga/home/reading_o5pcih.jpg',
		url: 'link',
	},
];

export default function AboutHabits() {
	const navegacion = () => {
		console.log('probando boton');
	};
	return (
		<section
			style={{
				backgroundColor: '#4E7D64',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Box
				style={{
					padding: '0 49px 0 86px',
					display: 'flex',
					width: '1442px',
					height: '301px',
				}}
			>
				<div className='cardsContainer' style={{ display: 'flex' }}>
					{itemList.map(item => (
						<Card
							key={itemList.indexOf(item)}
							sx={{
								borderRadius: '12px',
								margin: '28px 20px',
								width: 200,
								height: 245,
							}}
						>
							<CardContent>
								<div
									style={{
										width: '100%',
									}}
								>
									<img
										src={item.image}
										style={{
											width: '100%',
											objectFit: 'cover',
										}}
									/>
								</div>
								<Typography
									variant='h3'
									component='div'
									sx={{ textAlign: 'center', fontSize: 20, fontWeight: 600 }}
								>
									{item.about}
								</Typography>
								<a
									href={item.url}
									color='secondary'
									style={{
										fontSize: 16,
										fontWeight: 400,
										margin: '0 0 0 60%',
										color: '#FC802C',
									}}
								>
									Ver más
								</a>
							</CardContent>
						</Card>
					))}
				</div>
				<div className='textHabits' style={{ padding: '28px 30px' }}>
					<Typography
						variant='h2'
						color='primary.main'
						sx={{ fontSize: 40, fontWeight: 600 }}
					>
						Conoce los 16 Hábitos
					</Typography>
					<Typography
						variant='body1'
						color='primary.main'
						sx={{ margin: '20px auto', fontSize: 24, fontWeight: 400 }}
					>
						La filosofía de Mindfulness se fundamenta en un sistema de pasos de
						16 puntos.
					</Typography>
					<GlobalButton text='Conoce Más' navegacion={navegacion} />
				</div>
			</Box>
		</section>
	);
}
