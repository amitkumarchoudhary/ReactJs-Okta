import {
   REGION_FETCH
} from '../actions.js';


const INITIAL_STATE=[{
                        region_id: null,
                        region_name: null
                        
                    }];

 export default function getRegionReducer(state ={INITIAL_STATE}, action) {
  switch (action.type) {
      case "REGION_FETCH":
      return({
          ...state,
          INITIAL_STATE : action.payload
      })

    default:
      return state
  }
}