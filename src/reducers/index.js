import { combineReducers } from 'redux'; //reduser tong 
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEditing from './itemEditing';
import filterTable from './filterTable';
import search from './search';
import sort from './sort';

const myReducer = combineReducers({
    tasks, // tasks : tasks, là cái state
    isDisplayForm, // isDisplayForm : isDisplayForm : cái state của isDisplayForm thì phải xem file của nó cính là initialState và là false
    itemEditing, // itemEditing : itemEditing
    filterTable,
    search,
    sort // sort : sort
});

export default myReducer;