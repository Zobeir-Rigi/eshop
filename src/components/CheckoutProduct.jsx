import React from "react";
import "../Styles/CheckoutProduct.css";
import StarHalfIcon from "@mui/icons-material/StarHalf";

import { useStateValue } from "./StateProvider";
const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="CheckoutProduct">
      <img src={image} alt="" className="checkoutproduct-image" />

      <div className="ckeckoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
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
};

export default CheckoutProduct;
