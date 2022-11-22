import Grid from '@mui/material/Grid';
import Form from './components/Form';
import FormProfileWithUserInfo from './components/FormProfileWithUserInfo';
import FormProfileWithUserInfo2 from './components/FormProfileWithUserInfo2';
import ProSidebar from './components/Sidebar';

export default function ProfileWithUserInfo() {
	return (
		<>
			<Grid
				container
				spacing={2}
				style={{ padding: '35px', marginRight: '52px' }}
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
