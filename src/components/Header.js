import React from "react";
import Logo from "./../assets/nogozo.png";
import HomeIcon from "./../assets/icons/home.svg";
import AccountIcon from "./../assets/icons/account.svg";
import CartIcon from "./../assets/icons/cart.svg";
import FavoriteIcon from "./../assets/icons/favorite.svg";
import SearchIcon from "./../assets/icons/search.svg";

export default function Header() {
  return (
    <>
      <nav>
        <img src={Logo} alt="logo" className="logo nav-item" />
        <div className="nav-item nav-item-links">
          <img src={HomeIcon} alt="HomeIcon" className="nav-icon" />
          <div className="nav-link">home</div>
        </div>
        <div className="nav-item nav-item-links">
          <img src={AccountIcon} alt="AccountIcon" className="nav-icon" />
          <div className="nav-link">account</div>
        </div>
        <div className="nav-item search-bar">
          <form className="nav-search-from">
            <input
              type="text"
              placeholder="Search Product"
              className="search-input"
            />
            <button className="search-btn">
              <img
                src={SearchIcon}
                alt="SearchIcon"
                className="nav-icon search-submit"
              />
            </button>
          </form>
        </div>
        <div className="nav-item nav-icon-links">
          <img src={FavoriteIcon} alt="FavoriteIcon" className="nav-icon" />
        </div>
        <div className="nav-item nav-icon-links">
          <img src={CartIcon} alt="CartIcon" className="nav-icon" />
        </div>
      </nav>
    </>
  );
}
