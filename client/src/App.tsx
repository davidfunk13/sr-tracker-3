// src/App.js

import React from "react";
import NavBar from "./components/NavBar";
import ExternalApi from './views/ExternalApi';
import PrivateRoute from "./components/PrivateRoutes";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";

function App() {

  return (
    <div className="App">
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;