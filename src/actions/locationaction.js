import { 
    LOCATION_FETCH
} from '../actions.js'; 

import axios from "axios";

export function fetchLocationAction() {;
    return (dispatch)=> {
    
             axios.get('http://localhost:9090/location/details')
            .then((response) => {
             dispatch({type: "LOCATION_FETCH", payload: response.data});
            }).catch((error) => {
        //   dispatch({type: "FETCH_USERS_REJECTED", payload: error});
        
    })
    
    };
    
    }