import { 
        USER_FETCH_DATA_BYID
} from '../actions.js'; 
import axios from "axios";

export function fetchUserByIdAction(id) {
const idToken=JSON.parse(localStorage.getItem('okta-token-storage'));
var idd=id;
var n =Number(idd);
// var numberAsInt = parseInt(id); 
return (dispatch)=> {

         axios.get('http://localhost:9090/employee/details/getempdetailsbyid/'+n)
        .then((response) => {
         dispatch({type: "USER_FETCH_DATA_BYID", payload: response.data});
        }).catch((error) => {
    //   dispatch({type: "FETCH_USERS_REJECTED", payload: error});
    
})

};

}

export function fetchUserByAllIdAction() {;
return (dispatch)=> {

         axios.get('http://localhost:9090/employee/details/')
        .then((response) => {
         dispatch({type: "USER_FETCH_ALL_DATA_BYID", payload: response.data});
        }).catch((error) => {
    //   dispatch({type: "FETCH_USERS_REJECTED", payload: error});
    
})

};

}