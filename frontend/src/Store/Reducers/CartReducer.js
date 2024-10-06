const INITIAL_VALUES = {
    cart: [],
};

const CartReducer = (state = INITIAL_VALUES, action) => {
    switch (action.type) {
        case 'GET_CART_ITEMS':
            return{
                ...state,
                cart: action.payload
            }

        case 'ADD_TO_CART':
                return{
                    ...state,
                    cart: [...state.cart,action.payload]
                }  
        case 'UPDATE_TO_ADD_TO_CART':
                    const updatedItem = action.payload; // This is the updated product
                    return {
                        ...state,
                        cart: state.cart.map(item =>
                            item.id == updatedItem.id ? updatedItem : item
                        )
                    }          
        case 'REMOVE_FROM_CART':
                const updatedCart = state.cart.filter((item) => item.id !== action.payload);
                return{
                    ...state,
                    cart: updatedCart
                }      
        default:
            return state;
    }
};

export default CartReducer;