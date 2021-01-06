import React, { useState } from 'react';
import formatCurrency from '../util';
import Fade from "react-reveal/Fade"

const Cart = (props) => {
	const [checkOut, setCheckOut] = useState(false);
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');
	const [name, setName] = useState('');

 const createOrder = (e) => {
	 
		e.preventDefault()
		const order = {
			name:name,
			email:email,
			address:address,
			cartitems:props.cartItems
		}
		props.createorder(order)

	};
	const removeCart = (item) =>{
		props.removeItem(item)
		console.log("------item----",props.cartItems.length)
		if(props.cartItems.length === 1)
		{
			setCheckOut(false)
		}
		
	
	}
	return (
		<div>
			{props.cartItems.length === 0 ? (
				<div className='cart cart-header'> your cart is Empty </div>
			) : (
				<div className='cart cart-header'>
					{' '}
					you have {props.cartItems.length} items in the cart{' '}
				</div>
			)}
			<div>
				{props.cartItems.length == 0 ? (
					''
				) : (
					<>
						<div className='cart'>
						<Fade left cascade>
							<ul className='cart-items'>
								{props.cartItems.map((item) => (
									<li key={item._id}>
										<div>
											<img src={item.image} alt={item.title}></img>
										</div>
										<div>
											<div>{item.title}</div>
											<div className='right'>
												{item.price} x {item.count}
												<button
													className='button'
													onClick={() => removeCart(item)}>
													Remove
												</button>
											</div>
										</div>
									</li>
								))}
							</ul>
							</Fade>
						</div>
						<div className='cart'>
							<div className='total'>
								<div>
									Total:{' '}
									{formatCurrency(
										props.cartItems.reduce((a, c) => a + c.price * c.count, 0)
									)}
								</div>
								<button
									onClick={() => {
										setCheckOut(true);
									}}
									className='button primary'>
									Proceed
								</button>
							</div>
						</div>
					</>
				)}
				{ checkOut ? (
					<Fade right cascade>
					<div className='cart'>
						<form >
							<ul className='form-container'>
								<li>
									<label>Email</label>
									<input
										name='email'
										type='email'
										required
										onChange={(e) => {
											setEmail(e.target.value);
										}}></input>
								</li>
								<li>
									<label>Name</label>
									<input
										name='name'
										type='text'
										required
										onChange={(e) => {
											setName(e.target.value);
										}}></input>
								</li>
								<li>
									<label>Address</label>
									<input
										name='address'
										type='text'
										required
										onChange={(e) => {
											setAddress(e.target.value);
										}}></input>
								</li>
								<li>
									<button className='button primary' type='submit' onClick={createOrder}>
										Checkout
									</button>
								</li>
							</ul>
						</form>
					</div>
					</Fade>
				) : (
					''
				)}
			
			</div>
		</div>
	);
};

export default Cart;
