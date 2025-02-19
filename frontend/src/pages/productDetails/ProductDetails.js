import { getProductDetails } from "../../Store/Actions/ProductAction";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getColorsProduct, getSizesProduct, getVariantsProduct } from "../../Store/Actions/ProductVariantAcrion";
import { Magnifier, GlassMagnifier, SideBySideMagnifier, PictureInPictureMagnifier } from 'react-image-magnifiers';
import Slider from 'react-slick';
import "./ProductDetails.css"
import ReactImageMagnify from 'react-image-magnify';
import { UpdateToAddToCart, addToCart, getCartItems } from "../../Store/Actions/CartAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPen } from "@fortawesome/free-solid-svg-icons";
import { OpenModalContext } from "../../Context/Open_modal";
import { Link } from "react-router-dom";
function ProductDetails(){
    const { product_id } = useParams();
    const product = useSelector((state) => state.combineProductDetails.product);
    const variantProduct = useSelector((state) => state.combineProductVariant.variantsProduct);

    const images = [product.image1,product.image2,product.image3,product.image4,product.image5]

    const [selectedImage, setSelectedImage] = useState(product?.image1);
    const [backgroundPosition, setBackgroundPosition] = useState('center');
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [actions,setActions] = useState("description")
    const cart = useSelector((state) => state.combineCart.cart);
    const [review,setReview] = useState(false)
    const {openModalContext, setOpenModalContext} = useContext(OpenModalContext);
    const [cartDictItem,setCartDictItem] = useState()
    const [apologyToAddToCart,setAbologyToAddToCart]=useState(false)
    
    const dispatch = useDispatch()

    useEffect(() => {
      // Find if the product is already in the local cartDictionary state
      setCartDictItem (cart.find(
        (item) => item.product == product_id && item.size == selectedSize && item.color == selectedColor
      ))
      console.log("CartDictItem from useffect",cartDictItem);
     }, [cart,selectedColor,selectedSize]);

    const handleAddToCart = (e) => {
      e.preventDefault();
      dispatch(getCartItems())
      if (cartDictItem) {
        if(cartDictItem.quantity + +quantity <= product.quantity){
        // Dispatch the update action with the cart item ID and the updated quantity
           dispatch(UpdateToAddToCart(cartDictItem.id, cartDictItem.quantity + +quantity));
        
           setOpenModalContext(true)
        }
        else{
          setAbologyToAddToCart(true)
        }
      } else {
        if(+quantity <= product.quantity){
          const productObj = {
            product: product_id,
            quantity: quantity,  // Initial quantity
            size: selectedSize,
            color: selectedColor,
          };
          // Dispatch the add to cart action with the new product
          dispatch(addToCart(productObj));
          console.log("Adding new product to cartDictionary:", product_id);
          setOpenModalContext(true)
        }
        else{
          setAbologyToAddToCart(true)
        }
      }
    
      console.log("Product found in cartDictionary:", cartDictItem);
      setOpenModalContext(true)
     console.log("modal context",openModalContext);
      // Reset selected product, color, and size
      // setSelectedColor(null);
      // setSelectedSize(null);
      // setQuantity(1)
    };
    useEffect(() => {
      
     console.log('selectedSize',selectedSize);
     console.log('selectedColor',selectedColor);


    }, [selectedSize,selectedColor]);
    useEffect(() => {
       

       setSelectedImage(product?.image1);
       console.log('product',product);
       console.log('variantProduct', variantProduct);
       console.log('productimage1',product.image1);

      }, []);
     
      useEffect(() => {
        dispatch(getProductDetails(product_id));
        product_id??setSelectedImage(product.image1);
        dispatch(getVariantsProduct(product_id))
        console.log("sizesOfProduct",variantProduct.map((item)=>item.size.name));
      }, []);
     
      const [zoomStyle, setZoomStyle] = useState({});

      const handleMouseMove = (event) => {
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - left;
        const y = event.clientY - top;
        const xPercent = (x / width) * 100;
        const yPercent = (y / height) * 100;
    
        setZoomStyle({
          backgroundImage: `url(${selectedImage})`,
          backgroundSize: '200% 200%',
          backgroundPosition: `${xPercent}% ${yPercent}%`,
          backgroundRepeat: 'no-repeat',
        });
      };


 
    return(
        <>
          <section id="wrapper">
          <div className="container">

          <div className="row">
          <div id="content-wrapper" className="col-lg-12 col-xs-12">
          <section id="main" className="product-detail product-image-thumbs-left product-image-thumbs product-thumbs-left" itemScope itemType="https://schema.org/Product">
          <meta itemProp="url" content="https://demo1.leotheme.com/bos_soucer_demo/en/basics/2-7-eiusmod-tempor.html#/1-size-s/11-color-black"/>
          <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-6">
          <section className="page-content" id="content" data-templateview="left" data-numberimage="4" data-numberimage1200="3" data-numberimage992="3" data-numberimage768="3" data-numberimage576="3" data-numberimage480="2" data-numberimage360="2" data-templatemodal="0" data-templatezoomtype="in" data-zoomposition="right" data-zoomwindowwidth="500" data-zoomwindowheight="500">
          <div className="images-container">

 
     
      <div>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: 'Main Product Image',
                  isFluidWidth: true,
                  src: selectedImage,
                },
                largeImage: {
                  src: product.image1,
                  width: 1200,
                  height: 1800,
                },
                enlargedImageContainerStyle: { zIndex: 9 },
                enlargedImageContainerDimensions: {
                  width: '200%',
                  height: '200%',
                },
              }}
            />
          </div>
          <div style={{ marginTop: '20px' }}>
        {images.map((image, index) => (
          <img
          key={index}
          src={image}
          alt={`Product Image ${index + 1}`}
          style={{
            
            height: '150px',
            cursor: 'pointer',
            border: image == selectedImage ? '2px solid #000' : 'none',
            margin:' 20px'
          }}
          className={`thumbnail ${image == selectedImage ? 'selected-thumbnail' : ''}`}
          onClick={() => setSelectedImage(image)}
        />
        ))}
      </div>
    </div>
</section>
<div id="blockcart-modal" class={openModalContext?`modal fade in` :`modal fade`} style={{visibility: openModalContext ? 'block' : 'none'}}>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" onClick={()=>{setOpenModalContext(false)}}>
          <span>×</span>
        </button>
        <h4 class="modal-title h6 text-sm-center" id="myModalLabel"><FontAwesomeIcon icon={faCheck} style={{color: "white"}} /> Product successfully added to your shopping cart</h4>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-5 divide-right">
            <div class="row">
              <div class="col-md-6">
                <img class="product-image" src={product.image1} alt={product.name} title="" itemProp="image"/>
              </div>
              <div class="col-md-6">
                <h6 class="h6 product-name">{product?.name}</h6>
                <p>${product.current_price}</p>
                
                                <span><strong>Size</strong>: {cartDictItem?variantProduct.find((item)=>item.size.id==cartDictItem.size)?.name:variantProduct.find((item)=>item.size.id==selectedSize)?.name}</span><br/>
                                <span><strong>Color</strong>: {cartDictItem?variantProduct.find((item)=>item.color.id==cartDictItem.color)?.name:variantProduct.find((item)=>item.color.id==selectedColor)?.name}</span><br/>
                                <p><strong>Quantity:</strong>&nbsp;{cartDictItem?cartDictItem.quantity:quantity}</p>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="cart-content">
                              <p class="cart-products-count">There are {cart.reduce((sum, item) => sum + item.quantity, 0)} items in your cart.</p>
                            <p><strong>Total products:</strong>&nbsp;${cart.reduce((sum, item) => sum + +item.current_price*item.quantity, 0)}</p>
              <p><strong>Total shipping:</strong>&nbsp;$7.00 </p>
                            	{/* <p><strong>Taxes</strong>&nbsp;$0.00</p> */}
                            <p><strong>Total:</strong>&nbsp;${cart.reduce((sum, item) => sum + +item.current_price*item.quantity, 0)+7}</p>
              <div class="cart-content-btn">
              <Link
              to={`/products/${product.category}`}
                                  
              >
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Continue shopping</button>
              </Link>

              <Link
              to={`/mycart`}
                                  
              >
                <a href="//demo1.leotheme.com/bos_soucer_demo/en/cart?action=show" class="btn btn-primary"><FontAwesomeIcon icon={faCheck} style={{color: "white"}} /> Proceed to checkout</a>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class={openModalContext?"modal-backdrop fade in":""}></div>
