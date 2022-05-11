import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList.jsx";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data.js";

import { useEffect, useState } from "react";
export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    { id: "mobile", title: "Mobile App" },

    { id: "design", title: "Design" },

    { id: "content", title: "Content" },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1 className="star">Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <a href={d.link} target="_blank">
              {" "}
              <img src={d.img} alt=""></img>{" "}
            </a>

            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
      <h5>
        <a href="https://my.indeed.com/p/kyleh-a0ebx3q" target="_blank">
          My Resume`
        </a>
      </h5>

      <div className="aboutme">
        <div className="containers">
          <h1>About me</h1>
          <div className="styling">
            <p>
              Well, the first thing that comes to my mind is that when I was a
              young adult (18) was that I was fortunate enough to travel around
              the world and see some pretty awesome things. My most favorite
              place I have been to was Berlin.I got to see old castles that
              looked bran new, I have been to the Judisam Musem and even got to
              touch the Berlin Wall. Being able to travel was a great experience
              and I am very greateful to have had that opportunity to travel.
              After that I came back and started my life journey, the first
              thing was to get a career going and then settle down to start a
              family. I had been mentored by my father to give me the necessary
              tools and experience in starting and managing a business. I became
              the owner of the NYFL in 2009. After the COVID pandemic I lost the
              NYFL and sense then have decided to start a new career which is
              web development. I have two amazing children in my life my
              daughter Noelle and my son Lance. I try to be the best father I
              can be for them. Some of my hobbies include gaming, hiking,
              biking, as well as white water rafting which I hope to do more of
              in the near future. Thats a little bit about me I hope that you
              have enjoyed reading this and I look forward to working with you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
