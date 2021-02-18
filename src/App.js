import NavBar from "./components/navBar";
import Header from "./components/header";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import About from "./pages/about";
import "./assets/styles.css";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Header />
        <NavBar />
        <div className="content">
          <Route exact path="/" component={Projects} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
