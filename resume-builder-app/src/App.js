import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import ResumeForm from "./Components/ResumeForm";

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new-resume" component={ResumeForm} />
      </Switch>
    </Router>
  );
};

export default App;
