import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
type Props = {};

const TopBarProfile = (props: Props) => {
	return (
		<>
			<Grid container>
				<Grid xs={4}>
					<Button>Regresar</Button>
				</Grid>
				<Grid xs={4}>
					<Typography>Mi Perfil</Typography>
				</Grid>
				<Grid xs={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Button>Salir de la Cuenta</Button>
				</Grid>
			</Grid>
		</>
	);
};

export default TopBarProfile;
