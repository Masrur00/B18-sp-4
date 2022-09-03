//Write the action creator functions here
import * as types from './actionTypes';
import axios from "axios"

export const getProducts = () => dispatch => {
    dispatch({type: types.GET_PRODUCTS_REQUEST })
    return axios.get('http://localhost:8080/products')
        .then((r) =>  dispatch({type: types.GET_PRODUCTS_SUCCESS, payload:r.data }))
        .catch(err => dispatch({ type: types.GET_PRODUCTS_FAILURE,payload:err.message }));
}

// export const getProducts = () => dispatch => {
//     dispatch({type: types.GET_PRODUCTS_REQUEST })
//     return axios.get('http://localhost:8080/products')
//         .then((r) =>  dispatch({type: types.GET_PRODUCTS_SUCCESS, payload:r.data }))
//         .catch(err => dispatch({ type: types.GET_PRODUCTS_FAILURE,payload:err.message }));
// }