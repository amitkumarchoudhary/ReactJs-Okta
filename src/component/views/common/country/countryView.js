import React, {
    Component
             } from 'react';
            

class CountryView extends Component {

 constructor(props) {
   super(props);
   this.state = {
     actualData: {},
     userData : {},
     selectBtn : this.props.isSelect

   };
 }

 componentDidMount() {
   this.props.fetchCountryData();
   
 }

 handleChange(e) {
   console.log('event form ...' + e);
   const state = this.state.userData;
   state[e.target.name] = e.target.value;
   this.setState(
     {
       userData: state

     });
 }

 render() {
   
   return (
     
     <div style={{marginTop:"30px" , marginLeft :"30px",width :"150px" ,float :"left"}}>
     <select name="employee_id" defaultValue="Select ID" disabled={this.props.isSelect ? true : false}>
            <option value="select" >select</option>
            {
            
               this.props.fectchcountryAllReducer.map((data, key) => {
               return <option key={key} >{data.country_name}</option>;
               
               })
            }
    
     </select>
     </div>
     
   );
 }
}

export default CountryView;
