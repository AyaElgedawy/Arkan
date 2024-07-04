const INITIAL_VALUES = {
    colors: [],
    sizes:[],
    sizesProduct:[],
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
            case 'GET_SIZES_PRODUCT':
                return{
                    ...state,
                    sizesProduct: action.payload
                }    
        default:
            return state;
    }
};

export default ProductVariantReducer;