import {connect} from 'react-redux';
import {fetchCountryAction} from '../../../../actions/countryaction.js';
import CountryView from './countryView.js';

function mapStateToProps(state) {
    return{
        fectchcountryAllReducer : state.countryAllReducer.INITIAL_STATE
    }
   
}

function mapDispatchToProps(dispatch) {
   
   return({
      fetchCountryData : ()=> {
          dispatch(fetchCountryAction())
      }  

   })
}
   

export default connect(mapStateToProps,mapDispatchToProps)(CountryView);
