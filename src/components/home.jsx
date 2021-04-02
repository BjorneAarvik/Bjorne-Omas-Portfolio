import { Link } from "react-scroll";

const Home = () => {
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
      >
        View My Work
      </Link>
    </div>
  );
};

export default Home;
