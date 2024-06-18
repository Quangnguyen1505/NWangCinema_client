import { actionType } from "../actions/actionType";

const initState = {
    isloggedIn: false,
    token: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.LOGIN_SUCCESS:
            return {
                ...state,
                isloggedIn: action.data ? true : false,
                token: action.data
            }
        case actionType.LOGOUT_SUCCESS:
            return {
                ...state,
                isloggedIn: false,
                token: action.data
            }
        default:
            return state;
    }
}

export default authReducer