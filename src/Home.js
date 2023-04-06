import React from 'react'
import "./Home.css"
import Product from './Product';
const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://github.com/Ironhack-Archive/online-clone-amazon/blob/master/img/slide_3.jpg?raw=true"
            alt="Amazon"
            className="home__image"
          />
            <div className="home__row">
                <Product />
                <Product />
            </div>
            <div className="home__row">
                <Product />
                <Product />
                <Product />
            </div>
            <div className="home__row">
                <Product />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home