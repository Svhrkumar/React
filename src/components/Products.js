import React from 'react';
import '../index.css';
import formatCurrency from "../util"
const Products = ({ products }) => {
	return (
        <div>
        <ul className="products">
			{products.map((product) => (
				<li key={product._id}>
					{console.log('products', product)}
					<div className='product'>
						<a href={'#' + product._id}>
							<img src={product.image} alt={product.title}></img>
							<p>{product.title}</p>
						</a>
						<div className='product-price'>
							<div>{formatCurrency(product.price)}</div>
							<button className='button primary'>Add To Cart</button>
						</div>
					</div>
				</li>
            ))}
            </ul>
		</div>
	);
};

export default Products;
