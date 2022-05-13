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
      title: "DU Assignments",
    },
    { id: "mobile", title: "Future Development" },

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
      <a
        href="https://drive.google.com/file/d/1dzoJdJmnDJourjWzBNlZx6jhCjRmGqJg/view?usp=sharing"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <button className="resume">My Resume`</button>{" "}
      </a>
    </div>
  );
}
