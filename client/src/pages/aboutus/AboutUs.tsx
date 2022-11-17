import { Divider } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from '@mui/material/Button';
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
			divider={
				<Divider sx={{ width: 993, borderColor: 'rgba(231, 232, 234, 1)' }} />
			}>
        <Button variant="contained" startIcon={<ArrowBackIosNewIcon />} sx={{textTransform: "capitalize",}}>
          Regresar
        </Button>
        <AboutGrid />
      </Stack>
    </Paper>
	);
}
