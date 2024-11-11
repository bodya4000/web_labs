import { useContext } from 'react';
import { SortContext } from '../../../screens/Catalog/Catalog';
import Container from '../../common/Container/Container';
import CustomFilterRadio from '../common/CustomFilterRadio/CustomFilterRadio';
import CustomSearchInput from '../common/CustomInput/CustomInput';
import SortBy from '../common/CustomSortBy/CustomSortBy';

import styles from './CatalogOptions.module.scss';

const CatalogOptions = () => {
	const { setFreeParksState, setParkPage,setParksData } = useContext(SortContext);

	const setFilterTrue = () => {
		setFreeParksState(true);
		setParkPage(1);
		setParksData([])

	};

	const setFilterFalse = () => {
		setFreeParksState(false);
		setParkPage(1);
		setParksData([])

	};

	return (
		<div className={styles.options}>
			<Container>
				<div className={styles.options__body}>
					<div className={styles.options__search}>
						<CustomSearchInput />
					</div>
					<div className={styles.options__details}>
						<CustomFilterRadio
							name='Free parks'
							onActive={setFilterTrue}
							onDisable={setFilterFalse}
						/>
						<SortBy />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default CatalogOptions;
