import { combineReducers } from 'redux';
import routerReducer from './routerReducer';
import authReducer from './authReducer';
import catalogReducer from './catalogReducer';

export default combineReducers({
    router: routerReducer,
    auth: authReducer,
    catalog: catalogReducer

})