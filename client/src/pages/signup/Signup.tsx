import { HabitsModal, LayoutForms } from '../../components';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import SignupForm from './components/SignupForm';
import { changeShowHabitModal } from '../../redux/slices/setting';

export default function Signup() {
	const dispatch = useAppDispatch();
	const showModal = useAppSelector(state => state.setting.showHabitModal);
	return (
		<LayoutForms
			tittle='Bienvenido'
			text='Crea tu cuenta  y disfruta de todo lo que tenemos para ti.'
		>
			{!showModal ? (
				<SignupForm />
			) : (
				<HabitsModal closeModal={() => dispatch(changeShowHabitModal())} />
			)}
		</LayoutForms>
	);
}
