import { Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { Box } from '@mui/system';

const itemList = [
	{
		title: 'Inicia Sesión',
		image:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1668438081/ananda%20marga/home/slider/slider_1_dbrrlw.png',
		description:
			'Registra tu cuenta y podras acceder a los beneficios que tenemos para ti',
	},
	{
		title: 'Personaliza tu Cuenta',
		image:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1668438081/ananda%20marga/home/slider/slider_2_mgqjip.png',
		description:
			'Al registrarte podrás elegir las actividades que prefieras, así como también ir ampliando gradualmente tus prácticas.',
	},
	{
		title: 'Entra a tu panel',
		image:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1668438081/ananda%20marga/home/slider/slider_3_oaiwpb.png',
		description:
			'En tu perfil podrás visualizar un panel con información de tu preferencia',
	},
	{
		title: 'LLeva el Control',
		image:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1668438081/ananda%20marga/home/slider/slider_4_pqio2c.png',
		description:
			'En tu Panel podrás registrar las prácticas  que has logrado cumplir en el día.',
	},
	{
		title: 'Analiza tus resultados',
		image:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1668438081/ananda%20marga/home/slider/slider_5_kp7ljx.png',
		description: 'Recibe un reporte semanal en tu correo y evalúa tu progreso.',
	},
];

export default function Slider() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				margin: '80px 0 0 0',
			}}
		>
			<Typography variant='h1' sx={{ fontSize: 64, fontWeight: 400 }}>
				¿Como usar <span style={{ color: 'third.main' }}>Nuestra Web</span>?
			</Typography>
			<div style={{ width: 700, padding: 50 }}>
				<Carousel
					navButtonsAlwaysVisible
					fullHeightHover={false}
					NextIcon={<EastIcon />}
					PrevIcon={<WestIcon />}
					navButtonsProps={{
						style: { backgroundColor: '#FC802C' },
					}}
				>
					{itemList.map(item => (
						<div
							key={itemList.indexOf(item)}
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								position: 'relative',
								gap: 12,
							}}
						>
							<div
								style={{
									width: 300,
									height: 430,
									padding: 20,
								}}
							>
								<Typography
									variant='h3'
									sx={{
										color: 'secondary.main',
										fontWeight: 400,
										fontSize: 26,
										textAlign: 'center',
									}}
								>
									{item.title}
								</Typography>
								<img
									src={item.image}
									style={{
										width: 'auto',
										maxWidth: '100%',
										height: '242.42px',
										objectFit: 'contain',
									}}
								/>
								<Typography
									variant='subtitle1'
									sx={{
										color: 'rgba(17, 39, 52, 0.7)',
										fontWeight: 400,
										fontSize: 16,
										textAlign: 'center',
									}}
								>
									{item.description}
								</Typography>
							</div>
							<Box
								sx={{
									width: 125,
									height: 125,
									position: 'absolute',
									zIndex: -1,
									bottom: -20,
									right: 40,
								}}
							></Box>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
}
