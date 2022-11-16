import { Grid, Typography, Button, TextField, Paper } from '@mui/material';
import image from '../../../assets/Rectangle4.png';

export default function BoletinInformativo() {
	return (
		<Grid container spacing={1} padding='150px 0 150px 0'>
			<Grid item xs={6}>
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
						className='prueba'
						style={{
							position: 'relative',
						}}
					>
						<img
							src={image}
							alt='Chica Yoga'
							style={{
								position: 'relative',
								width: '500px',
								height: '250px',
								borderRadius: '16px',
								zIndex: '5',
							}}
						/>
						<Paper
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
						></Paper>
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
					<Grid item xs={10}>
						<Grid item xs={12} margin='0 0 0 0'>
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
						</Grid>
						<Typography
							component='p'
							fontSize={20}
							color='text'
							borderLeft='2px solid #FC802C'
							paddingLeft='10px'
							marginLeft='7px'
							marginBottom='30px'
						>
							Suscríbete a nuestro boletín informativo y <br></br>mantente al
							tanto de las últimas novedades <br></br> del yoga y mindfullness.
						</Typography>
						<TextField
							id='outlined-basic'
							label='Suscribete'
							variant='outlined'
							color='third'
							sx={{
								width: '300px',
							}}
						/>
						<Button
							variant='contained'
							color='secondary'
							sx={{
								maxWidth: '200px',
								color: '#fff',
								height: '53px',
								width: '171px',
								marginLeft: '4px',
							}}
						>
							Suscribete
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}