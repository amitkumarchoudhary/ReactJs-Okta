import { 
        REGION_FETCH
} from '../actions.js'; 

import axios from "axios";

export function fetchRegionAction() {;
    return (dispatch)=> {
    
             axios.get('http://localhost:9090/region/details')
            .then((response) => {
             dispatch({type: "REGION_FETCH", payload: response.data});
            }).catch((error) => {
        //   dispatch({type: "FETCH_USERS_REJECTED", payload: error});
        
    })
    
    };
    
    }