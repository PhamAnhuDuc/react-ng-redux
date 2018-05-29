import * as types from './../constants/ActionTypes';


// nhiệm vụ của cái file này là hiển thị danh sách các item , cập nhập status
var s4 = () => {
    return  Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var randomID = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

var findIndex = (tasks, id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if(task.id === id){
            result = index;
        }
    });
    return result;
}

var data = JSON.parse(localStorage.getItem('tasks')); //lên localStorage để lấy giá trị về
//state mặc định là 1 arr
var initialState = data ? data : [];  // là 1 mảng

var myReducer = (state = initialState, action) =>{
    var id = '';
    var index = -1;
    switch(action.type){
        case types.LIST_ALL:
            return state;  //chỉ việc lấy state ra thôi
        case types.SAVE_TASK:
            var task = {
                id : action.task.id,  
                name : action.task.name,
                status : (action.task.status === 'true' || action.task.status === true) ? true : false
            };
            if(!task.id){
                task.id = randomID();
                state.push(task);
            }else{
                index = findIndex(state, task.id);
                state[index] = task;
            }
            localStorage.setItem('tasks', JSON.stringify(state)); //lưu trên localStrorage dạng string
            return [...state]; //tránh trường hợp tham chiếu vùng nhớ
        
        //phân tích trường hợp update status
        case types.UPDATE_STATUS_TASK:
            console.log(action); //công việc chỉ cần lấy cái id và tìm nó ở trên cái store là cái nào rồi mới cập nhập lại
                
            id = action.id;
            index = findIndex(state, id);
            state[index] = {
                ...state[index],
                status : !state[index].status
            };
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.DELETE_TASK:
            id = action.id;
            index = findIndex(state, id);
            state.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
};

export default myReducer;