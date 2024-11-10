import { useNavigate } from 'react-router-dom';
import CustomBlueButton from '../../common/CustomBlueButton/CustomBlueButton';
import CustomGrayButton from '../../common/CustomGrayButton/CustomGrayButton';
import styles from './BottomParkDetail.module.scss';

const BottomParkDetail = ({ price, id }) => {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};
	return (
		<div className={styles.detail}>
			<div className={styles.detail__price}>Price: ${price}</div>

			<div className={styles.detail__buttons}>
				{/* <button onClick={handleGoBack} className={styles.detail__go_back}>
					Go Back
				</button>
				<button className={styles.detail__to_cart}>Add To Cart</button> */}
				<CustomBlueButton text={'Go Back'} onClick={handleGoBack} />
				<CustomGrayButton text={'Add To Cart'} onClick={() => {}} />
			</div>
		</div>
	);
};

export default BottomParkDetail;
