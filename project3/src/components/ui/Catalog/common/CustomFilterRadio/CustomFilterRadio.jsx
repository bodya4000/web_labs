import { useContext, useState } from 'react';
import { parks } from '../../../../../assets/data/parks';
import { SortContext } from '../../../../screens/Catalog/Catalog'

const CustomFilterRadio = ({ name, onActive, onDisable }) => {
	const [isActive, setIsActive] = useState(false);

	const { freeParksState, parkState, setParkState, sortState } =
		useContext(SortContext);

	const styles = {
		button: {
			backgroundColor: isActive ? '#007bff' : 'gray',
			color: '#fff',
			border: 'none',
			borderRadius: '5px',
			padding: '10px 20px',
			cursor: 'pointer',
			fontSize: '16px',
			transition: 'background-color 0.3s',
		},
	};

	const handleClick = () => {
		setIsActive(prev => !prev);
		if (!isActive) {
			onActive();
		} else {
			onDisable();
			setParkState(parks);
		}
	};

	return (
		<button style={styles.button} onClick={handleClick}>
			{name}
		</button>
	);
};

export default CustomFilterRadio;
