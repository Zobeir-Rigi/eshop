import React from 'react'
import "./product.css"
import { useStateValue } from "./StateProvider";
const Product = ({id,title,price,rating,image}) => {

  const [state, dispatch]=useStateValue; // dispatch is another name for action in reducer func
    const addToBasket = () => {
      dispatch({
        type: "ADD_TO_BASKET",
        item:{
          id:id,
          image:image,
          price,price,
          rating,rating,
        },
      });
    };
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
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product