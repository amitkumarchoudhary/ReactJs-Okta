import {connect} from 'react-redux';
import {getUserDetailsAction,deleteUserDetailsAction,uploadUserDetailsAction} from '../../actions/userAction.js'
import  Staff from './staff.js';

function mapStateToProps(state) {
    return{


       nameList : state.userEmployeeDetails.INITIAL_STATE


    }
   
}

function mapDispatchToProps(dispatch) {
   
   return({

      fetchData : ()=>{
          dispatch(getUserDetailsAction())
      },
      deleteData : (id)=>{
          dispatch(deleteUserDetailsAction(id))
      },
       uploadFile : (formdata)=>{
          dispatch(uploadUserDetailsAction(formdata))
      }


   })

//  return bindActionCreators({getUserDetailsAction : getUserDetailsAction},dispatch);

}
   

export default connect(mapStateToProps,mapDispatchToProps)(Staff);
