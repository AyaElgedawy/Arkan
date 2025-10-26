const INITIAL_VALUES = {
    product: {},
};

const ProductDetailsReducer = (state = INITIAL_VALUES, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_DETAILS':
            return{
                ...state,
                product: action.payload
            }
          
        default:
            return state;
    }
};

export default ProductDetailsReducer;