import {
	Hero,
	MyPractices,
	Slider,
	Testimonials,
	Newsletter,
} from './components';
import AboutHabits from './components/AboutHabits';
import ProfilePage from '../profilePage/ProfilePage';

export default function Home() {
	return (
		<>
			<Hero />
			<Slider />
			<MyPractices />
			<AboutHabits />
			<Testimonials />
			<Newsletter />

			<ProfilePage />
		</>
	);
}
