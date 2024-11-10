import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Container from '../../ui/common/Container/Container';

import { parks } from '../../../assets/data/parks';
import BottomParkDetail from '../../ui/ParkDetail/BottomParkDetail/BottomParkDetail';
import ParkDetailView from '../../ui/ParkDetail/ParkDetailView/ParkDetailView';
import styles from './ParkDetail.module.scss';

const ParkDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const park = parks.find(park => park.id == id);

	useEffect(() => {
		if (!park) {
			alert('No such park found');
			navigate('/catalog');
		}
	}, [park, navigate]);

	if (!park) return null;

	return (
		<div className={styles.detail}>
			<Container>
				<ParkDetailView park={park} />
				<BottomParkDetail id={id} price={park.price} />
			</Container>
		</div>
	);
};

export default ParkDetail;
