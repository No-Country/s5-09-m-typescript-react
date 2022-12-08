import { SimpleForm } from '../../service/mailChip/mailchip';
import { Hero, MyPractices, Slider, Testimonials } from './components';
import AboutHabits from './components/AboutHabits';
//import ProfilePage from '../profilePage/ProfilePage';
//import ProfileWithUserInfo from '../profilePage/Profile';

export default function Home() {
	return (
		<>
			<Hero />
			<Slider />
			<MyPractices />
			<AboutHabits />
			<Testimonials />
			<SimpleForm />
		</>
	);
}
