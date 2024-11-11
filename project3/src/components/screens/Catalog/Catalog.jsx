// Catalog.jsx
import { createContext, useState } from 'react';
import CatalogOptions from '../../ui/Catalog/CatalogOptions/CatalogOptions';
import ParkListView from '../../ui/Catalog/ParkListView/ParkListView';
import Container from '../../ui/common/Container/Container';

import styles from './Catalog.module.scss';

export const SortContext = createContext();

const Catalog = () => {
	const [totalPages, setTotalPages] = useState(0);
	const [parksData, setParksData] = useState([]);
	const [sortState, setSortState] = useState('default');
	const [freeParksState, setFreeParksState] = useState(false);
	const [searchText, setSearchText] = useState('');
	const [parkPage, setParkPage] = useState(1);

	return (
		<SortContext.Provider
			value={{
				sortState,
				setSortState,
				freeParksState,
				setFreeParksState,
				searchText,
				setSearchText,
				parkPage,
				setParkPage,
				parksData,
				setParksData,
				totalPages,
				setTotalPages,
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
