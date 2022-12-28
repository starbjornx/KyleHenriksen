import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Full Stack",
        "Web Developer",
        "Front-end Designer",
        "Content Creator",
        "Gamer",
      ],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/mypicture.png" alt=""></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1 className="">Hello!</h1>
          <h2>My name is Kyle Henriksen</h2>
          <h3>
            I am a Junior:
            <span className="text-primary" ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <p className="">Scroll down</p>
          <img src="assets/down.png"></img>
        </a>
      </div>
    </div>
  );
}
