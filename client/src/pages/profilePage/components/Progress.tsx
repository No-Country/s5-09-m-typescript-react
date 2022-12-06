import { Grid, Stack, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LinearProgress, {
	LinearProgressProps,
	linearProgressClasses,
} from '@mui/material/LinearProgress';
import { useState } from 'react';
import { useAppSelector } from '../../../redux/hooks';
import ProgressChecks from './ProgressChecks';
import Divider from '@mui/material/Divider';

const BorderLinearProgress = styled(LinearProgress)(() => ({
	height: 15,
	borderRadius: 35,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: '#E2E8F0',
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 35,
		backgroundColor: '#EF4444',
	},
}));

function LinearProgressWithLabel(
	props: LinearProgressProps & { value: number },
) {
	return (
		<Stack direction={'column'} sx={{ marginY: '20px' }}>
			<Box sx={{ minWidth: 35, marginY: '5px' }}>
				<Typography variant='body2' color='text.secondary'>
					{`Mira lo que has logrado ${Math.round(props.value)}%`}
				</Typography>
			</Box>
			<Box sx={{ width: '100%', mr: 1 }}>
				<BorderLinearProgress variant='determinate' {...props} />
			</Box>
		</Stack>
	);
}

export default function Progress() {
	const { practices } = useAppSelector(store => store.user);
	const habits = practices.map((e: any) => e.practice);
	const [progress, setProgress] = useState(0);
	const checkHabit = (checked: boolean) => {
		const increment = checked ? 1 : -1;
		setProgress(progress => progress + increment);
	};
	return (
		<Grid
			container
			sx={{
				padding: { xs: '30px 40px', md: '50px auto' },
			}}
		>
			<Typography
				sx={{
					margin: { xs: 'auto', md: '0px auto' },
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					maxWidth: '200px',
					fontSize: '24px',
					fontWeight: 600,
					lineHeight: '30px',
				}}
			>
				Hábitos
			</Typography>
			<Divider
				style={{
					width: '100%',
					borderBottomWidth: '2px',
					marginBottom: '3rem',
				}}
			></Divider>
			<Grid
				item
				xs={12}
				sx={{
					margin: '0px auto',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					maxWidth: '200px',
				}}
			>
				<Box sx={{ width: '100%', marginBottom: '3rem' }}>
					<LinearProgressWithLabel value={(progress / habits.length) * 100} />
				</Box>
			</Grid>

			<Grid
				item
				xs={12}
				sx={{
					display: 'contents',
					margin: 'auto',
				}}
			>
				{habits.map((e: any) => {
					return (
						<ProgressChecks
							key={habits.indexOf(e)}
							tittle={e.name}
							urlImg={e.img}
							checkHabit={checkHabit}
						/>
					);
				})}
			</Grid>
		</Grid>
	);
}
