import React from 'react';

function Selector(props){

    return (
       <div style={{marginTop:"30px" , marginLeft :"30px",width :"150px" ,float :"left"}}>
       <select name="employee_id" defaultValue="Select ID">
              <option value="select">select</option>
              {
              
                 props.data.map((data, key) => {
                 return <option key={key} >{data.region_name}</option>;
                 
                 })
              }
      
       </select>       
       </div>

)};

export default Selector;