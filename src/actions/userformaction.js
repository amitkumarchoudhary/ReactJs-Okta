import { SAVE_USER_FORM_DATA , SAVE_ERROR_USER_FORM_DATA } from '../actions.js';
import axios from "axios";


export function saveUserFormData(data) {
return (dispatch)=> {

         axios.post('http://192.168.0.4:9090/employee/details/saveEmployeeDetails/',data)
         .then((response) => {
         dispatch({type: "SAVE_USER_FORM_DATA", payload: response.data})
    })
    .catch((error) => {
       dispatch({type: "SAVE_ERROR_USER_FORM_DATA", payload: error});
    
})

};

}
