import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AppleIcon from "@mui/icons-material/Apple";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "../Styles/header.css";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ basket }] = useStateValue();
  return (
    <header>
      <div className="header">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="header-logo">
            <AppleIcon className="header-logoImage" fontSize="large" />
            <h2 className="header-logoTitle">The iLife</h2>
          </div>
        </Link>

        <div className="header-search">
          <input
            type="text"
            placeholder="Search apple.com ..."
            className="header-searchInput"
          />
          <SearchIcon className="header-searchIcon" />
        </div>
        <div className="haeder-nav">
          <Link to="/Login" style={{ textDecoration: "none" }}>
            <div className="nav-item">
              <span className="nev-itemLineOne">Hello Guest</span>
              <span className="nav-itemLineTwo">Sign In</span>
            </div>
          </Link>
          <div className="nav-item">
            <span className="nev-itemLineOne">Your</span>
            <span className="nav-itemLineTwo">Shop</span>
          </div>
          <Link to="/Checkout" style={{ textDecoration: "none" }}>
            <div className="nav-itemBasket">
              <ShoppingBasketIcon />
              <span className="nav-itemLineTwo nav-basketCount">
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
