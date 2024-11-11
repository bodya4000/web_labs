import { useContext } from 'react';
import useLoadAllParks from '../../../../hooks/useLoadAllParks';
import { SortContext } from '../../../screens/Catalog/Catalog';
import CustomBlueButton from '../../common/CustomBlueButton/CustomBlueButton';
import ParkView from '../ParkView/ParkView';
import styles from './ParkListView.module.scss';

const ParkListView = () => {
	useLoadAllParks();

	const { parkPage, parksData, setParkPage, totalPages } =
		useContext(SortContext);

	const onClickLoadMore = () => {
		setParkPage(parkPage + 1);
	};

	return (
		<div className={styles.container}>
			<div className={styles.park_list}>
				{parksData.map(park => (
					<ParkView key={park.id} park={park} />
				))}
			</div>

			{parkPage < totalPages && (
				<CustomBlueButton onClick={onClickLoadMore} text={'Load More'} />
			)}
		</div>
	);
};

export default ParkListView;
