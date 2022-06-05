// -----------------user----------------------
export const login = (user) => {
    return {
        type: 'LOGIN',
        payload : user,
    }
}
export const logout = () => {
    return {
        type: 'LOGOUT',
    }
}
export const newuser = (user) => {
    return {
        type: 'NEWUSER',
        payload : user,
    }
}

// ------------------ user's role ---------------------------------

export const admin = () => {
    return {
        type: 'ADMIN'
    }
}
export const reviewer = () => {
    return {
        type: 'REVIEWER'
    }
}
export const contributor = () => {
    return {
        type: 'CONTRIBUTOR'
    }
}
export const rmrole = () => {
    return {
        type: 'RMROLE'
    }
}