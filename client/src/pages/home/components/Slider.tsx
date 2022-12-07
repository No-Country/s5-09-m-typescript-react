import { Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { Box } from '@mui/system';

const itemList = [
	{
		title: 'Inicia Sesión',
		image:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1669744903/dise%C3%B1o%20definitivo/iniciaSesion_2_tiqhjq.svg',
		description:
			'Registra tu cuenta y podras acceder a los beneficios que tenemos para ti',
	},
	{
		title: 'Personaliza tu Cuenta',
		image:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1669776430/dise%C3%B1o%20definitivo/iniciaSesion_ndwqel.svg',
		description:
			'Al registrarte podrás elegir las actividades que prefieras, así como también ir ampliando gradualmente tus prácticas.',
	},
	{
		title: 'Entra a tu panel',
		image:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1669779083/dise%C3%B1o%20definitivo/Entra-a-tu-panel_ix2ijj.svg',
		description:
			'En tu perfil podrás visualizar un panel con información de tu preferencia',
	},
	{
		title: 'LLeva el Control',
		image:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1669748530/dise%C3%B1o%20definitivo/panel_q4mar1.svg',
		description:
			'En tu Panel podrás registrar las prácticas  que has logrado cumplir en el día.',
	},
	{
		title: 'Analiza tus resultados',
		image:
			'https://res.cloudinary.com/dlxlitkl6/image/upload/v1669854058/dise%C3%B1o%20definitivo/analize_jbl9g4.svg',
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
			<Typography
				variant='h2'
				sx={{ fontSize: { lg: 64, md: 50, xs: 40 }, fontWeight: 400 }}
			>
				¿Cómo usar Nuestra Web?
			</Typography>
			<div style={{ padding: '50px 0', width: '100%' }}>
				<Carousel
					navButtonsAlwaysVisible
					fullHeightHover={false}
					NextIcon={<EastIcon />}
					PrevIcon={<WestIcon />}
					navButtonsProps={{
						style: { backgroundColor: '#9C51B7' },
					}}
				>
					{itemList.map(item => (
						<Box
							key={itemList.indexOf(item)}
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								position: 'relative',
								gap: 12,
							}}
						>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alingItems: 'center',
									width: { lg: '360px', xs: '300px' },
									height: { lg: '500px', xs: '500px' },
									gap: '10px',
									borderRadius: '20px',
									background:
										'linear-gradient(180deg, #E0E0E0 0%, #FFFFFF 75%, #FFFFFF 88.02%, #E0E0E0 100%)',
									boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.2)',
								}}
							>
								<Typography
									variant='h3'
									sx={{
										color: 'third.main',
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
										margin: '0 auto',
										width: '70%',
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
							</Box>
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
						</Box>
					))}
				</Carousel>
			</div>
		</div>
	);
}
