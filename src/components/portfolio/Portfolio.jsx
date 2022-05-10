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
              I am the father of two wonderful children, I enjoy playing video
              games as it is my favorite hobby. I enjoy other outdoor activies
              such as snowboarding, white water rafting, cycling & gun range
              shooting. There are things I have yet to do that I really want to
              such as, hunting and skydiving! I am a previous business owner I
              owned the Nevada Youth Football League, I have managed between 30
              to 50 teams per season (spring & fall) each team roughly had 5
              coaches and 20-32 players. Things I learned while running the NYFL
              are, critical thinking, time management, working as a team,
              organizational skills, keeping track of important documents such
              as banking and city documents for the program from 2009 to 2021.
              During the COVID pandemic I also went into construction from 2021
              to 2022. With the experience of working in construction I have
              determined that I would be much happier working on computers, it
              is a passion of mine!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
