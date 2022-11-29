import Grid from '@mui/material/Grid';
import FormProfileWithUserInfo from './components/FormProfileWithUserInfo';
import FormProfileWithUserInfo2 from './components/FormProfileWithUserInfo2';
import PerfilSidebar from '../../components/PerfilSidebar';
import Calendar from './components/Calendar';
import Form from './components/Form';
import { TopBarProfile } from './components';
import { useState } from 'react';
import PanelCardList from './components/PanelCardList';
import { EmailVerification } from './components';
import { useAppSelector } from '../../redux/hooks';

export default function Profile() {
	const user = useAppSelector(store => store.user);
	const [modal, setModal] = useState<string>('perfil');
	const setModals = (nameModal: string) => {
		setModal(nameModal);
	};
	const renderModal = (modal: string) => {
		switch (modal) {
			case 'perfil':
				return (
					<>
						<FormProfileWithUserInfo />
						<FormProfileWithUserInfo2 />
					</>
				);
			case 'editarPerfil':
				return <Form />;
			case 'calendario':
				return <Calendar />;
			case 'panel':
				return <PanelCardList />;
		}
	};
	return (
		<>
			{!user.emailVerified && <EmailVerification />}
			<Grid
				container
				spacing={2}
				sx={{
					minHeight: 'calc(100vh - 85px)',
				}}
			>
				<Grid item xs={3}>
					<PerfilSidebar setModals={setModals} />
				</Grid>

				<Grid item xs={9}>
					<TopBarProfile setModals={setModals} />
					{renderModal(modal)}
				</Grid>
			</Grid>
		</>
	);
}
/* agregar logica de cambio de componentes utilizando el menu sidebard */
/* <FormProfileWithUserInfo />
	<FormProfileWithUserInfo2 /> */
/* <Calendar /> */
/* <Form /> */
