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
          <img
            src="https://fdn.gsmarena.com/imgroot/news/20/04/apple-iphone-12-delay/-1220x526/gsmarena_000.jpg"
            alt="adverttisment"
            className="checkout__ad"
          />
          <div className="checkOut_container">
            <div className="checkout__left">
              <h2>Your shopping Basket</h2>
                {basket.map((item) => ( <div className="checkout__Item">

                  <CheckoutProduct
                    id={item.id}
                    titel={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  /></div>
                ))}
              
            </div>

            <div className="Checkout__right">
              <Subtotal />
            </div>
          </div>
        </div>
      );
}

export default Checkout;