import NavBar from "./components/navBar";
import "./assets/styles.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Projects from "./components/projects";
import crankTheCoal from "./components/projects/crankTheCoal";
import jolaspelet from "./components/projects/jolaspelet";
import Tower from "./components/projects/theTower";
import ClimateCalculator from "./components/projects/climateCalculator";
import TheBog from "./components/projects/theBog";
import About from "./components/about";
import BlackboardNightMare from "./components/projects/blackboardNightmare";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Home />
        <NavBar />
        <div id="projectPlacement" />
        <Route exact path="/" component={Projects} />
        <Route exact path="/crankTheCoal" component={crankTheCoal} />
        <Route exact path="/jolaspelet" component={jolaspelet} />
        <Route exact path="/theTower" component={Tower} />
        <Route exact path="/climateCalculator" component={ClimateCalculator} />
        <Route exact path="/theBog" component={TheBog} />
        <Route
          exact
          path="/blackboardNightmare"
          component={BlackboardNightMare}
        />
        <About />
      </div>
    </Router>
  );
}

export default App;