</div>
<div className="col-md-6 col-lg-6 col-xl-6 " style={{textAlign: "left"}}>
<h1 className="h1 product-detail-name "  itemProp="name">{product?.name}</h1>
<div className="product-additional-info">
<div className="social-sharing">
<span>Share</span>
{/* <ul >
<li className="facebook icon-gray"><a href="http://www.facebook.com/sharer.php?u=https://demo1.leotheme.com/bos_soucer_demo/en/basics/2-eiusmod-tempor.html" className="text-hide" title="Share" target="_blank">Share</a></li>
<li className="twitter icon-gray"><a href="https://twitter.com/intent/tweet?text=Eiusmod tempor https://demo1.leotheme.com/bos_soucer_demo/en/basics/2-eiusmod-tempor.html" className="text-hide" title="Tweet" target="_blank">Tweet</a></li>
<li className="googleplus icon-gray"><a href="https://plus.google.com/share?url=https://demo1.leotheme.com/bos_soucer_demo/en/basics/2-eiusmod-tempor.html" className="text-hide" title="Google+" target="_blank">Google+</a></li>
<li className="pinterest icon-gray"><a href="http://www.pinterest.com/pin/create/button/?media=https://demo1.leotheme.com/bos_soucer_demo/304/eiusmod-tempor.jpg&amp;url=https://demo1.leotheme.com/bos_soucer_demo/en/basics/2-eiusmod-tempor.html" className="text-hide" title="Pinterest" target="_blank">Pinterest</a></li>
</ul> */}
</div>
</div>
<div id="leo_product_reviews_block_extra" className="no-print">
<ul className="reviews_advices">
<li className>
<a className="open-review-form" href="javascript:void(0)" data-id-product="2" data-is-logged data-product-link="https://demo1.leotheme.com/bos_soucer_demo/en/basics/2-eiusmod-tempor.html">
<i className="material-icons">&#xE150;</i>
Write a review
</a>
</li>
</ul>
</div>
<div className="product-prices">
<div className="product-price h5 " itemProp="offers" itemScope itemType="https://schema.org/Offer">
<link itemProp="availability" href="https://schema.org/InStock" />
<meta itemProp="priceCurrency" content="USD"/>
<div className="current-price" >
<span itemProp="price" >${product.current_price}</span>
</div>
</div>
<div className="tax-shipping-delivery-label">
Tax excluded
<span className="delivery-information">Delivery: 1 to 3 weeks</span>
</div>
</div>
<div id="product-description-short-2" className="description-short"><p>{product.description}</p></div>
<div className="product-actions">
<form id="add-to-cart-or-refresh">

<div className="product-variants">
<div className="clearfix product-variants-item">
<span className="control-label">Size</span>
<ul id="group_1">
{selectedColor?variantProduct.map((item,index) => (
    <li className="input-container float-xs-left" key={item.size.id} onClick={() =>setSelectedSize(item.size.id)}>
    <label>
    <input className="input-radio" type="radio" data-product-attribute={item.size.id}
     value={item.size.id}
     checked={selectedSize==item.size.id && "checked"}
     disabled={ selectedColor !== item.color.id } 
      />
    <span className="radio-label">{item.size.name}</span>
    </label>
    </li>
)):
variantProduct.map((item,index) => (
    <li className="input-container float-xs-left" key={item.size.id} onClick={() =>setSelectedSize(item.size.id)}>
    <label>
    <input className="input-radio" type="radio" data-product-attribute={item.size.id} value={item.size.id} checked={selectedSize==item.size.id && "checked"} />
    <span className="radio-label">{item.size.name}</span>
    </label>
    </li>
))}
</ul>



</div>
<div className="clearfix product-variants-item">
<span className="control-label">Color</span>
<ul id="group_3">
{selectedSize?variantProduct.map((item,index) => (
<li key={item.color.id} className="float-xs-left input-container" onClick={() =>setSelectedColor(item.color.id)}>
<label>
<input className="input-color" type="radio" value={item.color.id}
 checked={selectedColor == item.color.id ?? "checked"}
disabled={ selectedSize !== item.size.id } 
  style={{border:selectedColor == item.color.id && "1px solid black"}}/>
<span className="color" style={{backgroundColor: item.color.code}}><span className="sr-only">{item.color.name}</span></span>
</label>
</li>
))
:variantProduct.map((item,index) => (
<li key={item.color.id} className="float-xs-left input-container" onClick={() =>setSelectedColor(item.color.id)}>
<label>
<input className="input-color" type="radio" value={item.color.id} checked={selectedColor == item.color.id ?? "checked"} style={{border:selectedColor == item.color.id && "1px solid black"}}/>
<span className="color" style={{backgroundColor: item.color.code}}><span className="sr-only">{item.color.name}</span></span>
</label>
</li>
))}
{/* <li className="float-xs-left input-container">
<label>
<input className="input-color" type="radio" data-product-attribute="3" name="group[3]" value="11" checked="checked"/>
<span className="color" style={{backgroundColor: "#434A54"}}><span className="sr-only">Black</span></span>
</label>
</li> */}
</ul>
</div>
</div>
<section className="product-discounts">
</section>
<div className="product-add-to-cart">
<span className="control-label">Quantity</span>
<div className="product-quantity clearfix">
<div className="qty clearfix">
<input type="number" id="quantity_wanted" value={quantity} className="input-group" min="1" aria-label="Quantity" onChange={(e)=>setQuantity(e.target.value)}/>
</div>
<span id="product-availability" style={{color: `${product.quantity> 0 ? "green" : "red"}`}}>
{/* <i className="material-icons rtl-no-flip product-available">&#xE5CA;</i> */}
{product.quantity > 0 ? "In stock" : "Not available" }
</span>
<p className="product-minimal-quantity">
</p>
<div className="add">
<button className="btn btn-primary add-to-cart" onClick={handleAddToCart}>
<i className="material-icons">card_travel</i>
Add to cart
</button>
<div className="leo-compare-wishlist-button">
<div className="wishlist">
<a className="leo-wishlist-button btn-product btn-primary btn" href="javascript:void(0)" data-id-wishlist data-id-product="2" data-id-product-attribute="7" title="Add to Wishlist">
<span className="leo-wishlist-bt-loading cssload-speeding-wheel"></span>
<span className="leo-wishlist-bt-content">
<i className="icon-btn-product icon-wishlist material-icons">favorite_border</i>
<span className="name-btn-product">Add to Wishlist</span>
</span>
</a>
</div>
<div className="compare">
<a className="leo-compare-button btn-primary btn-product btn" href="javascript:void(0)" data-id-product="2" title="Add to Compare">
<span className="leo-compare-bt-loading cssload-speeding-wheel"></span>
<span className="leo-compare-bt-content">
<i className="icon-btn-product icon-compare material-icons">filter_list</i>
<span className="name-btn-product">Add to Compare</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
{/* <input className="product-refresh ps-hidden-by-js"/> */}
</form>
</div>
</div>
<div className="col-md-12 col-lg-12 col-xl-12">
<div className="product-tabs tabs">
<ul className="nav nav-tabs" role="tablist">
<li className="nav-item">
<a className= {`nav-link ${actions=="description" &&"active" } `}  aria-selected="true" onClick={()=>setActions("description")}>Description</a>
</li>
<li className="nav-item">
<a className={`nav-link ${actions=="details" &&"active" } `} onClick={()=>setActions("details")}>Product Details</a>
</li>
<li className="nav-item">
<a className={`nav-link ${actions=="reviews" &&"active" } leo-product-show-review-title`} onClick={()=>setActions("reviews")}>Reviews</a>
</li>
</ul>
<div className="tab-content" id="tab-content">
  {/* description */}
<div className={`tab-pane fade in ${actions=="description" &&"active" }`} id="description" role="tabpanel">
<div className="product-description">
  <p> {product.description} </p>
</div>
</div>
{/* product details */}
<div className={`tab-pane fade in ${actions=="details" &&"active" } `} id="product-details">
<div className="product-manufacturer">
<a href="https://demo1.leotheme.com/bos_soucer_demo/en/1_fashion-manufacturer">
<img src="https://demo1.leotheme.com/bos_soucer_demo/img/m/1.jpg" className="img img-thumbnail manufacturer-logo" alt="Fashion Manufacturer"/>
</a>
</div>
<div className="product-reference">
<label className="label">Reference </label>
<span itemProp="sku">demo_2</span>
</div>
<div className="product-quantities">
<label className="label">In stock</label>
<span data-stock="292" data-allow-oosp="0">292 Items</span>
</div>
<div className="product-out-of-stock">
</div>
<section className="product-features">
<p className="h6">Data sheet</p>
<dl className="data-sheet">
<dt className="name">Compositions</dt>
<dd className="value">Cotton</dd>
<dt className="name">Styles</dt>
<dd className="value">Casual</dd>
<dt className="name">Properties</dt>
<dd className="value">Short Sleeve</dd>
</dl>
</section>
</div>
{/* reviews */}
<div className={`tab-pane fade in ${actions=="reviews" && "active" }`} id="leo-product-show-review-content">
<div id="product_reviews_block_tab" >
 <button onClick={()=>setReview(true)}>
 <FontAwesomeIcon icon={faPen} style={{color: "#63E6BE",}} />
   Be the first to write your review!
</button>
</div>
</div>
</div>
</div>

{/* you might oalso like  */}
<section className="product-accessories clearfix">
<h3 className="h5 products-section-title">You might also like</h3>
<div className="products">
<div className="owl-row  plist-default">
<div id="category-products2">
<div className="item first">
<article className="product-miniature js-product-miniature" data-id-product="3" data-id-product-attribute="13" itemScope itemType="http://schema.org/Product">
<div className="thumbnail-container">
<div className="product-image">
<a href="https://demo1.leotheme.com/bos_soucer_demo/en/lanterns/3-13-adipiscing-elit.html#/1-size-s/13-color-orange" className="thumbnail product-thumbnail">
<img className="img-fluid" src="https://demo1.leotheme.com/bos_soucer_demo/310-home_default/adipiscing-elit.jpg" alt data-full-size-image-url="https://demo1.leotheme.com/bos_soucer_demo/310-large_default/adipiscing-elit.jpg"/>
<span className="product-additional" data-idproduct="3"></span>
</a>

<ul className="product-flags">
</ul>
<div className="functional-buttons clearfix">

