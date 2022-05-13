import "./menu.scss";

export default function menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#work">Work</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonial">Testimonials</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>

        <div
          className="line"
          style={{
            border: "1px solid gray",
            margin: "20px",
            marginTop: "50px",
          }}
        ></div>
        <p
          style={{
            marginLeft: "30px",
            marginBottom: "40px",
          }}
        >
          Professional
        </p>
        <li onClick={() => setMenuOpen(false)}>
          <a href="https://github.com/starbjornx" target="_blank">
            Github
            <img
              src="assets/GitHub-Logo.png"
              style={{ width: "25%", marginLeft: "80px" }}
            />
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a
            href="https://www.linkedin.com/in/kyle-henriksen-40ba4b228/"
            target="_blank"
          >
            Linked-In
            <img
              src="assets/linkedin.png"
              style={{ width: "10%", marginLeft: "50px" }}
            />
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a
            href="https://drive.google.com/file/d/1dzoJdJmnDJourjWzBNlZx6jhCjRmGqJg/view?usp=sharing"
            target="_blank"
          >
            Resume`
            <img
              src="assets/arrowleft.png"
              style={{ width: "10%", marginLeft: "80px", height: "55px" }}
              className="blinkingarrow"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
