import { Outlet } from 'react-router-dom';
import '../../index.scss';
import Footer from '../ui/Footer/Footer';
import Header from '../ui/Header/Header';

const Layout = ({}) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
				overflow: 'hidden',
			}}
		>
			<Header />
			<main style={{ flex: '1 1 auto' }} id='detail'>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
};

export default Layout;
