import axios from "axios"

export const getColor = () => (dispatch) => {
    return axios.get("http://127.0.0.1:8000/product/colors")
    .then ((res) =>
        dispatch({
        type: "GET_COLORS_LIST",
        payload: res.data
    }))
    .catch((err) => console.log(err))
    
}

export const getSize = () => (dispatch) => {
    return axios.get("http://127.0.0.1:8000/product/sizes")
    .then ((res) =>
        dispatch({
        type: "GET_SIZES_LIST",
        payload: res.data
    }))
    .catch((err) => console.log(err))
    
}

export const getSizesProduct = (product_id) => (dispatch) => {
    return axios.get(`http://127.0.0.1:8000/product/sizesProduct/${product_id}`)
    .then ((res) =>
        dispatch({
        type: "GET_SIZES_PRODUCT",
        payload: res.data
    }))
    .catch((err) => console.log(err))
    
}
