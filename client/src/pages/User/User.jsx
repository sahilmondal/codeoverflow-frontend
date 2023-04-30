import React from "react";
import "./User.css";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import { Breakpoint } from "react-socks";

const User = () => {
  let user = 1;
  return (
    <div className="home-container-1">
      <Breakpoint small up>
        <LeftSideBar />
      </Breakpoint>
      <div className="user-container">
        {user ? <div>User</div> : <h1>Please Log in first...</h1>}
      </div>
    </div>
  );
};

export default User;
