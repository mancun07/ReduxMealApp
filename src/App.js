import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import MealsDetails from './components/MealsDetails';
import About from './components/About';


function App() {

  return (
    <Router>
    <div className="app">
    <Navbar/>
    <div className="container">
      <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route path={'/about'} component={About}/>
        <Route path={'/products/:id'} component={MealsDetails}/>
      </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
