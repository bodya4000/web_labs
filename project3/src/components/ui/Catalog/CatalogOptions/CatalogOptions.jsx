import { useContext } from 'react';
import { SortContext } from '../../../screens/Catalog/Catalog';
import Container from '../../common/Container/Container';
import CustomFilterRadio from '../common/CustomFilterRadio/CustomFilterRadio';
import CustomSearchInput from '../common/CustomInput/CustomInput';
import SortBy from '../common/CustomSortBy/CustomSortBy';

import styles from './CatalogOptions.module.scss';

const CatalogOptions = () => {
	const { setFreeParksState } = useContext(SortContext);

	const setFilterTrue = () => {
		setFreeParksState(true);
	};

	const setFilterFalse = () => {
		setFreeParksState(false);
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
						{/* <CustomFilterRadio name='With cycling' value='cycling' /> */}
						<SortBy />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default CatalogOptions;
