import { combineReducers } from 'redux';
import userRoleReducer from './userRole';
import usersReducer from './usersReduers';



const rootReducers = combineReducers({
    users : usersReducer,
    userrole : userRoleReducer,
})


export default rootReducers;