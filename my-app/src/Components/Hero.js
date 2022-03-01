import React from "react";
import Image from "../assets/headshot.png";

export default function App() {
  return (
    <div>
      <header>
        <h1>Triston Golden</h1>
        <nav>
          <a href="#about">About Me</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact Me</a>
          <a href="./assets/Golden Resume (Coding)- copy.pdf">Resume</a>
          {/* Github Logo */}
          {/* <p><a href="https://github.com/TGolden95"><img src="./images/github logo.png" className="gitlogo"></a></p> */}
        </nav>
      </header>

      <div className="detail">
        <h1>
          Hello, my name is Triston <span>Golden</span> and
        </h1>
        <p>Welcome to my professional portfolio...</p>

        <div className="flex-box">
          <img
            src={Image}
            // style="max-width:auto;height:auto;"
            className="headshot"
          />
        </div>
      </div>
    </div>
  );
}
