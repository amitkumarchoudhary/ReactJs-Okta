import {
    USER_FETCH_DATA_BYID,
    USER_FETCH_ALL_DATA_BYID
} from '../actions.js';


const INITIAL_STATE=[{
    employee_id : null,
    first_name : null,
    salary : null,
    filelocation : null,
    department_id :[],

}]

 export default function getUserByIDReducer(state ={INITIAL_STATE}, action) {
  switch (action.type) {
    case "USER_FETCH_DATA_BYID":
      return({
          ...state,
          INITIAL_STATE : action.payload
      })

      case "USER_FETCH_ALL_DATA_BYID":
      return({
          ...state,
          INITIAL_STATE : action.payload
      })


       
      
    default:
      return state
  }
}