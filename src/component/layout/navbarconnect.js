import {connect} from 'react-redux';
import {getUserPermission} from '../../actions/userpermission.js';
import  Navbar from './navbar.js';

function mapStateToProps(state) {
    return{


       userPermissionList : state.userpermissionReducer.INITIAL_STATE


    }
   
}

function mapDispatchToProps(dispatch) {
   
   return({

      fetchUserPermission : (id)=>{
          dispatch(getUserPermission(id))
      }


   })

//  return bindActionCreators({getUserDetailsAction : getUserDetailsAction},dispatch);

}
   

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
