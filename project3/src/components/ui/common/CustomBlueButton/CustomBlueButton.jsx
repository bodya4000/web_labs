import styles from './CustomBlueButton.module.scss';

const CustomBlueButton = ({ text, onClick, propsStyles }) => {
	return (
		<button
			onClick={onClick}
			className={`${styles.button} ${propsStyles && propsStyles}`}
		>
			{text}
		</button>
	);
};

export default CustomBlueButton;
