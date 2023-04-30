import React, { useState } from "react";
import "./navbar.css";
import "./navbarMob.css";
import { Link } from "react-router-dom";
import Search from "../../assets/search-icon.svg";
import Avatar from "../../components/Avatar/Avatar";
import { Breakpoint } from "react-socks";
import LeftSideBar from "../LeftSideBar/LeftSideBar";

function navbar() {
  let User = null;
  let userLogo = null;

  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav className="mobileNav">
      <div className="navbar ">
        <Breakpoint customQuery="(max-width: 575px)">
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
          <div className={menu_class}>
            <LeftSideBar />
          </div>
        </Breakpoint>
        <Link to="/" className="logo nav-item ">
          Code <span className="logo-bold nav-item">Overflow</span>
        </Link>
        <Breakpoint customQuery="(min-width:790px)">
          <Link to="/" className="nav-item nav-links">
            About us
          </Link>
          <Link to="/" className="nav-item nav-links">
            Products
          </Link>
          <Link to="/" className="nav-item nav-links">
            For Teams
          </Link>
        </Breakpoint>

        <form>
          <input type="text" className="form-input" placeholder="Search..." />
          <img src={Search} alt="Search_icon" className="search-icon" />
        </form>
        {User === null ? (
          <Link to="/Auth" className="nav-item avatar-btn login-btn">
            Log In
          </Link>
        ) : (
          <>
            <Link to="/">
              <Avatar>{userLogo}</Avatar>
            </Link>
            <button className="nav-item logout-btn avatar-btn">Log out</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default navbar;
