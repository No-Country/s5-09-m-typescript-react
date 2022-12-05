import {
	Alert,
	Grid,
	Paper,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import image from '../../../assets/Rectangle4.png';
import { GlobalButton } from '../../../components';
export default function BoletinInformativo({ onSubmitted, status, message }) {
	const [email, setEmail] = useState('');
	const [mensaje, setMensaje] = useState(true);

	const handleSubmit = e => {
		e.preventDefault();
		setEmail('');
		onSubmitted({ EMAIL: email });
		setTimeout(() => {
			setMensaje(false);
		}, 3500);
		setMensaje(true);
	};

	return (
		<Grid container spacing={1} padding='150px 0 150px 0'>
			<Grid item md={6} xs='auto'>
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
								width: '78%',
								height: '250px',
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
			<Grid item xs={6}>
				<Grid
					container
					sx={{
						display: 'flex',
						justifyContent: 'start',
						width: '100%',
						paddingLeft: '30px',
					}}
				>
					<Grid item sm={10} xs={4}>
						<Typography
							variant='h2'
							color='third.main'
							textAlign='left'
							marginBottom='10px'
							fontWeight={600}
							fontSize='48px'
							fontFamily='crimson'
							lineHeight='100%'
							fontStyle='semibold'
							letterSpacing='1px'
						>
							Boletín Informativo
						</Typography>
						<Grid item xs={4} sm={6}>
							<Typography
								component='p'
								width='350px'
								fontSize={20}
								color='text'
								borderLeft='2px solid #FC802C'
								paddingLeft='10px'
								marginLeft='7px'
								marginBottom='30px'
							>
								"Recibe en tu correo nuestro boletín informativo y mantente al
								tanto de las últimas novedades del Yoga y Mindfulness."
							</Typography>
						</Grid>
						<form onSubmit={handleSubmit}>
							<TextField
								id='outlined-basic'
								label='Correo'
								placeholder='olivia@gmail.com'
								variant='outlined'
								color='text'
								value={email}
								onChange={event => setEmail(event.target.value)}
								sx={{
									width: '300px',
									marginRight: '15px',
									marginBottom: '15px',
								}}
							/>
							<GlobalButton text='Suscribete' type='submit' />
							<Grid item xs={12}>
								{mensaje ? (
									<Stack marginTop={1}>
										{status === 'sending' && (
											<Alert severity='info'>Sending...</Alert>
										)}
										{status === 'error' && (
											<Alert severity='error'>{message}</Alert>
										)}
										{status === 'success' && (
											<Alert severity='success'>Subscribed</Alert>
										)}
									</Stack>
								) : (
									''
								)}
							</Grid>
						</form>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
