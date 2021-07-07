import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ListMyCar from "./components/ListMyCar";
// import Header from "./components/Header";
import VehicleDetail from "./components/VehicleDetail";
import "./App.css";

function App() {
  
  return (
    <div className="App">
      <Router>
      {/* <Header /> */}
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/vehicle-detail/:id" component={ VehicleDetail } />
            <Route path="/list-my-car" component={ ListMyCar } />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
