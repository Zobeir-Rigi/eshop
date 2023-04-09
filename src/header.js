import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "./header.css";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [basket, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <StorefrontIcon className="header__logoImage" fontSize="large" />
          <h2 className="header__logoTitle">eShop</h2>
        </div>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="haeder__nav">
        <div className="nav__item">
          <span className="nev__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nev__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <Link to="/Checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon />
            <span className="nav__itemLineTwo nav__basketCount">
              {basket.lenght}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
