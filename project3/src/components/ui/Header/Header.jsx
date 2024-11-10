import { Link } from 'react-router-dom'
import Container from '../common/Container/Container';
import Logo from '../common/Logo/Logo';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<Container propsStyles={styles.header__container}>
				<Logo />

				<div className={styles.header__nav}>
					<Link to={'catalog'}>Catalog</Link>
					<a href='#'>About us</a>
					<a href='#'>Blog</a>
				</div>

				<a href='#' className={styles.header__account}>
					account
				</a>
			</Container>
		</header>
	);
};

export default Header;
