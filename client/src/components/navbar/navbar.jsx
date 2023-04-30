import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Search from "../../assets/search-icon.svg";
import Avatar from "../../components/Avatar/Avatar";
import { Breakpoint } from "react-socks";
function navbar() {
  let User = null;
  let userLogo = null;
  return (
    <nav>
      <div className="navbar ">
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
