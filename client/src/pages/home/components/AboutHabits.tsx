import { Box, Typography, CardContent, Card, Grid, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GlobalButton } from '../../../components';
import { publicRoute } from '../../../models/routes';

const itemList = [
	{
		about: 'Uso del Agua',
		image:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1669744904/dise%C3%B1o%20definitivo/agua_t7u982.svg',
		url: 'link',
	},
	{
		about: 'Alimentación',
		image:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1669750013/dise%C3%B1o%20definitivo/alimentos_yqhbto.jpg',
		url: 'link',
	},
	{
		about: 'Lectura',
		image:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1669750157/dise%C3%B1o%20definitivo/8609147_5836_g4nuni.jpg',
		url: 'link',
	},
];

export default function AboutHabits() {
	const navegation = useNavigate();
	const redirection = () => {
		navegation(publicRoute.practices);
	};
	return (
		<Grid item xs={2} sm={6}>
			<Box
				style={{
					backgroundColor: '#4E7D64',
					alignItems: 'center',
					padding: '0 49px 0 86px',
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
				}}
			>
				<div
					className='cardsContainer'
					style={{ display: 'flex', flexWrap: 'wrap' }}
				>
					{itemList.map(item => (
						<Card
							key={itemList.indexOf(item)}
							sx={{
								borderRadius: '12px',
								margin: '28px 20px',
								width: 200,
								height: 245,
								flexWrap: 'wrap',
							}}
						>
							<CardContent>
								<div
									style={{
										margin: 'auto',
										height: '150px',
										width: '150px',
									}}
								>
									<img
										src={item.image}
										style={{
											width: '150px',
											height: '150px',
											objectFit: 'contain',
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
								<Link
									href={item.url}
									sx={{
										fontSize: 16,
										fontWeight: 400,
										margin: '0 0 0 60%',
										color: 'third.main',
									}}
								>
									Ver más
								</Link>
							</CardContent>
						</Card>
					))}
				</div>
				<div className='textHabits' style={{ padding: '28px 30px' }}>
					<Typography
						variant='h2'
						color='text.primary'
						sx={{ fontSize: 40, fontWeight: 600 }}
					>
						Conoce los 16 Hábitos
					</Typography>
					<Typography
						variant='body1'
						color='text.secondary'
						sx={{ margin: '20px auto', fontSize: 24, fontWeight: 400 }}
					>
						Siéntete mejor en todos los aspectos de tu vida incorporando nuevas
						rutinas.
					</Typography>
					<GlobalButton text='Conoce Más' action={redirection} />
				</div>
			</Box>
		</Grid>
	);
}
