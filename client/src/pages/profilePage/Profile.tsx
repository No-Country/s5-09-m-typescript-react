import Grid from '@mui/material/Grid';
import FormProfileWithUserInfo from './components/FormProfileWithUserInfo';
import FormProfileWithUserInfo2 from './components/FormProfileWithUserInfo2';
import PerfilSidebar from '../../components/PerfilSidebar';
import Calendar from './components/Calendar';
import Form from './components/Form';
import { ChangeHabits, TopBarProfile } from './components';
import { useState } from 'react';
import PanelCardList from './components/PanelCardList';
import { EmailVerification } from './components';
import { useAppSelector } from '../../redux/hooks';
import Progress from './components/Progress';

export default function Profile() {
	const user = useAppSelector(store => store.user);
	const [showChangeHabitsModal, setShowChangeHabitsModal] =
		useState<Boolean>(false);
	const [modal, setModal] = useState<string>('perfil');
	const setModals = (nameModal: string) => {
		setModal(nameModal);
	};
	const showHabitsModal = () => {
		user.practices.length == 0
			? setShowChangeHabitsModal(false)
			: setShowChangeHabitsModal(!showChangeHabitsModal);
		console.log(user.practices.length == 0);
	};
	const renderModal = (modal: string) => {
		switch (modal) {
			case 'perfil':
				return (
					<>
						{(showChangeHabitsModal || user.practices.length == 0) && (
							<ChangeHabits closeModal={showHabitsModal} />
						)}
						<FormProfileWithUserInfo />
						<FormProfileWithUserInfo2 closeModal={showHabitsModal} />
					</>
				);
			case 'editarPerfil':
				return <Form />;
			case 'calendario':
				return <Calendar />;
			case 'panel':
				return <PanelCardList />;
			case 'progreso':
				return <Progress />;
		}
	};
	return (
		<>
			{!user.emailVerified && <EmailVerification />}
			<Grid
				container
				spacing={8}
				sx={{
					minHeight: 'calc(100vh - 85px)',
				}}
			>
				<Grid item xs={2}>
					<PerfilSidebar setModals={setModals} />
				</Grid>

				<Grid item xs={9} sx={{ marginTop: '10px' }}>
					{renderModal(modal)}
				</Grid>
			</Grid>
		</>
	);
}
