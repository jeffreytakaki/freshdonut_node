import axios from 'axios';
import { FETCH_USER, ADD_STORE, GET_STORES, GET_USER_STORES, DELETE_STORE } from './types'

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: res.data})
}

export const addStore = (state) => async dispatch => {
    const res = await axios.post('/api/store/addStore', {
        name: state.name,
        description: state.description
    });
    dispatch({type: ADD_STORE, payload: res.data})
}

export const getStores = () => async dispatch => {
    const res = await axios.get('/api/stores');
    dispatch({type: GET_STORES, payload: res.data})
}

export const getUserStores = () => async dispatch => {
    const res = await axios.get('/api/stores/user'); //:id can be anything. server side will validate user is signed in
    dispatch({type: GET_USER_STORES, payload: res.data})
}

export const deleteStores = (id) => async dispatch => {
    const res = await axios.post('/api/stores/deleteStore', {
        storeid: id
    });
    dispatch({type: DELETE_STORE, payload: res.data})
}

