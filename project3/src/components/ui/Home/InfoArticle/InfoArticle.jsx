import Container from '../../common/Container/Container';
import TextBlock from '../common/TextBlock/TextBlock';
import styles from './InfoArticle.module.scss';

const InfoArticle = ({ topText, title, text, url, reversed }) => {
	return (
		<div className={styles['info_article']}>
			<Container propsStyles={styles['info_article__container']}>
				<div
					className={`${styles.info_article__body} ${
						reversed ? styles.info_article__body_reversed : ''
					}`}
				>
					<TextBlock
						propsStyles={styles['info_article__text_block']}
						topText={topText}
						title={title}
						text={text}
					/>

					<div className={styles['info_article__img']}>
						<img src={url} alt='image' />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default InfoArticle;
