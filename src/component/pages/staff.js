import React, { Component } from 'react';
// import{
//     Link
// } from 'react-router-dom';
import Menu from '../common/menu/menu.js';
import Usertable from '../common/table/user_table.js';
import Footer from '../common/footer/footer.js';

import {Pagination,Pager} from 'react-bootstrap';

class Staff extends Component {
  constructor(props){
     super(props);
     this.state={
        actualData :this.props.nameList,
        currentUserName : '',
        currentUserEmail:''
     }
    //  this.delteUser=this.delteUser.bind(this);
    this.exportData=this.exportData.bind(this);
    this.uploadHandler=this.uploadHandler.bind(this);
    this.uploadFileData=this.uploadFileData.bind(this);
    
 }

  componentDidMount(){
   this.props.fetchData();  
   const idToken=JSON.parse(localStorage.getItem('okta-token-storage'));
   this.setState({
        currentUserEmail: idToken.idToken.claims.email,
        currentUserName: idToken.idToken.claims.name

     
   })
 }

 exportData(id){
  alert('id here....'+ id);
 }

 uploadHandler(){
  alert('uploaded data');
 }

 uploadFileData(e){
   
   let files=e.target.files;
   let reader=new FileReader();
   reader.readAsDataURL(files[0]);
  //  reader.onload=(e)=>{
  //    const formdata={file : e.target.result};
  //     console.log('formdata....',JSON.stringify(formdata));
  //     this.props.uploadFile(formdata);
  //  }
  const formdata={file : e.target.files};
      console.log('formdata....',JSON.stringify(formdata));
      this.props.uploadFile(formdata);
   
 }

  render() {
    const buttonIcon=true;
      const sidebar = (
            this.props.nameList.map((userData,index) =>
            <div style={{ height:"80px"}}>
              
              <Usertable data={{userData}} deleteData={this.props.deleteData} dataShow={{buttonIcon}}/>
           
            </div>
            )
        );

    return (
       <div className="row">
        <Menu/>
        <div className="pannel">
        {sidebar}
        
           
        </div>
        <div style={{marginLeft:"400px"}}>
        <Pager>
              <Pager.Item href="#">Previous</Pager.Item>{' '}
              <Pager.Item href="#">Next</Pager.Item>
        </Pager>
        </div>
        <Footer/>
       </div>
    );
  }
}

export default Staff;
