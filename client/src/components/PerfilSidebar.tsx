import {
	BookmarkBorderOutlined,
	CalendarMonthOutlined,
	EventAvailableOutlined,
	SelfImprovementOutlined,
	AccountCircleOutlined,
} from '@mui/icons-material';
import { Grid, Typography, Divider } from '@mui/material';
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
						<img
							style={{
								width: '120px',
								height: '120px',
								borderRadius: '50%',
								marginBottom: '16px',
								marginTop: '28px',
								border: '4px solid',
							}}
							src={user.img}
							alt='imagen de perfil'
						/>
					</Grid>

					<Typography
						style={{
							display: 'flex',
							justifyContent: 'center',
							fontSize: '20px',
							marginBottom: '35px',
						}}
						component='h1'
						variant='h6'
					>
						{user.name}
					</Typography>
					<Divider />
					<Grid sx={{ marginTop: '15px' }}>
						<MenuItem
							onClick={() => setModals('perfil')}
							icon={<AccountCircleOutlined />}
						>
							Perfil
						</MenuItem>
						<MenuItem icon={<BookmarkBorderOutlined />}>Favorito</MenuItem>
						<MenuItem
							onClick={() => setModals('progreso')}
							icon={<EventAvailableOutlined />}
						>
							Progreso
						</MenuItem>
						<MenuItem
							onClick={() => setModals('calendario')}
							icon={<CalendarMonthOutlined />}
						>
							Calendario
						</MenuItem>
						<MenuItem
							onClick={() => setModals('panel')}
							icon={<SelfImprovementOutlined />}
						>
							Mi Panel
						</MenuItem>
					</Grid>
				</Menu>
			</Sidebar>
		</>
	);
}
