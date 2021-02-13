import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <Link to="/" id="home">
              Home
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

export default Header;
