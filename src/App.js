import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import "./App.css";

function App() {
  
  return (
    <div className="App">
      <Router>
      <Header />
      <Navigation />
          <Switch>
            <Route exact path="/" render={(renderProps) => <Home {...renderProps} />} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
