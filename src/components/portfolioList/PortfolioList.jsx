import "./portfolioList.scss";

function PortfolioList({ id, title, active, setSelected }) {
  return (
    <div className="bg-custom">
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li></div>
  );
}

export default PortfolioList;
