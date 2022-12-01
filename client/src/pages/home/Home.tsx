import {
	Hero,
	MyPractices,
	Slider,
	Testimonials,
	Newsletter,
} from './components';
import AboutHabits from './components/AboutHabits';
//import ProfilePage from '../profilePage/ProfilePage';
//import ProfileWithUserInfo from '../profilePage/Profile';
import SimpleForm from '../mailchimp/SimpleForm';

export default function Home() {
	return (
		<>
			<Hero />
			<Slider />
			<MyPractices />
			<AboutHabits />
			<Testimonials />
			<Newsletter />
			<SimpleForm />
		</>
	);
}
