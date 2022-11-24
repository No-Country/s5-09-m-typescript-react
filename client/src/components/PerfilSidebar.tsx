import {
	BookmarkBorderOutlined,
	CalendarMonthOutlined,
	EventAvailableOutlined,
	NotificationsActiveOutlined,
	SelfImprovementOutlined,
} from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
interface sidebar {
	setModals: (nameModal: string) => void;
}
export default function ProSidebar({ setModals }: sidebar) {
	return (
		<>
			<Sidebar style={{ height: '750px', backgroundColor: 'white' }}>
				<Menu>
					<Grid sx={{ display: 'flex', justifyContent: 'center' }}>
						<img
							src='https://res.cloudinary.com/dlxlitkl6/image/upload/v1669229543/ananda%20marga/perfil/Ellipse19_x3azbk.png'
							alt='imagen de perfil'
						/>
					</Grid>
					<Typography
						style={{ display: 'flex', justifyContent: 'center' }}
						component='h1'
						variant='h6'
					>
						Maria Sanchez
					</Typography>
					<MenuItem icon={<NotificationsActiveOutlined />}>Perfil</MenuItem>
					<MenuItem icon={<BookmarkBorderOutlined />}>Favorito</MenuItem>
					<MenuItem icon={<EventAvailableOutlined />}>Progreso </MenuItem>
					<MenuItem icon={<CalendarMonthOutlined />}> Mi Calendario</MenuItem>
					<MenuItem icon={<SelfImprovementOutlined />}>Mi Panel</MenuItem>
				</Menu>
			</Sidebar>
		</>
	);
}
