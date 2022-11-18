import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
import Form from './Form';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';

export default function ProfilePage() {
	return (
		<>
			<Grid elevation={6} item xs={12} sm={8} md={5} component={Paper}>
				<Paper>
					<Grid container component='main' sx={{ height: '100vh' }}>
						<Paper>
							<Sidebar>
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
									<MenuItem icon={<BookmarkBorderOutlinedIcon />}>
										{' '}
										Favorito{' '}
									</MenuItem>
									<MenuItem icon={<EventAvailableOutlinedIcon />}>
										{' '}
										Progreso{' '}
									</MenuItem>
									<MenuItem icon={<CalendarMonthOutlinedIcon />}>
										{' '}
										Mi Calendario{' '}
									</MenuItem>
									<MenuItem icon={<SelfImprovementOutlinedIcon />}>
										{' '}
										Mi Panel{' '}
									</MenuItem>
								</Menu>
							</Sidebar>
						</Paper>
						<Form />
					</Grid>
				</Paper>
			</Grid>
		</>
	);
}

/* 
Using React Router
We provide compatibility with React Router using routerLink prop

Example Usage

import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

<Sidebar>
  <Menu>
    <MenuItem routerLink={<Link to="/documentation" />}> Documentation</MenuItem>
    <MenuItem routerLink={<Link to="/calendar" />}> Calendar</MenuItem>
    <MenuItem routerLink={<Link to="/e-commerce" />}> E-commerce</MenuItem>
  </Menu>
</Sidebar>; */
