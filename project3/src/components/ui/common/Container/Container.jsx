const Container = ({ children, propsStyles }) => {
	return (
		<div className={propsStyles && propsStyles} style={styles.container}>
			{children}
		</div>
	);
};

const styles = {
	container: {
		maxWidth: '87.5rem',
		margin: '0 auto',
		boxSizing: 'content-box',
		padding: '0 1.25rem',
	},
};

export default Container;
