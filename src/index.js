import React from 'react'
import ReactDOM from 'react-dom'

//imports for Auth0
//import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import history from "./utils/history";

import NavBar from "./components/NavBar/NavBar";
import { useAuth0 } from "./react-auth0-spa";

import { Provider } from 'react-redux'
import store from './store'

import Calendar from './containers/Calendar'
//import Groceries from './containers/Groceries'
import './index.scss'

//Routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

function App() {

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <header>

        <Provider store={store}>
          <Container>
            <Row>
              <Col >
                <Calendar />
              </Col>
            </Row>
          </Container>
        </Provider>
      </header>
    </div>
  );
}

ReactDOM.render(

  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <Router>
      <Link to=' '>
      </Link>
      <Switch>
        <Route path="">
          <App />
          <NavBar />
        </Route>
      </Switch>
    </Router>
  </Auth0Provider>,
  document.getElementById("root")

)
