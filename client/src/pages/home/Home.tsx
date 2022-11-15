import { Hero, MyPractices, Slider } from './components';
import AboutHabits from './components/AboutHabits';

export default function Home() {
	return (
		<>
			<Hero />
			<Slider />
			<MyPractices />
			<AboutHabits />
		</>
	);
}
