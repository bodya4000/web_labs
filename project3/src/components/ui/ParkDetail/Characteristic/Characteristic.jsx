const Characteristic = ({ text, bgColor, textColor = '#fff' }) => {
	return (
		<span
			style={{
				display: 'inline-block',
				minWidth: 100,
				background: bgColor,
				padding: '10px 20px',
				color: textColor,
				borderRadius: '20px',
			}}
		>
			{text}
		</span>
	);
};

export default Characteristic;
