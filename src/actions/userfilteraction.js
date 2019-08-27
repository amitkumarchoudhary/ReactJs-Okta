import { 
        USER_FILTER_FETCH_ALL_DATA,
        USER_FILTER_FETCH_DATA_BY_SELECTION,
        REGION_FETCH
} from '../actions.js'; 
import axios from "axios";

export function fetchUserByAllIdAction() {;
return (dispatch)=> {

         axios.get('http://localhost:9090/employee/details/')
        .then((response) => {
         dispatch({type: "USER_FILTER_FETCH_ALL_DATA", payload: response.data});
        }).catch((error) => {
    //   dispatch({type: "FETCH_USERS_REJECTED", payload: error});
    
})

};

}


export function fetchUserFilterDataAction(selectfilterdata) {    
const postData={

    "region" : selectfilterdata,
    "country": null,
    "location" : null
    }
return (dispatch)=> {

         axios.post('http://localhost:9090/getAllRegionDetailsJPA/',postData)
        .then((response) => {
         dispatch({type: "USER_FILTER_FETCH_DATA_BY_SELECTION", payload: response.data});
        }).catch((error) => {
    //   dispatch({type: "FETCH_USERS_REJECTED", payload: error});
    
})

};

}

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