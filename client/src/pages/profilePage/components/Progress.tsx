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
				padding:{xs:'30px 40px', md:'50px auto'},
			
			}}
		>	
		<Typography
				sx={{
					margin: {xs:'auto', md:'0px auto'},
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					maxWidth: '200px',
					fontSize: '24px',
					fontWeight: 600,
					lineHeight: '30px',
				}}
			>
				Registra tu tarea
		</Typography>
			<Grid
				item
				xs={12}
				borderBottom={'2px solid #E7E8EA'}
			>	
			</Grid>
			
			<Grid
				item xs={12}
				sx={{
					display: 'contents',
					margin:'auto'
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
