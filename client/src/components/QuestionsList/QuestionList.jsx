import React from "react";
import "./QuestionsList.css";
import "../RightSideBar/RightSideBar.css";
import { Link } from "react-router-dom";
const QuestionList = () => {
  let data = [
    {
      id: 1,
      question: "What is the best programming language for beginners?",
      voteCount: 25,
      views: 1000,
      answersCount: 10,
      publishDate: "2022-01-01",
      tags: ["programming", "beginners", "languages"],
    },
    {
      id: 2,
      question: "How do I create a responsive website?",
      voteCount: 18,
      views: 800,
      answersCount: 5,
      publishDate: "2022-02-15",
      tags: ["web development", "responsive design", "CSS"],
    },
    {
      id: 3,
      question: "What are the best practices for unit testing?",
      voteCount: 15,
      views: 600,
      answersCount: 8,
      publishDate: "2022-03-20",
      tags: ["unit testing", "testing", "best practices"],
    },
    {
      id: 4,
      question: "How do I optimize my SQL queries for performance?",
      voteCount: 12,
      views: 500,
      answersCount: 7,
      publishDate: "2022-04-05",
      tags: ["SQL", "database", "performance"],
    },
    {
      id: 5,
      question:
        "What are the differences between agile and waterfall methodologies?",
      voteCount: 20,
      views: 700,
      answersCount: 6,
      publishDate: "2022-05-10",
      tags: ["agile", "waterfall", "methodologies"],
    },
  ];

  return (
    <>
      {data.map((question) => (
        <div className="question-card">
          <div className="question-card-container-1">
            <div className="question-card-votes">
              <p>{question.voteCount} votes</p>
            </div>
            <div className="question-card-views">
              <p>{question.views} views</p>
            </div>
            <div className="question-card-answers">
              <p>{question.answersCount} answers</p>
            </div>
          </div>

          <div className="question-card-main">
            <Link to={`/questions/${question.id}`} key={question.id}>
              <h3 className="question-card-title">{question.question}</h3>
            </Link>
            <div className="question-card-tags">
              {question.tags.map((tag) => (
                <div className="question-card-tag widget-tags-div">
                  <p key={tag}>{tag}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="question-card-publish">
            <p className="question-card-publish-date">
              <p>asked on {question.publishDate}</p>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default QuestionList;
