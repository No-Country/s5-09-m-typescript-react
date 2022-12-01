import { Grid, Typography, Button, TextField, Paper } from '@mui/material';
import { GlobalButton } from '../../../components';

export default function BoletinInformativo() {
	const logicaSuscripcion = () => {
		console.log('hola');
	};
	return (
		<Grid container spacing={1} padding='150px 0 150px 0'>
			<Grid item xs={5}>
				<Grid
					item
					sx={{
						display: 'flex',
						height: '100%',
						width: '100%',
						borderRadius: '20px',
						justifyContent: 'end',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							position: 'relative',
						}}
					>
						<img
							src='https://res.cloudinary.com/dlxlitkl6/image/upload/v1669745203/dise%C3%B1o%20definitivo/undraw_Newsletter_re_wrob_zbwke0.png'
							alt='Chica Yoga'
							style={{
								position: 'relative',
								height: '300px',
								borderRadius: '16px',
								zIndex: '5',
							}}
						/>
						{/* <Paper
							sx={{
								position: 'absolute',
								width: '100px',
								height: '100px',
								borderRadius: '50%',
								backgroundColor: 'secondary.light',
								zIndex: '1',
								left: -40,
								bottom: -30,
							}}
						></Paper> */}
					</div>
				</Grid>
			</Grid>
			<Grid
				item
				xs={7}
				sx={{
					display: 'flex',
					justifyContent: 'start',
					alignItems: 'center',
				}}
			>
				<Grid container>
					<Grid item xs={10}>
						<Grid item xs={12}>
							<Typography
								variant='h2'
								color='text.primary'
								textAlign='left'
								marginBottom='10px'
								fontWeight={600}
								fontSize='48px'
							>
								Boletín Informativo
							</Typography>
						</Grid>
						<Typography
							component='p'
							fontSize={20}
							color='text'
							borderLeft='3px solid #279F87'
							paddingLeft='10px'
							marginLeft='7px'
							marginBottom='30px'
						>
							"Recibe en tu correo nuestro boletín informativo y mantente al
							tanto de las últimas novedades del Yoga y Mindfulness."
						</Typography>
						<TextField
							id='outlined-basic'
							label='email'
							placeholder='olivia@gmail.com'
							variant='outlined'
							color='text'
							sx={{
								width: '300px',
							}}
						/>
						<GlobalButton text='Suscribete' action={logicaSuscripcion} />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
