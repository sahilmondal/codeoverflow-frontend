import React from "react";
import "./Users.css";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import UsersList from "./UsersList";

const Users = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <LeftSideBar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="tag-container" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400" }}>Users</h1>
      </div>
      <UsersList />
    </div>
  );
};

export default Users;
