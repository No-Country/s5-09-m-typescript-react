import { Hero, MyPractices, Slider } from './components';
import Footer from './components/Footer';

export default function Home() {
	return (
		<main>
			<Hero />
			<Slider />
			<MyPractices />
      <Footer />
		</main>
	);
}
