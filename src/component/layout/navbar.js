import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
 constructor(props) {
    super(props);
    this.state = {
     count : this.props.data
    }   
    
};
  componentDidMount(){
    let id=1;
    // this.props.fetchUserPermission(id);
    // this.state.count=1;
    this.setState({
      count : this.state.count + 1
    });
 }

  render() {
    var navBarData=true;
    // let count=1;
    // let data=this.props.data;
    // data=true;
    if (this.props.data) {
      
      navBarData= <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Akc Staff Portal
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/staff">
                  Staff
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/form">
                  UserForm
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to="/filter">
                  Search
                </Link>
              </li>

               <li className="nav-item">
                <Link className="nav-link" to="/userfilter">
                  UserFilter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    } else {
     <div></div>
    }
    return (
      // <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      //   <div className="container">
      //     <Link className="navbar-brand" to="/">
      //       Akc Staff Portal
      //     </Link>
      //     <button
      //       className="navbar-toggler"
      //       type="button"
      //       data-toggle="collapse"
      //       data-target="#navbarNav"
      //     >
      //       <span className="navbar-toggler-icon" />
      //     </button>
      //     <div className="collapse navbar-collapse" id="navbarNav">
      //       <ul className="navbar-nav ml-auto">
      //         <li className="nav-item">
      //           <Link className="nav-link" to="/">
      //             Home
      //           </Link>
      //         </li>
      //         <li className="nav-item">
      //           <Link className="nav-link" to="/staff">
      //             Staff
      //           </Link>
      //         </li>
      //         <li className="nav-item">
      //           <Link className="nav-link" to="/contact">
      //             Contact
      //           </Link>
      //         </li>

      //         <li className="nav-item">
      //           <Link className="nav-link" to="/mainview/form">
      //             UserForm
      //           </Link>
      //         </li>
      //          <li className="nav-item">
      //           <Link className="nav-link" to="/filter">
      //             Search
      //           </Link>
      //         </li>

      //          <li className="nav-item">
      //           <Link className="nav-link" to="/userfilter">
      //             UserFilter
      //           </Link>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
      <div>{navBarData}</div>
    );
  }
}

export default Navbar;
