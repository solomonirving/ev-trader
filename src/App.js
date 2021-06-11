import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Navbar />
          <Switch>
            <Route exact path="/" />
            <Home />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
