import { useState } from "react";

import ProjectPreview from "./projectPreview";
import crank from "../assets/images/Crank03.PNG";
import jolaspelet from "../assets/images/Jolaspelet.PNG";
import klimakalkulator from "../assets/images/Klimakalkulator.PNG";
import turnBased from "../assets/images/TurnBased.PNG";
import theBog from "../assets/images/TheBog.png";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      title: "CRANK THE COAL, BOB",
      description: "2-player local coop-game",
      image: crank,
      url: "/crankthecoal",
      id: 1,
    },
    {
      title: "JOLASPELET 2020",
      description: "Christmas' newest tradition",
      image: jolaspelet,
      url: "/jolaspelet",
      id: 2,
    },
    {
      title: "CLIMATE CALCULATOR",
      description: "Climate Calculator prototype made for NRK",
      image: klimakalkulator,
      url: "/climateCalculator",
      id: 3,
    },
    {
      title: "THE TOWER",
      description: "Turn based puzzle game",
      image: turnBased,
      url: "/theTower",
      id: 4,
    },
    {
      title: "THE BOG",
      description: "Turn based puzzle game",
      image: theBog,
      url: "/theBog",
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
            description={project.description}
            url={project.url}
            key={project.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
