import { authConstants } from "./authConstants";

const initialState = {
    token: null,
    user: {
        fullName: '',
        lastName: '',
        email: '',
        picture: ''
    },
    numOfUsers: 0,
    authenticate: false,
    authenticating: false,
    error: false,
    loading: false,
    message: 'abc'
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return {
                ...state,
                numOfUsers: state.numOfUsers + 1,
                loading: true,
            }
        default:
            return state;
    }
}

export default authReducer;