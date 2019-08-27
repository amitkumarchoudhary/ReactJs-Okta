import React from 'react';
import  garbage  from  '../../styles/image/garbage.svg';
import  edit  from  '../../styles/image/edit.svg';
import  download  from  '../../styles/image/download.svg';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


 function Custombutton(props){

//    const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4'
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   }
// });

// const MyDocument = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>Section #1</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>Section #2</Text>
//       </View>
//     </Page>
//   </Document>
// );
   const dataButtonIcon=props.dataShow.buttonIcon;


   var loginButton;
        if (dataButtonIcon) {
            loginButton = <div style={{marginTop:"20px"}}>
       <ul className="a"  style={{listStyleType: "none"}}>  
       <li style={{float:"left"}}>
                 <td> 
                  <span style={{width:"10px",height:"10px"}}>
                   <img src={edit} style={{height:"30px",width:"30px"}}/>
                  </span>
                  <span style={{width:"10px",height:"10px"}} onClick={()=>props.deleteData(props.data)}>
                   <img src={garbage} style={{height:"30px",width:"30px",marginLeft:"10px"}}/>
                  </span>
                   <span style={{width:"10px",height:"10px"}}>
                   <img src={download} style={{height:"30px",width:"30px",marginLeft:"10px"}}/>
                   {/*<Document>
  
  </Document>*/}
                  </span> 
                </td>
      </li>
      </ul>
       </div>;
       } else {
            loginButton = <h1 />;
      }
    return (

      <div>

      {/**
       * <div style={{marginTop:"20px"}}>
       <ul className="a"  style={{listStyleType: "none"}}>  
       <li style={{float:"left"}}>
                 <td> 
                  <span style={{width:"10px",height:"10px"}}>
                   <img src={edit} style={{height:"30px",width:"30px"}}/>
                  </span>
                  <span style={{width:"10px",height:"10px"}} onClick={()=>props.deleteData(props.data)}>
                   <img src={garbage} style={{height:"30px",width:"30px",marginLeft:"10px"}}/>
                  </span>
                   <span style={{width:"10px",height:"10px"}}>
                   <img src={download} style={{height:"30px",width:"30px",marginLeft:"10px"}}/>
                  </span> 
                </td>
      </li>
      </ul>
       </div>
       */}
       {loginButton}
       
       </div>
    );
}


export default Custombutton;