import axios from "axios";

export const getProductByCategoryId = (id) => (dispatch) => {
    console.log(`Fetching hotel data for ID: ${id}`);
    return axios
        .get(`http://127.0.0.1:8000/product/productsCategory/${id}/`)
        .then((res) => {
            console.log("Data received:", res.data);
            dispatch({
                type: "GET_PRODUCTS_BY_CATEGORY_ID",
                payload: res.data,
            });
        })
        .catch((err) => console.log("Error fetching data:", err));
};