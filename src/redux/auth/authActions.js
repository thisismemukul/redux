import { authConstants } from './authConstants';
import axios from 'axios';
export const loginRequest = () => {
    return {
        type: authConstants.LOGIN_REQUEST,
    }
}
export const loginSuccess = (user) => {
    return {
        type: authConstants.LOGIN_SUCCESS,
        payload: user,
    }
}
export const loginFailure = (error) => {
    return {
        type: authConstants.LOGIN_FAILURE,
        payload: error,
    }
}

export const fetchUsers = () => {
    return async(dispatch) => {
        dispatch(loginRequest);
        await axios.get('https://jsonplacedholder.typicode.com/users')
            .then(response => {
                const users = response.data;
                dispatch(loginSuccess(users));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(loginFailure(errorMsg));
            })

    }


}