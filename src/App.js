import React, { useState } from 'react';
import Product from './data.json';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Products from './components/Products';
function App() {
	const [product, setProduct] = useState(Product.products);
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
