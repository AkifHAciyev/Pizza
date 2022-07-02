import React, { useEffect, useState } from 'react';
import Categorias from '../components/Categorias';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock';

const Home = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch('https://62b42b95530b26da4cb800c7.mockapi.io/items')
			.then((res) => res.json())
			.then((arr) => {
				setItems(arr);
				setIsLoading(false);
			});
	}, []);

	return (
		<>
			<div className="content__top">
				<Categorias />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">{isLoading ? [...new Array(8)].map((_, index) => <Skeleton key={index} />) : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}</div>
		</>
	);
};

export default Home;
