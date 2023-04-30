import React from "react";
import "./AskQuestion.css";
const AskQuestion = () => {
  return (
    <div className="container-mid">
      <h1>Ask Questions</h1>
      <form action="/">
        <input
          type="text"
          name="questionName"
          id="questionName"
          placeholder="Enter your Questions here..."
          required
        />
        <input
          type="text"
          name="description"
          id="description"
          required
          placeholder="Descriptions"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AskQuestion;
