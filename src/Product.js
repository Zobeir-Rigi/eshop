import React from 'react'
import "./product.css"
import StarsIcon from "@mui/icons-material/Stars";
const Product = () => {
  return (
    
      <div className="product">
        <div className="product__info">
          <p>Title</p>
          <p className="product__price">
            <small>£</small>
            <strong>30</strong>
          </p>
          <div className="product__rating">
            <StarsIcon />
          </div>
        </div>
        <img
          src="https://github.com/Ironhack-Archive/online-clone-amazon/blob/master/img/product_1.jpg?raw=true"
          alt="product1"
        />
        <button>Add to Basket</button>
      </div>
    
  );
}

export default Product