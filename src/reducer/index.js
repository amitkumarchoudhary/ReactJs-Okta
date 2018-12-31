import userReducer from './userReducer.js';
import userformReducer from './userformReducer.js';
import uploadFileReducer from './uploadFileReducer.js';

import {combineReducers} from 'redux';

export default combineReducers({
    userEmployeeDetails:userReducer,
    userFormReducers:userformReducer,
    uploadFileReducer:uploadFileReducer
})
