import React, { Component } from 'react';
import{
    Link
} from 'react-router-dom';

class Menu extends Component {
   constructor(props, context) {
    super(props, context);


    this.state = {
      show: true
    };
  }
  
  render(){
  
  return(
       
          <div className="col-3 menu">
            <ul>
                <li><Link to="/about">About</Link></li>
                <li> <Link to="/contact">Contact</Link></li>
                <li> <Link to="/form">UserForm</Link></li>
                <li> <Link to="/uploadfile">UploadFile</Link></li>  
            </ul>
          </div>
    
  );

}

}

export default Menu;