<div className="wishlist">
<a className="leo-wishlist-button btn-product btn-primary btn" href="javascript:void(0)" data-id-wishlist data-id-product="3" data-id-product-attribute="13" title="Add to Wishlist">
<span className="leo-wishlist-bt-loading cssload-speeding-wheel"></span>
<span className="leo-wishlist-bt-content">
<i className="icon-btn-product icon-wishlist material-icons">favorite_border</i>
<span className="name-btn-product">Add to Wishlist</span>
</span>
</a>
</div>

<div className="quickview hidden-sm-down">
<a href="#" className="quick-view" data-link-action="quickview">
<span className="leo-quickview-bt-loading cssload-speeding-wheel"></span>
<span className="leo-quickview-bt-content">
<i className="material-icons search">remove_red_eye</i>
<span>Quick view</span>
</span>
</a>
</div>

<div className="compare">
<a className="leo-compare-button btn-primary btn-product btn" href="javascript:void(0)" data-id-product="3" title="Add to Compare">
<span className="leo-compare-bt-loading cssload-speeding-wheel"></span>
<span className="leo-compare-bt-content">
<i className="icon-btn-product icon-compare material-icons">filter_list</i>
<span className="name-btn-product">Add to Compare</span>
</span>
</a>
</div>
</div></div>
<div className="product-meta">



<h3 className="h3 product-title" itemProp="name"><a href="https://demo1.leotheme.com/bos_soucer_demo/en/lanterns/3-13-adipiscing-elit.html#/1-size-s/13-color-orange">Adipiscing elit</a></h3>
<div className="p-price">

<div className="product-price-and-shipping ">
<span className="sr-only">Price</span>
<span className="price" itemProp="offers" itemScope itemType="http://schema.org/Offer">
<span itemProp="priceCurrency" content="USD"></span><span itemProp="price" content="25.99">$25.99</span>
</span>
</div>

<div className="button-container cart">
<form>

<button className="btn btn-primary btn-product add-to-cart leo-bt-cart leo-bt-cart_3" data-button-action="add-to-cart" >
<span className="leo-loading cssload-speeding-wheel"></span>
<span className="leo-bt-cart-content">
<i className="icon-btn-product icon-cart material-icons shopping-cart">card_travel</i>
<span className="name-btn-product">Add to cart</span>
</span>
</button>
</form>
</div>
</div>
<div className="product-description-short" itemProp="description">Lorem ipsum dolor sit amet, mel paulo sonet latine ad, vis te ridens oporteat, tale ipsum facilis pro ei. Utamur deterruisset ea sea. Ferri...</div>
</div>
</div>
</article>
</div>
<div className="item first">
<article className="product-miniature js-product-miniature" data-id-product="4" data-id-product-attribute="16" itemScope itemType="http://schema.org/Product">
<div className="thumbnail-container">
<div className="product-image">
<a href="https://demo1.leotheme.com/bos_soucer_demo/en/bottle/4-16-quis-nostrud.html#/1-size-s/7-color-beige" className="thumbnail product-thumbnail">
<img className="img-fluid" src="https://demo1.leotheme.com/bos_soucer_demo/316-home_default/quis-nostrud.jpg" alt data-full-size-image-url="https://demo1.leotheme.com/bos_soucer_demo/316-large_default/quis-nostrud.jpg"/>
<span className="product-additional" data-idproduct="4"></span>
</a>

<ul className="product-flags">
</ul>
<div className="functional-buttons clearfix">

<div className="wishlist">
<a className="leo-wishlist-button btn-product btn-primary btn" href="javascript:void(0)" data-id-wishlist data-id-product="4" data-id-product-attribute="16" title="Add to Wishlist">
<span className="leo-wishlist-bt-loading cssload-speeding-wheel"></span>
<span className="leo-wishlist-bt-content">
<i className="icon-btn-product icon-wishlist material-icons">favorite_border</i>
<span className="name-btn-product">Add to Wishlist</span>
</span>
</a>
</div>

<div className="quickview hidden-sm-down">
<a href="#" className="quick-view" data-link-action="quickview">
<span className="leo-quickview-bt-loading cssload-speeding-wheel"></span>
<span className="leo-quickview-bt-content">
<i className="material-icons search">remove_red_eye</i>
<span>Quick view</span>
</span>
</a>
</div>

<div className="compare">
<a className="leo-compare-button btn-primary btn-product btn" href="javascript:void(0)" data-id-product="4" title="Add to Compare">
<span className="leo-compare-bt-loading cssload-speeding-wheel"></span>
<span className="leo-compare-bt-content">
<i className="icon-btn-product icon-compare material-icons">filter_list</i>
<span className="name-btn-product">Add to Compare</span>
</span>
</a>
</div>
</div></div>
<div className="product-meta">



<h3 className="h3 product-title" itemProp="name"><a href="https://demo1.leotheme.com/bos_soucer_demo/en/bottle/4-16-quis-nostrud.html#/1-size-s/7-color-beige">Quis nostrud</a></h3>
<div className="p-price">

<div className="product-price-and-shipping ">
<span className="sr-only">Price</span>
<span className="price" itemProp="offers" itemScope itemType="http://schema.org/Offer">
<span itemProp="priceCurrency" content="USD"></span><span itemProp="price" content="50.99">$50.99</span>
</span>
</div>

<div className="button-container cart">
<form >
<input type="hidden" name="token" value="4cb73f7e0e359184aa7e5ae63052ace7"/>
<input type="hidden" value="292" className="quantity_product quantity_product_4" name="quantity_product"/>
<input type="hidden" value="1" className="minimal_quantity minimal_quantity_4" name="minimal_quantity"/>
<input type="hidden" value="16" className="id_product_attribute id_product_attribute_4" name="id_product_attribute"/>
<input type="hidden" value="4" className="id_product" name="id_product"/>
<input type="hidden" name="id_customization" value className="product_customization_id"/>
<input type="hidden" className="input-group form-control qty qty_product qty_product_4" name="qty" value="1" data-min="1"/>
<button className="btn btn-primary btn-product add-to-cart leo-bt-cart leo-bt-cart_4" data-button-action="add-to-cart" type="submit">
<span className="leo-loading cssload-speeding-wheel"></span>
<span className="leo-bt-cart-content">
<i className="icon-btn-product icon-cart material-icons shopping-cart">card_travel</i>
<span className="name-btn-product">Add to cart</span>
</span>
</button>
</form>
</div>
</div>
<div className="product-description-short" itemProp="description">Lorem ipsum dolor sit amet, mel paulo sonet latine ad, vis te ridens oporteat, tale ipsum facilis pro ei. Utamur deterruisset ea sea. Ferri...</div>
</div>
</div>
</article>
</div>
<div className="item first">
<article className="product-miniature js-product-miniature" data-id-product="5" data-id-product-attribute="28" itemScope itemType="http://schema.org/Product">
<div className="thumbnail-container">
<div className="product-image">
<a href="https://demo1.leotheme.com/bos_soucer_demo/en/micado/5-28-dolore-magna.html#/3-size-l/14-color-blue" className="thumbnail product-thumbnail">
<img className="img-fluid" src="https://demo1.leotheme.com/bos_soucer_demo/321-home_default/dolore-magna.jpg" alt data-full-size-image-url="https://demo1.leotheme.com/bos_soucer_demo/321-large_default/dolore-magna.jpg"/>
<span className="product-additional" data-idproduct="5"></span>
</a>

<ul className="product-flags">
</ul>
<div className="functional-buttons clearfix">

<div className="wishlist">
<a className="leo-wishlist-button btn-product btn-primary btn" href="javascript:void(0)" data-id-wishlist data-id-product="5" data-id-product-attribute="28" title="Add to Wishlist">
<span className="leo-wishlist-bt-loading cssload-speeding-wheel"></span>
<span className="leo-wishlist-bt-content">
<i className="icon-btn-product icon-wishlist material-icons">favorite_border</i>
<span className="name-btn-product">Add to Wishlist</span>
</span>
</a>
</div>

<div className="quickview hidden-sm-down">
<a href="#" className="quick-view" data-link-action="quickview">
<span className="leo-quickview-bt-loading cssload-speeding-wheel"></span>
<span className="leo-quickview-bt-content">
<i className="material-icons search">remove_red_eye</i>
<span>Quick view</span>
</span>
</a>
</div>

<div className="compare">
<a className="leo-compare-button btn-primary btn-product btn" href="javascript:void(0)" data-id-product="5" title="Add to Compare">
<span className="leo-compare-bt-loading cssload-speeding-wheel"></span>
<span className="leo-compare-bt-content">
<i className="icon-btn-product icon-compare material-icons">filter_list</i>
<span className="name-btn-product">Add to Compare</span>
</span>
</a>
</div>
</div></div>
<div className="product-meta">



<h3 className="h3 product-title" itemProp="name"><a href="https://demo1.leotheme.com/bos_soucer_demo/en/micado/5-28-dolore-magna.html#/3-size-l/14-color-blue">Dolore magna</a></h3>
<div className="p-price">

<div className="product-price-and-shipping ">
<span className="sr-only">Price</span>
<span className="price" itemProp="offers" itemScope itemType="http://schema.org/Offer">
<span itemProp="priceCurrency" content="USD"></span><span itemProp="price" content="30.5">$30.50</span>
</span>
</div>

