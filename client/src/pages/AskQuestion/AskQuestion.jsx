import React from "react";
import "./AskQuestion.css";
const AskQuestion = () => {
  return (
    <div class="ask-question">
      <div class="ask-ques-container">
        <h1>Ask a public question</h1>
        <form action="">
          <div className="ask-form-container">
            <label for="ask-ques-Title">
              <h4>Title</h4>
              <p>
                Be specific and imagine you’re asking a question to another
                person
              </p>
              <input
                type="text"
                name="questionTitle"
                id="ask-ques-Title"
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              ></input>
            </label>
            <label for="ask-ques-Body">
              <h4>Body</h4>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                id="ask-ques-Body"
                rows="10"
                name="questionBody"
              ></textarea>
            </label>
            <label for="ask-ques-Tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type="text"
                id="ask-ques-Tags"
                placeholder="e.g. (xml typescript wordpress)"
              ></input>
            </label>
          </div>
          <input
            type="submit"
            class="review-btn"
            value="Review your question"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
