// actions.js
import actionTypes from "./actionType";
export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};
export const processLogin = () => {
    return {
        type: actionTypes.LOGIN_PROCESS
    }
}
export const processLogout = () => {
    return {
        type: actionTypes.LOGOUT_PROCESS
    }
}