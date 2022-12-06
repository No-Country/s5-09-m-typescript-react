import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Typography, Grid, TextField } from '@mui/material';
import TopBarProfile from './TopBarProfile';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { Box } from '@mui/system';
import { useAppSelector } from '../../../redux/hooks';

export default function FormProfileWithUserInfo() {
	const user = useAppSelector(store => store.user);
	const navegacion = () => {
		console.log('probando boton');
	};
	const font = { xs: '1rem', md: '1.5rem' }
	return (
		<>
			<Grid container height={{ xs:'230px', md:'250px'}}>
				<Grid
					item
					xs={12}
					sx={{
						display: 'flex',
						justifyContent: 'start',
						alignItems: 'center',
					}}
				>	
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'start',
							gap: '30px',
							marginLeft:{ xs: '30px', md:'130px' }
						}}
					>	
						<Typography margin={{xs:'auto', md:'0px'}} fontSize={{xs: '1.5rem', md: '1.9rem'}}>
							<AccountCircleOutlinedIcon sx={{ marginRight:'10px', color: 'third.main' }} />
							Perfil
						</Typography>
						<Typography fontSize={font} >
							<AccountCircleOutlinedIcon sx={{ marginRight:'10px', color: 'third.main' }} />
							Nombre Completo: <span style={{color:'#112734B2'}}>{user.name}</span>
						</Typography>
						<Typography fontSize={font}>
							<VisibilityOffOutlinedIcon sx={{ marginRight:'10px', color: 'third.main' }} />
							Contraseña: <span style={{color:'#112734B2'}}>**********</span>
						</Typography>
						<Typography fontSize={font}>
							<MailOutlineOutlinedIcon sx={{ marginRight:'10px', color: 'third.main' }} />
							Correo: <span style={{color:'#112734B2'}}>{user.email}</span>
						</Typography>
					</Box>
					
				</Grid>
			</Grid>
		</>
	);
}
