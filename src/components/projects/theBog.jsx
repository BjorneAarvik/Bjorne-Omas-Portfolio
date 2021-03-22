import theBog1 from "../../assets/images/TheBog.png";

const TheBog = () => {
  return (
    <div className="project">
      <h1 className="sectionHeader">The Bog</h1>
      <p>The bog blablabla</p>
      <img src={theBog1} alt="" />
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
      <video src={theBog1} controls></video>
      <h2>The Data Structure</h2>
      <p>
        The heart of the data structure is the Tile Manager, which holds the two
        dimensional array of tiles that represent the board. It also has methods
        for changing the colors of the tiles based on who's turn it is, and also
        which hero the player has chosen(if any).
      </p>
    </div>
  );
};

export default TheBog;
