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