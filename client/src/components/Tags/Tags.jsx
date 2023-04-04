import React from "react";
import "./Tags.css";
const Tags = () => {
  return (
    <div class="home-container-2">
      <h1 class="tags-h1">Tags</h1>
      <p class="tags-p">
        A tag is a keyword or label that categorizes your question with other,
        similar questions.
      </p>
      <p class="tags-p">
        Using the right tags makes it easier for others to find and answer your
        question.
      </p>
      <div class="tags-list-container">
        <div class="tag">
          <h5>javascript</h5>
          <p>
            For questions regarding programming in ECMAScript and its various
            dialects/implementation
          </p>
        </div>
        <div class="tag">
          <h5>python</h5>
          <p>
            Python is a high-level, general-purpose programming language. Its
            design philosophy emphasizes code readability with the use of
            significant indentation. Python is dynamically-typed and
            garbage-collected
          </p>
        </div>
        <div class="tag">
          <h5>c#</h5>
          <p>
            C# is a general-purpose programming language supporting multiple
            paradigms. C# encompasses static typing, strong typing, lexically
            scoped, imperative, declarative, functional, generic,
            object-oriented, and component-oriented programming disciplines.
          </p>
        </div>
        <div class="tag">
          <h5>java</h5>
          <p>
            Java is a widely used object-oriented programming language and
            software platform that runs on billions of devices, including
            notebook computers, mobile devices, gaming consoles, medical devices
            and many others
          </p>
        </div>
        <div class="tag">
          <h5>php</h5>
          <p>
            PHP is a general-purpose scripting language geared toward web
            development. It was originally created by Danish-Canadian programmer
            Rasmus Lerdorf in 1993 and released in 1995
          </p>
        </div>
        <div class="tag">
          <h5>html</h5>
          <p>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser
          </p>
        </div>
        <div class="tag">
          <h5>css</h5>
          <p>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML
          </p>
        </div>
        <div class="tag">
          <h5>javascrit</h5>
          <p>
            avaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS
          </p>
        </div>
        <div class="tag">
          <h5>android</h5>
          <p>
            Android is a mobile operating system based on a modified version of
            the Linux kernel and other open-source software, designed primarily
            for touchscreen mobile devices such as smartphones and tablets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tags;
