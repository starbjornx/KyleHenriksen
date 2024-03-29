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
      desc: "What a great first project this was with my team. We had an extreme amount of fun creating this someone on our team had no idea about star wars so this was a fun way to introduce them into the Star Wars realm!",
      icon: "assets/darth-vader-icon.png",
      link: "https://rocky-ridge-05041.herokuapp.com/",
    },
    {
      id: 2,
      title: "AFC Richmond",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeoRKvPtMKkfFbHCryacu2642fzehBta56UQ&usqp=CAU",
      desc: "Project 2 is a Roster report of the AFC Richmond telivised show you can edit, add or delete members from roster.",
      icon: "assets/soccerball.png",
      link: "https://richmondafc.herokuapp.com/",
    },
    {
      id: 3,
      title: "Elden Market",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGegmrX_pldFbhVrVriuscZGguXNL0ysK-g&usqp=CAU",
      desc: "Project 3 is an Ecommerce idea put together around Elden Ring. Enjoy!",
      icon: "assets/mobile.png",
      link: "https://eldenmarket.herokuapp.com/",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlider(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlider(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="work bg-custom" id="work">
      <h1 className="" style={{ fontSize: "45px" }}>
        Completed Work
      </h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 50}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <a href={d.link}>
                      <img src={d.icon} alt="" />
                    </a>
                  </div>

                  <h2>{d.title}</h2>

                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <a href={d.link}>
                  <img src={d.img} alt="" />
                </a>
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
