import { Divider, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import AboutGrid from './components/AboutGrid';

export default function AboutUs() {
	return (
		<Paper
			variant='outlined'
			sx={{
				margin: '60px',
				background: '#FFFEFE',
			}}
		>
			<Stack
				direction='column'
				spacing={5}
				alignItems='center'
				sx={{ padding: { xs: '25px', lg: '25px 200px' } }}
			>
				<Typography
					sx={{
						textAlign: 'center',
						color: 'secondary.main',
						fontWeight: 600,
						fontSize: { xs: '48px', sm: '64px' },
						lineHeight: '82px',
					}}
				>
					Sobre Nosotros
				</Typography>
				<Typography>
					El sitio “Mindfulness'' ha sido creado por un equipo de Desarrollo Web
					de No Country. En noviembre de 2022, el grupo S5-09 ha sido elegido
					para desarrollar una página web en 5 semanas, con tecnologías
					Typescript y React. Nosotros, los integrantes del equipo nos pusimos
					manos a la obra. Inmediatamente intercambiamos ideas con la intención
					de crear un proyecto que trate una temática actual y que al mismo
					tiempo aporte valor real. Ezequiel, uno de los integrantes del equipo,
					practica Yoga. Su instructor Hugo le ha planteado la idea de realizar
					una página para el Centro. De ahí surgió la idea de tomar el Yoga y la
					práctica “Mindfulness” como temática para nuestro proyecto. Con ayuda
					de expertos en atención plena, asanas y la filosofía del yoga, pudimos
					armar una página web que sea de valor para el practicante habitual.
				</Typography>
				<Typography
					sx={{
						textAlign: 'center',
						color: 'secondary.main',
						fontWeight: 600,
						fontSize: { xs: '48px', sm: '64px' },
						lineHeight: '82px',
					}}
				>
					Nuestro equipo
				</Typography>
				<AboutGrid />
			</Stack>
		</Paper>
	);
}
