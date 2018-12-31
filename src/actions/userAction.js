import { 
        USER_FETCH_DATA,
         DELETE_FETCH_DATA,
         UPLOAD_USER_FILE
} from '../actions.js'; 
import axios from "axios";

export function getUserDetailsAction() {

return (dispatch)=> {

         axios.get('http://localhost:9090/getAllEmployeeDetails')
        .then((response) => {
         dispatch({type: "USER_FETCH_DATA", payload: response.data});
        }).catch((error) => {
    //   dispatch({type: "FETCH_USERS_REJECTED", payload: error});
    
})

};

}

export function deleteUserDetailsAction(id) {
let data=id;
return (dispatch)=> {

         axios.delete('http://localhost:9090/deleteEmployeeDetails/'+id)
         .then((response) => {
        dispatch({type: "DELETE_FETCH_DATA", payload: response.id})
        .then(response => {
        dispatch(getUserDetailsAction())
      })
    })
    .catch((error) => {
    //   dispatch({type: "FETCH_USERS_REJECTED", payload: error});
    
})

};

}

export function uploadUserDetailsAction(formdata) {
return (dispatch)=> {

         axios.post('http://localhost:9090/getfileupload/',formdata)
         .then((response) => {
          dispatch({type: "UPLOAD_USER_FILE", payload: response})
          .then(response => {
          dispatch(getUserDetailsAction())
       })
       }).catch((error) => {
     dispatch({type: "UPLOAD_USER_REJECT", payload: error});
    
})

};

}
