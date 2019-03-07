import React, {
  Component
} from 'react';
import './filter.css';
// import history from '../../../router/history.js';
import { Button, Dropdown } from 'react-bootstrap';
import Usertable from '../table/user_table.js';
class FilterView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      dataID: null,
      fetchAllData:{},

    };

    this.handleChange = this.handleChange.bind(this);
    this.onDataClick = this.onDataClick.bind(this);
    this.fecthAllData = this.fecthAllData.bind(this);
  }

  componentDidMount() {

    this.props.fetchUserByAllId();
    // const fetchallDataItem = this.props.fetchUserByIdData;
    this.fecthAllData();
    
  }

  fecthAllData(){
    this.setState({fetchAllData : this.props.fetchUserByIdData})
  }

  handleChange(e) {
    // console.log('event form ...' + e);
    // const state = this.state.userData;
    // state[e.target.name] = e.target.value;
    // this.setState(
    //   {
    //     userData: state

    //   });

    this.setState({dataID : e.target.value})
  }


  handleChangeSelect(e) {
    //  const id=this.state.userData;
    console.log("handleChangeSelect is called..." + e.target.value)
  }

  onDataClick() {

    const id = this.state.dataID;
    this.props.fetchUserById(id);
  }

  onSeletedClick(e) {

    const selectedid = this.state.userData;
    console.log("selectedid", selectedid);
  }



  render() {
    const actuaAllData = this.props.fetchUserByIdData;
     const sidebar = (

            <div style={{ height:"20px"}}>
            <nav className="nav1">
              <ul className="ul1">
              <li className="li1">

              <span className="span1">
                 ID
              </span>
                  

               <span className="span1">
                 NAME
              </span>

              <span className="span1">
                 SALARY
              </span>

              <span className="span1">
                 Email
              </span> 

              <span className="span1">
                 FILELOACTION
              </span>  
                  
                 
                    
                 
              

              </li>
              <li className="li1">
                  <span className="span1">
                      {this.props.fetchUserByIdData.employee_id}
                  </span>

                  <span className="span1">
                    {this.props.fetchUserByIdData.first_name}
                  </span>

                  <span className="span1">
                    {this.props.fetchUserByIdData.salary}
                  </span>

                  <span className="span1">
                    {this.props.fetchUserByIdData.email}
                  </span>

                  <span className="span1">
                    {this.props.fetchUserByIdData.filelocation}
                  </span>
             
              </li>
               </ul>   
           </nav>
            </div>

        );

    // const sidebar = (
    //   actuaAllData.map((userData, index) => {
    //     if (userData.id == 121) {
    //       <div style={{ height: "80px" }}>


    //         if(userData.id=121){
    //           <li> {userData.id}</li>
    //         }


    //       </div>
    //     }
    //   }

    //   )
    // );

    // const sidebarAllData = (
    //   this.props.fetchUserByIdData6.map((userData, index) =>
    //     <div style={{ height: "80px" }}>

    //       ID : {userData.employee_id}
    //       Name : {userData.first_name}
    //       SALARY : {userData.salary}

    //     </div>
    //   )
    // );


    return (
      <div>
        <div className="">



          <div className="container2">


            <div style={{ marginTop: "10px" }}>
              <label for="fname">ID</label> <input style={{ width: "700px" }} type="text" name="id" required="required" value={this.state.id} onChange={this.handleChange} placeholder="Your name.." />
              <Button style={{ float: "right", marginRight: "40px" }} onClick={this.onDataClick}> Submit</Button>
            </div>

            {sidebar}
          </div>

           {/**
            * {sidebarAllData}
            */}

        </div>

{/**
 * <div className="container2">

          <div style={{ width: "120px", height: "30px" }}>

            <select name="country" defaultValue="Select ID" onChange={this.handleChangeSelect}>
              <option value="select">select</option>
              {this.props.fetchUserByIdData.map((e, key) => {
                return <option key={key} value={e.value}>{e.name}</option>;
              })}
            </select>


          </div>
 */}
        

{/*
          <div style={{ width: "950px", height: "185px", overflow: "auto" }}>
            {sidebarAllData}
          </div>
*/}
        </div>
      // </div>

    );
  }
}

export default FilterView;
