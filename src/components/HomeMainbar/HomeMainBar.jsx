import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./HomeMainBar.css";
import "../navbar/navbar.css";
import QuestionList from "../QuestionsList/QuestionList";
const HomeMainBar = () => {
  let location = useLocation();

  return (
    <div className="main">
      <div className="question-header">
        {location.pathname === "/" ? (
          <h1 className="main-headline">Top Questions</h1>
        ) : (
          <h1 className="main-headline">All Questions</h1>
        )}
        <Link to="/AskQuestion">
          <button className="ask-button avatar-btn login-btn">
            Ask Question
          </button>
        </Link>
      </div>
      <div className="question-container">
        <QuestionList />
      </div>
    </div>
  );
};

export default HomeMainBar;
