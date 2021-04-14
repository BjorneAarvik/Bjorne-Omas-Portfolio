import { useState } from "react";

import ProjectPreview from "./projectPreview";
import crank from "../assets/images/Crank03.PNG";
import jolaspelet from "../assets/images/Jolaspelet.PNG";
import klimakalkulator from "../assets/images/Klimakalkulator.PNG";
import turnBased from "../assets/images/TurnBased.PNG";
import theBog from "../assets/images/TheBog.png";
import blackboardNightmare from "../assets/images/blackboardNightmare.PNG";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      title: "CRANK THE COAL, BOB",
      image: crank,
      url: "/crankthecoal",
      id: 1,
    },
    {
      title: "JOLASPELET 2020",
      image: jolaspelet,
      url: "/jolaspelet",
      id: 2,
    },
    {
      title: "CLIMATE CALCULATOR",
      image: klimakalkulator,
      url: "/climateCalculator",
      id: 3,
    },
    {
      title: "THE TOWER",
      image: turnBased,
      url: "/theTower",
      id: 4,
    },
    {
      title: "THE BOG",
      image: theBog,
      url: "/theBog",
      id: 5,
    },
    {
      title: "BLACKBOARD NIGHTMARE",
      image: blackboardNightmare,
      url: "/blackboardNightMare",
      id: 5,
    },
  ]);

  return (
    <div id="projects">
      <h1 className="sectionHeader"></h1>
      <div>
        {projects.map((project) => (
          <ProjectPreview
            image={project.image}
            title={project.title}
            url={project.url}
            key={project.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
