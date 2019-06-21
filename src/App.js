import React, { Component } from 'react';
import './App.css';
import Navbar from '../src/component/layout/navbarconnect.js';
import Home from '../src/component/pages/home.js';
import Staff from '..//src/component/pages/staffconnect';
import Login from '../src/component/auth/login.js';
import { Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Contact from '../src/component/contact/contact.js';
import {Provider} from 'react-redux';
import store from '../src/store/index.js';
import UserForm from '../src/component/common/form/userconnect.js';
import history from '../src/router/history.js';
import Uploadfile from '../src/component/common/form/uploadfileconnect.js';
import FilterSearchView from '../src/component/common/filter/index.js';
import FilterUserView from'../src/component/views/common/filterUser/index.js';
import RegionView from '../src/component/views/common/region/regionView';

function onAuthRequired({ history }) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <Router history={history}>
        <Security
          issuer='https://dev-992767.oktapreview.com/oauth2/default'
          client_id='0oagxbwv58C2uWaQh0h7'
          redirect_uri={window.location.origin + '/implicit/callback'}
          scope={['openid', 'email', 'profile']}
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
              <Route path="/contact"  component={Contact} />
              <Route path="/form"  component={UserForm} />
              <Route path="/uploadfile"  component={Uploadfile} />
              <Route path="/filter"  component={FilterSearchView} />
              <Route path="/userfilter"  component={FilterUserView} />

              
              

              
             
          </div>  
          </Security>
      </Router>
      </Provider>
    );
  }
}

export default App;
