//Write the action creator functions here
import * as types from './actionTypes';
import axios from "axios"

export const getProducts = () => dispatch => {
    dispatch({ type: types.GET_PRODUCTS_REQUEST })    

    return axios.get('http://localhost:8080/products')
        .then((r) =>  dispatch({type: types.GET_PRODUCTS_SUCCESS, payload:r.data}))
        .catch(err => dispatch({type: types.GET_PRODUCTS_FAILURE,payload:err.message}));
}



export const addProducts = (payload) => dispatch => {
    dispatch({ type: types.ADD_PRODUCT_REQUEST });

    return axios.get('http://localhost:8080/products', payload)
        .then((r) =>  dispatch({type: types.ADD_PRODUCT_SUCCESS, payload:r.data}))
        .catch(err => dispatch({type: types.ADD_PRODUCT_FAILURE,payload:err.message}));
}

export const editProducts = (id,payload) => dispatch => {
    dispatch({ type: types.EDIT_PRODUCT_REQUEST });

    return axios.patch(`http://localhost:8080/products/${id}`, payload)
        .then((r) =>  dispatch({type: types.EDIT_PRODUCT_SUCCESS, payload:r.data}))
        .catch(err => dispatch({type: types.EDIT_PRODUCT_FAILURE,payload:err.message}));
}

