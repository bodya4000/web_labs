import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Container from '../../ui/common/Container/Container';

import axios from 'axios';
import BottomParkDetail from '../../ui/ParkDetail/BottomParkDetail/BottomParkDetail';
import ParkDetailView from '../../ui/ParkDetail/ParkDetailView/ParkDetailView';
import styles from './ParkDetail.module.scss';

const ParkDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [park, setPark] = useState();
	// const park = parks.find(park => park.id == id);

	useEffect(() => {
		axios
			.get('http://localhost:9000/api/parks/' + id)
			.then(data => data.data)
			.then(data => setPark(data));
	}, [navigate]);

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
