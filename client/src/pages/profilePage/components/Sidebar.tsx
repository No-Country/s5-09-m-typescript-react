import {
	AccountCircle,
	AccountCircleOutlined,
	BookmarkBorderOutlined,
	CalendarMonthOutlined,
	EventAvailableOutlined,
	NotificationsActiveOutlined,
	SelfImprovementOutlined,
} from '@mui/icons-material';
import { Grid, Avatar, Typography } from '@mui/material';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
import image from '../../../assets/Ellipse19.png';
const ProSidebar = () => {
	return (
		<>
			<Sidebar style={{ height: '750px', backgroundColor: 'white' }}>
				<Menu>
					<Grid sx={{ display: 'flex', justifyContent: 'center' }}>
						<img src={image} alt='no ando' />
					</Grid>
					<Typography
						style={{ display: 'flex', justifyContent: 'center' }}
						component='h1'
						variant='h6'
					>
						Maria Sanchez
					</Typography>

					<SubMenu icon={<AccountCircleOutlined />} label='Perfil'>
						<MenuItem> Opcion 1</MenuItem>
						<MenuItem> Opcion 2</MenuItem>
					</SubMenu>
					<MenuItem icon={<NotificationsActiveOutlined />}>
						{' '}
						Notificaciones{' '}
					</MenuItem>
					<MenuItem icon={<BookmarkBorderOutlined />}> Favorito </MenuItem>
					<MenuItem icon={<EventAvailableOutlined />}> Progreso </MenuItem>
					<MenuItem icon={<CalendarMonthOutlined />}> Mi Calendario </MenuItem>
					<MenuItem icon={<SelfImprovementOutlined />}> Mi Panel </MenuItem>
				</Menu>
			</Sidebar>
		</>
	);
};

export default ProSidebar;
