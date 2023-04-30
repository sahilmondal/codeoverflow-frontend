import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Questions from "./pages/Questions/Questions";
import Auth from "./pages/Auth/Auth";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import Tags from "./pages/Tags/Tags";
import User from "./pages/User/User";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/Questions" element={<Questions />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
      <Route path="/Tags" element={<Tags />} />
      <Route path="/User" element={<User />} />
    </Routes>
  );
};

export default AllRoutes;
