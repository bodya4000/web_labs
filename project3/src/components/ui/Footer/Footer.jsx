import Container from '../common/Container/Container';
import Logo from '../common/Logo/Logo';
import styles from './Footer.module.scss';
import FooterNav from './FooterNav/FooterNav';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<Container propsStyles={styles.footer__container}>
				<div className={styles.footer__body}>
					<div className={styles.footer__info}>
						<div className={styles.footer__info_top}>
							<Logo />
							<div className={styles.footer__main_link}>
								Get out there & discover your next slope, mountain &
								destination!
							</div>
						</div>

						<div className={styles.footer__rights}>
							Copyright 2023 MNTN, Inc. Terms & Privacy
						</div>
					</div>

					<div className={styles.footer__nav}>
						<FooterNav
							links={[
								'More on The Blog',
								'About MNTN',
								'Contributors & Writers',
								'Write For Us',
								'Contact Us',
							]}
						/>
						<FooterNav links={['More on MNTN', 'The Team', 'Jobs', 'Press']} />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Footer;
