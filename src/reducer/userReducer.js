import {
    USER_FETCH_DATA,
    DELETE_FETCH_DATA,
    UPLOAD_USER_FILE
} from '../actions.js';

// import blankState from '../state/user/index.js'


const INITIAL_STATE=[{
   
    employee_id : null,
    first_name : null,
    salary : null,
    filelocation : null,
    department_id :[],
}]



 export default function getUserReducer(state = {INITIAL_STATE}, action) {
  switch (action.type) {

      case "USER_FETCH_DATA":
      return({
          ...state,
          INITIAL_STATE : action.payload
      })  

      case "DELETE_FETCH_DATA": 

    // const newState = state. INITIAL_STATE.filter((nameList) => {
    //     return action.data !== nameList.id;
    // });

    // return {
    //     ...state,
    //     list: newState
    // };

    // const newState = state. INITIAL_STATE.filter((nameList) => {
    //     return action.data !== nameList.id;
    // });

    // return {
    //     ...state,
    //     list: newState
    // };

     const newState = Object.assign([], state);
     const indexOfCatToDelete = state.INITIAL_STATE.filter(nameList => {
        return   action.payload !== nameList.id;
      })
    //   newState.splice(indexOfCatToDelete, 1);
    newState.slice(indexOfCatToDelete);
      return newState;

    case "UPLOAD_USER_FILE":
      return({
          ...state,
          INITIAL_STATE : action.payload
      }) ;

      
    default:
      return state
  }
}