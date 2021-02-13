import Header from "./components/header";
import Home from "./pages/home";
import Skills from "./pages/skills";
import About from "./pages/about";
import "./assets/styles.css";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
