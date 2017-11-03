import { GET_USER_STORES, DELETE_STORE } from '../actions/types'

export default function(state = {}, action) {

    switch(action.type) {
        case GET_USER_STORES:
            return action.payload || false;
        case DELETE_STORE:

        default:
            return state;

    }

}