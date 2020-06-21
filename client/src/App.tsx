import React from "react";
import clsx from 'clsx';
import ExternalApi from './views/ExternalApi';
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import { Welcome, Dashboard, Profile } from './views'
import { Container, useMediaQuery } from "@material-ui/core";
import { useAuth0 } from './react-auth0-spa';
import { NavBar, PrivateRoute } from './components';
import useStyles from "./App.Styles";
import DrawerRight from "./components/DrawerRight/DrawerRight.Component";
import useDrawer from './hooks/useDrawer/useDrawer.Hook';
import Link from "./views/Link/Link.View";

const App = () => {
  const { isAuthenticated } = useAuth0();

  const { open, handleDrawerClose, handleDrawerOpen } = useDrawer();

  const classes = useStyles();

  const route = isAuthenticated ? Dashboard : Welcome;

  return (
    <Router history={history}>

      <header >
        <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
      </header>

      <DrawerRight open={open} handleDrawerClose={handleDrawerClose} />

      <main className={clsx(classes.content, { [classes.contentShift]: open })}>
        <Container maxWidth={'md'}>
          <Switch>
            <Route path="/" exact component={route} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/link" component={Link} />
          </Switch>
        </Container>
      </main>

    </Router>
  );
};

export default React.memo(App);