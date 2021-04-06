import { Link } from "react-scroll";
import { React, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  function routeToHome() {
    history.push("/");
  }
  return (
    <div id="home">
      <h1>Hi, I'm Bjørne Oma</h1>
      <h2 className="homeText">
        I am a <span>Programmer</span>, <span>Interaction Designer</span> and{" "}
        <span>Game Developer</span>, currently getting a bachelor's degree in
        Media- and Interaction design in Bergen.
      </h2>
      <Link
        className="myWorkButton"
        to="projectPlacement"
        spy={true}
        smooth={true}
        duration={500}
        offset={1}
        onClick={routeToHome}
      >
        View My Work
      </Link>
    </div>
  );
};

export default Home;
