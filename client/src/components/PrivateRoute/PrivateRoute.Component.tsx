import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";
import PrivateRouteProps from "./PrivateRoute.Component.Types";

const PrivateRoute: React.ComponentType<PrivateRouteProps> = ({ component: Component, path, ...rest }) => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {

    if (loading || isAuthenticated) {
      return;
    }

    const fn = async () => {
      await loginWithRedirect({
        appState: { targetUrl: window.location.pathname }
      });
    };

    fn();

  }, [loading, isAuthenticated, loginWithRedirect, path]);

  const render = (props: any) => isAuthenticated === true ? <Component {...props} /> : null;
  console.log('hello')
  return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;