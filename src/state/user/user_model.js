import t, { String } from 'tcomb';

const UserModel = t.struct({
    id: t.Number,
    name: t.String,
    salary: t.Number,
    address:t.String,
    filelocation: String,  
});

export default UserModel;

