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

// export const UpdateToAddToCart = (id,updatedQuantity) => (dispatch) => {
//     return axios.put(`http://127.0.0.1:8000/cart/${id}`,updatedQuantity)
//     .then ((res) =>
//         dispatch({
//         type: "UPDATE_TO_ADD_TO_CART",
//         payload: {id:id,updatedProduct}
//     }))
//     .catch((err) => console.log(err))
    
// }

export const UpdateToAddToCar = (cartItemId, newQuantity) => (dispatch) => {
    try {
        const { data } = axios.patch(`http://127.0.0.1:8000/cart/${cartItemId}`, {
            quantity: newQuantity  // PATCH only the quantity field
        });

        dispatch({ type: 'CART_ITEM_UPDATE', payload: data });

    } catch (error) {
        console.error('Failed to update cart item quantity', error);
    }
};

export const UpdateToAddToCart = (cartItemId,newQuantity) => (dispatch) => {
    return axios.patch(`http://127.0.0.1:8000/cart/${cartItemId}`, {
        quantity: newQuantity  // PATCH only the quantity field
    })
    .then ((res) =>
        {dispatch({
        type: "CART_ITEM_UPDATE",
        payload: res.data
    })
    console.log("update res", res.data);
})
    .catch((err) => console.log('Failed to update cart item quantity',err))
    
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

