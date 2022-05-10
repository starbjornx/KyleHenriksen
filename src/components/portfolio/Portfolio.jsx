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
      <h1>Portfolio</h1>
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
              games as it is my favorite hobby. Other outdoor activies such as
              snowboarding, white water rafting, cycling, gun range shooting, I
              greatly enjoy. There are things I have yet to do that I really
              want to such as, hunting and skydiving! I have a passion for
              computers I can get lost spending roughly 8 to 12 hours behind a
              computer and not even realize that much time has gone by. I love
              my family with all my heart I would do anything for them. I am a
              previous business owner myself I owned the Nevada Youth Football
              League (origin : Las Vegas) I have managed anywhere from 30 to 50
              teams each team roughly had 5 coaches and 20-32 players. Critical
              thinking and solving complex issues as well as time management and
              working as a team is something I picked up while running the NYFL
              program from 2009 to 2019.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
