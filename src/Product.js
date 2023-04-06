import React from 'react'
import "./product.css"
// import Home from './Home';

const Product = ({id,title,price,rating,image}) => {
  return (
    <div className="product">
      <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>£</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {
              Array(rating).fill().map(()=>(
                <p>⭐</p>
              ))
            }
          </div>
        </div>
        <img
          src={image}
          alt="product1"        />
        <button>Add to Basket</button>
    </div>
  );
}

export default Product