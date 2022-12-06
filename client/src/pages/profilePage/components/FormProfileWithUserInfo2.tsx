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
	const font = { xs: '1rem', md: '1.5rem' }
	return (
		<Grid container 
				height={{ xs:'250px', md:'300px'}}
				display={'block'}
				margin={{ xs:'25px', md:'50px 160px'}}
			>
			<Grid item xs={3} display={'inline'} >
				<Typography fontSize='1.5rem'>
					<CoronavirusOutlinedIcon sx={{ color: 'secondary.main' }} />
					Hábitos
				</Typography>
				
			</Grid>
			<Grid item xs={9}>
				<Typography fontSize={font} margin={'10px 0'}>
					Aquí puedes ver y editar los hábitos que estás trabajando
				</Typography>
				
			</Grid>
			<Grid
				item
				xs={8}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alingItems: 'center',
					gap: '10px',
				}}
			>
				{habits?.map((e: any) => {
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
					marginTop: '50px',
				}}
			>
				<GlobalButton text='Cambia tus habitos' action={closeModal} />
			</Grid>
		</Grid>
	);
}
