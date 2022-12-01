import * as React from 'react';
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';
import { Typography, Grid } from '@mui/material';
import GlobalButton from '../../../components/GlobalButton';
import DeletableChips from './DeletableChips';
import { useAppSelector } from '../../../redux/hooks';

export default function FormProfileWithUserInfo2() {
	const { practices } = useAppSelector(store => store.user);
	const habits = practices.map((e: any) => e.practice);
	console.log(habits);
	const navegacion = () => {
		console.log('probando boton');
	};
	return (
		<Grid container height='30%'>
			<Grid item xs={3}>
				<Typography fontSize='1.5rem'>
					<CoronavirusOutlinedIcon sx={{ color: 'secondary.main' }} />
					Hábitos
				</Typography>
				;
			</Grid>
			<Grid item xs={9}>
				<Typography fontSize='1.5rem'>
					Aquí puedes ver y editar los hábitos que estás trabajando
				</Typography>
				;
			</Grid>
			<Grid
				item
				xs={12}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alingItems: 'center',
					gap: '10px',
				}}
			>
				{habits.map((e: any) => {
					return <DeletableChips key={e._id} name={e.name} />;
				})}
			</Grid>
			<Grid
				item
				xs={11}
				sx={{
					display: 'flex',
					justifyContent: 'end',
					alingItems: 'center',
				}}
			>
				<GlobalButton text='Cambia tus habitos' action={navegacion} />
			</Grid>
		</Grid>
	);
}
