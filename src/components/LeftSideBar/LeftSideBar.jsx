import React from "react";
import "./LeftSideBar.css";
import { NavLink } from "react-router-dom";
import globe from "./../../assets/globe.svg";
const LeftSideBar = () => {
  return (
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
          <img src={globe} alt="globe" className="nav-img icons" />
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

export default LeftSideBar;
