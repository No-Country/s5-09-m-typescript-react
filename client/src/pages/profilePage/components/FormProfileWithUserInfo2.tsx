import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';
import {
	Typography,
	TextField,
	Paper,
	Link,
	Grid,
	Box,
	Avatar,
	Badge,
} from '@mui/material';
import GlobalButton, {
	GlobalButtonWhite,
} from '../../../components/GlobalButton';
import DeletableChips from './DeletableChips';
import TopBarProfile from './TopBarProfile';

export default function FormProfileWithUserInfo2() {
	const navegacion = () => {
		console.log('probando boton');
	};
	return (
		<Grid
			item
			xs={12}
			component={Paper}
			elevation={6}
			style={{ height: '375px' }}
		>
			<Grid
				sx={{
					display: 'flex',
					flexDirection: 'row',
					marginLeft: '56px',
					marginTop: '55px',
					marginBottom: '75px',
				}}
			>
				<CoronavirusOutlinedIcon sx={{ color: '#2F6117', marginTop: '25px' }} />
				<Typography
					sx={{
						fontWeight: '500',
						color: '#112734',
						fontFamily: 'ubuntu',
						fontSize: '20px',
						marginRight: '150px',
						marginTop: '25px',
					}}
				>
					Hábitos
				</Typography>
				<Grid item xs={8} sx={{ marginRight: '75px' }}>
					<Typography
						sx={{
							fontWeight: '400',
							color: '#112734',
							fontFamily: 'ubuntu',
							fontSize: '20px',
							marginTop: '25px',
						}}
					>
						Aquí puedes ver y editar los hábitos que estás trabajando
					</Typography>
				</Grid>
			</Grid>
			<Grid
				sx={{ display: 'flex', justifyContent: 'center', marginLeft: '35px' }}
			>
				<DeletableChips />
				<DeletableChips />
				<DeletableChips />
				<DeletableChips />
			</Grid>

			<Grid
				style={{
					display: 'flex',
					justifyContent: 'flex-end',
					marginTop: '55px',
					marginRight: '75px',
				}}
				item
				xs={12}
			>
				<GlobalButton text='Modifica tus hábitos' action={navegacion} />
			</Grid>
		</Grid>
	);
}
