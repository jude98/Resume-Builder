import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import CreateResume from "./Components/CreateResume";
import ResumeTable from "./Components/ResumeTable";

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new-resume" component={CreateResume} />
        <Route path="/view-resume" component={ResumeTable} />
      </Switch>
    </Router>
  );
};

export default App;
