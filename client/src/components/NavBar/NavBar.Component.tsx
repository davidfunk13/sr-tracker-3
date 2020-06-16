import React from "react";
import clsx from 'clsx';
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";
import { Menu as MenuIcon } from '@material-ui/icons';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import useStyles from './NavBar.Component.Styles';
import NavBarProps from './NavBar.Component.Types';
import useMediaQuery from "@material-ui/core/useMediaQuery";

const NavBar: React.ComponentType<NavBarProps> = ({ open, handleDrawerOpen }) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const classes = useStyles();

  const titleMaxWidth = '(max-width:500px)'

  const matches = useMediaQuery(titleMaxWidth);

console.log(open, !isAuthenticated, open && !isAuthenticated)


  return (
    <div className={clsx(classes.appBar, { [classes.appBarShift]: open, })}>
      <AppBar position="static">
        <Toolbar>

          {!isAuthenticated &&
            <Button className={classes.loginButton} variant={'contained'} color={'secondary'} onClick={() => loginWithRedirect({})}>Log in</Button>
          }

          {isAuthenticated &&
            <Button className={classes.loginButton} variant={'contained'} color={'secondary'} onClick={() => logout()}>Log out</Button>
          }

          <Typography className={clsx(classes.title, { [classes.titleSm]: matches })} variant="h6" >
            Overwatch Dashboard
          </Typography>

          <IconButton disabled={!isAuthenticated || open } onClick={() => handleDrawerOpen()} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
      {/* {isAuthenticated && (
      <span>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/profile">Profile</Link>
        <Link to="/external-api">External API</Link>
      </span>
    )} */}
    </div>
  );
};

export default NavBar;