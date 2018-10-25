import React, { Component } from 'react';
import './App.css';
import Navbar from '../../reactokta/src/component/layout/navbar.js';
import Home from '../../reactokta/src/component/pages/home.js';
import Staff from '../../reactokta/src/component/pages/staff.js';
import Login from '../../reactokta/src/component/auth/login.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';


function onAuthRequired({ history }) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
       <Router>
        <Security
          issuer='https://dev-992767.oktapreview.com/oauth2/default'
          client_id='0oagxbwv58C2uWaQh0h7'
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
        >
          <div className="App">
            <Navbar />
            
              <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/staff" exact={true} component={Staff} />
               <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-992767.oktapreview.com" />
                )}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
             
          </div>  
          </Security>
      </Router>
    );
  }
}

export default App;
