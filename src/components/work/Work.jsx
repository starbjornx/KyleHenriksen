import React from "react";
import "./work.scss";
import { useState } from "react";
function Work() {
  const [currentSlide, setCurrentSlider] = useState(0);
  const data = [
    {
      id: 1,
      title: "Stumble upon the Force!",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc3lvF-gxI8OTue-htIYqO2TtGpsUwiMf67Q&usqp=CAU",
      desc: "This is my first project I worked on at the DU with a team of 3.",
    },
    {
      id: 2,
      title: "AFC Richmond",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeoRKvPtMKkfFbHCryacu2642fzehBta56UQ&usqp=CAU",
      desc: "This is where text goes 2",
    },
    {
      id: 3,
      title: "Elden Market",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGegmrX_pldFbhVrVriuscZGguXNL0ysK-g&usqp=CAU",
      desc: "This is where text goes 3",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlider(currentSlide > 0 ? currentSlide - 1 : 9)
      : setCurrentSlider(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="work" id="work">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        type="button"
        src="assets/arrowright.png"
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        type="button"
        src="assets/arrowright.png"
        className="arrow right"
        onClick={() => handleClick("")}
      />
    </div>
  );
}

export default Work;
