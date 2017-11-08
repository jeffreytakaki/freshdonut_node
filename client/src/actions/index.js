import axios from 'axios';
import { FETCH_USER, ADD_STORE, ADD_USER_STORE, GET_STORES, GET_USER_STORES, DELETE_STORE } from './types'

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: res.data})
}

export const addStore = (state) => async dispatch => {
    const res = await axios.post('/api/store/addStore', {
        _id: state._id,
        name: state.name,
        description: state.description
    });
    dispatch({type: ADD_STORE, payload: res.data})
    dispatch({type: ADD_USER_STORE, payload: res.data})
}

export const getStores = () => async dispatch => {
    const res = await axios.get('/api/stores');
    dispatch({type: GET_STORES, payload: res.data})
}

export const getUserStores = () => async dispatch => {
    const res = await axios.get('/api/stores/user'); //:id can be anything. server side will validate user is signed in
    dispatch({type: GET_USER_STORES, payload: res.data})
}

export const deleteStore = (id) => async dispatch => {
    const res = await axios.post('/api/store/deleteStore', {
        storeid: id
    });

    if(res.data) {
        console.log('delete store', res.data)
        const stores = await axios.get('/api/stores/user'); //:id can be anything. server side will validate user is signed in
        dispatch({type: GET_USER_STORES, payload: stores.data})
    } else {
        alert('We had a problem deleting your item. Please try again');
    }
}


export const addDonut = (state) => async dispatch => {
    const res = await axios.post('/api/donut/addDonut', {
        _id: state._id,
        name: state.name,
        description: state.description
    });

    console.log('res.data => ', res.data);

    dispatch({type: GET_USER_STORES, payload: res.data})
    //dispatch({type: ADD_STORE, payload: res.data})


}

