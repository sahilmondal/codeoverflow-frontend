import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";
import Breakpoint from "react-socks";
import search from "../../assets/search-solid.svg";
import Avatar from "../../components/Avatar/Avatar";
import "./Navbar.css";
import "./navbarMob.css";
import { setCurrentUser } from "../../actions/currentUser";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
const Navbar = ({ handleSlideIn }) => {
  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);

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
    // <nav className="main-nav">
    //   <div className="navbar">
    //     <button className="slide-in-icon" onClick={() => handleSlideIn()}>
    //       <img src={bars} alt="bars" width="15" />
    //     </button>
    //     <div className="navbar-1">
    //       <Link to="/" className="nav-item nav-logo">
    //         <img src={logo} alt="logo" />
    //       </Link>
    //       <Link to="/" className="nav-item nav-btn res-nav">
    //         About
    //       </Link>
    //       <Link to="/" className="nav-item nav-btn res-nav">
    //         Products
    //       </Link>
    //       <Link to="/" className="nav-item nav-btn res-nav">
    //         For Teams
    //       </Link>
    //       <form>
    //         <input type="text" placeholder="Search..." />
    //         <img src={search} alt="search" width="18" className="search-icon" />
    //       </form>
    //     </div>

    // <div className="navbar-2">
    // {User === null ? (
    //   <Link to="/Auth" className="nav-item nav-links">
    //     Log in
    //   </Link>
    // ) : (
    //   <>
    //     <Avatar
    //       backgroundColor="#009dff"
    //       px="35px"
    //       py="35px"
    //       borderRadius="50%"
    //       color="white"
    //     >
    //       <Link
    //         to={`/Users/${User?.result?._id}`}
    //         style={{ color: "white", textDecoration: "none" }}
    //       >
    //         {User.result.name.charAt(0).toUpperCase()}
    //       </Link>
    //     </Avatar>
    //     <button className="nav-item nav-links" onClick={handleLogout}>
    //       Log out
    //     </button>
    //   </>
    // )}
    // </div>
    // </div>
    // </nav>

    <nav className="mobileNav">
      <div className="navbar ">
        <Breakpoint customQuery="(max-width:630px)">
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
        <Breakpoint customQuery="(min-width:878px)">
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
          <img src={search} alt="Search_icon" className="search-icon" />
        </form>

        {User === null ? (
          <Link to="/Auth" className="nav-item avatar-btn login-btn">
            Log in
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px="35px"
              py="35px"
              borderRadius="50%"
              color="white"
            >
              <Link
                to={`/Users/${User?.result?._id}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                {User.result.name.charAt(0).toUpperCase()}
              </Link>
            </Avatar>
            <button
              className="nav-item logout-btn avatar-btn"
              onClick={handleLogout}
            >
              Log out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
