import { useState } from 'react';
import { Button, Menu, MenuItem, Typography } from '@mui/material';

export default function MenuNavegation() {
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
				height: '150px',
				justifyContent: 'space-evenly',
				alignItems: 'center',
			}}
		>
			<Button id='basic-button' color='secondary'>
				<img
					src='https://res.cloudinary.com/dlxlitkl6/image/upload/v1668527673/ananda%20marga/mindfulness_mmykqk.svg'
					alt='logo'
					style={{ margin: '0 20px 0 0' }}
				/>
				Mindfulness
			</Button>
			<Button id='basic-button' color='third'>
				Mis practicas
			</Button>
			<Button id='basic-button' color='third'>
				Contacto
			</Button>
			<Button id='basic-button' color='third'>
				Nosotros
			</Button>
			<Button
				id='basic-button'
				color='third'
				variant='outlined'
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				inicio sesion
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
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem onClick={handleClose}>Logout</MenuItem>
			</Menu>
		</div>
	);
}
