const userRoleReducer = ( state = null, action) => { // default state = null
    switch(action.type) {
        case 'ADMIN' :
            return state = 'admin'
        case 'REVIEWER' :
            return state = 'reviewer'
        case 'CONTRIBUTOR' :
            return state = 'contributor'
        case 'RMROLE' : 
            return state = null
        default :
            return state
    }
};

export default userRoleReducer;