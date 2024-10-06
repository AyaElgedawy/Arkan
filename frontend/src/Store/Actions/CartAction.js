import axios from "axios"

export const getCartItems = () => (dispatch) => {
    return axios.get("http://127.0.0.1:8000/cart/")
    .then ((res) =>
        dispatch({
        type: "GET_CART_ITEMS",
        payload: res.data
    }))
    .catch((err) => console.log(err))
    
}

export const addToCart = (product) => (dispatch) => {
    return axios.post("http://127.0.0.1:8000/cart/", product)
    .then ((res) =>
        dispatch({
        type: "ADD_TO_CART",
        payload: res.data
    }))
    .catch((err) => console.log(err))
    
}

export const UpdateToAddToCart = (id,updatedProduct) => (dispatch) => {
    return axios.put(`http://127.0.0.1:8000/cart/${id}`,updatedProduct)
    .then ((res) =>
        dispatch({
        type: "UPDATE_TO_ADD_TO_CART",
        payload: res.data
    }))
    .catch((err) => console.log(err))
    
}

export const removeFromCart = (id) => (dispatch) => {
    return axios.delete(`http://127.0.0.1:8000/cart/${id}`)
    .then ((res) =>
        dispatch({
        type: "REMOVE_FROM_CART",
        payload: res.data
    }))
    .catch((err) => console.log(err))
    
}

