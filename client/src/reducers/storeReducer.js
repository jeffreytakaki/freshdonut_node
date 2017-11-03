import { ADD_STORE, GET_STORES } from '../actions/types'

export default function(state = {}, action) {

    switch(action.type) {
        case ADD_STORE:
            console.log('state', state)
            console.log('action', action)
            console.log('actionpayload', action.payload)
            return action.payload || false;
        case GET_STORES:
            return action.payload || false;
        default:
            return state;

    }

}