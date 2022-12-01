import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Typography, Grid, TextField } from '@mui/material';
import TopBarProfile from './TopBarProfile';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { Box } from '@mui/system';
import { useAppSelector } from '../../../redux/hooks';
import { useState } from 'react';
export default function FormProfileWithUserInfo() {
	const user = useAppSelector(store => store.user);
	const [name, setName] = useState(user.name);
	const [password, setPassword] = useState('*********');

	const navegacion = () => {
		console.log('probando boton');
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};
	const handleChangePass = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
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
						<Grid sx={{ display: 'flex' }}>
							<Typography fontSize='1.5rem' sx={{ marginRight: '14px' }}>
								<AccountCircleOutlinedIcon
									sx={{ color: 'secondary.main', marginRight: '14px' }}
								/>
								Nombre Completo:
							</Typography>
							<TextField
								id='outlined-name'
								value={name}
								onChange={handleChange}
								variant='outlined'
								defaultValue={user.name}
							>
								<Typography fontSize='1.5rem'>{user.name}</Typography>
							</TextField>
						</Grid>
						<Grid sx={{ display: 'flex' }}>
							<Typography fontSize='1.5rem' sx={{ marginRight: '14px' }}>
								<VisibilityOffOutlinedIcon
									sx={{ color: 'secondary.main', marginRight: '14px' }}
								/>
								Contraseña:
							</Typography>
							<TextField
								id='outlined-pass'
								value={password}
								onChange={handleChangePass}
								variant='outlined'
								defaultValue={user.password}
							>
								<Typography fontSize='1.5rem'>**********</Typography>
							</TextField>
						</Grid>
						<Grid sx={{ display: 'flex' }}>
							<Typography fontSize='1.5rem' sx={{ marginRight: '14px' }}>
								<MailOutlineOutlinedIcon
									sx={{ color: 'secondary.main', marginRight: '14px' }}
								/>
								Correo:
							</Typography>
							<Typography>{user.email}</Typography>
						</Grid>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'start',
							gap: '30px',
							marginLeft: '100px',
							marginTop: '19px',
						}}
					></Box>
				</Grid>
			</Grid>
		</>
	);
}
