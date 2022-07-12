import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
	<ContentLoader
		className="pizza-block"
		speed={2}
		width={280}
		height={465}
		viewBox="0 0 280 465"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="-20" y="237" rx="10" ry="10" width="410" height="19" />
		<rect x="-28" y="272" rx="10" ry="10" width="380" height="60" />
		<rect x="-3" y="348" rx="3" ry="3" width="79" height="31" />
		<circle cx="136" cy="113" r="112" />
		<rect x="173" y="346" rx="20" ry="20" width="104" height="34" />
	</ContentLoader>
);

export default Skeleton;
