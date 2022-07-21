import { authConstants } from "./authConstants";

const initialState = {
    token: null,
    users: [],
    numOfUsers: 0,
    authenticate: false,
    authenticating: false,
    error: false,
    loading: false,
    message: ''
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return {
                ...state,
                // numOfUsers: state.numOfUsers + 1,
                loading: true,
            }
        case authConstants.LOGIN_SUCCESS:
            return {
                ...state,
                users: action.payload,
                authenticate: true,
                authenticating: false,
                loading: false,
            }
        case authConstants.LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                authenticating: false,
                loading: false,
            }

        default:
            return state;
    }
}

export default authReducer;