import React from "react";
import clsx from 'clsx';
import history from "./utils/history";
import { useAuth0 } from './react-auth0-spa';
import { Router, Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import useStyles from "./App.Styles";
import DrawerRight from "./components/DrawerRight/DrawerRight.Component";
import NavBar from './components/NavBar/NavBar.Component';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.Component';
import Dashboard from './views/Dashboard/Dashboard.View'
import Link from "./views/Link/Link.View";
import Profile from './views/Profile/Profile.View';
import Welcome from './views/Welcome/Welcome.View';
import useDrawer from './hooks/useDrawer/useDrawer.Hook';
import Stats from "./views/Stats/Stats.View";
import AppProps from "./App.Types";
import Session from './views/Session/Session.View';
import SelectBattletag from "./views/SelectBattletag/SelectBattletag.View";
import SelectedSession from "./views/SelectedSession/SelectedSession.View";

const App: React.FC<AppProps> = () => {
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
        <Container maxWidth={'sm'}>
          <Switch>
            <Route path="/" exact component={route} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/link" component={Link} />
            <PrivateRoute path="/stats" component={Stats} />
            <PrivateRoute path="/select" component={SelectBattletag} />
            <PrivateRoute path="/session/selected" component={SelectedSession} />
            <PrivateRoute path="/session" component={Session} />
          </Switch>
        </Container>
      </main>
    </Router>
  );
};

export default React.memo(App);