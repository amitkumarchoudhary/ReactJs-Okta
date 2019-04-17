import React, {
     Component
              } from 'react';
import { 
        Button,
        Dropdown
       } from 'react-bootstrap';

// import Selector from '../../../common/selector/selector.js';
class RegionView extends Component {

  constructor(props) {
    super(props);
    this.handleChange=this.handleChange.bind(this);
    // this.state = {
    //   actualData: {},
    //   userData : {}

    // };

  // this.fetchRegionData = this.fetchRegionData.bind(this);
  }

  componentDidMount() {
    //this.props.fetchRegionData();
    
  }

  handleChange(e) {
    const dd=parseInt(e.target.value);
    console.log('event form ...' + e.target.value);
    // const state = this.state.userData;
    // state[e.target.name] = e.target.value;
    // this.setState(
    //   {
    //     userData: state

    //   });
    //console.log('event form ...' + this.props);
    this.props.childSelection(dd);
  }
 
  render() {

    return (
      // <div>
      // <Selector data={this.props.fetchregionAllReducer }></Selector>
      // </div>
      <div style={{marginTop:"30px" , marginLeft :"30px",width :"150px" ,float :"left"}}>
       <select name="employee_id" defaultValue="Select ID" onChange={this.handleChange}>
              <option value="select">select</option>
              {
              
                this.props.fetchregionAllReducer.map((data, key) => {
                 return <option key={key} value={data.region_id}>{data.region_name}</option>;
                 
                 })
              }
      
       </select>       
       </div>
      
    );
  }
}

export default RegionView;
