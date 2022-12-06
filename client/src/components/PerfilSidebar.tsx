import {
	AccountCircleOutlined,
	BookmarkBorderOutlined,
	CalendarMonthOutlined,
	EventAvailableOutlined,
	SelfImprovementOutlined,
} from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
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
					<Box
						sx={{
							display:'flex',
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
							}}
						/>
					</Box>
					<Typography
						style={{ display: 'flex', justifyContent: 'center' }}
						component='p'
						variant='h5'
					>
						{user.name}
					</Typography>
					<MenuItem
						onClick={() => setModals('perfil')}
						icon={<AccountCircleOutlined />}
					>
						Perfil
					</MenuItem>
					<MenuItem
						onClick={() => setModals('progreso')}
						icon={<EventAvailableOutlined />}
					>
						Habitos
					</MenuItem>
					<MenuItem
						onClick={() => setModals('calendario')}
						icon={<CalendarMonthOutlined />}
					>
						Calendario
					</MenuItem>
				</Menu>
			</Sidebar>
		</>
	);
}
