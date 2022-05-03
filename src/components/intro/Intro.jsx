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
      strings: ["Developer", "Designer", "Content Creator"],
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
          <h1>Welcome! My name is,</h1>
          <h2>Kyle Henriksen</h2>
          <h3>
            a Junior Web:<span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png"></img>
        </a>
      </div>
    </div>
  );
}
