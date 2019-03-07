import userReducer from './userReducer.js';
import userformReducer from './userformReducer.js';
import uploadFileReducer from './uploadFileReducer.js';
import userpermission from './userpermissionReducer.js';
import userfetchbyid from './userfetchbyidReducer.js';
import userfilterAll from './userfilterReducer.js';

import {combineReducers} from 'redux';

export default combineReducers({
    userEmployeeDetails:userReducer,
    userFormReducers:userformReducer,
    uploadFileReducer:uploadFileReducer,
    userpermissionReducer : userpermission,
    userfetchbyidReducer:userfetchbyid,
    userfilterAllReducer : userfilterAll
})
