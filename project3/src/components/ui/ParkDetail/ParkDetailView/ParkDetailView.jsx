import { useState } from 'react';
import CustomGrayButton from '../../common/CustomGrayButton/CustomGrayButton';
import CustomNumberInput from '../../common/CustomNumberInput/CustomNumberInput';
import CustomSelect from '../../common/CustomSelect/CustomSelect';
import Characteristic from '../Characteristic/Characteristic';
import styles from './ParkDetailView.module.scss';

const ParkDetailView = ({ park }) => {
	const { img, title, text, cyclingDistance, price } = park;

	const [orderType, setOrderType] = useState({ label: 'Adult' });
	const [amount, setAmount] = useState(1);

	const orderTypes = [{ label: 'Child' }, { label: 'Adult' }];

	return (
		<div className={styles.park}>
			<div className={styles.park__container}>
				<div className={styles.park__img}>
					<img src={`/${img}`} alt={`${park.title} image`} />
				</div>
				<div className={styles.park__info}>
					<div className={styles.park__characteristics}>
						{price == 0 && <Characteristic text={'free'} bgColor={'green'} />}
					</div>

					<h1 className={styles.park__title}>{title}</h1>

					<p className={styles.park__text}>{text}</p>

					<div className={styles.park__cycling_distance}>
						<span>cycling distance:</span> {cyclingDistance}
					</div>

					<div className={styles.park__order}>
						<CustomNumberInput value={amount} onchange={setAmount} />
						<CustomSelect
							options={orderTypes}
							setState={setOrderType}
							state={orderType.label}
						/>

						<CustomGrayButton
							text={'Add to order'}
							propsStyles={styles.park__submit}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ParkDetailView;