<div className="button-container cart">
<form action="https://demo1.leotheme.com/bos_soucer_demo/en/cart" method="post">
<input type="hidden" name="token" value="4cb73f7e0e359184aa7e5ae63052ace7"/>
<input type="hidden" value="294" className="quantity_product quantity_product_5" name="quantity_product"/>
<input type="hidden" value="1" className="minimal_quantity minimal_quantity_5" name="minimal_quantity"/>
<input type="hidden" value="28" className="id_product_attribute id_product_attribute_5" name="id_product_attribute"/>
<input type="hidden" value="5" className="id_product" name="id_product"/>
<input type="hidden" name="id_customization" value className="product_customization_id"/>
<input type="hidden" className="input-group form-control qty qty_product qty_product_5" name="qty" value="1" data-min="1"/>
<button className="btn btn-primary btn-product add-to-cart leo-bt-cart leo-bt-cart_5" data-button-action="add-to-cart" type="submit">
<span className="leo-loading cssload-speeding-wheel"></span>
<span className="leo-bt-cart-content">
<i className="icon-btn-product icon-cart material-icons shopping-cart">card_travel</i>
<span className="name-btn-product">Add to cart</span>
</span>
</button>
</form>
</div>
</div>
<div className="product-description-short" itemProp="description">The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection...</div>
</div>
</div>
</article>
</div>
<div className="item first">
<article className="product-miniature js-product-miniature" data-id-product="6" data-id-product-attribute="33" itemScope itemType="http://schema.org/Product">
<div className="thumbnail-container">
<div className="product-image">
<a href="https://demo1.leotheme.com/bos_soucer_demo/en/micado/6-33-voluptate-velit.html#/3-size-l/16-color-yellow" className="thumbnail product-thumbnail">
<img className="img-fluid" src="https://demo1.leotheme.com/bos_soucer_demo/325-home_default/voluptate-velit.jpg" alt data-full-size-image-url="https://demo1.leotheme.com/bos_soucer_demo/325-large_default/voluptate-velit.jpg" />
<span className="product-additional" data-idproduct="6"></span>
</a>

<ul className="product-flags">
</ul>
<div className="functional-buttons clearfix">

<div className="wishlist">
<a className="leo-wishlist-button btn-product btn-primary btn" href="javascript:void(0)" data-id-wishlist data-id-product="6" data-id-product-attribute="33" title="Add to Wishlist">
<span className="leo-wishlist-bt-loading cssload-speeding-wheel"></span>
<span className="leo-wishlist-bt-content">
<i className="icon-btn-product icon-wishlist material-icons">favorite_border</i>
<span className="name-btn-product">Add to Wishlist</span>
</span>
</a>
</div>

<div className="quickview hidden-sm-down">
<a href="#" className="quick-view" data-link-action="quickview">
<span className="leo-quickview-bt-loading cssload-speeding-wheel"></span>
<span className="leo-quickview-bt-content">
<i className="material-icons search">remove_red_eye</i>
<span>Quick view</span>
</span>
</a>
</div>

<div className="compare">
<a className="leo-compare-button btn-primary btn-product btn" href="javascript:void(0)" data-id-product="6" title="Add to Compare">
<span className="leo-compare-bt-loading cssload-speeding-wheel"></span>
<span className="leo-compare-bt-content">
<i className="icon-btn-product icon-compare material-icons">filter_list</i>
<span className="name-btn-product">Add to Compare</span>
</span>
</a>
</div>
</div></div>
<div className="product-meta">



<h3 className="h3 product-title" itemProp="name"><a href="https://demo1.leotheme.com/bos_soucer_demo/en/micado/6-33-voluptate-velit.html#/3-size-l/16-color-yellow">Voluptate velit</a></h3>
<div className="p-price">

<div className="product-price-and-shipping ">
<span className="sr-only">Price</span>
<span className="price" itemProp="offers" itemScope itemType="http://schema.org/Offer">
<span itemProp="priceCurrency" content="USD"></span><span itemProp="price" content="30.5">$30.50</span>
</span>
</div>

<div className="button-container cart">
<form action="https://demo1.leotheme.com/bos_soucer_demo/en/cart" method="post">
<input type="hidden" name="token" value="4cb73f7e0e359184aa7e5ae63052ace7"/>
<input type="hidden" value="294" className="quantity_product quantity_product_6" name="quantity_product"/>
<input type="hidden" value="1" className="minimal_quantity minimal_quantity_6" name="minimal_quantity"/>
<input type="hidden" value="33" className="id_product_attribute id_product_attribute_6" name="id_product_attribute"/>
<input type="hidden" value="6" className="id_product" name="id_product"/>
<input type="hidden" name="id_customization" value className="product_customization_id"/>
<input type="hidden" className="input-group form-control qty qty_product qty_product_6" name="qty" value="1" data-min="1"/>
<button className="btn btn-primary btn-product add-to-cart leo-bt-cart leo-bt-cart_6" data-button-action="add-to-cart" type="submit">
<span className="leo-loading cssload-speeding-wheel"></span>
<span className="leo-bt-cart-content">
<i className="icon-btn-product icon-cart material-icons shopping-cart">card_travel</i>
<span className="name-btn-product">Add to cart</span>
</span>
</button>
</form>
</div>
</div>
<div className="product-description-short" itemProp="description">In pri liber dolores assentior. Vim ad detracto accusata omittantur. Sit ex possim expetendis, quo no quas ornatus complectitur. Eum te dictas...</div>
</div>
</div>
</article>
</div>
<div className="item first">
<article className="product-miniature js-product-miniature" data-id-product="8" data-id-product-attribute="50" itemScope itemType="http://schema.org/Product">
<div className="thumbnail-container">
<div className="product-image">
<a href="https://demo1.leotheme.com/bos_soucer_demo/en/nullam-tincidunt/8-50-lorem-est.html#/3-size-l/14-color-blue" className="thumbnail product-thumbnail">
<img className="img-fluid" src="https://demo1.leotheme.com/bos_soucer_demo/337-home_default/lorem-est.jpg" alt data-full-size-image-url="https://demo1.leotheme.com/bos_soucer_demo/337-large_default/lorem-est.jpg"/>
<span className="product-additional" data-idproduct="8"></span>
</a>

<ul className="product-flags">
</ul>
<div className="functional-buttons clearfix">

<div className="wishlist">
<a className="leo-wishlist-button btn-product btn-primary btn" href="javascript:void(0)" data-id-wishlist data-id-product="8" data-id-product-attribute="50" title="Add to Wishlist">
<span className="leo-wishlist-bt-loading cssload-speeding-wheel"></span>
<span className="leo-wishlist-bt-content">
<i className="icon-btn-product icon-wishlist material-icons">favorite_border</i>
<span className="name-btn-product">Add to Wishlist</span>
</span>
</a>
</div>

<div className="quickview hidden-sm-down">
<a href="#" className="quick-view" data-link-action="quickview">
<span className="leo-quickview-bt-loading cssload-speeding-wheel"></span>
<span className="leo-quickview-bt-content">
<i className="material-icons search">remove_red_eye</i>
<span>Quick view</span>
</span>
</a>
</div>

<div className="compare">
<a className="leo-compare-button btn-primary btn-product btn" href="javascript:void(0)" data-id-product="8" title="Add to Compare">
<span className="leo-compare-bt-loading cssload-speeding-wheel"></span>
<span className="leo-compare-bt-content">
<i className="icon-btn-product icon-compare material-icons">filter_list</i>
<span className="name-btn-product">Add to Compare</span>
</span>
</a>
</div>
</div></div>
<div className="product-meta">



<h3 className="h3 product-title" itemProp="name"><a href="https://demo1.leotheme.com/bos_soucer_demo/en/nullam-tincidunt/8-50-lorem-est.html#/3-size-l/14-color-blue">Lorem est</a></h3>
<div className="p-price">

<div className="product-price-and-shipping ">
<span className="sr-only">Price</span>
<span className="price" itemProp="offers" itemScope itemType="http://schema.org/Offer">
<span itemProp="priceCurrency" content="USD"></span><span itemProp="price" content="16.51">$16.51</span>
</span>
</div>

<div className="button-container cart">
<form action="https://demo1.leotheme.com/bos_soucer_demo/en/cart" method="post">
<input type="hidden" name="token" value="4cb73f7e0e359184aa7e5ae63052ace7"/>
<input type="hidden" value="986" className="quantity_product quantity_product_8" name="quantity_product"/>
<input type="hidden" value="1" className="minimal_quantity minimal_quantity_8" name="minimal_quantity"/>
<input type="hidden" value="50" className="id_product_attribute id_product_attribute_8" name="id_product_attribute"/>
<input type="hidden" value="8" className="id_product" name="id_product"/>
<input type="hidden" name="id_customization" value className="product_customization_id"/>
<input type="hidden" className="input-group form-control qty qty_product qty_product_8" name="qty" value="1" data-min="1"/>
<button className="btn btn-primary btn-product add-to-cart leo-bt-cart leo-bt-cart_8" data-button-action="add-to-cart" type="submit">
<span className="leo-loading cssload-speeding-wheel"></span>
<span className="leo-bt-cart-content">
<i className="icon-btn-product icon-cart material-icons shopping-cart">card_travel</i>
<span className="name-btn-product">Add to cart</span>
</span>
</button>
</form>
</div>
</div>
<div className="product-description-short" itemProp="description">Iudico laoreet per ut. Quot possim convenire cu duo. Natum possit mel no, ut vix agam quaeque, ipsum primis adipiscing cum ei. Has et rebum modus....</div>
</div>
</div>
</article>
</div>
<div className="item first">
<article className="product-miniature js-product-miniature" data-id-product="13" data-id-product-attribute="61" itemScope itemType="http://schema.org/Product">
<div className="thumbnail-container">
<div className="product-image">
<a href="https://demo1.leotheme.com/bos_soucer_demo/en/micado/13-61-sequi-nesciunt.html#/2-size-m/15-color-green" className="thumbnail product-thumbnail">
<img className="img-fluid" src="https://demo1.leotheme.com/bos_soucer_demo/362-home_default/sequi-nesciunt.jpg" alt data-full-size-image-url="https://demo1.leotheme.com/bos_soucer_demo/362-large_default/sequi-nesciunt.jpg"/>
<span className="product-additional" data-idproduct="13"></span>
</a>

