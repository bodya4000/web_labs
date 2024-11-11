import axios from 'axios';
import { useContext, useEffect } from 'react';
import { SortContext } from '../components/screens/Catalog/Catalog';

const useLoadAllParks = () => {
	const {
		freeParksState,
		sortState,
		searchText,
		parkPage,
		parksData,
		setParksData,
		setTotalPages,
	} = useContext(SortContext);
	useEffect(() => {
		axios
			.get('http://localhost:9000/api/parks', {
				params: {
					filterText: searchText,
					sort: sortState ? sortState : undefined,
					filterFree: freeParksState ? freeParksState : undefined,
					page: parkPage,
				},
			})
			.then(data => data.data)
			.then(data => {
				setParksData([...parksData, ...data.parks]);
				setTotalPages(data.totalPages);
			});
	}, [freeParksState, sortState, searchText, parkPage]);
};

export default useLoadAllParks;