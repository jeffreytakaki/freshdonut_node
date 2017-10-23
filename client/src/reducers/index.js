import { combineReducers } from 'redux';
import authReducer from './authReducer'
import storeReducer from './storeReducer'
import userStoreReducer from './userStoreReducer'

export default combineReducers({
    auth: authReducer,
    stores: storeReducer,
    userStores: userStoreReducer
});