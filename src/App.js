import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import Header from "./components/Header";
import VehicleDetail from "./components/VehicleDetail";
import "./App.css";

function App() {
  
  return (
    <div className="App">
      <Router>
      <Header />
      <Category />
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/detail:id" component={ VehicleDetail } />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
