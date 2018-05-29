import { createStore } from 'redux';

var initialState = {
    status: false,
    sort: {
        by: 'name',
        value : 1 // 1 : tang , -1 : giảm
    }
}
var myReducer = (state = initialState, action) => {
    if (action.type === 'TOGGLE_STATUS') {
        state.status = !state.status;
        return state;
    }
    if (action.type === 'SORT') {
        //console.log(action);
        var { by, value } = action.sort; //by = action.sort.by
        var { status } = state; //status = state.status
        // state.sort = {
        //     by: action.sort.by,
        //     value: action.sort.value
        // }
        return {
            status: status,
            sort: {
                by: by,
                value : value
            }
        }
    }
    return state;
}

const store = createStore(myReducer);
//console.log("default : " ,  store.getState());

// thực hiện công việc thay đổi Status

var action = { type: 'TOGGLE_STATUS'};
store.dispatch(action);
//console.log("toggle_status : ", store.getState());

//thực hiện sắp xếp tên từ Z-A
var sortAction = {
    type: 'SORT',
    sort: {
        by: 'name',
        value : -1
    }
}
store.dispatch(sortAction);
console.log('SORT : ', store.getState());
