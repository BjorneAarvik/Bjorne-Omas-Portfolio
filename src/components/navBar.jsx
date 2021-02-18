import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <nav>
        <ul>
          <li>
            <Link to="/" id="projects">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" id="skills">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/about" id="about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
