import React from 'react';
import{
    Link
} from 'react-router-dom';


export default function menu(props){
  
  return(
       
          <div className="col-3 menu">
            <ul>
                
                <li><Link to="/about">About</Link></li>
                <li> <Link to="/staff/contact">Contact</Link></li>
                <li> <Link to="/form">UserForm</Link></li>
                 <li> <Link to="/uploadfile">UploadFile</Link></li>
                
            </ul>
          </div>
    
  );
}
