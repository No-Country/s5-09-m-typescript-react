import { Grid, Typography } from '@mui/material';
import { useAppSelector } from '../../../redux/hooks';
import ProgressChecks from './ProgressChecks';

export default function Progress() {
	const { practices } = useAppSelector(store => store.user);
	const habits = practices.map((e: any) => e.practice);
	return (
		<Grid
			container
			sx={{
				padding: '50px',
			}}
		>
			<Grid
				item
				xs={12}
				borderBottom={'2px solid #E7E8EA'}
				sx={{
					margin: '0px auto',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					maxWidth: '200px',
				}}
			>
				<Typography
					sx={{
						fontSize: '24px',
						fontWeight: 600,
						lineHeight: '30px',
					}}
				>
					Registra tu tarea
				</Typography>
			</Grid>

			<Grid
				item
				sx={{
					display: 'contents',
				}}
			>
				{habits.map((e: any) => {
					return (
						<ProgressChecks
							key={habits.indexOf(e)}
							tittle={e.name}
							urlImg={e.img}
						/>
					);
				})}
			</Grid>
		</Grid>
	);
}
