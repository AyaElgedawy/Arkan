import { useDispatch, useSelector } from "react-redux";
import { UpdateToAddToCart, addToCart, getCartItems, minusFromCart, removeFromCart } from "../../Store/Actions/CartAction";
import { useContext, useEffect, useState } from "react";
import { getAllProducts } from "../../Store/Actions/ProductAction";
import { getColor, getSize } from "../../Store/Actions/ProductVariantAcrion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronLeft, faChevronUp, faTrash } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../Context/AuthContext";


function MyCart(){
    const products = useSelector((state) => state.combineProductByCategory.products);
    const colors = useSelector((state) => state.combineProductVariant.colors);
    const sizes = useSelector((state) => state.combineProductVariant.sizes);
    const cart = useSelector((state) => state.combineCart.cart);
    const dispatch = useDispatch()
    const [allItems,setAllItems] = useState(0)
    const [price,setPrice] = useState(0)
    const authContext = useContext(AuthContext);
    const {currentUser, setCurrentUser} = useContext(AuthContext);
    useEffect(()=>{
        dispatch(getColor());
        dispatch(getSize());
        let totalItems = 0;
        let totalPrice = 0;
    cart.forEach(item => {
      totalItems += item.quantity;
      totalPrice += item.quantity*item.current_price
    });
    setAllItems(totalItems);
    setPrice(totalPrice)
    },[cart])
    // console.log("cart",cart);
    // console.log("image",products.find((product)=>product.id == 1)); // Check if this URL is valid
    useEffect(()=>{
        dispatch(getAllProducts());
        dispatch(getCartItems(currentUser))

        // cart?.map((item) =>{
    //      
    //     // allItems+= item.quantity
    //     setPrice(price+item.quantity*products.find((product)=>product.id == item.product).current_price)
    //     // price+=item.quantity*products.find((product)=>product.id == item.product).price
    // })
        
    },[])
    

//     const handleIncreaseQuantity=(cartItem)=>{
//     dispatch(UpdateToAddToCart(cartItem.id, cartItem.quantity + 1));
//    }

//    const handleDecreaseQuantity=(cartItem)=>{
//     if(cartItem.quantity==1){
//         dispatch(removeFromCart(cartItem.id))
//     }
//     else if(cartItem.quantity>0){
//         dispatch(UpdateToAddToCart(cartItem.id, cartItem.quantity - 1));
//     }
// }
    return(
        <>
        <section id="wrapper">
            <div className="container">
            <nav data-depth="1" className="breadcrumb hidden-sm-down">
            <ol itemScope itemType="http://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
            <a itemProp="item" href="https://demo1.leotheme.com/bos_soucer_demo/en/">
            <span itemProp="name">Home</span>
            </a>
            <meta itemProp="position" content="1"/>
            </li>
            </ol>
            </nav>
            <div className="row">
            <div id="content-wrapper" className="col-lg-12 col-xs-12">
            <section id="main">
            <div className="cart-grid row">

            <div className="cart-grid-body col-xs-12 col-lg-8">

            <div className="card cart-container">
            <div className="card-block">
            <h1 className="h1">Shopping Cart</h1>
            </div>
            <hr className="separator"/>
            <div className="cart-overview js-cart" data-refresh-url="//demo1.leotheme.com/bos_soucer_demo/en/cart?ajax=1&action=refresh">
                <ul className="cart-items">
                {cart?.map((item) =>(
                    
                    <li className="cart-item" key={item.id}>
                    <div className="product-line-grid row">

                    <div className="product-line-grid-left col-md-3 col-xs-4">
                    <span className="product-image media-middle">
                    <img src={products.find((product)=>product.id == item.product)?.image1} alt={products.find((product)=>product.id == item.product)?.name}/>
                    </span>
                    </div>

                    <div className="product-line-grid-body col-md-4 col-xs-8">
                    <div className="product-line-info">
                    <a className="label" href="" data-id_customization="0">{products.find((product)=>product.id == item.product)?.name}</a>
                    </div>

                    <br/>
                    <div className="product-line-info">
                    <span className="label">Size:</span>
                    <span className="value">{sizes.find((size)=>size.id == item.size)?.name}</span>
                    </div>
                    <div className="product-line-info">
                    <span className="label">Color:</span>
                    <span className="value">{colors.find((color)=>color.id == item.color)?.name}</span>
                    </div>
                    </div>

                    <div className="product-line-grid-right product-line-actions col-md-5 col-xs-12">
                    <div className="row">
                    <div className="col-xs-4 hidden-md-up"></div>
                    <div className="col-md-10 col-xs-6">
                    <div className="row">
                    <div className="col-md-5 col-xs-6 col-sp-12 qty">
                    <div className="input-group bootstrap-touchspin"><span className="input-group-addon bootstrap-touchspin-prefix" style={{display: "none"}}></span>
                    <input className="js-cart-line-product-quantity form-control"
                      type="text" value={item.quantity} name="product-quantity-spin" min="1" style={{display: "block"}}/>
                    <span className="input-group-addon bootstrap-touchspin-postfix" style={{display: "none"}}></span>
                    <span className="input-group-btn-vertical">
                        <button className="align-top btn btn-touchspin js-touchspin js-increase-product-quantity bootstrap-touchspin-up" type="button" onClick={()=>dispatch(addToCart(item,currentUser))}>
                        <FontAwesomeIcon className="align-top" icon={faChevronUp} size="2xs" />
                        </button>
                            <button className=" align-top btn btn-touchspin js-touchspin js-decrease-product-quantity bootstrap-touchspin-down" type="button" onClick={()=>dispatch(minusFromCart(item,currentUser))}>
                            <FontAwesomeIcon className="align-top"  icon={faChevronDown} size="2xs"/>
                            </button>
                                </span>
                                </div>
                    </div>
                    <div className="col-md-7 col-xs-2 col-sp-12 price">
                    <span className="product-price">
                    <strong>
                    {item.current_price *item.quantity}
                    </strong>
                    </span>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-2 col-xs-2 text-xs-right" onClick={()=>{dispatch(removeFromCart(item.id))}}>
                    <div className="cart-line-product-actions">
                    <span className="remove-from-cart"  >
                    <FontAwesomeIcon icon={faTrash} />
                    </span>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="clearfix"></div>
                    </div>
                     </li>
                    ))}
                    
                <li className="cart-item">
                <div className="product-line-grid row">


                <div className="clearfix"></div>
                </div>
                </li>
                </ul>
            </div>
            </div>
            <a className="label" href="https://demo1.leotheme.com/bos_soucer_demo/en/">
            <FontAwesomeIcon icon={faChevronLeft} />Continue shopping
            </a>

            </div>

            <div className="cart-grid-right col-xs-12 col-lg-4" >
            <div className="card cart-summary">
            <div className="cart-detailed-totals">
            <div className="card-block" >
            <div className="cart-summary-line"   id="cart-subtotal-products">
            <span className="label" >
                 {allItems}    item
            </span>
            <span className="value">{price}</span>
            </div>
            <div className="cart-summary-line" id="cart-subtotal-shipping">
            <span className="label">
            Shipping
            </span>
            <span className="value">$7.00</span>
            <div><small className="value"></small></div>
            </div>
            </div>
            <hr className="separator"/>
            <div className="card-block">
            <div className="cart-summary-line cart-total">
            <span className="label">Total (tax excl.)</span>
            <span className="value">{price+7}</span>
            </div>
            <div className="cart-summary-line">
            <small className="label">Taxes</small>
            <small className="value">$0.00</small>
            </div>
            </div>
            <hr className="separator"/>
            </div>
            <div className="checkout cart-detailed-actions card-block">
            <div className="text-sm-center">
            <a href="https://demo1.leotheme.com/bos_soucer_demo/en/order" className="btn btn-outline">Proceed to checkout</a>
            </div>
            </div>
            </div>
            <div className="aeuc_cart_custom_text">
            <p>The order will only be confirmed when you click on the button 'Order with an obligation to pay' at the end of the checkout!</p>
            </div>
            </div>
            </div>
            </section>
            </div>
            </div>
            </div>
        </section>
        </>
    )
}
export default MyCart