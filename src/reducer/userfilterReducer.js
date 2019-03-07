import {
   USER_FILTER_FETCH_ALL_DATA
} from '../actions.js';


const INITIAL_STATE=[{
    employee_id : null,
    first_name : null,
    salary : null,
    filelocation : null,
    department_id :[],

}]

 export default function getUserFilterReducer(state ={INITIAL_STATE}, action) {
  switch (action.type) {
    case "USER_FILTER_FETCH_ALL_DATA":
      return({
          ...state,
          INITIAL_STATE : action.payload
      })

      case "USER_FILTER_FETCH_DATA_BY_SELECTION":
      return({
          ...state,
          INITIAL_STATE : action.payload
      })



      
  
    default:
      return state
  }
}