<ul className="product-flags">
</ul>
<div className="functional-buttons clearfix">

<div className="wishlist">
<a className="leo-wishlist-button btn-product btn-primary btn" href="javascript:void(0)" data-id-wishlist data-id-product="13" data-id-product-attribute="61" title="Add to Wishlist">
<span className="leo-wishlist-bt-loading cssload-speeding-wheel"></span>
<span className="leo-wishlist-bt-content">
<i className="icon-btn-product icon-wishlist material-icons">favorite_border</i>
<span className="name-btn-product">Add to Wishlist</span>
</span>
</a>
</div>

<div className="quickview hidden-sm-down">
<a href="#" className="quick-view" data-link-action="quickview">
<span className="leo-quickview-bt-loading cssload-speeding-wheel"></span>
<span className="leo-quickview-bt-content">
<i className="material-icons search">remove_red_eye</i>
<span>Quick view</span>
</span>
</a>
</div>

<div className="compare">
<a className="leo-compare-button btn-primary btn-product btn" href="javascript:void(0)" data-id-product="13" title="Add to Compare">
<span className="leo-compare-bt-loading cssload-speeding-wheel"></span>
<span className="leo-compare-bt-content">
<i className="icon-btn-product icon-compare material-icons">filter_list</i>
<span className="name-btn-product">Add to Compare</span>
</span>
</a>
</div>
</div></div>
<div className="product-meta">



<h3 className="h3 product-title" itemProp="name"><a href="https://demo1.leotheme.com/bos_soucer_demo/en/micado/13-61-sequi-nesciunt.html#/2-size-m/15-color-green">Sequi nesciunt</a></h3>
<div className="p-price">

<div className="product-price-and-shipping ">
<span className="sr-only">Price</span>
<span className="price" itemProp="offers" itemScope itemType="http://schema.org/Offer">
<span itemProp="priceCurrency" content="USD"></span><span itemProp="price" content="20.5">$20.50</span>
</span>
</div>

<div className="button-container cart">
<form action="https://demo1.leotheme.com/bos_soucer_demo/en/cart" method="post">
<input type="hidden" name="token" value="4cb73f7e0e359184aa7e5ae63052ace7"/>
<input type="hidden" value="80" className="quantity_product quantity_product_13" name="quantity_product"/>
<input type="hidden" value="1" className="minimal_quantity minimal_quantity_13" name="minimal_quantity"/>
<input type="hidden" value="61" className="id_product_attribute id_product_attribute_13" name="id_product_attribute"/>
<input type="hidden" value="13" className="id_product" name="id_product"/>
<input type="hidden" name="id_customization" value className="product_customization_id"/>
<input type="hidden" className="input-group form-control qty qty_product qty_product_13" name="qty" value="1" data-min="1"/>
<button className="btn btn-primary btn-product add-to-cart leo-bt-cart leo-bt-cart_13" data-button-action="add-to-cart" type="submit">
<span className="leo-loading cssload-speeding-wheel"></span>
<span className="leo-bt-cart-content">
<i className="icon-btn-product icon-cart material-icons shopping-cart">card_travel</i>
<span className="name-btn-product">Add to cart</span>
</span>
</button>
</form>
</div>
</div>
<div className="product-description-short" itemProp="description">Nec consul possit delenit ei, illud forensibus vim ea, mei ubique sapientem et. Eos eu idque falli inimicus, ne odio dictas gloriatur sed, ea unum...</div>
</div>
</div>
</article>
</div>
</div>
</div>
</div>
</section>

<section className="category-products block clearfix  plist-default">
<h5 className="products-section-title">
PRODUITS CONNEXES
<span>(
8 autres produits dans la même catégorie
)
</span>
</h5>
<div className="block_content">
<div className="products">
<div className="owl-row">
<div id="category-products">
<div className="item first">
<article className="product-miniature js-product-miniature" data-id-product="1" data-id-product-attribute="6" itemScope itemType="http://schema.org/Product">
<div className="thumbnail-container">
<div className="product-image">
<a href="https://demo1.leotheme.com/bos_soucer_demo/fr/nullam-tincidunt/1-6-lorem-ipsum.html#/3-taille-l/14-couleur-bleu" className="thumbnail product-thumbnail">
<img className="img-fluid" src="https://demo1.leotheme.com/bos_soucer_demo/298-home_default/lorem-ipsum.jpg" alt data-full-size-image-url="https://demo1.leotheme.com/bos_soucer_demo/298-large_default/lorem-ipsum.jpg"/>
<span className="product-additional" data-idproduct="1"></span>
</a>

<ul className="product-flags">
</ul>
<div className="functional-buttons clearfix">

<div className="wishlist">
<a className="leo-wishlist-button btn-product btn-primary btn" href="javascript:void(0)" data-id-wishlist data-id-product="1" data-id-product-attribute="6" title="Ajouter souhaits">
<span className="leo-wishlist-bt-loading cssload-speeding-wheel"></span>
<span className="leo-wishlist-bt-content">
<i className="icon-btn-product icon-wishlist material-icons">favorite_border</i>
<span className="name-btn-product">Ajouter souhaits</span>
</span>
</a>
</div>

<div className="quickview hidden-sm-down">
<a href="#" className="quick-view" data-link-action="quickview">
<span className="leo-quickview-bt-loading cssload-speeding-wheel"></span>
<span className="leo-quickview-bt-content">
<i className="material-icons search">remove_red_eye</i>
<span>Affichage rapide</span>
</span>
</a>
</div>

<div className="compare">
<a className="leo-compare-button btn-primary btn-product btn" href="javascript:void(0)" data-id-product="1" title="Ajouter à comparer">
<span className="leo-compare-bt-loading cssload-speeding-wheel"></span>
<span className="leo-compare-bt-content">
<i className="icon-btn-product icon-compare material-icons">filter_list</i>
<span className="name-btn-product">Ajouter à comparer</span>
</span>
</a>
</div>
</div></div>
<div className="product-meta">



<h3 className="h3 product-title" itemProp="name"><a href="https://demo1.leotheme.com/bos_soucer_demo/fr/nullam-tincidunt/1-6-lorem-ipsum.html#/3-taille-l/14-couleur-bleu">Lorem ipsum</a></h3>
<div className="p-price">

<div className="product-price-and-shipping ">
<span className="aeuc_from_label">
From
</span>
<span className="sr-only">Prix</span>
<span className="price" itemProp="offers" itemScope itemType="http://schema.org/Offer">
<span itemProp="priceCurrency" content="USD"></span><span itemProp="price" content="26.51">26,51 $US</span>
</span>
</div>

<div className="button-container cart">
<form action="https://demo1.leotheme.com/bos_soucer_demo/fr/panier" method="post">
<input type="hidden" name="token" value="4cb73f7e0e359184aa7e5ae63052ace7"/>
<input type="hidden" value="291" className="quantity_product quantity_product_1" name="quantity_product"/>
<input type="hidden" value="1" className="minimal_quantity minimal_quantity_1" name="minimal_quantity"/>
<input type="hidden" value="6" className="id_product_attribute id_product_attribute_1" name="id_product_attribute"/>
<input type="hidden" value="1" className="id_product" name="id_product"/>
<input type="hidden" name="id_customization" value className="product_customization_id"/>
<input type="hidden" className="input-group form-control qty qty_product qty_product_1" name="qty" value="1" data-min="1"/>
<button className="btn btn-primary btn-product add-to-cart leo-bt-cart leo-bt-cart_1" data-button-action="add-to-cart" type="submit">
<span className="leo-loading cssload-speeding-wheel"></span>
<span className="leo-bt-cart-content">
<i className="icon-btn-product icon-cart material-icons shopping-cart">card_travel</i>
<span className="name-btn-product">Ajouter au panier</span>
</span>
</button>
</form>
</div>
</div>
<div className="product-description-short" itemProp="description">Nec consul possit delenit ei, illud forensibus vim ea, mei ubique sapientem et. Eos eu idque falli inimicus, ne odio dictas gloriatur sed, ea unum...</div>
</div>
</div>
</article>
</div>
<div className="item first">
<article className="product-miniature js-product-miniature" data-id-product="10" data-id-product-attribute="54" itemScope itemType="http://schema.org/Product">
<div className="thumbnail-container">
<div className="product-image">
<a href="https://demo1.leotheme.com/bos_soucer_demo/fr/lanternes/10-54-occaecat-cupi.html#/1-taille-s/13-couleur-orange" className="thumbnail product-thumbnail">
<img className="img-fluid" src="https://demo1.leotheme.com/bos_soucer_demo/346-home_default/occaecat-cupi.jpg" alt data-full-size-image-url="https://demo1.leotheme.com/bos_soucer_demo/346-large_default/occaecat-cupi.jpg"/>
<span className="product-additional" data-idproduct="10"></span>
</a>

<ul className="product-flags">
</ul>
<div className="functional-buttons clearfix">

<div className="wishlist">
<a className="leo-wishlist-button btn-product btn-primary btn" href="javascript:void(0)" data-id-wishlist data-id-product="10" data-id-product-attribute="54" title="Ajouter souhaits">
<span className="leo-wishlist-bt-loading cssload-speeding-wheel"></span>
<span className="leo-wishlist-bt-content">
<i className="icon-btn-product icon-wishlist material-icons">favorite_border</i>
<span className="name-btn-product">Ajouter souhaits</span>
</span>
</a>
</div>

