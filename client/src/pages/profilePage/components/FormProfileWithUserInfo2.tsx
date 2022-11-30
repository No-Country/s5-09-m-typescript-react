import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import * as React from 'react';
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';
import { Typography, Grid } from '@mui/material';
import GlobalButton from '../../../components/GlobalButton';
import DeletableChips from './DeletableChips';
import { HabitsModal } from '../../../components';
import { getHabits } from '../../../service/habits/habits';

export default function FormProfileWithUserInfo2() {
	const [isOpenModal, setIsOpenModal] = React.useState(false);
	const [habits, setHabits] = React.useState<string[]>([]);

	const handleHabits = async () => {
		try {
			const res: any = await getHabits();

			setHabits(res.data);
		} catch (error) {
			return error;
		}
	};

	React.useEffect(() => {
		handleHabits();
	}, []);

	const closeModal = () => {
		setIsOpenModal(false);
	};

	const navegacion = () => {
		console.log('probando boton');
		setIsOpenModal(true);
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
				}}
			>
				<DeletableChips />
				<DeletableChips />
				<DeletableChips />
				<DeletableChips />
				<DeletableChips />
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
				{/* 				{isOpenModal && <HabitsModal close={closeModal}  />}
				 */}{' '}
				<HabitsModal close={closeModal} habitos={habits} />
			</Grid>
		</Grid>
	);
}
