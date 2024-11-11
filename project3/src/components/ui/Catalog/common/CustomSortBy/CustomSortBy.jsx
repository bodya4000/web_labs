import React, { useContext, useState } from 'react';
import { SortContext } from '../../../../screens/Catalog/Catalog';
import CustomSelect from '../../../common/CustomSelect/CustomSelect';

const SortBy = () => {
	const [selectedOption, setSelectedOption] = useState('Sort By');

	const { setSortState, setParkPage, setParksData } = useContext(SortContext);
	const options = [
		{ label: 'Price: Low to High', value: 'price:asc' },
		{ label: 'Price: High to Low', value: 'price:desc' },
		{ label: 'Cycling ditance: Low to High', value: 'cycling:asc' },
		{ label: 'Cycling ditance: High to Low', value: 'cycling:desc' },
		{ label: 'Alphabetical Order', value: 'alphabet' },
	];

	const handleOptionClick = option => {
		setSelectedOption(option.label);
		setSortState(option.value);
		setParkPage(1);
		setParksData([]);
	};
	return (
		<CustomSelect
			state={selectedOption}
			options={options}
			setState={handleOptionClick}
		/>
	);
};

export default SortBy;
