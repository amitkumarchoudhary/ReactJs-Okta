import {connect} from 'react-redux';
import UploadFile from './uploadfile.js';
import {uploadFile} from '../../../actions/uploadFileActions.js';


function mapStateToProps(state) {
    return{
       uploadFileReducer : state.uploadFileReducer.INITIAL_STATE
    }
   
}

function mapDispatchToProps(dispatch) {
   
   return({

      fileUpload : (data)=>{
          dispatch(uploadFile(data))
      }
   })

//  return bindActionCreators({getUserDetailsAction : getUserDetailsAction},dispatch);

}
   

export default connect(mapStateToProps,mapDispatchToProps)(UploadFile);
