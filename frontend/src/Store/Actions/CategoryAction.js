import axios from "axios";

export const getCategory = () => (dispatch) => {
    return axios.get("http://127.0.0.1:8000/category/categories")
    .then ((res) =>
        dispatch({
        type: "GET_CATEGORY_LIST",
        payload: res.data
    }))
    .catch((err) => console.log(err))
    
}