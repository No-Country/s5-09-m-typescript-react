import { Grid, Typography, Paper, Button } from '@mui/material';
import image from '../../../assets/Rectangle4.png';

export default function BoletinInformativo() {
	return (
		<Grid container spacing={2} padding='0px 0 0px 0' justifyContent='center'>
			<Grid item xs={5}>
				<Grid
					container
					sx={{
						height: '100%',
						width: '100%',
						borderRadius: '20px',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Grid item xs={6}>
						<img
							src={image}
							alt='Chica Yoga'
							style={{
								marginBottom: '40px',
								width: '567px',
								height: '253px',
								borderRadius: '16px',
							}}
						/>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={5}>
				<Grid
					container
					sx={{
						width: '100%',
						padding: '15px',
						alignItems: 'center',
						marginBottom: '50px',
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
						>
							Suscríbete a nuestro boletín informativo y <br></br>mantente al
							tanto de las últimas novedades <br></br> del yoga y mindfullness.
						</Typography>
						<input
							placeholder='Suscribete'
							style={{
								borderRadius: '5px',
								width: '303px',
								height: '56px',
								marginTop: '15px',
							}}
						></input>
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
