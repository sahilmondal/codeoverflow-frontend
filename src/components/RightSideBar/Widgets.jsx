import React from "react";
import "./RightSideBar.css";
import msg from "../../assets/message.svg";
import pencil from "../../assets/pencil.svg";
import stack_overflow from "../../assets/stack-overflow.svg";
const Widgets = () => {
  return (
    <div class="widget">
      <h4>The Overflow Blog</h4>
      <div class="right-sidebar-div-1">
        <div class="right-sidebar-div-2">
          <img src={pencil} alt="pen" className="sidebar-icons"></img>
          <p>
            Observability is key to the future of software (and your DevOps
            career)
          </p>
        </div>
        <div class="right-sidebar-div-2">
          <img src={pencil} alt="pen" className="sidebar-icons"></img>
          <p>Podcast 374: How valuable is your screen name?</p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div class="right-sidebar-div-1">
        <div class="right-sidebar-div-2">
          <img src={pencil} alt="pen" className="sidebar-icons"></img>
          <p>Review queue workflows - Final release....</p>
        </div>
        <div class="right-sidebar-div-2">
          <img src={msg} alt="comment" className="sidebar-icons"></img>
          <p>
            Please welcome Valued Associates: #952 - V2Blast #959 - SpencerG
          </p>
        </div>
        <div class="right-sidebar-div-2">
          <img
            src={stack_overflow}
            alt="stacklogo"
            className="sidebar-icons"
          ></img>
          <p>
            Outdated Answers: accepted answer is now unpinned on Stack Overflow
          </p>
        </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div class="right-sidebar-div-1">
        <div class="right-sidebar-div-2">
          <p>38</p>
          <p>
            Why was this spam flag declined, yet the question marked as spam?
          </p>
        </div>
        <div class="right-sidebar-div-2">
          <p>20</p>
          <p>
            What is the best course of action when a user has high enough rep
            to...
          </p>
        </div>
        <div class="right-sidebar-div-2">
          <p>14</p>
          <p>Is a link to the "How to ask" help page a useful comment?</p>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
