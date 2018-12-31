import {connect} from 'react-redux';
import UserForm from './userform.js';
import {saveUserFormData} from '../../../actions/userformaction.js';


function mapStateToProps(state) {
    return{
       saveUserData : state.userFormReducers.INITIAL_STATE
    }
   
}

function mapDispatchToProps(dispatch) {
   
   return({

      saveUserForm : (data)=>{
          dispatch(saveUserFormData(data))
      }
   })

//  return bindActionCreators({getUserDetailsAction : getUserDetailsAction},dispatch);

}
   

export default connect(mapStateToProps,mapDispatchToProps)(UserForm);
