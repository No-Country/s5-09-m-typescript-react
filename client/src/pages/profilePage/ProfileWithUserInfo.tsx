import Grid from '@mui/material/Grid';
import FormProfileWithUserInfo from './components/FormProfileWithUserInfo';
import FormProfileWithUserInfo2 from './components/FormProfileWithUserInfo2';
import ProSidebar from '../../components/PerfilSidebar';

export default function ProfileWithUserInfo() {
	return (
		<>
			<Grid
				container
				spacing={2}
				sx={{
					height: '100vh',
				}}
			>
				<Grid item xs={2}>
					<ProSidebar />
				</Grid>
				<Grid item xs={10}>
					<FormProfileWithUserInfo />
					<FormProfileWithUserInfo2 />
				</Grid>
			</Grid>
		</>
	);
}
