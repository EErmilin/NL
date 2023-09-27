import { combineReducers } from 'redux';
import routerReducer from './routerReducer';


export default combineReducers({
    router: routerReducer,

})