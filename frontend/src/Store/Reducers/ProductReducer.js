const INITIAL_VALUES = {
    productByCategory: [],
};

const ProductByCategoryReducer = (state = INITIAL_VALUES, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_BY_CATEGORY_ID':
            return{
                ...state,
                productByCategory: action.payload
            }
          
        default:
            return state;
    }
};

export default ProductByCategoryReducer;