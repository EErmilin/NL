import { combineReducers } from 'redux';
import routerReducer from './routerReducer';
import authReducer from './authReducer';
import catalogReducer from './catalogReducer';
import orderReducer from './orderReducer';

export default combineReducers({
    router: routerReducer,
    auth: authReducer,
    catalog: catalogReducer,
    order: orderReducer
})