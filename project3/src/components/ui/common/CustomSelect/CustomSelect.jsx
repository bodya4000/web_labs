import React, { useState } from 'react';
import CustomBlueButton from '../CustomBlueButton/CustomBlueButton';

import styles from './CustomSelect.module.scss';

const CustomSelect = ({ options, state, setState }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleDropdown = () => {
		setIsOpen(prev => !prev);
	};

	return (
		<div className={styles.sortByContainer}>
			<CustomBlueButton
				propsStyles={styles.button}
				text={state}
				onClick={toggleDropdown}
			/>
			{isOpen && (
				<div className={styles.dropdown}>
					{options.map((option, index) => (
						<div
							key={index}
							className={styles.option}
							onClick={() => setState(option)}
						>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default CustomSelect;
