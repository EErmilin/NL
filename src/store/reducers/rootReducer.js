import { combineReducers } from 'redux';
import routerReducer from './routerReducer';
import authReducer from './authReducer';

export default combineReducers({
    router: routerReducer,
    auth: authReducer

})