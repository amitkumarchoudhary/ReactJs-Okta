import { 
    DEPARTMENT_FETCH
} from '../actions.js'; 

import axios from "axios";

export function fetchDepartmentAction() {;
    return (dispatch)=> {
    
             axios.get('http://localhost:9090/departments/details')
            .then((response) => {
             dispatch({type: "DEPARTMENT_FETCH", payload: response.data});
            }).catch((error) => {
        //   dispatch({type: "FETCH_USERS_REJECTED", payload: error});
        
    })
    
    };
    
    }