import image01 from "../assets/images/Climate01.png";
import image02 from "../assets/images/Climate02.png";
import image03 from "../assets/images/Climate03.png";

const ClimateCalculator = () => {
  return (
    <div className="project">
      <h1 className="sectionHeader">Climate Calculator</h1>
      <p>
        This is a prototype made for NRK in a school project. I worked in a
        group of four students to make a climate calculator that would be more
        intuitive, fun and impactful than their current solution.
      </p>
      <p>
        To get in depth information about our methods and design decisions, read
        our published thesis on the project:{" "}
        <a
          href="https://static1.squarespace.com/static/599605d5f9a61e19fde4acc0/t/5f1b3136ba6fd7275100641b/1595617676519/Klimakalkulator.pdf"
          target="_blank"
        >
          Norwegian
        </a>
        {", "}
        <a
          href="https://static1.squarespace.com/static/599605d5f9a61e19fde4acc0/t/5f1b308aa3a9b84512f37ad6/1595617561182/Climate+calculator.pdf"
          target="_blank"
        >
          English
        </a>
        .
      </p>
      <p>
        You can also test our Figma-prototype{" "}
        <a
          href="https://www.figma.com/proto/PHd50AAjeMKN6mPw4NkVtx/Klimakalkulator---Prototype?XyJmvn=&scaling=scale-down&node-id=1%3A4"
          target="_blank"
        >
          here
        </a>{" "}
        to see how the end result feels.
      </p>
      <div className="tripleImage">
        <img src={image01} alt="" />
        <img src={image02} alt="" />
        <img src={image03} alt="" />
      </div>
    </div>
  );
};

export default ClimateCalculator;
