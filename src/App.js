import Navbar from "./components/Navbar";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import MealsDetails from "./components/MealsDetails";
import About from "./components/About";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/about"} component={About} />
          <Route path={"/products/:id"} component={MealsDetails} />
          <Route path={"*"} component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
