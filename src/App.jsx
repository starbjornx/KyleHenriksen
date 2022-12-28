import Contact from "./components/contact/Contact";
import Topbar from "./components/topbar/Topbar";
import Portfolio from "./components/portfolio/Portfolio";
import Intro from "./components/intro/Intro";
import Work from "./components/work/Work";
import Testimonials from "./components/testimonials/Testimonials";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
