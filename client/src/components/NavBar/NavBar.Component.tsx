
import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";
import { Menu as MenuIcon } from '@material-ui/icons';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import useStyles from './NavBar.Component.Styles';
import {NavBarProps} from './NavBar.Component.Types';

const NavBar: React.ComponentType<NavBarProps> = ({open, handleDrawerOpen}) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <IconButton onClick={()=> handleDrawerOpen()} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          
          {!isAuthenticated &&
            <Button variant={'contained'} color={'secondary'} onClick={() => loginWithRedirect({})}>Log in</Button>
          }

          {isAuthenticated &&
            <Button variant={'contained'} color={'secondary'} onClick={() => logout()}>Log out</Button>
          }

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