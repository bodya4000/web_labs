import styles from './CustomNumberInput.module.scss';
const CustomNumberInput = ({ value, onchange }) => {
	function isNumber(symbol) {
		return typeof symbol === 'string' && !isNaN(symbol);
	}
	const handleChange = e => {
		const text = e.target.value;
		if (isNumber(text)) {
			if (text.length < 3) {
				onchange(text);
			}
		}
	};
	return (
		<input
			className={styles.input}
			type='text'
			value={value}
			onChange={handleChange}
		/>
	);
};

export default CustomNumberInput;
