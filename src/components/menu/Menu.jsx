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
        <li onClick={() => setMenuOpen(false)}>
          <a
            href="https://drive.google.com/file/d/1dzoJdJmnDJourjWzBNlZx6jhCjRmGqJg/view?usp=sharing"
            target="_blank"
          >
            Resume`
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="https://github.com/starbjornx" target="_blank">
            Github
          </a>
        </li>
      </ul>
    </div>
  );
}
