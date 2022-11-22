import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import {
	Typography,
	TextField,
	Paper,
	Link,
	Grid,
	Box,
	Avatar,
} from '@mui/material';
import GlobalButton, {
	GlobalButtonWhite,
} from '../../../components/GlobalButton';
import TopBarProfile from './TopBarProfile';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

export default function FormProfileWithUserInfo() {
	const navegacion = () => {
		console.log('probando boton');
	};
	return (
		<Grid
			item
			xs={12}
			component={Paper}
			elevation={6}
			style={{ height: '475px' }}
		>
			<Grid>
				<TopBarProfile />
			</Grid>
			<Grid
				sx={{
					display: 'flex',
					flexDirection: 'row',
					marginLeft: '56px',
					marginTop: '75px',
					marginBottom: '75px',
				}}
			>
				<AccountCircleOutlinedIcon sx={{ color: '#2F6117' }} />
				<Typography
					sx={{
						fontWeight: '500',
						color: '#112734',
						fontFamily: 'ubuntu',
						fontSize: '20px',
						marginRight: '150px',
					}}
				>
					Nombre Completo
				</Typography>
				<Grid item xs={4} sx={{ marginRight: '75px' }}>
					<Typography
						sx={{
							fontWeight: '400',
							color: '#112734',
							fontFamily: 'ubuntu',
							fontSize: '20px',
						}}
					>
						Maria Sanchez
					</Typography>
				</Grid>
			</Grid>
			<Grid
				sx={{
					display: 'flex',
					flexDirection: 'row',
					marginLeft: '56px',
					marginTop: '75px',
					marginBottom: '75px',
				}}
			>
				<VisibilityOffOutlinedIcon sx={{ color: '#2F6117' }} />
				<Typography
					sx={{
						fontWeight: '500',
						color: '#112734',
						fontFamily: 'ubuntu',
						fontSize: '20px',
						marginRight: '215px',
					}}
				>
					Contraseña
				</Typography>
				<Typography
					sx={{
						fontWeight: '400',
						color: '#112734',
						fontFamily: 'ubuntu',
						fontSize: '20px',
						marginRight: '79px',
					}}
				>
					**********
				</Typography>
			</Grid>
			<Grid
				sx={{
					display: 'flex',
					flexDirection: 'row',
					marginLeft: '56px',
					marginTop: '75px',
					marginBottom: '75px',
				}}
			>
				<MailOutlineOutlinedIcon sx={{ color: '#2F6117' }} />
				<Typography
					sx={{
						fontWeight: '500',
						color: '#112734',
						fontFamily: 'ubuntu',
						fontSize: '20px',
						marginRight: '255px',
					}}
				>
					Correo
				</Typography>
				<Typography
					sx={{
						fontWeight: '400',
						color: '#112734',
						fontFamily: 'ubuntu',
						fontSize: '20px',
					}}
				>
					marijajaj@gmail.com
				</Typography>
			</Grid>
		</Grid>
	);
}
