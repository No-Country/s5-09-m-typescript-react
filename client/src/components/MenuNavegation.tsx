import { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { resetUser } from '../redux/slices/user';

export default function MenuNavegation() {
	const user = useAppSelector(state => state.user);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
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
					src='https://res.cloudinary.com/dlxlitkl6/image/upload/v1668527673/ananda%20marga/mindfulness_mmykqk.svg'
					alt='logo'
					style={{ margin: '0 20px 0 0' }}
				/>
				Mindfulness
			</Button>
			<Button
				id='basic-button'
				color='third'
				onClick={() => navigate('/misPracticas')}
			>
				Mis practicas
			</Button>
			<Button
				id='basic-button'
				color='third'
				onClick={() => navigate('/contacto')}
			>
				Contacto
			</Button>
			<Button
				id='basic-button'
				color='third'
				onClick={() => navigate('/nosotros')}
			>
				Nosotros
			</Button>

			{!user.isAuth ? (
				<Button
					id='basic-button'
					color='third'
					variant='outlined'
					onClick={() => navigate('/iniciarSesion')}
				>
					inicio sesion
				</Button>
			) : (
				<Button
					id='basic-button'
					color='third'
					variant='outlined'
					onClick={() => dispatch(resetUser())}
				>
					Desconectarse
				</Button>
			)}
		</div>
	);
}
