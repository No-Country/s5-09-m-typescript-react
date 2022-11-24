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
			<Sidebar >
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
			<MenuItem icon={<NotificationsActiveOutlined />} ><button onClick={()=>setModals('perfil')}>Perfil</button></MenuItem>
				
					<MenuItem icon={<BookmarkBorderOutlined />}>Favorito</MenuItem>
					<MenuItem icon={<EventAvailableOutlined />}>Progreso </MenuItem>
					<MenuItem icon={<CalendarMonthOutlined />}><button onClick={()=>setModals('calendario')}>Mi Calendario</button></MenuItem>
					<MenuItem icon={<SelfImprovementOutlined />}>Mi Panel</MenuItem>
				</Menu>
			</Sidebar>
		</>
	);
}
