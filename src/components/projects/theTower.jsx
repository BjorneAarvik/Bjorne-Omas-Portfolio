import turnBased from "../../assets/images/TurnBased.PNG";
import turnBasedLevelLayout from "../../assets/images/TurnBasedLevelLayout.PNG";
import levelEditor from "../../assets/videos/tower_LevelEditor.mp4";
import level1 from "../../assets/videos/tower_Level1.mp4";

const TheTower = () => {
  return (
    <div className="project">
      <h1 className="sectionHeader">The Tower</h1>
      <p>
        The Tower is a turn-based puzzle game about getting colored boxes to
        their colors side of a tower. I made the prototype in about a week, and
        I learned a lot from it. Let me show you how it works!
      </p>
      <img src={turnBased} alt="" />
      <h2>The Game</h2>
      <p>
        The game is turn based, and each turn the player can move one of it's
        green "hero" boxes up to three tiles. After the player has moved, the
        blue and red "enemy" boxes move one tile in the direction that their
        arrow indicates. If there is a green box in the way of an enemy moving,
        it will instead turn to face the other colors side. If two enemies move
        into the same square on the same turn, they both dissapear. The players
        goal is to get all of the enemies to their colors side.
      </p>
      <video src={level1} controls></video>
      <h2>The Data Structure</h2>
      <p>
        The heart of the data structure is the Tile Manager, which holds the two
        dimensional array of tiles that represent the board. It also has methods
        for changing the colors of the tiles based on who's turn it is, and also
        which hero the player has chosen(if any).
      </p>
      <p>
        Another key piece of the puzzle is the Unit Manager. It holds a List of
        all the Units in the current level. Each unit holds an (int, int)-tuple
        which represents it's position on the board, and is a member of one of
        the subclasses Enemy or Hero. The Enemy class holds a color(blue or red)
        and the direction they are going in. Each turn, the Unit Manager tells
        the Tile Manager which state the game is in, and feeds it which Hero has
        been chosen. The Tile Manager then updates the colors of the tiles to
        show the player which tiles can be clicked.
      </p>
      <div className="dirRow">
        <p>
          The layout of each level is stored in a scriptable object class named
          LevelLayout. Scriptable objects in Unity are scripts that can be
          instantiated on files in the project instead of on objects in the
          scene. Each Level Layout holds an array of all the hero starting
          positions and all the enemy starting positions in the level. The enemy
          starting positions also contain which color the enemy is, and which
          direction it starts in. With this system I can create new Level Layout
          files and set the position of all the units, as shown in the picture.
          While this solution technically works, it is incredibly tedious, since
          you have to count out where each piece is on the x- and y-axes.
          Luckily I had an idea on how to simplify this process.
        </p>
        <img src={turnBasedLevelLayout} alt="" />
      </div>

      <h2>The Level Editor</h2>
      <p>
        The level editor lets me click tiles and use keys on the keyboard to
        change it. The operations include creating a hero, creating an enemy,
        deleting a unit, changing the color of an enemy, and changing an enemies
        starting rotation. This tool makes creating and levels a lot faster, and
        infinitely more intuitive.
      </p>
      <video src={levelEditor} controls></video>
    </div>
  );
};

export default TheTower;
