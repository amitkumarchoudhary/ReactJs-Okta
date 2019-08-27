import {
    UPLOAD_FILE
} from '../actions.js';


const INITIAL_STATE=[{
    data : ''

}]

 export default function uploadFileReducer(state ={INITIAL_STATE}, action) {
  switch (action.type) {
    case "UPLOAD_FILE":
      return({
          ...state,
          INITIAL_STATE : action.payload
      }) 
      
    default:
      return state
  }
}