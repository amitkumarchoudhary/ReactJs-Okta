import {
    USER_FETCH_DATA,
    DELETE_FETCH_DATA,
    UPLOAD_USER_FILE
} from '../actions.js';


const INITIAL_STATE=[{
    name : "amit kumar choudhary",
    id : 1,
    salary : 2000,
    address : 'raja bazar seikhpura bihar'
}]



 export default function getUserReducer(state ={INITIAL_STATE}, action) {
  switch (action.type) {

      case "USER_FETCH_DATA":
      return({
          ...state,
          INITIAL_STATE : action.payload
      })  

      case "DELETE_FETCH_DATA":
    //   return({
    //       ...state,
    //       INITIAL_STATE : action.payload
    //   })  

     const newState = state. INITIAL_STATE.filter((userEmployeeDetails) => {
        return action.id !== userEmployeeDetails.id;
    });

    return {
        ...state,
        list: newState
    };

    case "UPLOAD_USER_FILE":
      return({
          ...state,
          INITIAL_STATE : action.payload
      }) ;

      
    default:
      return state
  }
}