<div className="quickview hidden-sm-down">
<a href="#" className="quick-view" data-link-action="quickview">
<span className="leo-quickview-bt-loading cssload-speeding-wheel"></span>
<span className="leo-quickview-bt-content">
<i className="material-icons search">remove_red_eye</i>
<span>Affichage rapide</span>
</span>
</a>
</div>

<div className="compare">
<a className="leo-compare-button btn-primary btn-product btn" href="javascript:void(0)" data-id-product="10" title="Ajouter à comparer">
<span className="leo-compare-bt-loading cssload-speeding-wheel"></span>
<span className="leo-compare-bt-content">
<i className="icon-btn-product icon-compare material-icons">filter_list</i>
<span className="name-btn-product">Ajouter à comparer</span>
</span>
</a>
</div>
</div></div>
<div className="product-meta">



<h3 className="h3 product-title" itemProp="name"><a href="https://demo1.leotheme.com/bos_soucer_demo/fr/lanternes/10-54-occaecat-cupi.html#/1-taille-s/13-couleur-orange">Occaecat cupi</a></h3>
<div className="p-price">

<div className="product-price-and-shipping ">
<span className="sr-only">Prix</span>
<span className="price" itemProp="offers" itemScope itemType="http://schema.org/Offer">
<span itemProp="priceCurrency" content="USD"></span><span itemProp="price" content="25.99">25,99 $US</span>
</span>
</div>

<div className="button-container cart">
<form action="https://demo1.leotheme.com/bos_soucer_demo/fr/panier" method="post">
<input type="hidden" name="token" value="4cb73f7e0e359184aa7e5ae63052ace7"/>
<input type="hidden" value="80" className="quantity_product quantity_product_10" name="quantity_product"/>
<input type="hidden" value="1" className="minimal_quantity minimal_quantity_10" name="minimal_quantity"/>
<input type="hidden" value="54" className="id_product_attribute id_product_attribute_10" name="id_product_attribute"/>
<input type="hidden" value="10" className="id_product" name="id_product"/>
<input type="hidden" name="id_customization" value className="product_customization_id"/>
<input type="hidden" className="input-group form-control qty qty_product qty_product_10" name="qty" value="1" data-min="1"/>
<button className="btn btn-primary btn-product add-to-cart leo-bt-cart leo-bt-cart_10" data-button-action="add-to-cart" type="submit">
<span className="leo-loading cssload-speeding-wheel"></span>
<span className="leo-bt-cart-content">
<i className="icon-btn-product icon-cart material-icons shopping-cart">card_travel</i>
<span className="name-btn-product">Ajouter au panier</span>
</span>
</button>
</form>
</div>
</div>
<div className="product-description-short" itemProp="description">Lorem ipsum dolor sit amet, mel paulo sonet latine ad, vis te ridens oporteat, tale ipsum facilis pro ei. Utamur deterruisset ea sea. Ferri...</div>
</div>
</div>
</article>
</div>
<div className="item first">
<article className="product-miniature js-product-miniature" data-id-product="4" data-id-product-attribute="16" itemScope itemType="http://schema.org/Product">
<div className="thumbnail-container">
<div className="product-image">
<a href="https://demo1.leotheme.com/bos_soucer_demo/fr/bouteille/4-16-quis-nostrud.html#/1-taille-s/7-couleur-beige" className="thumbnail product-thumbnail">
<img className="img-fluid" src="https://demo1.leotheme.com/bos_soucer_demo/316-home_default/quis-nostrud.jpg" alt data-full-size-image-url="https://demo1.leotheme.com/bos_soucer_demo/316-large_default/quis-nostrud.jpg"/>
<span className="product-additional" data-idproduct="4"></span>
</a>

<ul className="product-flags">
</ul>
<div className="functional-buttons clearfix">

<div className="wishlist">
<a className="leo-wishlist-button btn-product btn-primary btn" href="javascript:void(0)" data-id-wishlist data-id-product="4" data-id-product-attribute="16" title="Ajouter souhaits">
<span className="leo-wishlist-bt-loading cssload-speeding-wheel"></span>
<span className="leo-wishlist-bt-content">
<i className="icon-btn-product icon-wishlist material-icons">favorite_border</i>
<span className="name-btn-product">Ajouter souhaits</span>
</span>
</a>
</div>

<div className="quickview hidden-sm-down">
<a href="#" className="quick-view" data-link-action="quickview">
<span className="leo-quickview-bt-loading cssload-speeding-wheel"></span>
<span className="leo-quickview-bt-content">
<i className="material-icons search">remove_red_eye</i>
<span>Affichage rapide</span>
</span>
</a>
</div>

<div className="compare">
<a className="leo-compare-button btn-primary btn-product btn" href="javascript:void(0)" data-id-product="4" title="Ajouter à comparer">
<span className="leo-compare-bt-loading cssload-speeding-wheel"></span>
<span className="leo-compare-bt-content">
<i className="icon-btn-product icon-compare material-icons">filter_list</i>
<span className="name-btn-product">Ajouter à comparer</span>
</span>
</a>
</div>
</div></div>
<div className="product-meta">



<h3 className="h3 product-title" itemProp="name"><a href="https://demo1.leotheme.com/bos_soucer_demo/fr/bouteille/4-16-quis-nostrud.html#/1-taille-s/7-couleur-beige">Quis nostrud</a></h3>
<div className="p-price">

<div className="product-price-and-shipping ">
<span className="sr-only">Prix</span>
<span className="price" itemProp="offers" itemScope itemType="http://schema.org/Offer">
<span itemProp="priceCurrency" content="USD"></span><span itemProp="price" content="50.99">50,99 $US</span>
</span>
</div>

<div className="button-container cart">
<form action="https://demo1.leotheme.com/bos_soucer_demo/fr/panier" method="post">
<input type="hidden" name="token" value="4cb73f7e0e359184aa7e5ae63052ace7"/>
<input type="hidden" value="292" className="quantity_product quantity_product_4" name="quantity_product"/>
<input type="hidden" value="1" className="minimal_quantity minimal_quantity_4" name="minimal_quantity"/>
<input type="hidden" value="16" className="id_product_attribute id_product_attribute_4" name="id_product_attribute"/>
<input type="hidden" value="4" className="id_product" name="id_product"/>
<input type="hidden" name="id_customization" value className="product_customization_id"/>
<input type="hidden" className="input-group form-control qty qty_product qty_product_4" name="qty" value="1" data-min="1"/>
<button className="btn btn-primary btn-product add-to-cart leo-bt-cart leo-bt-cart_4" data-button-action="add-to-cart" type="submit">
<span className="leo-loading cssload-speeding-wheel"></span>
<span className="leo-bt-cart-content">
<i className="icon-btn-product icon-cart material-icons shopping-cart">card_travel</i>
<span className="name-btn-product">Ajouter au panier</span>
</span>
</button>
</form>
</div>
</div>
<div className="product-description-short" itemProp="description">Lorem ipsum dolor sit amet, mel paulo sonet latine ad, vis te ridens oporteat, tale ipsum facilis pro ei. Utamur deterruisset ea sea. Ferri...</div>
</div>
</div>
</article>
</div>
<div className="item first">
<article className="product-miniature js-product-miniature" data-id-product="3" data-id-product-attribute="13" itemScope itemType="http://schema.org/Product">
<div className="thumbnail-container">
<div className="product-image">
<a href="https://demo1.leotheme.com/bos_soucer_demo/fr/lanternes/3-13-adipiscing-elit.html#/1-taille-s/13-couleur-orange" className="thumbnail product-thumbnail">
<img className="img-fluid" src="https://demo1.leotheme.com/bos_soucer_demo/310-home_default/adipiscing-elit.jpg" alt data-full-size-image-url="https://demo1.leotheme.com/bos_soucer_demo/310-large_default/adipiscing-elit.jpg"/>
<span className="product-additional" data-idproduct="3"></span>
</a>

<ul className="product-flags">
</ul>
<div className="functional-buttons clearfix">

<div className="wishlist">
<a className="leo-wishlist-button btn-product btn-primary btn" href="javascript:void(0)" data-id-wishlist data-id-product="3" data-id-product-attribute="13" title="Ajouter souhaits">
<span className="leo-wishlist-bt-loading cssload-speeding-wheel"></span>
<span className="leo-wishlist-bt-content">
<i className="icon-btn-product icon-wishlist material-icons">favorite_border</i>
<span className="name-btn-product">Ajouter souhaits</span>
</span>
</a>
</div>

<div className="quickview hidden-sm-down">
<a href="#" className="quick-view" data-link-action="quickview">
<span className="leo-quickview-bt-loading cssload-speeding-wheel"></span>
<span className="leo-quickview-bt-content">
<i className="material-icons search">remove_red_eye</i>
<span>Affichage rapide</span>
</span>
</a>
</div>

<div className="compare">
<a className="leo-compare-button btn-primary btn-product btn" href="javascript:void(0)" data-id-product="3" title="Ajouter à comparer">
<span className="leo-compare-bt-loading cssload-speeding-wheel"></span>
<span className="leo-compare-bt-content">
<i className="icon-btn-product icon-compare material-icons">filter_list</i>
<span className="name-btn-product">Ajouter à comparer</span>
</span>
</a>
</div>
</div></div>
<div className="product-meta">



