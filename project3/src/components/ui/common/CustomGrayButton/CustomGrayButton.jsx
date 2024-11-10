import styles from './CustomGrayButton.module.scss';

const CustomGrayButton = ({ text, onClick, propsStyles }) => {
	return (
		<button
			onClick={onClick}
			className={`${styles.button} ${propsStyles && propsStyles}`}
		>
			{text}
		</button>
	);
};

export default CustomGrayButton;
