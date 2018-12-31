import { UPLOAD_FILE ,UPLOAD_ERROR_FILE } from '../actions.js';
import axios from "axios";


export function uploadFile(data) {
return (dispatch)=> {

         axios.post('http://localhost:9090/uploadFile/',data)
         .then((response) => {
         dispatch({type: "UPLOAD_FILE", payload: response.data})
    })
    .catch((error) => {
       dispatch({type: "UPLOAD_ERROR_FILE", payload: error});
    
})

};

}
