import { Stack } from '@mui/system';

export default function Calendar() {
	return (
		<Stack direction='row' justifyContent='center' alignItems='center' sx={{marginY: "30px"}}>
			<iframe src="https://calendar.google.com/calendar/embed?src=s5.09.m.typescript%40gmail.com&ctz=UTC" style={{border: 0}} width="800" height="600" scrolling="no"></iframe>
		</Stack>
	);
}
