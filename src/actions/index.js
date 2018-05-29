import * as types from './../constants/ActionTypes'; //import và đổi tên lại thành types
//nhiệm vụ trả ra các kiểu để redux phân tích => export nó ra

export const listAll = () => {
    return {
        type : types.LIST_ALL
    }
};
// chức năng thêm mới
export const saveTask = (task) => {
    return {
        type : types.SAVE_TASK,
        task // task : task
    }
};

//hành động ẩn hiện form
export const toggleForm = () => {
    return {
        type : types.TOGGLE_FORM
    }
}
//hành động mở form
export const openForm = () => {
    return {
        type : types.OPEN_FORM
    }
}
//hành động đóng form
export const closeForm = () => {
    return {
        type : types.CLOSE_FORM
    }
}

//hành động cập nhập status thì dựa vào id => tham số truyền vào là id
export const updateStatus = (id) => {
    return {
        type : types.UPDATE_STATUS_TASK,
        id // id : id
    }
}

export const deleteTask = (id) => {
    return {
        type : types.DELETE_TASK,
        id // id : id
    }
}

export const editTask = (task) => {
    return {
        type : types.EDIT_TASK,
        task // task : task
    }
}

export const filterTask = (filter) => {
    return {
        type : types.FILTER_TABLE,
        filter // filter : filter -> filterName, filterStatus
    }
}

export const searchTask = (keyword) => {
    return {
        type : types.SEARCH,
        keyword // keyword : keyword
    }
}

export const sortTask = (sort) => {
    return {
        type : types.SORT,
        sort // sort : sort -> sort.by sort.value
    }
}