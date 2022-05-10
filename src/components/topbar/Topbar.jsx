import "./topbar.scss";
import Person from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <p className="background">XP:jr.web-dev</p>
          </a>
          <div className="itemContainer ">
            <Person className="icon" />
            <span className="star">+702-379-8691</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span className="star">khenriksen09@outlook.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
