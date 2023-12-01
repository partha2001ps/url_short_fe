const initialstate = {
    user: null,
    userData:null
}
const userReducer = (state = initialstate, action)=> {
    switch (action.type) {
        case 'SING_IN':
            return {
                ...state,
                user:action.payload
            }
        case 'USER_DATA':
            return {
                ...state,
                userData:action.payload
            }
        case 'USER_LOGOUT':
            return {
                ...state,
                user: null,
                userData:null
            }
        default:
            return state;
    }
}
export default userReducer;