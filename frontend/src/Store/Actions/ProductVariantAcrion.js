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

export const getColorsProduct = (product_id) => (dispatch) => {
    return axios.get(`http://127.0.0.1:8000/product/colorsProduct/${product_id}`)
    .then ((res) =>
        dispatch({
        type: "GET_COLORS_PRODUCT",
        payload: res.data
    }))
    .catch((err) => console.log(err))
    
}

export const getAllVariants = () => (dispatch) => {
    return axios.get(`http://127.0.0.1:8000/product/producAllVariant/`)
    .then ((res) =>
        dispatch({
        type: "GET_ALL_VARIANTS",
        payload: res.data
    }))
    .catch((err) => console.log(err))
    
}

export const getVariantsProduct = (product_id) => (dispatch) => {
    return axios.get(`http://127.0.0.1:8000/product/productVariant/${product_id}`)
    .then ((res) =>
        dispatch({
        type: "GET_VARIANTS_PRODUCT",
        payload: res.data
    }))
    .catch((err) => console.log(err))
    
}