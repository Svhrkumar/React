import React,{useState,useEffect} from 'react';
import '../index.css';
import formatCurrency from "../util"
import Fade from "react-reveal/Fade"
import Modal from "react-modal"
import Zoom from "react-reveal/Zoom"
import {connect} from "react-redux"
import {fetchProducts} from "../Actions/productActions"

const Products = (props) => {
	const [product,setProduct] = useState(null)
    const openModal = (item)=>{
		setProduct(item)
	}
	const closeModal = () => {
		setProduct(null)
	}
	useEffect(() => {
		props.fetchProducts()
		
	}, [])
	console.log("-----------products--------",props.products)
	return (
		<div>
		<Fade bottom cascade>
		{ !props.products ? (<div>Loading...</div>):(
			<ul className="products">
				{props.products && props.products.map((product) => (
					
					<li  key={product._id}>

						{console.log('-----products-----', product)}
						<div className='product'>
							<a href={'#' + product._id} onClick={()=> openModal(product)}>
								<img src={product.image} alt={product.title}></img>
								<p>{product.title}</p>
							</a>
							<div className='product-price'>
								<div>{formatCurrency(product.price)}</div>
								<button className='button primary' onClick={() => props.addtocart(product)}>Add To Cart</button>
							</div>
						</div>
					</li>
				))
				
			}
				</ul>
		)}
				
			
		
       
			</Fade>
			{product && (<Modal isOpen={true} onRequestClose={closeModal}>
				<Zoom>
				<button className="close-modal" onClick={closeModal}>x</button>
				<div className="product-details">
				<img src={product.image} alt={product.title} />
				<div className="product-details-description">
				<p><strong>{product.title}</strong></p>
				<p>
				{product.description}
				</p>
				<p>
				Available sizes:{""}
				{product.availableSizes.map(x=>(
					<span>{" "} <button className="button">{x}</button></span>
				))}
				</p>
				<div className="product-price">
				<div>{formatCurrency(product.price)}</div>
				<button className="button primary" onClick={
					()=>{
						props.addtocart(product)
						closeModal()
					}
				}>Add to cart</button>
				</div>
				</div>
				</div>
				
				</Zoom>
				</Modal>)}
		</div>
	);
};

export default connect((state) => ({products: state.products.items}),
	{
	  fetchProducts
	}
  )(Products);
