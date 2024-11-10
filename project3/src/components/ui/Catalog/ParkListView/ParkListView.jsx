import { useContext, useEffect, useState } from 'react';
import { SortContext } from '../../../screens/Catalog/Catalog';
import CustomBlueButton from '../../common/CustomBlueButton/CustomBlueButton';
import ParkView from '../ParkView/ParkView';
import styles from './ParkListView.module.scss';

const ParkListView = () => {
	const [parkPage, setParkPage] = useState(1);
	const size = 12;

	const { freeParksState, parkState, sortState, searchText } =
		useContext(SortContext);
	const [filteredAndSortedParks, setFilteredAndSortedParks] = useState([
		...parkState,
	]);

	useEffect(() => {
		let updatedParks = [...parkState];

		if (searchText) {
			updatedParks = updatedParks.filter(park => {
				const simplyfiedParkName = park.title.toLowerCase().trim();
				const simplyfiedText = searchText.toLowerCase().trim();
				return simplyfiedParkName.includes(simplyfiedText);
			});
		}

		if (freeParksState) {
			updatedParks = updatedParks.filter(park => park.price === 0);
		}

		switch (sortState) {
			case 'asc':
				updatedParks.sort((park1, park2) => park1.price - park2.price);
				break;
			case 'desc':
				updatedParks.sort((park1, park2) => park2.price - park1.price);
				break;
			case 'alphabet':
				updatedParks.sort((park1, park2) =>
					park1.title.localeCompare(park2.title)
				);
				break;
			default:
				break;
		}

		updatedParks = updatedParks.slice(0, parkPage * size);

		setFilteredAndSortedParks(updatedParks);
	}, [freeParksState, sortState, parkState, searchText, parkPage]);

	const onClickLoadMore = () => {
		setParkPage(parkPage + 1);
	};

	return (
		<>
			<div className={styles.park_list}>
				{filteredAndSortedParks.map(park => (
					<ParkView key={park.id} park={park} />
				))}
			</div>

			<CustomBlueButton onClick={onClickLoadMore} text={'Load More'} />
		</>
	);
};

export default ParkListView;
