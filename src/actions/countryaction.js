import { 
    COUNTRY_FETCH
} from '../actions.js'; 

import axios from "axios";

export function fetchCountryAction() {
    return (dispatch)=> {
    
             axios.get('http://localhost:9090/country/details')
            .then((response) => {
             dispatch({type: "COUNTRY_FETCH", payload: response.data});
            }).catch((error) => {
        //   dispatch({type: "FETCH_USERS_REJECTED", payload: error});
        
    })
    
    };
    
    }