import React from 'react';

const Categorias = ({ value, onChangeCategory }) => {
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	return (
		<div className="categories">
			<ul>
				{categories.map((categoryName, id) => (
					<li
						key={id}
						onClick={() => onChangeCategory(id)}
						className={value === id ? 'active' : ''}
					>
						{categoryName}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categorias;
