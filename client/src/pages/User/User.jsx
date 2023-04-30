import React from "react";
import "./User.css";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";

const User = () => {
  let user = 1;
  return (
    <div className="home-container-1">
      <LeftSideBar />
      <div className="user-container">
        {user ? <div>User</div> : <h1>Please Log in first...</h1>}
      </div>
    </div>
  );
};

export default User;
