import React from "react";
import "./testimonials.scss";

export default function Testimonial() {
  const data = [
    {
      id: 1,
      name: "Your Name!",
      title: "Your Title!",
      img: "assets/person2.jpg",
      icon: "assets/GitHub-Logo.png",
      desc: "Want to be part of my Tesitomnial page? Email me!",

      link: "https://github.com/benjaminmachock",
    },
    {
      id: 2,
      name: "Benjamin Machock",
      title: "Class Room Instructor",
      img: "https://avatars.githubusercontent.com/u/43613715?v=4",
      icon: "assets/GitHub-Logo.png",
      desc: "'The Elden Ring project has a professional style to it.'",
      link: "https://github.com/benjaminmachock",
      featured: true,
    },
    {
      id: 3,
      name: "Your Name!",
      title: "Your Title!",
      img: "assets/person3.jpg",
      icon: "assets/GitHub-Logo.png",
      desc: "Want to be part of my Tesitomnial page? Email me!",
      link: "https://github.com/benjaminmachock",
    },
  ];
  return (
    <div className="testimonials" id="testimonial">
      <h1> Testimonials </h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/arrowright.png" alt="" className="left" />
              <img src={d.img} alt="" className="user" />
              <a href={d.link} target="_blank">
                <img src={d.icon} alt="" className="right" />
              </a>
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
