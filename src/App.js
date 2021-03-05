import NavBar from "./components/navBar";
import "./assets/styles.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Projects from "./components/projects";
import crankTheCoal from "./components/crankTheCoal";
import jolaspelet from "./components/jolaspelet";
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
        <Route exact path="/crankTheCoal" component={jolaspelet} />
        <About />
      </div>
    </Router>
  );
}

export default App;
