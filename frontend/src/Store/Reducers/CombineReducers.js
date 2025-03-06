import { combineReducers } from 'redux';
import CategoryReducer from './CategoryReducer';
import ProductByCategoryReducer from './ProductReducer';
import ProductVariantReducer from './ProductVariantReducer';
import ProductDetailsReducer from './ProductDetailsReducer';
import CartReducer from './CartReducer';
import UserReducer from './userReducer';
export default combineReducers({
    combineCategory: CategoryReducer,
    combineProductByCategory: ProductByCategoryReducer,
    combineProductVariant: ProductVariantReducer,
    combineProductDetails: ProductDetailsReducer,
    combineCart: CartReducer,
    combineUsers:UserReducer,
    
})