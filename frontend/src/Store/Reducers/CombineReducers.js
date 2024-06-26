import { combineReducers } from 'redux';
import CategoryReducer from './CategoryReducer';
import ProductByCategoryReducer from './ProductReducer';


export default combineReducers({
    combineCategory: CategoryReducer,
    combineProductByCategory: ProductByCategoryReducer,
})