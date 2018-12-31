import React from 'react';
import  garbage  from  '../../styles/image/garbage.svg';
import  edit  from  '../../styles/image/edit.svg';
import  download  from  '../../styles/image/download.svg';
 function Custombutton(props){
    console.log('usertable' + JSON.stringify(props));
    return (
       <div style={{marginTop:"20px"}}>
       <ul className="a"  style={{listStyleType: "none"}}>  
       <li style={{float:"left"}}>
                 <td> 
                  <span style={{width:"10px",height:"10px"}}>
                   <img src={edit} style={{height:"30px",width:"30px"}}/>
                  </span>
                  <span style={{width:"10px",height:"10px"}}>
                   <img src={garbage} style={{height:"30px",width:"30px",marginLeft:"10px"}}/>
                  </span>
                   <span style={{width:"10px",height:"10px"}} onClick={{}}>
                   <img src={download} style={{height:"30px",width:"30px",marginLeft:"10px"}}/>
                  </span> 
                </td>
      </li>
      </ul>
       </div>
    );
}


export default Custombutton;