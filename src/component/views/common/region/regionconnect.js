import {connect} from 'react-redux';
import {fetchRegionAction} from '../../../../actions/regionaction.js';
import RegionView from './regionView.js'

function mapStateToProps(state) {
    return{
        fetchregionAllReducer : state.regionAllReducer.INITIAL_STATE
    }
   
}

function mapDispatchToProps(dispatch) {
   
   return({
      fetchRegionData : ()=> {
          dispatch(fetchRegionAction())
      }  

   })
}
   

export default connect(mapStateToProps,mapDispatchToProps)(RegionView);
