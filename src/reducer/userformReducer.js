import {
    SAVE_USER_FORM_DATA
} from '../actions.js';


const INITIAL_STATE=[{
    id : '',
    name :'',
    salary:'',
    address:''

}]

 export default function saveLoginReducer(state ={INITIAL_STATE}, action) {
  switch (action.type) {
    case "SAVE_USER_FORM_DATA":
      return({
          ...state,
          INITIAL_STATE : action.payload
      }) 
      
    default:
      return state
  }
}