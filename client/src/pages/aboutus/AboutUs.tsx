import { Divider } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import BackButton from '../../components/BackButton';
import AboutGrid from './components/AboutGrid';

export default function AboutUs() {
	return (
		<Paper variant="outlined" sx={{
      margin: "60px",
      background: "#FFFEFE",
    }}>
      <Stack direction='column'
			spacing={5}
      alignItems='center'
      sx={{padding: "25px 220px"}}
			divider={
				<Divider flexItem sx={{ borderColor: 'rgba(231, 232, 234, 1)' }} />
			}>
        <BackButton sx={{alignSelf: "flex-start"}}/>
        <AboutGrid />
      </Stack>
    </Paper>
	);
}
