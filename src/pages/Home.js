/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import Categorias from '../components/Categorias';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock';
import { Pagination } from '../components/Pagination';
import { SearchContext } from '../App';

const Home = () => {
	const { searchValue } = useContext(SearchContext);
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [categoryId, setCategoryId] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [sortType, setSortType] = useState({
		name: 'популярности',
		sort: 'rating',
	});

	const search = searchValue ? `&search=${searchValue}` : '';

	useEffect(() => {
		setIsLoading(true);
		fetch(
			`https://62b42b95530b26da4cb800c7.mockapi.io/items?page=${currentPage}&limit=4${
				categoryId > 0 ? `category=${categoryId}` : ''
			}&sortBy=${sortType.sort}&order=desc${search}`
		)
			.then((res) => res.json())
			.then((arr) => {
				setItems(arr);
				setIsLoading(false);
			});
		window.scrollTo(0, 0);
	}, [categoryId, sortType, searchValue, currentPage]);

	const skeletons = [...new Array(8)].map((_, index) => (
		<Skeleton key={index} />
	));

	const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

	return (
		<>
			<div className="content__top">
				<Categorias
					value={categoryId}
					onChangeCategory={(i) => setCategoryId(i)}
				/>
				<Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">{isLoading ? skeletons : pizzas}</div>
			<Pagination onChangePage={(number) => setCurrentPage(number)} />
		</>
	);
};

export default Home;
