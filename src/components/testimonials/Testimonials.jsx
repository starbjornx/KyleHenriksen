import React from "react";
import "./testimonials.scss";

export default function Testimonial() {
  const data = [
    {
      id: 1,
      name: "Randy",
      title: "Senior Developer",
      img: "assets/person.jpg",
      icon: "assets/twitter.png",
      desc: "This is where text goes 1",
    },
    {
      id: 2,
      name: "Justine",
      title: "Manager",
      img: "assets/person2.jpg",
      icon: "assets/linkedin.png",
      desc: "This is where text goes 2",
      featured: true,
    },
    {
      id: 3,
      name: "John",
      title: "Co-Woker",
      img: "assets/person3.jpg",
      icon: "assets/facebook.png",
      desc: "This is where text goes 3",
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
              <img src={d.icon} alt="" className="right" />
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
