import {
	BookmarkBorderOutlined,
	CalendarMonthOutlined,
	EventAvailableOutlined,
	NotificationsActiveOutlined,
	SelfImprovementOutlined,
} from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { useAppSelector } from '../redux/hooks';
interface sidebar {
	setModals: (nameModal: string) => void;
}
export default function ProSidebar({ setModals }: sidebar) {
	const user = useAppSelector(store => store.user);
	return (
		<>
			<Sidebar>
				<Menu>
					<Grid sx={{ display: 'flex', justifyContent: 'center' }}>
						<img src={user.img} alt='imagen de perfil' />
					</Grid>
					<Typography
						style={{ display: 'flex', justifyContent: 'center' }}
						component='h1'
						variant='h6'
					>
						{user.name}
					</Typography>
					<MenuItem icon={<NotificationsActiveOutlined />}>
						<button onClick={() => setModals('perfil')}>Perfil</button>
					</MenuItem>
					<MenuItem icon={<BookmarkBorderOutlined />}>Favorito</MenuItem>
					<MenuItem icon={<EventAvailableOutlined />}>
						<button onClick={() => setModals('progreso')}>Progreso</button> 
					</MenuItem>
					<MenuItem icon={<CalendarMonthOutlined />}>
						<button onClick={() => setModals('calendario')}>
							Mi Calendario
						</button>
					</MenuItem>
					<MenuItem icon={<SelfImprovementOutlined />}>
						<button onClick={() => setModals('panel')}>Mi Panel</button>
					</MenuItem>
				</Menu>
			</Sidebar>
		</>
	);
}
