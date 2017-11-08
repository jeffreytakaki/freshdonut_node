import { GET_USER_STORES, ADD_USER_STORE, DELETE_STORE } from '../actions/types'
import { updateObject, convertToArray } from '../Helpers/reducerHelpers'

export default function(state = {}, action) {

    switch(action.type) {
        case ADD_USER_STORE:
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
            //     // console.log('userstore return', userstores)
            //     // return userstores;
            //
            // // console.log('userstores',userstores)
            // //
            // return updateObject(state, stores);


            return action.payload || false;
        case GET_USER_STORES:
            return action.payload || false;

        case DELETE_STORE://not being used
            console.log('delete_store', action.payload)
            return action.payload || false;

        default:
            return state;

    }
}



