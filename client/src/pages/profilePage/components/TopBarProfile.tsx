import { Grid, Typography, Button, Icon } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
type Props = {};

const TopBarProfile = (props: Props) => {
	return (
		<>
			<Grid container style={{ marginBottom: '35px' }}>
				<Grid xs={4} sx={{ display: 'flex', flexDirection: 'row' }}>
					<Button
						variant='text'
						sx={{
							backgroundColor: '#FEA060',
							width: '92px',
							height: '32px',
							marginTop: '31px',
							marginLeft: '16px',
							color: 'grey',
						}}
					>
						<ArrowBackIosNewOutlinedIcon
							fontSize='small'
							sx={{
								fontSize: '20px',
								backgroundColor: '#FEA060',
							}}
						/>
						<Typography
							sx={{
								fontSize: '14px',
							}}
						>
							Regresar
						</Typography>
					</Button>
				</Grid>
				<Grid xs={4} sx={{ marginTop: '31px', display: 'flex' }}>
					<AccountCircleOutlinedIcon sx={{ color: '#2F6117' }} />
					<Typography
						sx={{
							fontWeight: '500',
							color: '#2F6117',
							fontFamily: 'ubuntu',
							marginRight: '68px',
							fontSize: '20px',
							marginLeft: '10px',
						}}
					>
						Mi Perfil
					</Typography>
					<EditOutlinedIcon sx={{ color: '#2F6117' }} />
				</Grid>
				<Grid xs={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Button sx={{ marginTop: '31px' }}>
						<Icon>
							<LogoutIcon
								fontSize='small'
								sx={{ marginBottom: '7px', color: '#112734' }}
							/>
						</Icon>
						<Typography
							sx={{
								fontWeight: '500',
								color: '#112734',
								fontFamily: 'ubuntu',
								marginRight: '48px',
								fontSize: '20px',
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
