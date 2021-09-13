import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/About Us/AboutUs";
import Services from "./Components/Services/Services";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" exact component={Home} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="/services" exact component={Services} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
