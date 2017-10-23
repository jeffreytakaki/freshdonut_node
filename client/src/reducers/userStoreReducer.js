import { GET_USER_STORES } from '../actions/types'

export default function(state = {}, action) {

    switch(action.type) {
        case GET_USER_STORES:
            return action.payload || false;
        default:
            return state;

    }

}