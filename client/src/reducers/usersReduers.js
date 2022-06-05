const usersReducer = (state = null, action) => { // default state = null
    switch(action.type) {
        case 'LOGIN' : 
            return state = action.payload
        case 'LOGOUT' :
            return state = null
        case 'NEWUSER' :
            return state = action.payload
        default :
            return state
    }
};

export default usersReducer;