import { Link } from "react-scroll";
import { React, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const [navStyle, setNavStyle] = useState({
    position: "absolute",
  });

  const fixedCheck = () => {
    if (
      window.scrollY > window.innerHeight &&
      navStyle != { position: "fixed", top: "0" }
    ) {
      setNavStyle({ position: "fixed", top: "0" });
    } else if (
      window.scrollY < window.innerHeight &&
      navStyle != { position: "absolute" }
    ) {
      setNavStyle({ position: "absolute" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", fixedCheck);
  }, []);

  const history = useHistory();

  function routeToHome() {
    history.push("/");
  }

  return (
    <div className="navBar" style={navStyle}>
      <ul>
        <li>
          <Link to="home" spy={true} smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="projectPlacement"
            spy={true}
            smooth={true}
            duration={500}
            onClick={routeToHome}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
