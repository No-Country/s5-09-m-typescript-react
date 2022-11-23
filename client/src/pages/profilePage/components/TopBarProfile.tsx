import { Grid, Typography, Button, Icon } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
type Props = {};

const TopBarProfile = (props: Props) => {
	return (
		<>
			<Grid container>
				<Grid xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
					<Button
						variant='text'
						sx={{
							display: 'flex',
							alignItems: 'center',
							color: 'third.main',
						}}
					>
						<Typography
							sx={{
								fontSize: '1rem',
							}}
						>
							<ArrowBackIosNewOutlinedIcon
								fontSize='small'
								sx={{
									fontSize: '1rem',
								}}
							/>
							Regresar
						</Typography>
					</Button>
				</Grid>
				<Grid
					xs={4}
					sx={{
						display: 'flex',
						alignItems: 'center',
						color: 'third.main',
					}}
				>
					<AccountCircleOutlinedIcon sx={{ color: 'third.main' }} />
					<Typography
						sx={{
							fontSize: '1.2rem',
							padding: '0 10px',
						}}
					>
						Mi Perfil
					</Typography>
					<EditOutlinedIcon sx={{ color: 'third.main' }} />
				</Grid>
				<Grid
					xs={4}
					sx={{
						display: 'flex',
						alignItems: 'center',
						color: 'third.main',
					}}
				>
					<Button>
						<Icon>
							<LogoutIcon
								fontSize='small'
								sx={{ marginBottom: '7px', color: '#112734' }}
							/>
						</Icon>
						<Typography
							sx={{
								fontSize: '1.2rem',
								color: 'third.main',
							}}
						>
							Salir de la Cuenta
						</Typography>
					</Button>
				</Grid>
			</Grid>
		</>
	);
};

export default TopBarProfile;
