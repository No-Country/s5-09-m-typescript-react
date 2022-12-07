import { useState } from 'react';
import {
	Button,
	Hidden,
	Menu,
	MenuItem,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { closeSession } from '../redux/slices/user';
import { privateRoute } from '../models/routes';
import { Box } from '@mui/system';
import { PerfilSidebar } from '.';
import {
	AccountCircleOutlined,
	CalendarMonthOutlined,
	EventAvailableOutlined,
	LogoutOutlined,
} from '@mui/icons-material';
import { changeRoute } from '../redux/slices/perfilNavigate';

export default function MenuNavegation() {
	const theme = useTheme();
	const isSmBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
	const user = useAppSelector(state => state.user);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const logout = () => {
		dispatch(closeSession());
		localStorage.clear();
		dispatch(changeRoute('perfil'));
		setAnchorEl(null);
	};

	const navegation = (section: string) => {
		navigate(privateRoute.dashboard);
		dispatch(changeRoute(section));
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box
			sx={{
				backgroundColor: 'primary.main',
				boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
				marginBottom: '10px',
				position: 'sticky',
				top: '0',
				zIndex: '20',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					width: '100%',
					height: { sm: '70px', md: '100px' },
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '0 45px',
				}}
			>
				<Button
					id='basic-button'
					color='third'
					disableRipple
					sx={{ textTransform: 'none', fontSize: '2rem' }}
					onClick={() => navigate('/')}
				>
					<img
						src='https://res.cloudinary.com/dlxlitkl6/image/upload/v1669771559/dise%C3%B1o%20definitivo/LogoSinNombre_vfinvl.svg'
						alt='logo'
						style={{ margin: '0 20px 0 0' }}
					/>
					Mindfulness
				</Button>
				{isSmBreakpoint && (
					<>
						<Button
							id='basic-button'
							disableRipple
							sx={{
								color: 'text.secondary',
								textTransform: 'none',
								fontSize: '1rem',
								fontWeight: 'bold',
								':hover': {
									borderRadius: '0',
									borderBottom: 'solid #9C51B7 ',
								},
								':focus': {
									borderRadius: '0',
									borderBottom: 'solid #9C51B7 ',
								},
							}}
							onClick={() => navigate('/misPracticas')}
						>
							Mis prácticas
						</Button>
						<Button
							id='basic-button'
							disableRipple
							sx={{
								color: 'text.secondary',
								textTransform: 'none',
								fontSize: '1rem',
								fontWeight: 'bold',
								':hover': {
									borderRadius: '0',
									borderBottom: 'solid #9C51B7 ',
								},
								':focus': {
									borderRadius: '0',
									borderBottom: 'solid #9C51B7 ',
								},
							}}
							onClick={() => navigate('/contacto')}
						>
							Contacto
						</Button>
						<Button
							id='basic-button'
							disableRipple
							sx={{
								color: 'text.secondary',
								textTransform: 'none',
								fontSize: '1rem',
								fontWeight: 'bold',
								':hover': {
									borderRadius: '0',
									borderBottom: 'solid #9C51B7 ',
								},
								':focus': {
									borderRadius: '0',
									borderBottom: 'solid #9C51B7 ',
								},
							}}
							onClick={() => navigate('/nosotros')}
						>
							Nosotros
						</Button>
					</>
				)}

				{!user.login ? (
					<Button
						id='basic-button'
						color='secondary'
						variant='outlined'
						disableRipple
						sx={{
							textTransform: 'none',
							fontSize: '1rem',
							fontWeight: 'bold',
							border: 'none',
							':hover': {
								border: 'none',
								borderRadius: '0',
								borderBottom: 'solid #9C51B7 ',
							},
							':focus': {
								border: 'none',
								borderRadius: '0',
								borderBottom: 'solid #9C51B7 ',
							},
						}}
						onClick={() => navigate('/iniciarSesion')}
					>
						Inicia Sesión
					</Button>
				) : (
					<div>
						<Button
							id='basic-button'
							variant='text'
							aria-controls={open ? 'basic-menu' : undefined}
							aria-haspopup='true'
							aria-expanded={open ? 'true' : undefined}
							onClick={handleClick}
						>
							<img
								src={user.img}
								alt='imagen de perfil'
								style={{
									width: '50px',
									height: '50px',
									borderRadius: '50%',
									border: '2px solid',
									color: '#9C51B7',
								}}
							/>
						</Button>
						<Menu
							id='basic-menu'
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{
								'aria-labelledby': 'basic-button',
							}}
						>
							<MenuItem onClick={() => navegation('perfil')}>
								<AccountCircleOutlined
									sx={{ color: 'third.main', marginRight: '8px' }}
								/>
								Profile
							</MenuItem>
							<MenuItem onClick={() => navegation('progreso')}>
								<EventAvailableOutlined
									sx={{ color: 'third.main', marginRight: '8px' }}
								/>
								Habitos
							</MenuItem>
							<MenuItem onClick={() => navegation('calendario')}>
								<CalendarMonthOutlined
									sx={{ color: 'third.main', marginRight: '8px' }}
								/>
								Calendario
							</MenuItem>
							<MenuItem onClick={logout}>
								<LogoutOutlined
									sx={{ color: 'third.main', marginRight: '8px' }}
								/>
								Logout
							</MenuItem>
						</Menu>
					</div>
				)}
			</Box>
			{!isSmBreakpoint && (
				<Box
					sx={{
						display: 'flex',
						width: '100%',
						height: { sm: '70px', md: '100px' },
						justifyContent: 'space-evenly',
						alignItems: 'center',
						paddingBottom: '1rem',
					}}
				>
					<Button
						id='basic-button'
						disableRipple
						sx={{
							color: 'text.secondary',
							textTransform: 'none',
							fontSize: '1rem',
							fontWeight: 'bold',
							':hover': {
								borderRadius: '0',
								borderBottom: 'solid #9C51B7 ',
							},
							':focus': {
								borderRadius: '0',
								borderBottom: 'solid #9C51B7 ',
							},
						}}
						onClick={() => navigate('/misPracticas')}
					>
						Mis practicas
					</Button>
					<Button
						id='basic-button'
						disableRipple
						sx={{
							color: 'text.secondary',
							textTransform: 'none',
							fontSize: '1rem',
							fontWeight: 'bold',
							':hover': {
								borderRadius: '0',
								borderBottom: 'solid #9C51B7 ',
							},
							':focus': {
								borderRadius: '0',
								borderBottom: 'solid #9C51B7 ',
							},
						}}
						onClick={() => navigate('/contacto')}
					>
						Contacto
					</Button>
					<Button
						id='basic-button'
						disableRipple
						sx={{
							color: 'text.secondary',
							textTransform: 'none',
							fontSize: '1rem',
							fontWeight: 'bold',
							':hover': {
								borderRadius: '0',
								borderBottom: 'solid #9C51B7 ',
							},
							':focus': {
								borderRadius: '0',
								borderBottom: 'solid #9C51B7 ',
							},
						}}
						onClick={() => navigate('/nosotros')}
					>
						Nosotros
					</Button>
				</Box>
			)}
		</Box>
	);
}
