import { Link } from "react-scroll";
import { useHistory } from "react-router-dom";

import theBog0 from "../../assets/images/TheBog.png";
import theBog1 from "../../assets/images/TheBog01.png";
import theBog2 from "../../assets/images/TheBog02.png";

const TheBog = () => {
  const history = useHistory();

  function routeToHome() {
    history.push("/");
  }

  return (
    <div className="project">
      <div className="projectHeader">
        <Link
          to="projectPlacement"
          spy={true}
          smooth={true}
          duration={500}
          onClick={routeToHome}
        >
          <i className="arrow"></i>
        </Link>

        <h1 className="projectTitle">The Bog</h1>
      </div>
      <p>
        The Bog is a game still in development by a small team led by Lykke
        Lillebøe. I worked on the project for just under a year, and while I had
        to quit to focus on school projects this is one of the projects I have
        learnt the most from. In this text I will focus on what I learned from
        this project outside of the techincal bits.
      </p>
      <img src={theBog0} alt="" />
      <div className="imageText">Concept art by Lykke Lillebøe</div>
      <h2>Communication in the Team</h2>
      <p>
        For most of the time I worked on the project we were only two people on
        the team; me doing game logic, technical art and everything in Unity,
        and Lykke doing art and game design. Collaborating on a long-term
        project taught me a lot about communication. I found I needed to explain
        what I was doing to Lykke, who did not have the same proficiency in the
        techincal parts of making games as me. This didn't go smoothly from the
        start, but after a while I started to get an understanding of what was
        understandable and not, which helped a lot.
      </p>
      <h2>Building a Community</h2>
      <p>
        When launching an indie game it's important to find early adopters to
        get the game's hype and sale going. To do this we created a discord
        server where we posted development blogs about the game and our
        progress. Through posting concept art and gifs on a few reddit sites and
        on other game development related discord servers, our server grew to
        150 people. The development blogs were the main piece of content on the
        server. Me and Lykke alternated on writing these and posted one evey
        week. These became natural talking points to start the conversation and
        discussion about the game. The community that we built turned out to be
        a great source of feedback for everything from concept art to game
        design considerations.
      </p>
      <img src={theBog1} alt="" />
      <div className="imageText">Concept art by Lykke Lillebøe</div>
      <h2>Staying Motivated</h2>
      <p>
        Staying motivated during this long project without any external
        motivation was a big challenge for me. The times it was fun and exciting
        were easy enough, but when really being stuck in a coding problem, or
        having doubts about whether the game would be any fun at all, I needed
        tools to stay motivated to work every day. One of these tools became
        essential for me.
      </p>
      <img src={theBog2} alt="" />
      <div className="imageText">Concept art by Lykke Lillebøe</div>
      <p>
        I learned how to set good goals. To set a good goal, I needed to set a
        goal where I had full control of the outcome. I could a list of tasks as
        my goal for the day, but knowing how long they would take and what
        problems would arise is an impossible task. My goal every day therefore
        became to work efficiently a certain amount of hours. This made it so
        that even on the days that I only wrote code that ended up not working,
        I was still happy as long as I had worked my best. Since most of the
        techical challenges in making the game were new to me, I spent a lot of
        time not solving the problem in an efficient way, but rather learning
        how to tackle it by heading straight at them and most of the time doing
        them completely wrong. If I considered the days I didn't create good
        solutions as bad days, I would have a really hard time staying
        motivated.
      </p>
    </div>
  );
};

export default TheBog;
