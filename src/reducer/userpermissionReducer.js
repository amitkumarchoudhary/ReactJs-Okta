import {
    USER_PERMISSION_DATA
} from '../actions.js';


const INITIAL_STATE=[{
    
     id: '',
    name: '',
    usertype: ''

}]

 export default function getUserPermissionReducer(state ={INITIAL_STATE}, action) {
  switch (action.type) {
    case "USER_PERMISSION_DATA":
      return({
          ...state,
          INITIAL_STATE : action.payload
      }) 
      
    default:
      return state
  }
}