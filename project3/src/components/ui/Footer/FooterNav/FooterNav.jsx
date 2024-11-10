import styles from './FooterNav.module.scss';

const FooterNav = ({ links }) => {
	return (
		<nav className={styles.nav}>
			{links.map(link => {
				return (
					<a href='google.com' key={link} className={styles.nav__link}>
						{link}
					</a>
				);
			})}
		</nav>
	);
};

export default FooterNav;
