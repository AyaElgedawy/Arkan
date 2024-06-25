const INITIAL_VALUES = {
    category: [],
};

const CategoryReducer = (state = INITIAL_VALUES, action) => {
    switch (action.type) {
        case 'GET_CATEGORY_LIST':
            return{
                ...state,
                category: action.payload
            }
          
        default:
            return state;
    }
};

export default CategoryReducer;