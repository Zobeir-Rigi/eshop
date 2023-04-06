import React from 'react'
import "./product.css"
// import Home from './Home';
import StarsIcon from "@mui/icons-material/Stars";
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
            {rating}
          </div>
        </div>
        <img
          src={image}
          alt="product1"
        />
        <button>Add to Basket</button>
    </div>
  );
}

export default Product