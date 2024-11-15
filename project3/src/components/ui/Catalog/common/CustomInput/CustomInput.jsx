import { useContext } from 'react';
import { SortContext } from '../../../../screens/Catalog/Catalog';

const CustomSearchInput = () => {
	const { searchText, setSearchText } = useContext(SortContext);

	const styles = {
		input: {
			backgroundColor: 'transparent',
			border: 'none',
			borderBottom: '2px solid gray',
			outline: 'none',
			color: '#ffff',
			padding: '8px 15px',
			fontSize: '16px',
			width: '100%',
			transition: 'border-color 0.3s',
		},
		placeholder: {
			color: 'rgba(0, 0, 0, 0.6)',
		},
	};

	return (
		<input
			type='text'
			value={searchText}
			onChange={e => setSearchText(e.target.value)}
			style={styles.input}
			placeholder='Search...'
			onFocus={e => (e.target.style.borderBottomColor = '#007bff')}
			onBlur={e => (e.target.style.borderBottomColor = 'gray')}
		/>
	);
};

export default CustomSearchInput;
