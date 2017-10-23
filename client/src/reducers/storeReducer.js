import { ADD_STORE, GET_STORES, GET_USER_STORES } from '../actions/types'

export default function(state = {}, action) {

    switch(action.type) {
        case ADD_STORE:
            return action.payload || false;
        case GET_STORES:
            return action.payload || false;
        case GET_USER_STORES:
            return action.payload || false;
        default:
            return state;

    }

}