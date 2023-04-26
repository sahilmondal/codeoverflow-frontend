import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Questions from "./pages/Questions/Questions";
import Auth from "./pages/Auth/Auth";
import AskQuestion from "./pages/AskQuestion/AskQuestion";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/Questions" element={<Questions />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
    </Routes>
  );
};

export default AllRoutes;
