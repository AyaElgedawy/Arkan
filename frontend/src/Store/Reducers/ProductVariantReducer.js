const INITIAL_VALUES = {
    colors: [],
    sizes:[],
};

const ProductVariantReducer = (state = INITIAL_VALUES, action) => {
    switch (action.type) {
        case 'GET_COLORS_LIST':
            return{
                ...state,
                colors: action.payload
            }
        case 'GET_SIZES_LIST':
            return{
                ...state,
                sizes: action.payload
            }
        default:
            return state;
    }
};

export default ProductVariantReducer;