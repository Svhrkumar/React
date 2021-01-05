import React from 'react';
import formatCurrency from '../util';
const Cart = ({ cartItems, removeItem }) => {
	return (
		<div>
			{cartItems.length === 0 ? (
				<div className='cart cart-header'> your cart is Empty </div>
			) : (
				<div className='cart cart-header'>
					{' '}
					you have {cartItems.length} items in the cart{' '}
				</div>
			)}
            <div>
            {cartItems.length == 0 ? "": 
            (
              <>
                <div className='cart'>
					<ul className='cart-items'>
						{cartItems.map((item) => (
							<li key={item._id}>
								<div>
									<img src={item.image} alt={item.title}></img>
								</div>
								<div>
									<div>{item.title}</div>
									<div className='right'>
										{item.price} x {item.count}
										<button className='button' onClick={() => removeItem(item)}>
											Remove
										</button>
									</div>
								</div>
							</li>
						))}
					</ul>
                </div>
                <div className="cart">
                 <div className="total">
                  <div>
                    Total:{" "}
                    {formatCurrency(
                      cartItems.reduce((a, c) => a + c.price * c.count, 0)
                    )}
                  </div>
                  <button
                    onClick={() => {
                      this.setState({ showCheckout: true });
                    }}
                    className="button primary"
                  >
                    Proceed
                  </button>
                </div>
                </div>
               </>
                ) 
            }
				
              </div>
			</div>
	
	);
};

export default Cart;
