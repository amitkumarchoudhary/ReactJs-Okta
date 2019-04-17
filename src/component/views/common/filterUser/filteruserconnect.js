import {connect} from 'react-redux';
import {fetchUserByAllIdAction,fetchUserFilterDataAction , fetchRegionAction} from '../../../../actions/userfilteraction.js';
import FilterUserView from './filterUserView.js'

function mapStateToProps(state) {
    return{
        // fetchUserByIdData : state.userfetchbyidReducer.INITIAL_STATE,
        fetchfilterAllReducer : state.userfilterAllReducer.INITIAL_STATE
    }
   
}

function mapDispatchToProps(dispatch) {
   
   return({
      fetchUserByAllId : ()=>{
          dispatch(fetchUserByAllIdAction())
      },
      fetchUserBySelectionData : (selectfilterdata)=>{
          dispatch(fetchUserFilterDataAction(selectfilterdata))
      },
      fetchRegionData : ()=> {
          dispatch(fetchRegionAction())
      }

      

   })

//  return bindActionCreators({getUserDetailsAction : getUserDetailsAction},dispatch);

}
   

export default connect(mapStateToProps,mapDispatchToProps)(FilterUserView);
