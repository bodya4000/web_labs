// Catalog.jsx
import { createContext, useState } from 'react';
import CatalogOptions from '../../ui/Catalog/CatalogOptions/CatalogOptions';
import ParkListView from '../../ui/Catalog/ParkListView/ParkListView';
import Container from '../../ui/common/Container/Container';

import { parks } from '../../../assets/data/parks';
import styles from './Catalog.module.scss';

export const SortContext = createContext();

const Catalog = () => {
	const [sortState, setSortState] = useState('default');
	const [parkState, setParkState] = useState(parks);
	const [freeParksState, setFreeParksState] = useState(false);
	const [searchText, setSearchText] = useState('');

	return (
		<SortContext.Provider
			value={{
				sortState,
				setSortState,
				parkState,
				setParkState,
				freeParksState,
				setFreeParksState,
				searchText,
				setSearchText,
			}}
		>
			<div className={styles.catalog}>
				<Container>
					<CatalogOptions />
					<ParkListView />
				</Container>
			</div>
		</SortContext.Provider>
	);
};

export default Catalog;
