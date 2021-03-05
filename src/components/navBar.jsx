import { Link } from "react-scroll";
import { Link as domLink, useLocation } from "react-router-dom";
import { React, useEffect, useState } from "react";

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
    console.log("Added event." + window.innerHeight);
  }, []);

  const [projectButtonRouting, setProjectButtonRouting] = useState(
    <Link
      to="projectPlacement"
      spy={true}
      smooth={true}
      duration={500}
      offset={1}
    >
      PROJECTS
    </Link>
  );
  /*
  const updateProjectButtonRouting = () => {
    if (useLocation().pathname == "/") {
      setProjectButtonRouting(
        <Link
          to="projectPlacement"
          spy={true}
          smooth={true}
          duration={500}
          offset={1}
        >
          PROJECTS
        </Link>
      );
    } else {
      setProjectButtonRouting(<domLink to="/">PROJECTS</domLink>);
    }
  };*/

  return (
    <div className="navBar" style={navStyle}>
      <ul>
        <li>
          <Link to="home" spy={true} smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li>{projectButtonRouting}</li>
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
