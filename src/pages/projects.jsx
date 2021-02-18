import React from "react";
import ProjectPreview from "../components/projectPreview";

import crank from "../assets/images/CrankTheCoal.PNG";

const Projects = () => {
  return (
    <div className="home">
      <h1 className="centered">Projects</h1>
      <ProjectPreview
        image={crank}
        title="Crank The Coal, Bob"
        description="This game is friggin awesome, dude!"
      ></ProjectPreview>
      <ProjectPreview
        image={crank}
        title="Crank The Coal, Bob"
        description="This game is friggin awesome, dude!"
      ></ProjectPreview>
      <ProjectPreview
        image={crank}
        title="Crank The Coal, Bob"
        description="This game is friggin awesome, dude!"
      ></ProjectPreview>
    </div>
  );
};

export default Projects;
