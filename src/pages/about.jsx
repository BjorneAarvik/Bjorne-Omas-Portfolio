import React from "react";
import avatar from "../assets/images/avatarImage.jpg";

const About = () => {
  return (
    <div>
      <div>
        <p className="about">
          Eg heiter Bjørne Oma, er 22 år og bur i Bergen <br />
          bjorneoma@gmail.com <br />
          95784182
        </p>
      </div>
      <img alt="Bilde" src={avatar} className="avatar" />
    </div>
  );
};

export default About;
