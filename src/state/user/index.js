import t from 'tcomb';

import UserModel from './user_model.js';

const UserModels = t.struct({
    list: t.list(UserModel),
}, 'UserModels');



export function blankState() {
    return {
        list: []
    };
}

export default UserModels;