import axios from "axios"


export const getAllUsers = () => (dispatch) => {
    return axios.get("http://127.0.0.1:8000/accounts/allUsers/")
    .then ((res) =>
        dispatch({
        type: "GET_ALL_USERS",
        payload: res.data
    }))
    .catch((err) => console.log(err))
    
}

