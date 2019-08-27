import React from 'react';
import Custombutton from '../button/custombutton.js';
import Usermodelview from '../../views/common/usermodelview/user_model_view.js';
 function Usertable(props){
     const data =props.data.userData;
     const dpt =props.data.userData.department_id;
     const buttonIcon =props.dataShow.buttonIcon;
     let popUp=false;
     

     function handleClick(e) {
      e.preventDefault();
      // <Usermodelview usermodel={true}/>
      return data;
    
    }
    
    // var department_id = data.department_id.map(function(department_id) {
    //                 return (
    //                     <td>
    //                     {department_id.department_name}
    //                     {department_id.manager_id}
                        
    //                     </td>
                        
    //                 )
    // });

                //   const location_id = data.department_id.map((department_id , index) => {

                //                   const location = department_id.location_id.map((location_id,index ) => {
  
                //                             //  const country = location_id.country_id.map((country_id,index ) => {


                //                             //    return (
                //                             //       <td>
                                                  
                                                 
                //                             //       </td>
                //                             //     );          

                //                             //  });

                                  
                //                               return (
                //                                   <td>
                //                                   <span>{location_id.street_adress}</span>
                //                                   <span>{location_id.state_province}</span>
                                                 
                //                                   </td>
                //                                 );

                //                   });

                //            return (
                //                     <td>
                //                         <span>{location}</span> 
                                       
                //                     </td>
                //                     ); 



                //   });
                  


              //   var country_id = data.department_id.map((department_id , index) => {
                  
              //             const location = department_id.location_id.map(location_id => {

              //             const country=location_id.country_id.map(country_id =>{

              //              return(
              //                  <td>
              //                 </td>
              //              );
              //             });

              //               return (
              //                 <td>
              //                 </td>
              //               );
              //             });

              //               return(
              //                 <td>{location}</td>                                   
              //               );
              // });



    return (
       <div style={{marginTop:"10px"}}>
         {/* <Usermodelview usermodel={true}/> */}
       <ul className="a" key={data.id} style={{listStyleType: "none"}}>  
       <li>
                 <td style={{width:"850px",height:"auto"}}> 
                        <a href="" onClick={handleClick} value={data.employee_id}><strong><i>{data.employee_id} </i></strong></a>
                        {/*<Usermodelview dataShow={data.employee_id}/>    */}
                        <span>{data.first_name}   </span>
                        <span>{data.last_name}   </span>
                        <span>{data.salary}  </span>    
                        <strong><span>{data.email}  </span></strong>
                        <span>{data.filelocation}  </span>
                       <strong> <span>{data.created_Date}  </span></strong>
                        <span>{data.phone_number}  </span>
                       
                        {/*
                             <strong><span>{department_id}  </span></strong>
                        {location_id}
                    */}
                        
                        
                        
                 </td> 

                 <td> 
                  
                  <Custombutton deleteData={props.deleteData} data={data.id}  dataShow={{buttonIcon}}/>
                 
                 
                     
                  
                </td>
      </li>
      </ul>
       </div>
    );
}


export default Usertable;