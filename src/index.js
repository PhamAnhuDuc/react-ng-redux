import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Store - để tạo cần import
import { createStore } from 'redux';
import myReducer from './reducers/index';
import { Provider } from 'react-redux';

//tạo ra 1 cái store
const store = createStore(
    myReducer,  //tạo xong cái store
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
 //muốn kết nối thừ react qua redux thì cần provider
ReactDOM.render(
   
    <Provider store={ store }> 
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
 //*provider cung cap strore cho app */