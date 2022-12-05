import { Grid, Paper, Typography } from '@mui/material';

import PracticesCard from './components/PracticesCard';

const habitsList = [
	{ habit: 'Asanas diarias' },
	{ habit: 'Recetas saludables' },
	{ habit: 'Ejercicio diario' },
	{ habit: 'Meditación dos veces al día' },
	{ habit: 'Higiene personal' },
	{ habit: 'Limpieza del hogar' },
	{ habit: 'Lectura espiritual' },
	{ habit: 'Código de conducta' },
	{ habit: 'Realizar servicio' },
	{ habit: 'Reducir consumo de carne' },
	{ habit: 'Tomar dos litros de agua al día' },
	{ habit: 'Reducir ocio' },
	{ habit: 'Pasar tiempo al aire libre' },
	{ habit: 'Evitar alcohol y tabaco, drogas' },
	{ habit: 'Ayunar dos veces al mes' },
	{ habit: 'Despertar al amanecer' },
];

export default function Practices() {
	return (
		<Grid
			container
			spacing={0}
			sx={{
				maxWidth: '1442px',
				margin: '40px auto',
			}}
		>
			<Grid item lg={4}>
				<Paper
					sx={{
						top: '0',
						margin: '10px ',
						width: '400px',
						height: '600px',
						backgroundColor: 'primary.main',
						borderRadius: '5px',
						border: '1px solid',
						borderColor: 'third.main',
						padding: '20px',
						position: 'sticky',
					}}
				>
					{habitsList.map(i => (
						<Typography
							variant='body1'
							color='third.main'
							key={habitsList.indexOf(i)}
							sx={{
								fontWeight: '400',
								lineHeight: '36px',
							}}
						>
							Hábito {habitsList.indexOf(i) + 1}:{' '}
							<Typography
								color={'text.secondary'}
								component='span'
								variant='body1'
							>
								{i.habit}
							</Typography>
						</Typography>
					))}
				</Paper>
			</Grid>

			<Grid item lg={8}>
				<Grid>
					<PracticesCard
						tittle='Conoce nuestro sistema para consolidar los 16 habitos importantes en tu vida'
						urlImg='https://res.cloudinary.com/dlxlitkl6/image/upload/v1668696054/ananda%20marga/Practices/my_practices1_hpsjzt.jpg'
						text='Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...
                        Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet 
                        Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Techno
                        logy Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...'
					/>

					<PracticesCard
						tittle='Habito 1: Asanas Diariamente'
						urlImg='https://res.cloudinary.com/dlxlitkl6/image/upload/v1668696057/ananda%20marga/Practices/my_practices2_o42oyn.jpg'
						text='Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...
                        Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet 
                        Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Techno
                        logy Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...'
					/>

					<PracticesCard
						tittle='Habito 2: Recetas saludables'
						urlImg='https://res.cloudinary.com/dlxlitkl6/image/upload/v1668696062/ananda%20marga/Practices/my_practices3_afkvv9.png'
						text='Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...
                        Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet 
                        Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Techno
                        logy Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...Applying The KIds Design Guide Internet Technology Such as Online and Social Media Platforms Have Given...'
					/>
				</Grid>
			</Grid>
		</Grid>
	);
}
