import img3 from "../assets/images/Crank03.PNG";
import trello from "../assets/images/CrankTrello.PNG";
import catapult from "../assets/images/CrankCatapult.png";
import anim1 from "../assets/videos/CamperSitting.mp4";
import anim2 from "../assets/videos/Idle.mp4";
import anim3 from "../assets/videos/Run.mp4";

const CrankTheCoal = () => {
  return (
    <div className="project">
      <h1 className="sectionHeader">Crank The Coal, Bob</h1>
      <p>
        Crank the Coal, Bob is a two player game about driving a coal-fueled
        motorized castle. The players need to communicate and cooperate to keep
        the engine running, while also steering away from obstacles. The game
        can be downloaded and played{" "}
        <a href="https://bjorne-oma.itch.io/crank-the-coal-bob" target="_blank">
          here
        </a>
        .
      </p>
      <img src={img3} alt="" />
      <h2>The Idea</h2>
      <p>
        I solo developed this project in a week in the beginning of January
        2021, using mainly Unity with C# and Blender. The project had two main
        purposes: Practicing low poly 3d-art(as I had just started learning
        Blender), and completing a project in a limited amount of time.
      </p>

      <p>
        I gave myself one week to complete the game, and started right away by
        brainstorming ideas. After splatting enough ink on my virtual
        whiteboard, the idea came to me. I wanted to replicate the game-feel of
        one of my favorite games, Overcooked. Overcooked is a multiplayer
        local-coop game about running a restaurant with all kinds of impractical
        kitchens. It is heavily reliant on cooperation, and it is also chaotic
        and a ton of fun.
      </p>
      <p>
        I don't know how the idea of creating a coal-fueled castle came to me,
        but when it did I went with it, as the clock was ticking. I quickly
        sketched the game, and spent some time figuring most of the tasks that
        needed to be done.
      </p>

      <h2>Getting Organized</h2>
      <p>
        To organize all these tasks, and to make sure I was always on track to
        finish the game in time, I used Trello. I divided all the tasks by type,
        i.e. coding, modeling, animation, and set a date for each of the
        categories to be finished. This ended up working great, and in the end
        the (very close to) empty trello board was a beatiful sight.
      </p>
      <img src={trello} alt="" />

      <h2>Art</h2>
      <div className="dirRow">
        <p>
          The style I went for is a simplistic low-poly 3d-look. This style has
          two big advantages over a lot of other styles. It's low poly count
          makes it very performant, which means I don't need to spend a lot of
          time optimizing. It is also very quick and easy to make, which is
          cruicial for a project with a time budget of a week.
        </p>
        <img src={catapult} alt="" />
      </div>

      <p>
        I modeled all the meshes in Blender, a powerful and free 3d software. I
        reused as much as possible, for example by only making one human and
        using it for both the players and all the NPCs(non-player characters) in
        the game. Some of the models were static, for example the trees and
        rocks, while others needed to be animated. To do this, I rigged them,
        which is to create a bone structure that deforms the mesh automatically.
        This made it so I could just rotate a few bones instead of moving
        hundreds of vertices when animating.
      </p>
      <div className="dirRow">
        <video src={anim1} controls></video>
        <video src={anim3} controls></video>
      </div>
      <h2>Logic</h2>
      <p>
        The code for this game was quite simple to make, as there were no
        complex systems like enemy AI or loading and unloading objects
        dynamically. My main focus was on balancing writing scalable and clean
        code so finding bugs would be easier, and writing quick dirt code that
        would get the job done.
      </p>
      <h2>SFX and VFX</h2>
      <p>
        For the sound I used the free sound library Zapsplat.com. It had all the
        sounds I needed from engine noise to people shouting. I processed the
        audio in Audacity, a free audio editing sofware.
      </p>
      <p>
        The VFX were also quite simple. All the particles in the game are made
        up of cubes. For the smoke, I made black transparent cubes that grow
        over time. The fire particles have an emissive material(they give off
        light) and shrink over time. The results were more than acceptable. I
        especially like the look on the forests that catch fire. Look at that
        bloom!
      </p>
      {/*Video av skog som brenner */}
    </div>
  );
};

export default CrankTheCoal;
