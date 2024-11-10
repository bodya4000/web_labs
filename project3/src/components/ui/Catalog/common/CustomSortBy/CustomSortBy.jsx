import React, { useContext, useState } from 'react';
import { SortContext } from '../../../../screens/Catalog/Catalog';
import CustomSelect from '../../../common/CustomSelect/CustomSelect';

const SortBy = () => {
	const [selectedOption, setSelectedOption] = useState('Sort By');

	const { setSortState } = useContext(SortContext);
	const options = [
		{ label: 'Price: Low to High', value: 'asc' },
		{ label: 'Price: High to Low', value: 'desc' },
		{ label: 'Alphabetical Order', value: 'alphabet' },
	];

	const handleOptionClick = option => {
		setSelectedOption(option.label);
		setSortState(option.value);
		setIsOpen(false);
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
