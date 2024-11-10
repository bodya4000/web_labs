import { Link } from 'react-router-dom';
import styles from './ParkView.module.scss';

const ParkView = ({ park }) => {
	const { id, img, title, text, cyclingDistance, price } = park;
	return (
		<Link to={`park/${id}`} className={styles.park}>
			<div className={styles.park__container}>
				<div className={styles.park__body}>
					<div className={styles.park__img}>
						<img src={img} alt={`${title} image`} />
					</div>

					<div className={styles.park__info}>
						<h3 className={styles.park__title}>{title}</h3>

						<p className={styles.park__description}>{text}</p>

						<div className={styles.park__cycling_distance}>
							<span>Cycling distance:</span> {cyclingDistance}
						</div>

						<div className={styles.park__price}>
							<span>price:</span> ${price}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ParkView;
