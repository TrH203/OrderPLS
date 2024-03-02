// reducers.js
import actionTypes from "../action/actionType";
const initialState = {
    // Define your initial state here
    // Example:
    count: 0,
    isLogin: false,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            };
        case actionTypes.LOGIN_PROCESS:
            return {
                ...state,
                isLogin: true,
            };
        case actionTypes.LOGOUT_PROCESS:
            return {
                ...state,
                isLogin: false,
            };
        default:
            return state;
    }
};

export default rootReducer;
