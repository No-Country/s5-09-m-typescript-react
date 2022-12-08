import {
	AccountCircleOutlined,
	BookmarkBorderOutlined,
	CalendarMonthOutlined,
	EventAvailableOutlined,
	LogoutOutlined,
	Height,
	SelfImprovementOutlined,
} from '@mui/icons-material';
import { useState } from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { closeSession } from '../redux/slices/user';
import { changeRoute } from '../redux/slices/perfilNavigate';

export default function ProSidebar() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const dispatch = useAppDispatch();

	const logout = () => {
		dispatch(closeSession());
		localStorage.clear();
		dispatch(changeRoute('perfil'));
		setAnchorEl(null);
	};
	const user = useAppSelector(store => store.user);
	return (
		<>
			<Sidebar>
				<Menu>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							height: '150px',
						}}
					>
						<img
							src={user.img}
							alt='imagen de perfil'
							style={{
								borderRadius: '50%',
								border: '2px solid',
								borderColor: '#9C51B7',
								margin: '8%',
							}}
						/>
					</Box>
					<Typography
						style={{
							display: 'flex',
							justifyContent: 'center',
							marginBottom: '18px',
						}}
						component='p'
						variant='h5'
					>
						{user.name}
					</Typography>
					<Divider
						variant='middle'
						sx={{
							borderBottomWidth: '2px',
						}}
					/>
					<MenuItem
						onClick={() => dispatch(changeRoute('perfil'))}
						icon={<AccountCircleOutlined sx={{ color: 'third.main' }} />}
					>
						Perfil
					</MenuItem>
					<MenuItem
						onClick={() => dispatch(changeRoute('progreso'))}
						icon={<EventAvailableOutlined sx={{ color: 'third.main' }} />}
					>
						Habitos
					</MenuItem>
					<MenuItem
						onClick={() => dispatch(changeRoute('calendario'))}
						icon={<CalendarMonthOutlined sx={{ color: 'third.main' }} />}
					>
						Calendario
					</MenuItem>
					<MenuItem
						onClick={logout}
						icon={<LogoutOutlined sx={{ color: 'third.main' }} />}
					>
						Cerrar sesión
					</MenuItem>
				</Menu>
			</Sidebar>
		</>
	);
}
