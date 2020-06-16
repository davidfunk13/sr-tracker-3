import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import history from "./utils/history";
import * as serviceWorker from './serviceWorker';
import theme from './utils/theme';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

const onRedirectCallback: any = (appState: { targetUrl: string; }) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      audience={config.audience}
      onRedirectCallback={onRedirectCallback}
    >
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();