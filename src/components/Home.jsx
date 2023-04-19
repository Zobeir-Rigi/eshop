import React from "react";
// import { useEffect, useState } from 'react';
import "../Styles/Home.css";
import Product from "./Product";
import RandomQuote from "./RandomQuote";

const Home = () => {
  return (
    // <div className="home">
    <div className="home-container">
      <div className="home-hero">
        <RandomQuote />

        <h2>MacBook Pro</h2>

        <p>Mover. Maker. Boundary breaker.</p>
        <span> From £2,149</span>

        <div alt="Amazon" className="home-image" />
      </div>
      <div className="home-row">
        <Product
          id={1}
          title="MacBook Air with M2 chip "
          price={1249.99}
          rating={5}
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-macbook-air-202206?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1653499620093"
        />
        <Product
          id={2}
          title="MacBook Pro 13-inch"
          price={1349.99}
          rating={3}
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-macbook-pro-13-202206?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1665082744007"
        />
        <Product
          id={3}
          title="MacBook Pro 14-inch"
          price={2149.99}
          rating={2}
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-14-digitalmat-gallery-1-202301?wid=364&hei=333&fmt=png-alpha&.v=1670360625864"
        />
        <Product
          id={4}
          title="MacBook Air with M1 chip "
          price={999.99}
          rating={5}
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-macbook-air-202110?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1664576115052"
        />
      </div>
      <div className="home-row">
        <Product
          id={5}
          title=" Buy iPhone 14 "
          price={849.99}
          rating={4}
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-compare-iphone-14-pro-202209?wid=366&hei=508&fmt=jpeg&qlt=90&.v=1661471046256"
        />
        <Product
          id={6}
          title=" iPhone 13 mini "
          price={649.99}
          rating={4}
          image="https://www.apple.com/v/iphone-13/f/images/specs/finish_iphone13_mini__egwpixru7kwi_large.jpg"
        />
        <Product
          id={7}
          title="Buy iPhone SE "
          price={449.99}
          rating={4}
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-compare-iphone-se-202209?wid=364&hei=508&fmt=jpeg&qlt=90&.v=1660759995953"
        />
      </div>
      <div className="home-row">
        <Product
          id={7}
          title="Pro. Beyond. "
          price={1099.99}
          rating={4}
          image="https://www.apple.com/v/iphone/home/bm/images/overview/hero/hero_iphone_14_pro__e8bufymdlseq_large.jpg"
        />
      </div>
    </div>
    // </div>
  );
};

export default Home;
