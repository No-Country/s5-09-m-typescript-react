import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Typography, Grid } from '@mui/material';
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
	return (
		<>
			<Grid container height='40%'>
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
						}}
					>
						<Typography fontSize='1.5rem'>
							<AccountCircleOutlinedIcon sx={{ color: 'secondary.main' }} />
							Nombre Completo
						</Typography>
						<Typography fontSize='1.5rem'>
							<VisibilityOffOutlinedIcon sx={{ color: 'secondary.main' }} />
							Contraseña
						</Typography>
						<Typography fontSize='1.5rem'>
							<MailOutlineOutlinedIcon sx={{ color: 'secondary.main' }} />
							Correo
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'start',
							gap: '30px',
							marginLeft: '100px',
						}}
					>
						<Typography fontSize='1.5rem'>{user.userName}</Typography>
						<Typography fontSize='1.5rem'>**********</Typography>
						<Typography fontSize='1.5rem'>{user.email}</Typography>
					</Box>
				</Grid>
			</Grid>
		</>
	);
}
