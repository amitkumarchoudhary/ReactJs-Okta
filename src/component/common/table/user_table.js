import React from 'react';
import Custombutton from '../button/custombutton.js';
 function Usertable(props){
    const data =props.data.userData;
    return (
       <div style={{marginTop:"10px"}}>
       <ul className="a" key={data.id} style={{listStyleType: "none"}}>  
       <li>
                 <td style={{width:"700px",height:"auto"}}> 
                        <strong><span>{data.id} </span></strong>    
                        <span>{data.name}   </span>
                        <span>{data.salary}  </span>    
                        <strong><span>{data.address}  </span></strong>
                 </td> 

                 <td> 
                  
                  <Custombutton/>
                 
                 
                     
                  
                </td>
      </li>
      </ul>
       </div>
    );
}


export default Usertable;