<h3 className="h3 product-title" itemProp="name"><a href="https://demo1.leotheme.com/bos_soucer_demo/fr/lanternes/3-13-adipiscing-elit.html#/1-taille-s/13-couleur-orange">Adipiscing elit</a></h3>
<div className="p-price">

<div className="product-price-and-shipping ">
<span className="sr-only">Prix</span>
<span className="price" itemProp="offers" itemScope itemType="http://schema.org/Offer">
<span itemProp="priceCurrency" content="USD"></span><span itemProp="price" content="25.99">25,99 $US</span>
</span>
</div>

<div className="button-container cart">
<form action="https://demo1.leotheme.com/bos_soucer_demo/fr/panier" method="post">
<input type="hidden" name="token" value="4cb73f7e0e359184aa7e5ae63052ace7"/>
<input type="hidden" value="290" className="quantity_product quantity_product_3" name="quantity_product"/>
<input type="hidden" value="1" className="minimal_quantity minimal_quantity_3" name="minimal_quantity"/>
<input type="hidden" value="13" className="id_product_attribute id_product_attribute_3" name="id_product_attribute"/>
<input type="hidden" value="3" className="id_product" name="id_product"/>
<input type="hidden" name="id_customization" value className="product_customization_id"/>
<input type="hidden" className="input-group form-control qty qty_product qty_product_3" name="qty" value="1" data-min="1"/>
<button className="btn btn-primary btn-product add-to-cart leo-bt-cart leo-bt-cart_3" data-button-action="add-to-cart" type="submit">
<span className="leo-loading cssload-speeding-wheel"></span>
<span className="leo-bt-cart-content">
<i className="icon-btn-product icon-cart material-icons shopping-cart">card_travel</i>
<span className="name-btn-product">Ajouter au panier</span>
</span>
</button>
</form>
</div>
</div>
<div className="product-description-short" itemProp="description">Lorem ipsum dolor sit amet, mel paulo sonet latine ad, vis te ridens oporteat, tale ipsum facilis pro ei. Utamur deterruisset ea sea. Ferri...</div>
</div>
</div>
</article>
</div>
<div className="item first">
<article className="product-miniature js-product-miniature" data-id-product="7" data-id-product-attribute="38" itemScope itemType="http://schema.org/Product">
<div className="thumbnail-container">
<div className="product-image">
<a href="https://demo1.leotheme.com/bos_soucer_demo/fr/micado/7-38-excepteur-sint.html#/2-taille-m/15-couleur-vert" className="thumbnail product-thumbnail">
<img className="img-fluid" src="https://demo1.leotheme.com/bos_soucer_demo/331-home_default/excepteur-sint.jpg" alt data-full-size-image-url="https://demo1.leotheme.com/bos_soucer_demo/331-large_default/excepteur-sint.jpg"/>
<span className="product-additional" data-idproduct="7"></span>
</a>

<ul className="product-flags">
</ul>
<div className="functional-buttons clearfix">

<div className="wishlist">
<a className="leo-wishlist-button btn-product btn-primary btn" href="javascript:void(0)" data-id-wishlist data-id-product="7" data-id-product-attribute="38" title="Ajouter souhaits">
<span className="leo-wishlist-bt-loading cssload-speeding-wheel"></span>
<span className="leo-wishlist-bt-content">
<i className="icon-btn-product icon-wishlist material-icons">favorite_border</i>
<span className="name-btn-product">Ajouter souhaits</span>
</span>
</a>
</div>

<div className="quickview hidden-sm-down">
<a href="#" className="quick-view" data-link-action="quickview">
<span className="leo-quickview-bt-loading cssload-speeding-wheel"></span>
<span className="leo-quickview-bt-content">
<i className="material-icons search">remove_red_eye</i>
<span>Affichage rapide</span>
</span>
</a>
</div>

<div className="compare">
<a className="leo-compare-button btn-primary btn-product btn" href="javascript:void(0)" data-id-product="7" title="Ajouter à comparer">
<span className="leo-compare-bt-loading cssload-speeding-wheel"></span>
<span className="leo-compare-bt-content">
<i className="icon-btn-product icon-compare material-icons">filter_list</i>
<span className="name-btn-product">Ajouter à comparer</span>
</span>
</a>
</div>
</div></div>
<div className="product-meta">



<h3 className="h3 product-title" itemProp="name"><a href="https://demo1.leotheme.com/bos_soucer_demo/fr/micado/7-38-excepteur-sint.html#/2-taille-m/15-couleur-vert">Excepteur sint</a></h3>
<div className="p-price">

<div className="product-price-and-shipping ">
<span className="sr-only">Prix</span>
<span className="price" itemProp="offers" itemScope itemType="http://schema.org/Offer">
<span itemProp="priceCurrency" content="USD"></span><span itemProp="price" content="20.5">20,50 $US</span>
</span>
</div>

<div className="button-container cart">
<form action="https://demo1.leotheme.com/bos_soucer_demo/fr/panier" method="post">
<input type="hidden" name="token" value="4cb73f7e0e359184aa7e5ae63052ace7"/>
<input type="hidden" value="293" className="quantity_product quantity_product_7" name="quantity_product"/>
<input type="hidden" value="1" className="minimal_quantity minimal_quantity_7" name="minimal_quantity"/>
<input type="hidden" value="38" className="id_product_attribute id_product_attribute_7" name="id_product_attribute"/>
<input type="hidden" value="7" className="id_product" name="id_product"/>
<input type="hidden" name="id_customization" value className="product_customization_id"/>
<input type="hidden" className="input-group form-control qty qty_product qty_product_7" name="qty" value="1" data-min="1"/>
<button className="btn btn-primary btn-product add-to-cart leo-bt-cart leo-bt-cart_7" data-button-action="add-to-cart" type="submit">
<span className="leo-loading cssload-speeding-wheel"></span>
<span className="leo-bt-cart-content">
<i className="icon-btn-product icon-cart material-icons shopping-cart">card_travel</i>
<span className="name-btn-product">Ajouter au panier</span>
</span>
</button>
</form>
</div>
</div>
<div className="product-description-short" itemProp="description">Iudico laoreet per ut. Quot possim convenire cu duo. Natum possit mel no, ut vix agam quaeque, ipsum primis adipiscing cum ei. Has et rebum modus....</div>
</div>
</div>
</article>
</div>
<div className="item first">
<article className="product-miniature js-product-miniature" data-id-product="5" data-id-product-attribute="28" itemScope itemType="http://schema.org/Product">
<div className="thumbnail-container">
<div className="product-image">
<a href="https://demo1.leotheme.com/bos_soucer_demo/fr/micado/5-28-dolore-magna.html#/3-taille-l/14-couleur-bleu" className="thumbnail product-thumbnail">
<img className="img-fluid" src="https://demo1.leotheme.com/bos_soucer_demo/321-home_default/dolore-magna.jpg" alt data-full-size-image-url="https://demo1.leotheme.com/bos_soucer_demo/321-large_default/dolore-magna.jpg"/>
<span className="product-additional" data-idproduct="5"></span>
</a>

<ul className="product-flags">
</ul>
<div className="functional-buttons clearfix">

<div className="wishlist">
<a className="leo-wishlist-button btn-product btn-primary btn" href="javascript:void(0)" data-id-wishlist data-id-product="5" data-id-product-attribute="28" title="Ajouter souhaits">
<span className="leo-wishlist-bt-loading cssload-speeding-wheel"></span>
<span className="leo-wishlist-bt-content">
<i className="icon-btn-product icon-wishlist material-icons">favorite_border</i>
<span className="name-btn-product">Ajouter souhaits</span>
</span>
</a>
</div>

<div className="quickview hidden-sm-down">
<a href="#" className="quick-view" data-link-action="quickview">
<span className="leo-quickview-bt-loading cssload-speeding-wheel"></span>
<span className="leo-quickview-bt-content">
<i className="material-icons search">remove_red_eye</i>
<span>Affichage rapide</span>
</span>
</a>
</div>

<div className="compare">
<a className="leo-compare-button btn-primary btn-product btn" href="javascript:void(0)" data-id-product="5" title="Ajouter à comparer">
<span className="leo-compare-bt-loading cssload-speeding-wheel"></span>
<span className="leo-compare-bt-content">
<i className="icon-btn-product icon-compare material-icons">filter_list</i>
<span className="name-btn-product">Ajouter à comparer</span>
</span>
</a>
</div>
</div></div>
<div className="product-meta">



<h3 className="h3 product-title" itemProp="name"><a href="https://demo1.leotheme.com/bos_soucer_demo/fr/micado/5-28-dolore-magna.html#/3-taille-l/14-couleur-bleu">Dolore magna</a></h3>
<div className="p-price">

<div className="product-price-and-shipping ">
<span className="sr-only">Prix</span>
<span className="price" itemProp="offers" itemScope itemType="http://schema.org/Offer">
<span itemProp="priceCurrency" content="USD"></span><span itemProp="price" content="30.5">30,50 $US</span>
</span>
</div>

