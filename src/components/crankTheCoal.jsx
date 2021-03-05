import img3 from "../assets/images/Crank03.PNG";

const CrankTheCoal = () => {
  return (
    <div className="project">
      <h1 className="sectionHeader">Crank The Coal, Bob</h1>
      <p>
        Crank the Coal, Bob is a two player game about running a coal-fueled
        castle. The players need to communicate and cooperate to keep the engine
        running, while also steering away from obstacles.
      </p>
      <img src={img3} alt="" />
      <p>This game is kinda great.</p>
    </div>
  );
};

export default CrankTheCoal;
