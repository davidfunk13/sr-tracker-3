

import React, { useState } from "react";
import clsx from 'clsx';
import ExternalApi from './views/ExternalApi';
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import { Welcome, Dashboard, Profile } from './views'
import { Container } from "@material-ui/core";
import { useAuth0 } from './react-auth0-spa';
import { NavBar, PrivateRoute } from './components';
import useStyles from "./App.Styles";
import DrawerRight from "./components/DrawerRight/DrawerRight.Component";
import useDrawer from './hooks/useDrawer/useDrawer.Hook';

const App = () => {
  const { isAuthenticated } = useAuth0();

  const { open, handleDrawerClose, handleDrawerOpen } = useDrawer();

  const classes = useStyles();

  return (
    <Router history={history}>
      <header>
        <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
      </header>
      <main className={clsx(classes.content, { [classes.contentShift]: open, })}>
        <Container>
          <Switch>
            <Route path="/" exact component={isAuthenticated ? Dashboard : Welcome} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/external-api" component={ExternalApi} />
          </Switch>
        </Container>
      </main>
      <DrawerRight open={open} handleDrawerClose={handleDrawerClose} />
    </Router>
  );
}

export default App;