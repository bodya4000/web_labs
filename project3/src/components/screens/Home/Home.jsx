import BgImage from '../../ui/BgImage/BgImage.jsx';
import Footer from '../../ui/Footer/Footer.jsx';
import Header from '../../ui/Header/Header.jsx';
import InfoArticle from '../../ui/Home/InfoArticle/InfoArticle.jsx';
import Welcome from '../../ui/Home/Welcome/Welcome.jsx';
import styles from './Home.module.scss';

const Home = () => {
	return (
		<div className={styles.home}>
			<div className={styles.home__welcome}>
				<Welcome />
				<BgImage />
			</div>

			<div className={styles.home__info}>
				<InfoArticle
					topText='Explore'
					title='Central Park, New York'
					text='Central Park is an urban park in New York City, featuring expansive meadows, scenic lakes, and various walking trails perfect for exploring nature in the heart of the city.'
					url='src\assets\images\central_park.avif'
				/>
				<InfoArticle
					reversed
					topText='Discover'
					title='Stryiskyi Park, Lviv'
					text='Stryiskyi Park is one of the oldest and most picturesque parks in Lviv, offering beautiful landscapes, a variety of trees, and a serene atmosphere for relaxation and leisurely walks.'
					url='src\assets\images\lviv_park.avif'
				/>
				<InfoArticle
					topText='Visit'
					title='Golden Gate Park, San Francisco'
					text='Golden Gate Park is a large urban park in San Francisco, boasting lush gardens, beautiful lakes, and iconic attractions like the Conservatory of Flowers and the Japanese Tea Garden.'
					url='src\assets\images\golden-gate.avif'
				/>
			</div>
		</div>
	);
};

export default Home;
