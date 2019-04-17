import {
   USER_FILTER_FETCH_ALL_DATA,
   REGION_FETCH
} from '../actions.js';


const INITIAL_STATE=[{
    employee_id : null,
    first_name : null,
    salary : null,
    filelocation : null,
    department_id :{
          department_id: null,
          department_name:null,
          manager_id: null,
          location_id: [{
            location_id: null,
            street_adress:null,
            postal_code: null,
            city: null,
            state_province:null,
                      country_id: {
                          country_id:null,
                          country_name:null,
                                      region_id: {
                                          region_id: null,
                                          region_name: null
                                      }
                      }
          }]
  }
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

      case "REGION_FETCH":
      return({
          ...state,
          INITIAL_STATE : action.payload
      })

    default:
      return state
  }
}