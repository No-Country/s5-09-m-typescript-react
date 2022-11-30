import { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { closeSession } from '../redux/slices/user';
import { privateRoute } from '../models/routes';

export default function MenuNavegation() {
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
		setAnchorEl(null);
	};
	const navegation = () => {
		navigate(privateRoute.dashboard);
		setAnchorEl(null);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				height: '100px',
				justifyContent: 'space-evenly',
				alignItems: 'center',
			}}
		>
			<Button id='basic-button' color='secondary' onClick={() => navigate('/')}>
				<img
					src='https://res.cloudinary.com/dlxlitkl6/image/upload/v1669771559/dise%C3%B1o%20definitivo/LogoSinNombre_vfinvl.svg'
					alt='logo'
					style={{ margin: '0 20px 0 0' }}
				/>
				Mindfulness
			</Button>
			<Button
				id='basic-button'
				sx={{
					color: 'text.secondary',
				}}
				onClick={() => navigate('/misPracticas')}
			>
				Mis practicas
			</Button>
			<Button
				id='basic-button'
				sx={{
					color: 'text.secondary',
				}}
				onClick={() => navigate('/contacto')}
			>
				Contacto
			</Button>
			<Button
				id='basic-button'
				sx={{
					color: 'text.secondary',
				}}
				onClick={() => navigate('/nosotros')}
			>
				Nosotros
			</Button>

			{!user.id ? (
				<Button
					id='basic-button'
					color='secondary'
					variant='outlined'
					onClick={() => navigate('/iniciarSesion')}
				>
					inicio sesion
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
						<MenuItem onClick={navegation}>Profile</MenuItem>
						<MenuItem onClick={logout}>Logout</MenuItem>
					</Menu>
				</div>
			)}
		</div>
	);
}
