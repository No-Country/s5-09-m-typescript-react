import * as React from 'react';
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';
import { Typography, Grid } from '@mui/material';
import GlobalButton from '../../../components/GlobalButton';
import DeletableChips from './DeletableChips';
import { useAppSelector } from '../../../redux/hooks';

type HabitsModalProps = {
	closeModal: () => void;
};
export default function FormProfileWithUserInfo2({
	closeModal,
}: HabitsModalProps) {
	const { practices } = useAppSelector(store => store.user);
	const habits = practices?.map((e: any) => e.practice);

	return (
		<Grid container height='33%' sx={{ marginTop: '75px' }}>
			<Grid item xs={2}>
				<Typography fontSize='1.5rem'>
					<CoronavirusOutlinedIcon sx={{ color: 'secondary.main' }} />
					Hábitos
				</Typography>
			</Grid>
			<Grid item xs={9} sx={{ marginBottom: '25px' }}>
				<Typography fontSize='1.5rem'>
					Aquí puedes ver y editar los hábitos que estás trabajando
				</Typography>
			</Grid>
			<Grid
				item
				xs={6}
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alingItems: 'center',
					flexWrap: 'wrap',
					marginLeft: '225px',
					alignContent: 'stretch',
				}}
			>
				{habits?.map((e: any) => {
					return <DeletableChips key={e._id} name={e.name} />;
				})}
			</Grid>
			<Grid
				item
				xs={8}
				sx={{
					display: 'flex',
					justifyContent: 'end',
					alingItems: 'center',
					marginTop: '25px',
				}}
			>
				<GlobalButton text='Cambia tus habitos' action={closeModal} />
			</Grid>
		</Grid>
	);
}
