import React, {
     Component
              } from 'react';
import './filter.css';
import { 
        Button,
        Dropdown
       } from 'react-bootstrap';

import Usertable from '../../../common/table/user_table.js';
import RegionView from '../region/regionconnect.js';
import CountryView from '../country/countryconnect.js';
class FilterView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      actualData: {},
      userData : {},
      isSelect : true,
      regionActualData : this.props.fetchfilterAllReducer,


    };

    this.handleChange = this.handleChange.bind(this);
    this.onSeletedClick = this.onSeletedClick.bind(this);
    this.childfilterSelection=this.childfilterSelection.bind(this);
    //this.fetchRegionData=this.fetchRegionData.bind(this);
    // this.fecthAllData = this.fecthAllData.bind(this);
  }

  componentDidMount() {
    
    this.props.fetchUserByAllId();
    // const fetchallDataItem = this.props.fetchUserByIdData;
    // this.fecthAllData();
    this.setState({ actualData : this.props.fetchfilterAllReducer});
    this.props.fetchRegionData();
    
  }

  // fecthAllData(){
  //   this.setState({fetchAllData : this.props.fetchUserByIdData})
  // }

  handleChange(e) {
    console.log('event form ...' + e);
    const state = this.state.userData;
    state[e.target.name] = e.target.value;
    this.setState(
      {
        userData: state,
        selectRegion: null

      });

    // this.setState({dataID : e.target.value})
  }


  // handleChangeSelect(e) {
  //   //  const id=this.state.userData;
  //   console.log("handleChangeSelect is called..." + e.target.value)
  // }

  // onDataClick() {

    
  // }

  onSeletedClick() {

    this.props.fetchUserBySelectionData(this.state.userData);
  }
  // fetchRegionData(){
  //   //this.props.fetchRegion();
  // }


  childfilterSelection(selectdata){
    console.log("selectdata..............",selectdata);
    this.setState({
      userData : selectdata,
      isSelect : false

    });

    this.props.fetchUserBySelectionData(this.state.userData);
  }

  onChangeTextColor(e) {
    var newselectRegion = e.target.value;
    this.setState({selectRegion: newselectRegion});
}
  render() {

    // const filterById=(
    // <ul className="ul1">
    //    <li>
    //       <div style={{ width: "120px", height: "30px" }}>

    //         <select name="employee_id" defaultValue="Select ID" onChange={this.handleChange}>
    //           <option value="select">select</option>
    //           {
    //                       this.props.fetchfilterAllReducer.map((employee_id, key) => {

    //                             // const departmentData=employee_id.department_id.map((department_id)=>{
    //                               const departmentData=employee_id.department_id;

    //                                   const locationData=departmentData.location_id.map((location_id)=>{

    //                                           // const countryData=location_id.country_id.map((country_id)=>{
    //                                             const countryData=location_id.country_id;
    //                                             const regionData=countryData.region_id;

    //                                                   // const regionData=countryData.region_id.map((region_id)=>{
    //                                                   //   return <option key={key} >{region_id.region_name}</option>;
    //                                                   // })
                                                 
    //                                           //  return regionData;
    //                                           // })
    //                                           return <option key={key} >{regionData.region_name}</option>;
                                              

    //                                   //return countryData;
    //                                   })

    //                             return  locationData;
                   
    //                     //  });
    //                      //return departmentData;
    //           })
            
    //       }
    //         </select>


    //       </div>
       
    //    </li>
    //    <li></li>
    //    <li></li>
    
    // </ul>
    // );

    // const filterBydDpartmentId=(
    // <ul className="ul1">
    //    <li>
    //       <div style={{ width: "120px", height: "30px" }}>

    //         <select name="country" defaultValue="Select ID" onChange={this.handleChange}>
    //           <option value="select">select</option>
    //           {
    //            this.props.fetchfilterAllReducer.map((employee_id, key) => {
    //             const department_id_option= employee_id.department_id.map((department_id,key)=>{
    //                 return <option key={key} value={department_id.value}>{department_id.department_name}</option>;
    //              })
    //             return department_id_option;
    //           })}
    //            }
    //            {

                 
    //            }

               
              
    //         </select>


    //       </div>
       
    //    </li>
    //    <li></li>
    //    <li></li>
    
    // </ul>
    // );


  const buttonIcon=false;
    const sidebarAllData = (
      this.props.fetchfilterAllReducer.map((userData, index) =>
        <div style={{ height: "80px" }}>
           <Usertable data={{userData}}  dataShow={{buttonIcon}}/>
        </div>
      )
    );


    return (
      <div>
        <div className="">
        <RegionView   childSelection={this.childfilterSelection} actualdata={this.props.fetchfilterAllReducer}></RegionView>
        <CountryView   isSelect={this.state.isSelect}></CountryView>
        <RegionView ></RegionView>
        <RegionView></RegionView>
        </div>

        <Button style={{ float: "right", marginRight: "40px", }} onClick={this.onSeletedClick}> Submit</Button>
          <div className="container3"> 
            {sidebarAllData}
          </div>
        
        </div>
    );
  }
}

export default FilterView;
