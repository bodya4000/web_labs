import React from 'react';
import Container from '../../common/Container/Container.jsx';
import TextBlock from '../common/TextBlock/TextBlock.jsx';
import styles from './Welcome.module.scss';

const Welcome = () => {
	const handleScrollDown = () => {
		window.scrollTo({
			top: window.innerHeight + 400,
			behavior: 'smooth',
		});
	};

	return (
		<section className={styles.welcome}>
			<Container propsStyles={styles.welcome__container}>
				<div className={styles.welcome__text_block}>
					<TextBlock
						topText='Explore'
						title='Spend your time with family with best parks'
						propsStyles={styles.info_article__text_block}
					/>
					<button
						className={styles.welcome__scroll_btn}
						onClick={handleScrollDown}
					>
						scroll down
						<img src='src/assets/images/right-arrow.png' alt='(go down)' />
					</button>
				</div>
			</Container>
		</section>
	);
};

export default Welcome;
