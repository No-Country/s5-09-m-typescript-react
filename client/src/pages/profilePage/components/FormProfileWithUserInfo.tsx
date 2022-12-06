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
			<Grid container height={{ xs:'230px', md:'200px'}}>
				<Grid
					item
					xs={12}
					sx={{
						display: 'flex',
						justifyContent: 'start',
						alignItems: 'center',
						margin:{xs:'20px', md:'0'}
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'start',
							gap: '30px',
							marginLeft:{ xs: '10px', md:'160px' }
						}}
					>
						<Typography fontSize={font} >
							<AccountCircleOutlinedIcon sx={{ color: 'secondary.main' }} />
							Nombre Completo: {user.name}
						</Typography>
						<Typography fontSize={font}>
							<VisibilityOffOutlinedIcon sx={{ color: 'secondary.main' }} />
							Contraseña: **********
						</Typography>
						<Typography fontSize={font}>
							<MailOutlineOutlinedIcon sx={{ color: 'secondary.main' }} />
							Correo: {user.email}
						</Typography>
					</Box>
					
				</Grid>
			</Grid>
		</>
	);
}
