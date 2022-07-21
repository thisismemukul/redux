import { authConstants } from './authConstants';
export const loginRequest = () => {
    return {
        type: authConstants.LOGIN_REQUEST,
    }
}