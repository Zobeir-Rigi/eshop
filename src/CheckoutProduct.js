import React from 'react'
import "./CheckoutProduct.css";
const CheckoutProduct = (id,image,title,price,rating) => {
  return (
    <div className="CheckoutProduct">
      <img src={image} alt="" className="checkoutproduct__image" />

      <div className="ckeckoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct