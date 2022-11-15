import Footer from './components/Footer';
import { Hero } from './components/Hero';
import MyPractices from './components/MyPractices';
import Slider from './components/Slider';

export default function Home() {
	return (<div>
		<Slider />
		<MyPractices/>
		<Footer/>
	</div>)
}
