import React from 'react'
import "./CheckoutProduct.css";
import StarHalfIcon from "@mui/icons-material/StarHalf";

import {useStateValue} from "./StateProvider"
const CheckoutProduct = ({id,image,title,price,rating}) => {
  const [{basket},dispatch]=useStateValue();
    console.log(basket)
  const removeFromBasket =()=>{
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id: id,
    })
  }
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
            .map((_, i) => (
              <span className="star-color" key={i}>
                <StarHalfIcon />
              </span>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Bag</button>
      </div>
    </div>
  );
}

export default CheckoutProduct