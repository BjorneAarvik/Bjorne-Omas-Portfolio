import NavBar from "./components/navBar";
import "./assets/styles.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Projects from "./components/projects";
import crankTheCoal from "./components/crankTheCoal";
import jolaspelet from "./components/jolaspelet";
import Tower from "./components/theTower";
import ClimateCalculator from "./components/climateCalculator";
import About from "./components/about";

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
        <About />
      </div>
    </Router>
  );
}

export default App;
