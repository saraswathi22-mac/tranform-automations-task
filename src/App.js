import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Main from "./components/Main/Main";
import Resource from "./components/Resource/Resource";
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/resources" component={Main} />
          <Route exact path="/resource/:id" component={Resource} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