<div className="button-container cart">
<form action="https://demo1.leotheme.com/bos_soucer_demo/fr/panier" method="post">
<input type="hidden" name="token" value="4cb73f7e0e359184aa7e5ae63052ace7"/>
<input type="hidden" value="294" className="quantity_product quantity_product_5" name="quantity_product"/>
<input type="hidden" value="1" className="minimal_quantity minimal_quantity_5" name="minimal_quantity"/>
<input type="hidden" value="28" className="id_product_attribute id_product_attribute_5" name="id_product_attribute"/>
<input type="hidden" value="5" className="id_product" name="id_product"/>
<input type="hidden" name="id_customization" value className="product_customization_id"/>
<input type="hidden" className="input-group form-control qty qty_product qty_product_5" name="qty" value="1" data-min="1"/>
<button className="btn btn-primary btn-product add-to-cart leo-bt-cart leo-bt-cart_5" data-button-action="add-to-cart" type="submit">
<span className="leo-loading cssload-speeding-wheel"></span>
<span className="leo-bt-cart-content">
<i className="icon-btn-product icon-cart material-icons shopping-cart">card_travel</i>
<span className="name-btn-product">Ajouter au panier</span>
</span>
</button>
</form>
</div>
</div>
<div className="product-description-short" itemProp="description">Nec in invidunt intellegat dissentias, nam et tibique delectus maluisset. Idque nonumy consequat eum ne, appellantur definitionem id eum. Cu purto...</div>
</div>
</div>
</article>
</div>
<div className="item first">
<article className="product-miniature js-product-miniature" data-id-product="6" data-id-product-attribute="33" itemScope itemType="http://schema.org/Product">
<div className="thumbnail-container">
<div className="product-image">
<a href="https://demo1.leotheme.com/bos_soucer_demo/fr/micado/6-33-voluptate-velit.html#/3-taille-l/16-couleur-jaune" className="thumbnail product-thumbnail">
<img className="img-fluid" src="https://demo1.leotheme.com/bos_soucer_demo/325-home_default/voluptate-velit.jpg" alt data-full-size-image-url="https://demo1.leotheme.com/bos_soucer_demo/325-large_default/voluptate-velit.jpg"/>
<span className="product-additional" data-idproduct="6"></span>
</a>

<ul className="product-flags">
</ul>
<div className="functional-buttons clearfix">

<div className="wishlist">
<a className="leo-wishlist-button btn-product btn-primary btn" href="javascript:void(0)" data-id-wishlist data-id-product="6" data-id-product-attribute="33" title="Ajouter souhaits">
<span className="leo-wishlist-bt-loading cssload-speeding-wheel"></span>
<span className="leo-wishlist-bt-content">
<i className="icon-btn-product icon-wishlist material-icons">favorite_border</i>
<span className="name-btn-product">Ajouter souhaits</span>
</span>
</a>
</div>

<div className="quickview hidden-sm-down">
<a href="#" className="quick-view" data-link-action="quickview">
<span className="leo-quickview-bt-loading cssload-speeding-wheel"></span>
<span className="leo-quickview-bt-content">
<i className="material-icons search">remove_red_eye</i>
<span>Affichage rapide</span>
</span>
</a>
</div>

<div className="compare">
<a className="leo-compare-button btn-primary btn-product btn" href="javascript:void(0)" data-id-product="6" title="Ajouter à comparer">
<span className="leo-compare-bt-loading cssload-speeding-wheel"></span>
<span className="leo-compare-bt-content">
<i className="icon-btn-product icon-compare material-icons">filter_list</i>
<span className="name-btn-product">Ajouter à comparer</span>
</span>
</a>
</div>
</div></div>
<div className="product-meta">



<h3 className="h3 product-title" itemProp="name"><a href="https://demo1.leotheme.com/bos_soucer_demo/fr/micado/6-33-voluptate-velit.html#/3-taille-l/16-couleur-jaune">Voluptate velit</a></h3>
<div className="p-price">

<div className="product-price-and-shipping ">
<span className="sr-only">Prix</span>
<span className="price" itemProp="offers" itemScope itemType="http://schema.org/Offer">
<span itemProp="priceCurrency" content="USD"></span><span itemProp="price" content="30.5">30,50 $US</span>
</span>
</div>

<div className="button-container cart">
<form action="https://demo1.leotheme.com/bos_soucer_demo/fr/panier" method="post">
<input type="hidden" name="token" value="4cb73f7e0e359184aa7e5ae63052ace7"/>
<input type="hidden" value="294" className="quantity_product quantity_product_6" name="quantity_product"/>
<input type="hidden" value="1" className="minimal_quantity minimal_quantity_6" name="minimal_quantity"/>
<input type="hidden" value="33" className="id_product_attribute id_product_attribute_6" name="id_product_attribute"/>
<input type="hidden" value="6" className="id_product" name="id_product"/>
<input type="hidden" name="id_customization" value className="product_customization_id"/>
<input type="hidden" className="input-group form-control qty qty_product qty_product_6" name="qty" value="1" data-min="1"/>
<button className="btn btn-primary btn-product add-to-cart leo-bt-cart leo-bt-cart_6" data-button-action="add-to-cart" type="submit">
<span className="leo-loading cssload-speeding-wheel"></span>
<span className="leo-bt-cart-content">
<i className="icon-btn-product icon-cart material-icons shopping-cart">card_travel</i>
<span className="name-btn-product">Ajouter au panier</span>
</span>
</button>
</form>
</div>
</div>
<div className="product-description-short" itemProp="description">In pri liber dolores assentior. Vim ad detracto accusata omittantur. Sit ex possim expetendis, quo no quas ornatus complectitur. Eum te dictas...</div>
</div>
</div>
</article>
</div>
<div className="item first">
<article className="product-miniature js-product-miniature" data-id-product="9" data-id-product-attribute="52" itemScope itemType="http://schema.org/Product">
<div className="thumbnail-container">
<div className="product-image">
<a href="https://demo1.leotheme.com/bos_soucer_demo/fr/base/9-52-fugiat-nulla.html#/1-taille-s/11-couleur-noir" className="thumbnail product-thumbnail">
<img className="img-fluid" src="https://demo1.leotheme.com/bos_soucer_demo/341-home_default/fugiat-nulla.jpg" alt data-full-size-image-url="https://demo1.leotheme.com/bos_soucer_demo/341-large_default/fugiat-nulla.jpg"/>
<span className="product-additional" data-idproduct="9"></span>
</a>

<ul className="product-flags">
</ul>
<div className="functional-buttons clearfix">

<div className="wishlist">
<a className="leo-wishlist-button btn-product btn-primary btn" href="javascript:void(0)" data-id-wishlist data-id-product="9" data-id-product-attribute="52" title="Ajouter souhaits">
<span className="leo-wishlist-bt-loading cssload-speeding-wheel"></span>
<span className="leo-wishlist-bt-content">
<i className="icon-btn-product icon-wishlist material-icons">favorite_border</i>
<span className="name-btn-product">Ajouter souhaits</span>
</span>
</a>
</div>

<div className="quickview hidden-sm-down">
<a href="#" className="quick-view" data-link-action="quickview">
<span className="leo-quickview-bt-loading cssload-speeding-wheel"></span>
<span className="leo-quickview-bt-content">
<i className="material-icons search">remove_red_eye</i>
<span>Affichage rapide</span>
</span>
</a>
</div>

<div className="compare">
<a className="leo-compare-button btn-primary btn-product btn" href="javascript:void(0)" data-id-product="9" title="Ajouter à comparer">
<span className="leo-compare-bt-loading cssload-speeding-wheel"></span>
<span className="leo-compare-bt-content">
<i className="icon-btn-product icon-compare material-icons">filter_list</i>
<span className="name-btn-product">Ajouter à comparer</span>
</span>
</a>
</div>
</div></div>
<div className="product-meta">



<h3 className="h3 product-title" itemProp="name"><a href="https://demo1.leotheme.com/bos_soucer_demo/fr/base/9-52-fugiat-nulla.html#/1-taille-s/11-couleur-noir">Fugiat nulla</a></h3>
<div className="p-price">

<div className="product-price-and-shipping ">
<span className="sr-only">Prix</span>
<span className="price" itemProp="offers" itemScope itemType="http://schema.org/Offer">
<span itemProp="priceCurrency" content="USD"></span><span itemProp="price" content="26.99">26,99 $US</span>
</span>
</div>

<div className="button-container cart">
<form action="https://demo1.leotheme.com/bos_soucer_demo/fr/panier" method="post">
<input type="hidden" name="token" value="4cb73f7e0e359184aa7e5ae63052ace7"/>
<input type="hidden" value="982" className="quantity_product quantity_product_9" name="quantity_product"/>
<input type="hidden" value="1" className="minimal_quantity minimal_quantity_9" name="minimal_quantity"/>
<input type="hidden" value="52" className="id_product_attribute id_product_attribute_9" name="id_product_attribute"/>
<input type="hidden" value="9" className="id_product" name="id_product"/>
<input type="hidden" name="id_customization" value className="product_customization_id"/>
<input type="hidden" className="input-group form-control qty qty_product qty_product_9" name="qty" value="1" data-min="1"/>
<button className="btn btn-primary btn-product add-to-cart leo-bt-cart leo-bt-cart_9" data-button-action="add-to-cart" type="submit">
<span className="leo-loading cssload-speeding-wheel"></span>
<span className="leo-bt-cart-content">
<i className="icon-btn-product icon-cart material-icons shopping-cart">card_travel</i>
<span className="name-btn-product">Ajouter au panier</span>
</span>
</button>
</form>
</div>
</div>
<div className="product-description-short" itemProp="description">Lorem ipsum dolor sit amet, mel paulo sonet latine ad, vis te ridens oporteat, tale ipsum facilis pro ei. Utamur deterruisset ea sea. Ferri...</div>
</div>
</div>
</article>
</div>
</div>
</div>
</div>
</div>
</section>

</div></div>

</section>
</div>
</div>
</div>
</section>
        </>
    )
}export default ProductDetails