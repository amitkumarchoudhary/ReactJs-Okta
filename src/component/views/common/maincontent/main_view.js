import React, { Component } from 'react';
import Navbar from '../../../layout/navbarconnect.js';
import { Router, Route } from 'react-router-dom';
import Contact from '../../../contact/contact.js';
import FilterSearchView from '../../common/filterUser/index.js';
import FilterUserView from'../../../views/common/filterUser/index.js';
import UserForm from '../../../common/form/userconnect.js';
import history from '../../../../router/history.js';
// import Uploadfile from '../src/component/common/form/uploadfileconnect.js';

function onAuthRequired({ history }) {
  history.push('/login');
}
class MainView extends Component {
    render() {

      return (
        <div className="App">
        
          {/*<Navbar />*/}
          
          <Navbar/>
          <Router history={history}>
        
          <div className="App">
              <Route path="/contact"  component={Contact} />
              <Route path="/mainview/form"  component={UserForm} />
              {/*<Route path="/uploadfile"  component={Uploadfile} />*/}
              {/*<Route path="/filter"  component={FilterSearchView} />
              <Route path="/userfilter"  component={FilterUserView} />   */}
          </div> 
      </Router>
        </div>
      );
    }
}

export default MainView;
