import {
  COUNTRY_FETCH
} from '../actions.js';


const INITIAL_STATE=[{
  country_id: null,
  country_name: null
                        
                    }];

 export default function getCountryReducer(state ={INITIAL_STATE}, action) {
  switch (action.type) {
      case "COUNTRY_FETCH":
      return({
          ...state,
          INITIAL_STATE : action.payload
      })

    default:
      return state
  }
}