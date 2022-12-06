import { useState } from 'react';
import { Button, Hidden, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { closeSession } from '../redux/slices/user';
import { privateRoute } from '../models/routes';
import { Box } from '@mui/system';
import { PerfilSidebar } from '.';

export default function MenuNavegation() {
  const theme = useTheme()
  const isSmBreakpoint = useMediaQuery(theme.breakpoints.up('sm'))
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

  const [modal, setModal] = useState<string>('perfil');
  const setModals = (nameModal: string) => {
		setModal(nameModal);
	};

	const navegation = () => {
		navigate(privateRoute.dashboard);
		setAnchorEl(null);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
    <Box sx={{
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    }}>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: { sm: '70px', md: '100px' },
          justifyContent: 'space-between',
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
        {
          isSmBreakpoint && (
            <>
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
            </>
          )
        }

        {!user.id ? (
          <Button
            id='basic-button'
            color='secondary'
            variant='outlined'
            onClick={() => navigate('/iniciarSesion')}
          >
            inicia sesion
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
              <Hidden smUp>
                <PerfilSidebar setModals={setModals} />
              </Hidden>
              <Hidden smDown>
                <MenuItem onClick={navegation}>Profile</MenuItem>
              </Hidden>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </Box>
      {
        !isSmBreakpoint && (
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              height: { sm: '70px', md: '100px' },
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <Button
              id='basic-button'
              sx={{
                color: 'text.secondary',
                textTransform: "capitalize",
              }}
              onClick={() => navigate('/')}
            >
              Inicio
            </Button>
            <Button
              id='basic-button'
              sx={{
                color: 'text.secondary',
                textTransform: "capitalize",
              }}
              onClick={() => navigate('/misPracticas')}
            >
              Mis practicas
            </Button>
            <Button
              id='basic-button'
              sx={{
                color: 'text.secondary',
                textTransform: "capitalize",
              }}
              onClick={() => navigate('/contacto')}
            >
              Contacto
            </Button>
            <Button
              id='basic-button'
              sx={{
                color: 'text.secondary',
                textTransform: "capitalize",
              }}
              onClick={() => navigate('/nosotros')}
            >
              Nosotros
            </Button>
          </Box>
        )
      }
    </Box>
	);
}
