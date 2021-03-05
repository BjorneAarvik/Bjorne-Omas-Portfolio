import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="home">
      <h1>Hi, I'm Bjørne Oma</h1>
      <h2>Programmer, UX designer and Game Developer</h2>
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
