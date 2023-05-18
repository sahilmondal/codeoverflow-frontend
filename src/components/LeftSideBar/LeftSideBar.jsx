import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";

const LeftSidebar = ({ slideIn, handleSlideIn }) => {
  const slideInStyle = {
    transform: "translateX(0%)",
  };

  const slideOutStyle = {
    transform: "translateX(-100%)",
  };

  return (
    // <div
    //   className="left-sidebar"
    //   style={slideIn ? slideInStyle : slideOutStyle}
    // >
    //   <nav className="side-nav">
    //     <button onClick={() => handleSlideIn()} className="nav-btn">
    //       <NavLink to="/" className="side-nav-links" activeclassname="active">
    //         <p>Home</p>
    //       </NavLink>
    //     </button>
    //     <div className="side-nav-div">
    //       <div>
    //         <p>PUBLIC</p>
    //       </div>
    //       <button onClick={() => handleSlideIn()} className="nav-btn">
    //         <NavLink
    //           to="/Questions"
    //           className="side-nav-links"
    //           activeclassname="active"
    //         >
    //           <img src={Globe} alt="Globe" />
    //           <p style={{ paddingLeft: "10px" }}> Questions </p>
    //         </NavLink>
    //       </button>
    //       <button onClick={() => handleSlideIn()} className="nav-btn">
    //         <NavLink
    //           to="/Tags"
    //           className="side-nav-links"
    //           activeclassname="active"
    //           style={{ paddingLeft: "40px" }}
    //         >
    //           <p>Tags</p>
    //         </NavLink>
    //       </button>
    //       <button onClick={() => handleSlideIn()} className="nav-btn">
    //         <NavLink
    //           to="/Users"
    //           className="side-nav-links"
    //           activeclassname="active"
    //           style={{ paddingLeft: "40px" }}
    //         >
    //           <p>Users</p>
    //         </NavLink>
    //       </button>
    //     </div>
    //   </nav>
    // </div>

    <div className="sidebar">
      <div className="sidebar-links">
        <NavLink to="/" className="nav-links-side" activeClassName="active">
          <p> Home</p>
        </NavLink>
        <NavLink
          to="/Questions"
          className="nav-links-side flex-nav"
          activeClassName=""
        >
          <img src={Globe} alt="globe" className="nav-img icons" />
          <p>Questions</p>
        </NavLink>
        <NavLink to="/Tags" className="nav-links-side" activeClassName="">
          <p>Tags</p>
        </NavLink>
        <NavLink to="/Users" className="nav-links-side" activeClassName="">
          <p>Users</p>
        </NavLink>
      </div>
    </div>
  );
};

export default LeftSidebar;
