import styles from './TextBlock.module.scss';

const TextBlock = ({ propsStyles, topText, title, text }) => {
	return (
		<div className={`${styles.text_block} ${propsStyles && propsStyles}`}>
			<div className={styles.text_block__accent}>{topText}</div>

			<h1 className={styles.text_block__title}>{title}</h1>

			<p className={styles.text_block__text}>{text}</p>
		</div>
	);
};

export default TextBlock;
