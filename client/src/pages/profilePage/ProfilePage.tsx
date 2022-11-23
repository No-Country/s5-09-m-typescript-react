import Grid from '@mui/material/Grid';
import Form from './components/Form';
import PerfilSidebar from '../../components/PerfilSidebar';

export default function ProfilePage() {
	return (
		<>
			<Grid
				container
				spacing={2}
				style={{ padding: '35px', marginRight: '52px' }}
			>
				<Grid item xs={2}>
					<PerfilSidebar />
				</Grid>
				<Grid item xs={10}>
					<Form />
				</Grid>
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
