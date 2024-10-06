import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../Store/Actions/CartAction";
import { useEffect } from "react";


function MyCart(){
    const cart = useSelector((state) => state.combineCart.cart);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCartItems())
    },[])
    console.log("cart",cart);
    console.log("image",cart[0].image1); // Check if this URL is valid

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
                    <img src={item.image1} alt="Eiusmod tempor"/>
                    </span>
                    </div>

                    <div className="product-line-grid-body col-md-4 col-xs-8">
                    <div className="product-line-info">
                    <a className="label" href="" data-id_customization="0">{item.product}</a>
                    </div>

                    <br/>
                    <div className="product-line-info">
                    <span className="label">Size:</span>
                    <span className="value">S</span>
                    </div>
                    <div className="product-line-info">
                    <span className="label">Color:</span>
                    <span className="value">Black</span>
                    </div>
                    </div>

                    <div className="product-line-grid-right product-line-actions col-md-5 col-xs-12">
                    <div className="row">
                    <div className="col-xs-4 hidden-md-up"></div>
                    <div className="col-md-10 col-xs-6">
                    <div className="row">
                    <div className="col-md-5 col-xs-6 col-sp-12 qty">
                    <div className="input-group bootstrap-touchspin"><span className="input-group-addon bootstrap-touchspin-prefix" style={{display: "none"}}></span>
                    <input className="js-cart-line-product-quantity form-control" data-down-url="https://demo1.leotheme.com/bos_soucer_demo/en/cart?update=1&amp;id_product=13&amp;id_product_attribute=61&amp;token=4cb73f7e0e359184aa7e5ae63052ace7&amp;op=down" data-up-url="https://demo1.leotheme.com/bos_soucer_demo/en/cart?update=1&amp;id_product=13&amp;id_product_attribute=61&amp;token=4cb73f7e0e359184aa7e5ae63052ace7&amp;op=up" data-update-url="https://demo1.leotheme.com/bos_soucer_demo/en/cart?update=1&amp;id_product=13&amp;id_product_attribute=61&amp;token=4cb73f7e0e359184aa7e5ae63052ace7" data-product-id="13" type="text" value="1" name="product-quantity-spin" min="1" style={{display: "block"}}/>
                    <span className="input-group-addon bootstrap-touchspin-postfix" style={{display: "none"}}></span>
                    <span className="input-group-btn-vertical">
                        <button className="btn btn-touchspin js-touchspin js-increase-product-quantity bootstrap-touchspin-up" type="button">
                            <i className="material-icons touchspin-up"></i>
                            </button>
                            <button className="btn btn-touchspin js-touchspin js-decrease-product-quantity bootstrap-touchspin-down" type="button">
                                <i className="material-icons touchspin-down"></i>
                                </button>
                                </span>
                                </div>
                    </div>
                    <div className="col-md-7 col-xs-2 col-sp-12 price">
                    <span className="product-price">
                    <strong>
                    $20.50
                    </strong>
                    </span>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-2 col-xs-2 text-xs-right">
                    <div className="cart-line-product-actions">
                    <a className="remove-from-cart" rel="nofollow" href="https://demo1.leotheme.com/bos_soucer_demo/en/cart?delete=1&amp;id_product=2&amp;id_product_attribute=7&amp;token=4cb73f7e0e359184aa7e5ae63052ace7" data-link-action="delete-from-cart" data-id-product="2" data-id-product-attribute="7" data-id-customization>
                    <i className="material-icons float-xs-left">delete</i>
                    </a>
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
            <i className="material-icons">chevron_left</i>Continue shopping
            </a>

            </div>

            <div className="cart-grid-right col-xs-12 col-lg-4" >
            <div className="card cart-summary">
            <div className="cart-detailed-totals">
            <div className="card-block" >
            <div className="cart-summary-line"   id="cart-subtotal-products">
            <span className="label" >
            1 item
            </span>
            <span className="value">$20.50</span>
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
            <span className="value">$27.50</span>
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