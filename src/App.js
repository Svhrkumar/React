import React, { useState } from 'react';
import Product from './data.json';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Products from './components/Products';
import Filter from './components/Filter';
function App() {
	const [product, setProduct] = useState(Product.products);
	const [size, setSize] = useState("")
	const [sort, setSort] = useState("")
	const filterProduct = (event) => {
		console.log("---size----", event.target.value)
		if (event.target.value === "") {
			setProduct(Product.products)
			setSize(event.target.value)
		}
		else {
			setSize(event.target.value)
			setProduct(Product.products.filter(item => item.availableSizes.indexOf(event.target.value) >= 0))
		}
	}
	const sortProduct = (event) => {
		console.log("---sort----", event.target.value)
		const sorted = event.target.value
		setSort(sorted)
		setProduct(product.slice().sort((a, b) => (
			sort === "lowest" ? ((a.price < b.price) ? 1 : -1) : sort === "highest" ? ((a.price > b.price) ? 1 : -1) : ((a._id > b._id) ? 1 : -1)
		)))

	}

	return (
		<div className='grid-container'>
			<BrowserRouter>
				<header>
					<Link to='/'>Fashion Trend</Link>
					<Link to='/admin'>Admin</Link>
				</header>
				<main>
					<div className='content'>
						<div className='main'>
							<Filter count={product.length} size={size} sort={sort} filterProducts={filterProduct} sortProducts={sortProduct} />
							<Products products={product} />
						</div>
						<div className='sidebar'></div>
					</div>
				</main>
				<footer>All right is reserved.</footer>
			</BrowserRouter>
		</div>
	);
}

export default App;
