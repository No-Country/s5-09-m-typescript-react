import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';
import { Typography, Grid, Button } from '@mui/material';
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
	const font = { xs: '1rem', md: '1.5rem' };
	return (
		<Grid
			container
			height={{ xs: '680px', md: '300px' }}
			width={'80%'}
			display={{ xs: 'block', md: 'inline-flex' }}
			margin={{ xs: '25px', md: '50px 0px 0px 125px' }}
		>
			<Grid item xs={3} md={3} display={'inline'}>
				<Typography fontSize={{ xs: '1.3rem', md: '1.7rem' }}>
					<CoronavirusOutlinedIcon
						sx={{ marginRight: '10px', color: 'third.main' }}
					/>
					Hábitos
				</Typography>
			</Grid>
			<Grid item xs={10} md={9}>
				<Typography
					fontSize={font}
					margin={{ xs: '10px 20px', md: '0' }}
					color='text.secondary'
				>
					Aquí puedes ver y editar los hábitos que estás trabajando
				</Typography>
			</Grid>
			<Grid
				item
				xs={8}
				sx={{
					display: 'block',
					alingItems: 'center',
				}}
			>
				{' '}
				<Grid
					container
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						rowGap: '10px',
						columnGap: '0.5em',
					}}
				>
					{habits?.map((e: any) => {
						return <DeletableChips key={e._id} name={e.name} />;
					})}
				</Grid>
			</Grid>
			<Grid
				item
				xs={10}
				md={8}
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
