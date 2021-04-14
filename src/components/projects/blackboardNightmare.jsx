import { Link } from "react-scroll";
import { useHistory } from "react-router-dom";

import blackboardNightmare from "../../assets/images/blackboardNightmare.PNG";

const BlackboardNightMare = () => {
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
        <h1 className="projectTitle">Blackboard Nightmare</h1>
      </div>
      <p>
        You feel your heartbeat increasing as you slowly make your way up to the
        blackboard. A million eyes are fixated at your shaky hand as you pick up
        the chalk. You look at the blackboard. The task that was so easy to
        complete at home, now seems like an impossible feat. The teacher looks
        at you doubtfully, and sternly says: "Well?"
      </p>

      <p>
        This is the feeling Blackboard Nightmare is aiming to recreate. It is a
        math game made by me and Lykke Emilie Lillebøe for GMTK Game Jam 2020, a
        48 hour game making marathon. The theme for the jam was{" "}
        <i>Out of Control</i>, and we feel we hit the theme really well with our
        game. Rather than explaining how the game works, why don't you{" "}
        <a
          href="https://lillevims.itch.io/blackboard-nightmare"
          target="_blank"
        >
          click here
        </a>{" "}
        to try it out for yourself? It runs in the browser!
      </p>

      <img src={blackboardNightmare} alt="" />
      <p>
        Lykke and I collaborated on the idea and the game design. I did the
        coding and implementation in Unity, while Lykke did all of the art and
        animations. As is often the case with Game Jams, this one was a blast.
        You get to fully realise an idea in such a short amount of time, and
        while writing clean reusable code can be satisfying, going the MacGyver
        route with spaghetti code and duct tape is so much fun. While the idea
        turned out to be pretty bad from a game design standpoint(it just isn't
        fun), I am really happy with how polished the game became in such a
        small amount of time.
      </p>
    </div>
  );
};

export default BlackboardNightMare;
