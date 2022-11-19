import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
type Props = {};

const ProSidebar = (props: Props) => {
	return (
		<>
			<Sidebar style={{ height: '750px' }}>
				<Menu>
					<Grid sx={{ display: 'flex', justifyContent: 'center' }}>
						<Avatar
							sx={{
								m: 1,
								bgcolor: 'secondary.main',
								alignSelf: 'center',
								width: '120px',
								height: '120px',
							}}
						>
							<AccountCircleIcon fontSize='large' />
						</Avatar>
					</Grid>
					<Typography
						style={{ display: 'flex', justifyContent: 'center' }}
						component='h1'
						variant='h6'
					>
						Maria Sanchez
					</Typography>

					<SubMenu icon={<AccountCircleOutlinedIcon />} label='Perfil'>
						<MenuItem> Opcion 1</MenuItem>
						<MenuItem> Opcion 2</MenuItem>
					</SubMenu>
					<MenuItem icon={<NotificationsActiveOutlinedIcon />}>
						{' '}
						Notificaciones{' '}
					</MenuItem>
					<MenuItem icon={<BookmarkBorderOutlinedIcon />}> Favorito </MenuItem>
					<MenuItem icon={<EventAvailableOutlinedIcon />}> Progreso </MenuItem>
					<MenuItem icon={<CalendarMonthOutlinedIcon />}>
						{' '}
						Mi Calendario{' '}
					</MenuItem>
					<MenuItem icon={<SelfImprovementOutlinedIcon />}> Mi Panel </MenuItem>
				</Menu>
			</Sidebar>
		</>
	);
};

export default ProSidebar;
