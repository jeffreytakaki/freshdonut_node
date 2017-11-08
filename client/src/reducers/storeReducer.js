import { ADD_STORE, GET_STORES, GET_USER_STORES } from '../actions/types'
import { updateObject, convertToArray } from '../Helpers/reducerHelpers'

export default function(state = {}, action) {

    switch(action.type) {
        case ADD_STORE:
            // let stateAsArray = (Object.prototype.toString.call( state ) === '[object Array]') ?
            //         state :
            //         convertToArray(state);
            //
            // let stores = stateAsArray.concat({
            //     _id: action.payload._id,
            //     name: action.payload.name,
            //     description: action.payload.description,
            //
            // })
            //
            // return updateObject(state, stores);

            return action.payload || false;
        case GET_STORES:
            return action.payload || false;
        case GET_USER_STORES:
            return action.payload || false;
        default:
            return state;

    }

}
