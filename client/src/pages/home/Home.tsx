import { Hero, MyPractices, Slider, Testimonials, BoletinInformativo } from './components';
import AboutHabits from './components/AboutHabits';

export default function Home() {
	return (
		<>
			<Hero />
			<Slider />
			<MyPractices />
			<AboutHabits />
			<Testimonials />
			<BoletinInformativo/>
		</>
	);
}
