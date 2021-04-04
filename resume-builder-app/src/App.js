import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import CreateResume from "./Components/CreateResume";
const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new-resume" component={CreateResume} />
      </Switch>
    </Router>
  );
};

export default App;
