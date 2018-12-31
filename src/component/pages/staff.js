import React, { Component } from 'react';
// import{
//     Link
// } from 'react-router-dom';
import Menu from '../common/menu/menu.js';
import Usertable from '../common/table/user_table.js';
import Footer from '../common/footer/footer.js';

class Staff extends Component {
  constructor(props){
     super(props);
     this.state={
        actualData :this.props.nameList
     }
    //  this.delteUser=this.delteUser.bind(this);
    this.exportData=this.exportData.bind(this);
    this.uploadHandler=this.uploadHandler.bind(this);
    this.uploadFileData=this.uploadFileData.bind(this);
    
 }

  componentDidMount(){
   this.props.fetchData();  
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
      const sidebar = (
            this.props.nameList.map((userData,index) =>
            <div style={{ height:"90px"}}>
              
              <Usertable data={{userData}}/>
           
            </div>
            )
        );

    return (
       <div className="row">
        <Menu/>
        <div className="pannel">
        {sidebar}
        </div>
        <Footer/>
       </div>
    );
  }
}

export default Staff;
