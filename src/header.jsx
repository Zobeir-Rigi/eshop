import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AppleIcon from "@mui/icons-material/Apple";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "./header.css";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <header>
      <div className="header">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="header__logo">
            <AppleIcon className="header__logoImage" fontSize="large" />
            <h2 className="header__logoTitle">The iLife</h2>
          </div>
        </Link>

        <div className="header__search">
          <input
            type="text"
            placeholder="Search apple.com ..."
            className="header__searchInput"
          />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="haeder__nav">
          <Link to="/Login" style={{ textDecoration: "none" }}>
            <div className="nav__item">
              <span className="nev__itemLineOne">Hello Guest</span>
              <span className="nav__itemLineTwo">Sign In</span>
            </div>
          </Link>
          <div className="nav__item">
            <span className="nev__itemLineOne">Your</span>
            <span className="nav__itemLineTwo">Shop</span>
          </div>
          <Link to="/Checkout" style={{ textDecoration: "none" }}>
            <div className="nav__itemBasket">
              <ShoppingBasketIcon />
              <span className="nav__itemLineTwo nav__basketCount">
                {[...basket].length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
