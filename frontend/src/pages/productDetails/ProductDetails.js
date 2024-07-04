import { getProductDetails } from "../../Store/Actions/ProductAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getColorsProduct, getSizesProduct } from "../../Store/Actions/ProductVariantAcrion";

function ProductDetails(){
    const { product_id } = useParams();
    const product = useSelector((state) => state.combineProductDetails.product);
    const sizesProduct = useSelector((state) => state.combineProductVariant.sizesProduct);
    const colorsProduct = useSelector((state) => state.combineProductVariant.colorsProduct);

    const dispatch = useDispatch()
    useEffect(() => {
        // Fetch best seller products data from an API or your own data source
        dispatch(getProductDetails(product_id));
        dispatch(getSizesProduct(product_id));
        dispatch(getColorsProduct(product_id));

        console.log('product',product);
      }, []);
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
<div className="product-cover">
<ul className="product-flags">
</ul>
<img id="zoom_product" data-type-zoom className="js-qv-product-cover img-fluid" src="https://demo1.leotheme.com/bos_soucer_demo/304-large_default/eiusmod-tempor.jpg" alt title itemProp="image"/>
<div className="layer hidden-sm-down" data-toggle="modal" data-target="#product-modal">
<i className="material-icons zoom-in">&#xE8FF;</i>
</div>
</div>
<div id="thumb-gallery" className="product-thumb-images">
<div className="thumb-container  active ">
<a href="javascript:void(0)" data-image="https://demo1.leotheme.com/bos_soucer_demo/304-large_default/eiusmod-tempor.jpg" data-zoom-image="https://demo1.leotheme.com/bos_soucer_demo/304-large_default/eiusmod-tempor.jpg">
<img className="thumb js-thumb  selected " data-image-medium-src="https://demo1.leotheme.com/bos_soucer_demo/304-medium_default/eiusmod-tempor.jpg" data-image-large-src="https://demo1.leotheme.com/bos_soucer_demo/304-large_default/eiusmod-tempor.jpg" src="https://demo1.leotheme.com/bos_soucer_demo/304-home_default/eiusmod-tempor.jpg" alt title itemProp="image"/>
</a>
</div>
<div className="thumb-container ">
<a href="javascript:void(0)" data-image="https://demo1.leotheme.com/bos_soucer_demo/305-large_default/eiusmod-tempor.jpg" data-zoom-image="https://demo1.leotheme.com/bos_soucer_demo/305-large_default/eiusmod-tempor.jpg">
<img className="thumb js-thumb " data-image-medium-src="https://demo1.leotheme.com/bos_soucer_demo/305-medium_default/eiusmod-tempor.jpg" data-image-large-src="https://demo1.leotheme.com/bos_soucer_demo/305-large_default/eiusmod-tempor.jpg" src="https://demo1.leotheme.com/bos_soucer_demo/305-home_default/eiusmod-tempor.jpg" alt title itemProp="image"/>
</a>
</div>
<div className="thumb-container ">
<a href="javascript:void(0)" data-image="https://demo1.leotheme.com/bos_soucer_demo/306-large_default/eiusmod-tempor.jpg" data-zoom-image="https://demo1.leotheme.com/bos_soucer_demo/306-large_default/eiusmod-tempor.jpg">
<img className="thumb js-thumb " data-image-medium-src="https://demo1.leotheme.com/bos_soucer_demo/306-medium_default/eiusmod-tempor.jpg" data-image-large-src="https://demo1.leotheme.com/bos_soucer_demo/306-large_default/eiusmod-tempor.jpg" src="https://demo1.leotheme.com/bos_soucer_demo/306-home_default/eiusmod-tempor.jpg" alt title itemProp="image"/>
</a>
</div>
<div className="thumb-container ">
<a href="javascript:void(0)" data-image="https://demo1.leotheme.com/bos_soucer_demo/307-large_default/eiusmod-tempor.jpg" data-zoom-image="https://demo1.leotheme.com/bos_soucer_demo/307-large_default/eiusmod-tempor.jpg">
<img className="thumb js-thumb " data-image-medium-src="https://demo1.leotheme.com/bos_soucer_demo/307-medium_default/eiusmod-tempor.jpg" data-image-large-src="https://demo1.leotheme.com/bos_soucer_demo/307-large_default/eiusmod-tempor.jpg" src="https://demo1.leotheme.com/bos_soucer_demo/307-home_default/eiusmod-tempor.jpg" alt title itemProp="image"/>
</a>
</div>
<div className="thumb-container ">
<a href="javascript:void(0)" data-image="https://demo1.leotheme.com/bos_soucer_demo/308-large_default/eiusmod-tempor.jpg" data-zoom-image="https://demo1.leotheme.com/bos_soucer_demo/308-large_default/eiusmod-tempor.jpg">
<img className="thumb js-thumb " data-image-medium-src="https://demo1.leotheme.com/bos_soucer_demo/308-medium_default/eiusmod-tempor.jpg" data-image-large-src="https://demo1.leotheme.com/bos_soucer_demo/308-large_default/eiusmod-tempor.jpg" src="https://demo1.leotheme.com/bos_soucer_demo/308-home_default/eiusmod-tempor.jpg" alt title itemProp="image"/>
</a>
</div>
<div className="thumb-container ">
<a href="javascript:void(0)" data-image="https://demo1.leotheme.com/bos_soucer_demo/309-large_default/eiusmod-tempor.jpg" data-zoom-image="https://demo1.leotheme.com/bos_soucer_demo/309-large_default/eiusmod-tempor.jpg">
<img className="thumb js-thumb " data-image-medium-src="https://demo1.leotheme.com/bos_soucer_demo/309-medium_default/eiusmod-tempor.jpg" data-image-large-src="https://demo1.leotheme.com/bos_soucer_demo/309-large_default/eiusmod-tempor.jpg" src="https://demo1.leotheme.com/bos_soucer_demo/309-home_default/eiusmod-tempor.jpg" alt title itemProp="image"/>
</a>
</div>
</div>
<div className="arrows-product-fake slick-arrows">
<button className="slick-prev slick-arrow" aria-label="Previous" type="button">Previous</button>
<button className="slick-next slick-arrow" aria-label="Next" type="button">Next</button>
</div>
</div>
</section>
<div className="modal fade js-product-images-modal leo-product-modal" id="product-modal" data-thumbnails=".product-images-2">
<div className="modal-dialog" role="document">
<div className="modal-content">
<div className="modal-body">
<figure>
<img className="js-modal-product-cover product-cover-modal" width="1024" src="https://demo1.leotheme.com/bos_soucer_demo/304-large_default/eiusmod-tempor.jpg" alt title itemProp="image"/>
<figcaption className="image-caption">
<div id="product-description-short" itemProp="description"><p>Nec consul possit delenit ei, illud forensibus vim ea, mei ubique sapientem et. Eos eu idque falli inimicus, ne odio dictas gloriatur sed, ea unum urbanitas dissentiet vel. Laoreet mandamus sed id. Efficiendi comprehensam cum in, iisque eleifend neglegentur quo te. Est choro quodsi inciderint no.</p></div>
</figcaption>
</figure>
<aside id="thumbnails" className="thumbnails text-sm-center">
<div className="product-images product-images-2">
<div className="thumb-container">
<img data-image-large-src="https://demo1.leotheme.com/bos_soucer_demo/304-large_default/eiusmod-tempor.jpg" className="thumb img-fluid js-modal-thumb selected " src="https://demo1.leotheme.com/bos_soucer_demo/304-medium_default/eiusmod-tempor.jpg" alt title width="400" itemProp="image"/>
</div>
<div className="thumb-container">
<img data-image-large-src="https://demo1.leotheme.com/bos_soucer_demo/305-large_default/eiusmod-tempor.jpg" className="thumb img-fluid js-modal-thumb" src="https://demo1.leotheme.com/bos_soucer_demo/305-medium_default/eiusmod-tempor.jpg" alt title width="400" itemProp="image"/>
</div>
<div className="thumb-container">
<img data-image-large-src="https://demo1.leotheme.com/bos_soucer_demo/306-large_default/eiusmod-tempor.jpg" className="thumb img-fluid js-modal-thumb" src="https://demo1.leotheme.com/bos_soucer_demo/306-medium_default/eiusmod-tempor.jpg" alt title width="400" itemProp="image"/>
</div>
<div className="thumb-container">
<img data-image-large-src="https://demo1.leotheme.com/bos_soucer_demo/307-large_default/eiusmod-tempor.jpg" className="thumb img-fluid js-modal-thumb" src="https://demo1.leotheme.com/bos_soucer_demo/307-medium_default/eiusmod-tempor.jpg" alt title width="400" itemProp="image"/>
</div>
<div className="thumb-container">
<img data-image-large-src="https://demo1.leotheme.com/bos_soucer_demo/308-large_default/eiusmod-tempor.jpg" className="thumb img-fluid js-modal-thumb" src="https://demo1.leotheme.com/bos_soucer_demo/308-medium_default/eiusmod-tempor.jpg" alt title width="400" itemProp="image"/>
</div>
<div className="thumb-container">
<img data-image-large-src="https://demo1.leotheme.com/bos_soucer_demo/309-large_default/eiusmod-tempor.jpg" className="thumb img-fluid js-modal-thumb" src="https://demo1.leotheme.com/bos_soucer_demo/309-medium_default/eiusmod-tempor.jpg" alt title width="400" itemProp="image"/>
</div>
</div>
</aside>
</div>
</div>
</div>
</div>
</div>
<div className="col-md-6 col-lg-6 col-xl-6 " style={{textAlign: "left"}}>
<h1 className="h1 product-detail-name "  itemProp="name">{product.name}</h1>
<div className="product-additional-info">
<div className="social-sharing">
<span>Share</span>
<ul >
<li className="facebook icon-gray"><a href="http://www.facebook.com/sharer.php?u=https://demo1.leotheme.com/bos_soucer_demo/en/basics/2-eiusmod-tempor.html" className="text-hide" title="Share" target="_blank">Share</a></li>
<li className="twitter icon-gray"><a href="https://twitter.com/intent/tweet?text=Eiusmod tempor https://demo1.leotheme.com/bos_soucer_demo/en/basics/2-eiusmod-tempor.html" className="text-hide" title="Tweet" target="_blank">Tweet</a></li>
<li className="googleplus icon-gray"><a href="https://plus.google.com/share?url=https://demo1.leotheme.com/bos_soucer_demo/en/basics/2-eiusmod-tempor.html" className="text-hide" title="Google+" target="_blank">Google+</a></li>
<li className="pinterest icon-gray"><a href="http://www.pinterest.com/pin/create/button/?media=https://demo1.leotheme.com/bos_soucer_demo/304/eiusmod-tempor.jpg&amp;url=https://demo1.leotheme.com/bos_soucer_demo/en/basics/2-eiusmod-tempor.html" className="text-hide" title="Pinterest" target="_blank">Pinterest</a></li>
</ul>
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
<div id="product-description-short-2" className="description-short" itemProp="description"><p>Nec consul possit delenit ei, illud forensibus vim ea, mei ubique sapientem et. Eos eu idque falli inimicus, ne odio dictas gloriatur sed, ea unum urbanitas dissentiet vel. Laoreet mandamus sed id. Efficiendi comprehensam cum in, iisque eleifend neglegentur quo te. Est choro quodsi inciderint no.</p></div>
<div className="product-actions">
<form action="https://demo1.leotheme.com/bos_soucer_demo/en/cart" method="post" id="add-to-cart-or-refresh">
<input type="hidden" name="token" value="4cb73f7e0e359184aa7e5ae63052ace7"/>
<input type="hidden" name="id_product" value="2" id="product_page_product_id"/>
<input type="hidden" name="id_customization" value="0" id="product_customization_id"/>
<div className="product-variants">
<div className="clearfix product-variants-item">
<span className="control-label">Size</span>
<ul id="group_1">
{sizesProduct.map((size,index) => (
    <li className="input-container float-xs-left" key={size.id}>
    <label>
    <input className="input-radio" type="radio" data-product-attribute={size.id} name="group[1]" value={size.id} checked="checked"/>
    <span className="radio-label">{size.name}</span>
    </label>
    </li>
))}
</ul>



</div>
<div className="clearfix product-variants-item">
<span className="control-label">Color</span>
<ul id="group_3">
{colorsProduct.map((color,index) => (
<li className="float-xs-left input-container">
<label>
<input className="input-color" type="radio" data-product-attribute="3" name="group[3]" value="8"/>
<span className="color" style={{backgroundColor: color.code}}><span className="sr-only">{color.name}</span></span>
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
<input type="text" name="qty" id="quantity_wanted" value="1" className="input-group" min="1" aria-label="Quantity"/>
</div>
<span id="product-availability" style={{color: `${product.quantity> 0 ? "green" : "red"}`}}>
{/* <i className="material-icons rtl-no-flip product-available">&#xE5CA;</i> */}
{product.quantity > 0 ? "In stock" : "Not available" }
</span>
<p className="product-minimal-quantity">
</p>
<div className="add">
<button className="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit">
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
<input className="product-refresh ps-hidden-by-js" name="refresh" type="submit" value="Refresh"/>
</form>
</div>
</div>
<div className="col-md-12 col-lg-12 col-xl-12">
<div className="product-tabs tabs">
<ul className="nav nav-tabs" role="tablist">
<li className="nav-item">
<a className="nav-link active" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
</li>
<li className="nav-item">
<a className="nav-link" data-toggle="tab" href="#product-details" role="tab" aria-controls="product-details">Product Details</a>
</li>
<li className="nav-item">
<a className="nav-link leo-product-show-review-title" data-toggle="tab" href="#leo-product-show-review-content">Reviews</a>
</li>
</ul>
<div className="tab-content" id="tab-content">
<div className="tab-pane fade in active" id="description" role="tabpanel">
<div className="product-description"><p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which has since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p></div>
</div>
<div className="tab-pane fade" id="product-details" data-product="{&quot;id_shop_default&quot;:&quot;1&quot;,&quot;id_manufacturer&quot;:&quot;1&quot;,&quot;id_supplier&quot;:&quot;1&quot;,&quot;reference&quot;:&quot;demo_2&quot;,&quot;is_virtual&quot;:&quot;0&quot;,&quot;delivery_in_stock&quot;:null,&quot;delivery_out_stock&quot;:null,&quot;id_category_default&quot;:&quot;7&quot;,&quot;on_sale&quot;:&quot;0&quot;,&quot;online_only&quot;:&quot;0&quot;,&quot;ecotax&quot;:0,&quot;minimal_quantity&quot;:&quot;1&quot;,&quot;low_stock_threshold&quot;:null,&quot;low_stock_alert&quot;:&quot;0&quot;,&quot;price&quot;:&quot;$26.99&quot;,&quot;unity&quot;:null,&quot;unit_price_ratio&quot;:&quot;0.000000&quot;,&quot;additional_shipping_cost&quot;:&quot;0.00&quot;,&quot;customizable&quot;:&quot;0&quot;,&quot;text_fields&quot;:&quot;0&quot;,&quot;uploadable_files&quot;:&quot;0&quot;,&quot;redirect_type&quot;:&quot;404&quot;,&quot;id_type_redirected&quot;:&quot;0&quot;,&quot;available_for_order&quot;:&quot;1&quot;,&quot;available_date&quot;:null,&quot;show_condition&quot;:&quot;0&quot;,&quot;condition&quot;:&quot;new&quot;,&quot;show_price&quot;:&quot;1&quot;,&quot;indexed&quot;:&quot;1&quot;,&quot;visibility&quot;:&quot;both&quot;,&quot;cache_default_attribute&quot;:&quot;7&quot;,&quot;advanced_stock_management&quot;:&quot;0&quot;,&quot;date_add&quot;:&quot;2017-07-30 11:16:40&quot;,&quot;date_upd&quot;:&quot;2018-06-25 04:36:16&quot;,&quot;pack_stock_type&quot;:&quot;3&quot;,&quot;meta_description&quot;:null,&quot;meta_keywords&quot;:null,&quot;meta_title&quot;:null,&quot;link_rewrite&quot;:&quot;eiusmod-tempor&quot;,&quot;name&quot;:&quot;Eiusmod tempor&quot;,&quot;description&quot;:&quot;&lt;p&gt;Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which has since evolved into a full ready-to-wear collection in which every item is a vital part of a woman&#039;s wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!&lt;\/p&gt;&quot;,&quot;description_short&quot;:&quot;&lt;p&gt;Nec consul possit delenit ei, illud forensibus vim ea, mei ubique sapientem et. Eos eu idque falli inimicus, ne odio dictas gloriatur sed, ea unum urbanitas dissentiet vel. Laoreet mandamus sed id. Efficiendi comprehensam cum in, iisque eleifend neglegentur quo te. Est choro quodsi inciderint no.&lt;\/p&gt;&quot;,&quot;available_now&quot;:&quot;In stock&quot;,&quot;available_later&quot;:null,&quot;id&quot;:2,&quot;id_product&quot;:2,&quot;out_of_stock&quot;:2,&quot;new&quot;:0,&quot;id_product_attribute&quot;:7,&quot;quantity_wanted&quot;:1,&quot;extraContent&quot;:[],&quot;allow_oosp&quot;:0,&quot;category&quot;:&quot;basics&quot;,&quot;category_name&quot;:&quot;Basics&quot;,&quot;link&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/en\/basics\/2-eiusmod-tempor.html&quot;,&quot;attribute_price&quot;:0,&quot;price_tax_exc&quot;:26.99,&quot;price_without_reduction&quot;:26.99,&quot;reduction&quot;:0,&quot;specific_prices&quot;:[],&quot;quantity&quot;:292,&quot;quantity_all_versions&quot;:593,&quot;id_image&quot;:&quot;en-default&quot;,&quot;features&quot;:[{&quot;name&quot;:&quot;Compositions&quot;,&quot;value&quot;:&quot;Cotton&quot;,&quot;id_feature&quot;:&quot;5&quot;,&quot;position&quot;:&quot;4&quot;},{&quot;name&quot;:&quot;Styles&quot;,&quot;value&quot;:&quot;Casual&quot;,&quot;id_feature&quot;:&quot;6&quot;,&quot;position&quot;:&quot;5&quot;},{&quot;name&quot;:&quot;Properties&quot;,&quot;value&quot;:&quot;Short Sleeve&quot;,&quot;id_feature&quot;:&quot;7&quot;,&quot;position&quot;:&quot;6&quot;}],&quot;attachments&quot;:[],&quot;virtual&quot;:0,&quot;pack&quot;:0,&quot;packItems&quot;:[],&quot;nopackprice&quot;:0,&quot;customization_required&quot;:false,&quot;attributes&quot;:{&quot;1&quot;:{&quot;id_attribute&quot;:&quot;1&quot;,&quot;id_attribute_group&quot;:&quot;1&quot;,&quot;name&quot;:&quot;S&quot;,&quot;group&quot;:&quot;Size&quot;,&quot;reference&quot;:null,&quot;ean13&quot;:null,&quot;isbn&quot;:null,&quot;upc&quot;:null},&quot;3&quot;:{&quot;id_attribute&quot;:&quot;11&quot;,&quot;id_attribute_group&quot;:&quot;3&quot;,&quot;name&quot;:&quot;Black&quot;,&quot;group&quot;:&quot;Color&quot;,&quot;reference&quot;:null,&quot;ean13&quot;:null,&quot;isbn&quot;:null,&quot;upc&quot;:null}},&quot;rate&quot;:0,&quot;tax_name&quot;:&quot;&quot;,&quot;ecotax_rate&quot;:0,&quot;unit_price&quot;:&quot;&quot;,&quot;customizations&quot;:{&quot;fields&quot;:[]},&quot;id_customization&quot;:0,&quot;is_customizable&quot;:false,&quot;show_quantities&quot;:true,&quot;quantity_label&quot;:&quot;Items&quot;,&quot;quantity_discounts&quot;:[],&quot;customer_group_discount&quot;:0,&quot;images&quot;:[{&quot;bySize&quot;:{&quot;small_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/304-small_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:100,&quot;height&quot;:150},&quot;cart_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/304-cart_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:120,&quot;height&quot;:180},&quot;medium_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/304-medium_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:400,&quot;height&quot;:600},&quot;home_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/304-home_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:400,&quot;height&quot;:600},&quot;large_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/304-large_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:1024,&quot;height&quot;:1536}},&quot;small&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/304-small_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:100,&quot;height&quot;:150},&quot;medium&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/304-medium_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:400,&quot;height&quot;:600},&quot;large&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/304-large_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:1024,&quot;height&quot;:1536},&quot;legend&quot;:null,&quot;cover&quot;:&quot;1&quot;,&quot;id_image&quot;:&quot;304&quot;,&quot;position&quot;:&quot;1&quot;,&quot;associatedVariants&quot;:[]},{&quot;bySize&quot;:{&quot;small_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/305-small_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:100,&quot;height&quot;:150},&quot;cart_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/305-cart_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:120,&quot;height&quot;:180},&quot;medium_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/305-medium_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:400,&quot;height&quot;:600},&quot;home_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/305-home_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:400,&quot;height&quot;:600},&quot;large_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/305-large_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:1024,&quot;height&quot;:1536}},&quot;small&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/305-small_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:100,&quot;height&quot;:150},&quot;medium&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/305-medium_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:400,&quot;height&quot;:600},&quot;large&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/305-large_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:1024,&quot;height&quot;:1536},&quot;legend&quot;:null,&quot;cover&quot;:null,&quot;id_image&quot;:&quot;305&quot;,&quot;position&quot;:&quot;2&quot;,&quot;associatedVariants&quot;:[]},{&quot;bySize&quot;:{&quot;small_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/306-small_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:100,&quot;height&quot;:150},&quot;cart_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/306-cart_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:120,&quot;height&quot;:180},&quot;medium_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/306-medium_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:400,&quot;height&quot;:600},&quot;home_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/306-home_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:400,&quot;height&quot;:600},&quot;large_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/306-large_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:1024,&quot;height&quot;:1536}},&quot;small&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/306-small_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:100,&quot;height&quot;:150},&quot;medium&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/306-medium_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:400,&quot;height&quot;:600},&quot;large&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/306-large_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:1024,&quot;height&quot;:1536},&quot;legend&quot;:null,&quot;cover&quot;:null,&quot;id_image&quot;:&quot;306&quot;,&quot;position&quot;:&quot;3&quot;,&quot;associatedVariants&quot;:[]},{&quot;bySize&quot;:{&quot;small_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/307-small_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:100,&quot;height&quot;:150},&quot;cart_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/307-cart_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:120,&quot;height&quot;:180},&quot;medium_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/307-medium_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:400,&quot;height&quot;:600},&quot;home_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/307-home_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:400,&quot;height&quot;:600},&quot;large_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/307-large_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:1024,&quot;height&quot;:1536}},&quot;small&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/307-small_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:100,&quot;height&quot;:150},&quot;medium&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/307-medium_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:400,&quot;height&quot;:600},&quot;large&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/307-large_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:1024,&quot;height&quot;:1536},&quot;legend&quot;:null,&quot;cover&quot;:null,&quot;id_image&quot;:&quot;307&quot;,&quot;position&quot;:&quot;4&quot;,&quot;associatedVariants&quot;:[]},{&quot;bySize&quot;:{&quot;small_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/308-small_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:100,&quot;height&quot;:150},&quot;cart_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/308-cart_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:120,&quot;height&quot;:180},&quot;medium_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/308-medium_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:400,&quot;height&quot;:600},&quot;home_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/308-home_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:400,&quot;height&quot;:600},&quot;large_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/308-large_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:1024,&quot;height&quot;:1536}},&quot;small&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/308-small_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:100,&quot;height&quot;:150},&quot;medium&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/308-medium_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:400,&quot;height&quot;:600},&quot;large&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/308-large_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:1024,&quot;height&quot;:1536},&quot;legend&quot;:null,&quot;cover&quot;:null,&quot;id_image&quot;:&quot;308&quot;,&quot;position&quot;:&quot;5&quot;,&quot;associatedVariants&quot;:[]},{&quot;bySize&quot;:{&quot;small_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/309-small_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:100,&quot;height&quot;:150},&quot;cart_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/309-cart_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:120,&quot;height&quot;:180},&quot;medium_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/309-medium_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:400,&quot;height&quot;:600},&quot;home_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/309-home_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:400,&quot;height&quot;:600},&quot;large_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/309-large_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:1024,&quot;height&quot;:1536}},&quot;small&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/309-small_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:100,&quot;height&quot;:150},&quot;medium&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/309-medium_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:400,&quot;height&quot;:600},&quot;large&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/309-large_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:1024,&quot;height&quot;:1536},&quot;legend&quot;:null,&quot;cover&quot;:null,&quot;id_image&quot;:&quot;309&quot;,&quot;position&quot;:&quot;6&quot;,&quot;associatedVariants&quot;:[]}],&quot;cover&quot;:{&quot;bySize&quot;:{&quot;small_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/304-small_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:100,&quot;height&quot;:150},&quot;cart_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/304-cart_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:120,&quot;height&quot;:180},&quot;medium_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/304-medium_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:400,&quot;height&quot;:600},&quot;home_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/304-home_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:400,&quot;height&quot;:600},&quot;large_default&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/304-large_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:1024,&quot;height&quot;:1536}},&quot;small&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/304-small_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:100,&quot;height&quot;:150},&quot;medium&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/304-medium_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:400,&quot;height&quot;:600},&quot;large&quot;:{&quot;url&quot;:&quot;https:\/\/demo1.leotheme.com\/bos_soucer_demo\/304-large_default\/eiusmod-tempor.jpg&quot;,&quot;width&quot;:1024,&quot;height&quot;:1536},&quot;legend&quot;:null,&quot;cover&quot;:&quot;1&quot;,&quot;id_image&quot;:&quot;304&quot;,&quot;position&quot;:&quot;1&quot;,&quot;associatedVariants&quot;:[]},&quot;has_discount&quot;:false,&quot;discount_type&quot;:null,&quot;discount_percentage&quot;:null,&quot;discount_percentage_absolute&quot;:null,&quot;discount_amount&quot;:null,&quot;discount_amount_to_display&quot;:null,&quot;price_amount&quot;:26.99,&quot;unit_price_full&quot;:&quot;&quot;,&quot;show_availability&quot;:true,&quot;availability_date&quot;:null,&quot;availability_message&quot;:&quot;In stock&quot;,&quot;availability&quot;:&quot;available&quot;}" role="tabpanel">
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
<div className="tab-pane fade in" id="leo-product-show-review-content">
<div id="product_reviews_block_tab">
<a className="open-review-form" href="javascript:void(0)" data-id-product="2" data-is-logged data-product-link="https://demo1.leotheme.com/bos_soucer_demo/en/basics/2-eiusmod-tempor.html">
<i className="material-icons">&#xE150;</i>
Be the first to write your review!
</a>
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
<form action="https://demo1.leotheme.com/bos_soucer_demo/en/cart" method="post">
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
<form action="https://demo1.leotheme.com/bos_soucer_demo/en/cart" method="post">
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