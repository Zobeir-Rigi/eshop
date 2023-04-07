import React from 'react'
import "./CheckoutProduct.css";
const CheckoutProduct = () => {
  return (
    <div className="CheckoutProduct">
      <img
        src="https://m.media-amazon.com/images/I/71v3aTg8BML._AC_SL1500_.jpg"
        alt=""
        className="checkoutproduct__image"
      />

      <div className="product__info">
        <p className="checkoutProduct__title">
          Panasonic HC-X20E 4K 60p Professional Camcorder, Video Camera
          Camcorder with 15-megapixel 1.0-type MOS Sensor, 20x Optical Zoom,
          i.ZOOM 32x (FHD), 3G-SDI Output, XLR Input, Wired Remote "
        </p>
        <p className="checkoutProduct__price">
          <small>£</small>
          <strong>20</strong>
        </p>
        <div className="checkoutProduct__rating">⭐⭐</div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct