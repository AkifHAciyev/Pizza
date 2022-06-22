import React from 'react';
import Categorias from './components/Categorias';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';
import pizzas from './assets/pizzas.json';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<div class="content">
				<div className="container">
					<div className="content__top">
						<Categorias />
						<Sort />
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						{pizzas.map((obj) => (
							<PizzaBlock {...obj} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
