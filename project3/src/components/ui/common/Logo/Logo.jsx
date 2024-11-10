import { Link } from 'react-router-dom';

const Logo = () => {
	const logoStyles = {
		fontSize: '2rem',
		fontStyle: 'normal',
		fontWeight: 700,
		lineHeight: 'normal',
		letterSpacing: '0.32px',
		textTransform: 'capitalize',
	};

	return (
		<Link to='/'>
			<div style={logoStyles}>MNTN</div>
		</Link>
	);
};

export default Logo;
