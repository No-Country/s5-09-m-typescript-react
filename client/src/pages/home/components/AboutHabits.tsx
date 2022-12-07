import { Box, Typography, CardContent, Card, Link, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GlobalButton } from '../../../components';
import { publicRoute } from '../../../models/routes';

const itemList = [
	{
		about: 'Uso del Agua',
		image:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1669744904/dise%C3%B1o%20definitivo/agua_t7u982.svg',
		url: `${publicRoute.practices}`,
	},
	{
		about: 'Alimentación',
		image:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1670294257/dise%C3%B1o%20definitivo/Rectangle_3333_ybl7lk.svg',
		url: `${publicRoute.practices}`,
	},
	{
		about: 'Lectura',
		image:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1670294325/dise%C3%B1o%20definitivo/lecturaaa_ypls8i.svg',
		url: `${publicRoute.practices}`,
	},
];

export default function AboutHabits() {
	const navegation = useNavigate();
	const redirection = () => {
		navegation(publicRoute.practices);
	};
	return (
		<Grid
			container
			sx={{
				backgroundColor: 'primary.dark',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<Grid item xs={7} sx={{ display: 'flex' }}>
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
								onClick={() => navegation(item.url)}
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
			</Grid>
			<Grid item xs={5}>
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
					sx={{ fontSize: 24, fontWeight: 400 }}
				>
					Siéntete mejor en todos los aspectos de tu vida incorporando nuevas
					rutinas.
				</Typography>
				<GlobalButton text='Conoce Más' action={redirection} />
			</Grid>
		</Grid>
	);
}
