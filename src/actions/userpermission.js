import { USER_PERMISSION_DATA,
ERROR_USER_PERMISSION_FORM_DATA } from '../actions.js';

import axios from "axios";


export function getUserPermission(id) {
//let data=1;    
return (dispatch)=> {

         axios.post('http://localhost:9090/userpermission/permission/',id)
         .then((response) => {
         dispatch({type: "USER_PERMISSION_DATA", payload: response.data})
    })
    .catch((error) => {
       dispatch({type: "ERROR_USER_PERMISSION_FORM_DATA", payload: error});
    
})

};

}
