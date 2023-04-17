import React from 'react'
import "./Home.css"
import Product from './Product';
const Home = () => {
  return (
    // <div className="home">
    <div className="home__container">
      <img
        src="https://github.com/Ironhack-Archive/online-clone-amazon/blob/master/img/slide_3.jpg?raw=true"
        alt="Amazon"
        className="home__image"
      />
      <div className="home__row" >
        <Product
          id={1}
          title="Panasonic HC-X20E 4K 60p Professional Camcorder, Video Camera Camcorder with 15-megapixel 1.0-type MOS Sensor, 20x Optical Zoom, i.ZOOM 32x (FHD), 3G-SDI Output, XLR Input, Wired Remote "
          price={2.181}
          rating={5}
          image="https://m.media-amazon.com/images/I/71v3aTg8BML._AC_SL1500_.jpg"
        />
        <Product
          id={2}
          title="WOLFANG GA400 Action Camera 4K 60FPS 24MP Underwater Camera, 8M Bare Metal/40M Waterproof Camera, 3.0 EIS Stabilization WiFi Helmet Bike Camera (Remote Control, 2x1350mAh Batteries and Accessory Kit)"
          price={279.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/718wAkWOKDL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={3}
          title="4K Video Camera Camcorder UHD 48MP WiFi IR Night Vision Vlogging Camera for YouTube Touch Screen 16X Digital Zoom Camera Recorder with Microphone, Handheld Stabilizer, Lens Hood, Remote,2 Batteries  "
          price={154.99}
          rating={2}
          image="https://m.media-amazon.com/images/I/81eUw7H78UL._AC_SL1500_.jpg"
        />
        <Product
          id={4}
          title="GoPro HERO11 Black - Waterproof Action Camera with 5.3K60 Ultra HD Video, 27MP Photos, 1/1.9 Image Sensor, Live Streaming, Webcam, Stabilization "
          price={499.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/617sGSjmC1L._AC_SL1500_.jpg"
        />
        <Product
          id={5}
          title="GoPro Max - Waterproof 360 Digital Action Camera with Unbreakable Stabilisation, Touch Screen and Voice Control - Live HD Streaming, Black "
          price={437.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/71ZBo2ZrNUL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={6}
          title="Insta360 ONE RS 4K Edition – Waterproof 4K 60fps Action Camera with FlowState Stabilization, 48MP Photo, Active HDR, AI Editing "
          price={234.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61nQ14Vp0wL._AC_SL1500_.jpg"
        />
      </div>
    </div>
    // </div>
  );
}

export default Home