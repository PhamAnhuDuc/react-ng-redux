import * as types from './../constants/ActionTypes';

// reduxser thực hiện hành động đóng mở form
var initialState = false; // close form -- phải có state mặc định
var myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.TOGGLE_FORM:
            return !state;
        case types.OPEN_FORM:
            return true;
        case types.CLOSE_FORM:
            return false;
        default: return state;
    }
};

export default myReducer;