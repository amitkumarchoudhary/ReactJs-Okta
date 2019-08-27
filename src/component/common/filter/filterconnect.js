import {connect} from 'react-redux';
import {fetchUserByIdAction,fetchUserByAllIdAction} from '../../../actions/userfetchbyidaction.js';
import FilterView from './filterView.js'

function mapStateToProps(state) {
    return{
       fetchUserByIdData : state.userfetchbyidReducer.INITIAL_STATE
    }
   
}

function mapDispatchToProps(dispatch) {
   
   return({

      fetchUserById : (id)=>{
          dispatch(fetchUserByIdAction(id))
      },
      fetchUserByAllId : ()=>{
          dispatch(fetchUserByAllIdAction())
      }


   })

//  return bindActionCreators({getUserDetailsAction : getUserDetailsAction},dispatch);

}
   

export default connect(mapStateToProps,mapDispatchToProps)(FilterView);
