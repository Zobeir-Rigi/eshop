import React from 'react';
import "./Checkout.css" ;
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider"

const Checkout = () => {
    const [{ basket }, dispatch] = useStateValue();
    console.log("I'm dispatch in the Checkout.js",dispatch)
      return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXKKpWFMIcr0OguE6tKEf0GvbJWdG9s_8TIAAbFbqdfCgoJoPRPqN_xudclsDFXpajA&usqp=CAU"
          alt="adverttisment"
          className="checkout__ad"
        />
     <div className="checkout__title">
        <h2 >
        Your shopping Basket</h2>
        {basket.map((item)=>(
          <CheckoutProduct 
            id={item.id}
            titel={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
      
      <div className="Checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;