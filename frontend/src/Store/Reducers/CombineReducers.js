import { combineReducers } from 'redux';
import CategoryReducer from './CategoryReducer';
import ProductByCategoryReducer from './ProductReducer';
import ProductVariantReducer from './ProductVariantReducer';

export default combineReducers({
    combineCategory: CategoryReducer,
    combineProductByCategory: ProductByCategoryReducer,
    combineProductVariant: ProductVariantReducer,
})