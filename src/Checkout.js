import React from 'react';
import "./Checkout.css" ;
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6461/6461319_sd.jpg"
          alt="adverttisment"
          className="checkout__ad"
        />
        <h2 className="checkout__title">Your shopping Basket</h2>
        <CheckoutProduct />
      </div>
      <div className="Checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout