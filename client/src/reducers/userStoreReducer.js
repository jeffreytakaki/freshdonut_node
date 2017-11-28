import { GET_USER_STORES, ADD_USER_STORE, DELETE_STORE, ADD_USER_DONUT } from '../actions/types'
import { updateObject, convertToArray } from '../Helpers/reducerHelpers'

export default function(state = {}, action) {

    switch(action.type) {
        case ADD_USER_STORE:
            let stores = state.concat(action.payload)

            return updateObject([],state, stores);

        case ADD_USER_DONUT:

            let duplicated_stores = Object.assign([], state);

            for(var i=0; i < duplicated_stores.length; i++) {
                if(duplicated_stores[i].id == action.payload.id) {
                    duplicated_stores[i].donuts = action.payload.donuts
                }
            }

            return updateObject([],state, duplicated_stores);

        case GET_USER_STORES:
            return action.payload || false;

        case DELETE_STORE://not being used
            console.log('delete_store', action.payload)
            return action.payload || false;

        default:
            return state;

    }
}



