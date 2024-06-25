

import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import Image from 'react-image'
function NewCollection (){
   

  const [products, setProducts] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    // Fetch best seller products data from an API or your own data source
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    // Implement your own logic to fetch best seller products
    // For this example, we'll use a hardcoded array
    const product = [
      {
        id: 1,
        name: 'product 1',
        image: './images/a3.jpg',
        image2: 'https://demo1.leotheme.com/bos_soucer_demo/346-home_default/occaecat-cupi.jpg',
      },
      {
        id: 2,
        name: 'product 2',
        image: './images/a.jpg',
        image2: 'https://demo1.leotheme.com/bos_soucer_demo/346-home_default/occaecat-cupi.jpg',

      },
      {
        id: 3,
        name: 'product 3',
        image: './images/a3.jpg',
        image2: 'https://demo1.leotheme.com/bos_soucer_demo/346-home_default/occaecat-cupi.jpg',

      },
      {
        id: 4,
        name: 'product 4',
        image: './images/a3.jpg',
        image2: 'https://demo1.leotheme.com/bos_soucer_demo/346-home_default/occaecat-cupi.jpg',

      },
      {
        id: 5,
        name: 'product 5',
        image: './images/a3.jpg',
        image2: 'https://demo1.leotheme.com/bos_soucer_demo/346-home_default/occaecat-cupi.jpg',

      },
    ];
    setProducts(product);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
    return(
        <>
        <div className="wrapper">
                <div className="">
                <div className="row box-products title-center ApRow  has-bg bg-boxed" data-bg=" no-repeat" style={{background: "no-repeat"}}>

                <div className="col-sm-12 col-xs-12 col-sp-12 col-md-12 col-lg-12 col-xl-12  ApColumn ">

                <div className="block products_block exclusive appagebuilder ApProductCarousel">
                <h4 className="title_block">
                New suits collection 2018
                </h4>
                <div className="block_content">

                <div className="owl-row">
                <div className="timeline-wrapper clearfix prepare" data-item="4" data-xl="4" data-lg="4" data-md="3" data-sm="2" data-m="1">
                <div className="timeline-parent">
                <div className="timeline-item">
                <div className="animated-background">
                <div className="background-masker content-top"></div>
                <div className="background-masker content-second-line"></div>
                <div className="background-masker content-third-line"></div>
                <div className="background-masker content-fourth-line"></div>
                </div>
                </div>
                </div>
                <div className="timeline-parent">
                <div className="timeline-item">
                <div className="animated-background">
                <div className="background-masker content-top"></div>
                <div className="background-masker content-second-line"></div>
                <div className="background-masker content-third-line"></div>
                <div className="background-masker content-fourth-line"></div>
                </div>
                </div>
                </div>
                <div className="timeline-parent">
                <div className="timeline-item">
                <div className="animated-background">
                <div className="background-masker content-top"></div>
                <div className="background-masker content-second-line"></div>
                <div className="background-masker content-third-line"></div>
                <div className="background-masker content-fourth-line"></div>
                </div>
                </div>
                </div>
                <div className="timeline-parent">
                <div className="timeline-item">
                <div className="animated-background">
                <div className="background-masker content-top"></div>
                <div className="background-masker content-second-line"></div>
                <div className="background-masker content-third-line"></div>
                <div className="background-masker content-fourth-line"></div>
                </div>
                </div>
                </div>
                </div>
                <div id="carousel-3431766885" className="owl-carousel owl-theme owl-loading plist-default">
                <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
      {products.map((product,index) => (
                <div key={product.id} className="ite " style={{padding:"10px"}}
                 onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}>
                <article className="product-miniature js-product-miniature" data-id-product="9" data-id-product-attribute="52" itemScope itemType="http://schema.org/Product">
                <div className="thumbnail-container">
                <div className="product-image">
                <a href="https://demo1.leotheme.com/bos_soucer_demo/en/basics/9-52-fugiat-nulla.html#/1-size-s/11-color-black" className="image-hover-wrapper thumbnail product-thumbnail " >
                {/* <img className="image-hover-primary" src="https://demo1.leotheme.com/bos_soucer_demo/341-home_default/fugiat-nulla.jpg"  data-full-size-image-url="https://demo1.leotheme.com/bos_soucer_demo/346-home_default/occaecat-cupi.jpg"/> */}
                {/* <Image className="social-icon" src = "https://demo1.leotheme.com/bos_soucer_demo/341-home_default/fugiat-nulla.jpg"
              onMouseOver={e => (e.currentTarget.src ="https://demo1.leotheme.com/bos_soucer_demo/346-home_default/occaecat-cupi.jpg")}
              onMouseOut={e => (e.currentTarget.src = "https://demo1.leotheme.com/bos_soucer_demo/341-home_default/fugiat-nulla.jpg")} 
            /> */}
{/* {isHovered &&<img
        src={product.image}
        alt="Primary Image"
      onMouseLeave={handleMouseLeave}
      />}
     {!isHovered && <img
        src={product.image2}
        alt="Secondary Image"
      onMouseEnter={handleMouseEnter}

      />   }          */}
            {hoverIndex === index ? (
                    <img
                      className="image-hover-primary "
                      style={{height:"50%"}}
                      src={product.image2}
                      data-full-size-image-url={product.image2}
                    />
                  ) : (
                    <img
                      className="image-hover-primary"
                      style={{height:"50%"}}
                      src={product.image}
                      data-full-size-image-url={product.image}
                    />
                  )}
                <span className="product-additional" data-idproduct="9"></span>
                </a>

                <ul className="product-flags">
                </ul>
                <div className="functional-buttons clearfix">

                <div className="wishlist">
                <a className="leo-wishlist-button btn-product btn-primary btn" href="javascript:void(0)" data-id-wishlist data-id-product="9" data-id-product-attribute="52" title="Add to Wishlist">
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
                <a className="leo-compare-button btn-primary btn-product btn" href="javascript:void(0)" data-id-product="9" title="Add to Compare">
                <span className="leo-compare-bt-loading cssload-speeding-wheel"></span>
                <span className="leo-compare-bt-content">
                <i className="icon-btn-product icon-compare material-icons">filter_list</i>
                <span className="name-btn-product">Add to Compare</span>
                </span>
                </a>
                </div>
                </div></div>
                <div className="product-meta">
                <h3 className="h3 product-title" itemProp="name"><a href="https://demo1.leotheme.com/bos_soucer_demo/en/basics/9-52-fugiat-nulla.html#/1-size-s/11-color-black">Fugiat nulla</a></h3>
                <div className="p-price">
                <div className="product-price-and-shipping ">
                <span className="sr-only">Price</span>
                <span className="price" itemProp="offers" itemScope itemType="http://schema.org/Offer">
                <span itemProp="priceCurrency" content="USD"></span><span itemProp="price" content="26.99">$26.99</span>
                </span>
                </div>

                <div className="button-container cart">
                <form action="https://demo1.leotheme.com/bos_soucer_demo/en/cart" method="post">
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
                 ))}
               
                </Carousel>
                </div>
                </div>
                </div>
                </div>
                </div> </div>
                </div>
            </div>
        </>
    )
}
export default NewCollection