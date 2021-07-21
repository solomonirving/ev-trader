import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ListMyCar from "./components/ListMyCar";
import Algolia from "./components/Algolia";
import VehicleDetail from "./components/VehicleDetail";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/algolia" component={ Algolia }/>
            <Route path="/vehicle-detail/:id" component={ VehicleDetail } />
            <Route path="/list-my-car" component={ ListMyCar } />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
