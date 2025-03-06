const INITIAL_VALUES = {
    users: [],
};

const UserReducer = (state = INITIAL_VALUES, action) => {
    switch (action.type) {
        case 'GET_ALL_USERS':
            return{
                ...state,
                users: action.payload
            }
 
                 
           
        default:
            return state;
    }
};

export default UserReducer;