import Grid from '@mui/material/Grid';
import FormProfileWithUserInfo from './components/FormProfileWithUserInfo';
import FormProfileWithUserInfo2 from './components/FormProfileWithUserInfo2';
import PerfilSidebar from '../../components/PerfilSidebar';
import Calendar from './components/Calendar';
import Form from './components/Form';
import { TopBarProfile } from './components';

export default function Profile() {
	return (
		<>
			<Grid
				container
				spacing={2}
				sx={{
					height: 'calc(100vh - 85px)',
				}}
			>
				<Grid item xs={2}>
					<PerfilSidebar />
				</Grid>

				<Grid item xs={10}>
					<TopBarProfile />
					{/* agregar logica de cambio de componentes utilizando el menu sidebard */}
					{/* <FormProfileWithUserInfo />
					<FormProfileWithUserInfo2 /> */}
					{/* <Calendar /> */}
					{/* <Form /> */}
				</Grid>
			</Grid>
		</>
	);
}
