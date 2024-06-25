
import { useEffect, useState } from 'react'
 import Pagination from '../../component/Pagination/Pagintaion' 
function Products(){
    const [products, setProducts] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(3); // Set the number of hotels to display per page

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
  const indexOfLastHotel = currentPage * pageSize;
  const indexOfFirstHotel = indexOfLastHotel - pageSize;
  const currentHotels = products.slice(indexOfFirstHotel, indexOfLastHotel);

  // Function to handle page changes
  const onPageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
  };
  const [query, setQuery] = useState("")

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
            <section id="wrapper">
<div className="container">
<nav data-depth="4" className="breadcrumb hidden-sm-down">
<ol itemscope itemtype="http://schema.org/BreadcrumbList">
<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
<a itemprop="item" href="https://demo1.leotheme.com/bos_soucer_demo/en/">
<span itemprop="name">Home</span>
</a>
<meta itemprop="position" content="1"/>
</li>
<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
<a itemprop="item" href="https://demo1.leotheme.com/bos_soucer_demo/en/3-scelerisque-magna">
<span itemprop="name">scelerisque magna</span>
</a>
<meta itemprop="position" content="2"/>
</li>
<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
<a itemprop="item" href="https://demo1.leotheme.com/bos_soucer_demo/en/4-posuere-diam">
<span itemprop="name">posuere diam</span>
</a>
<meta itemprop="position" content="3"/>
</li>
<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
<a itemprop="item" href="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics">
<span itemprop="name">Basics</span>
</a>
<meta itemprop="position" content="4"/>
</li>
</ol>
</nav>
<div className="row">
<div id="left-column" className="sidebar col-xs-12 col-sm-12 col-md-4 col-lg-3">
<div className="block-categories block block-highlighted hidden-sm-down">
<h4 className="title_block"><a href="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics">Basics</a></h4>
<div className="block_content">
<ul className="category-top-menu">
<li>
</li>
</ul>
</div>
</div>
<div id="search_filters_wrapper" className="hidden-sm-down">
<div id="search_filter_controls" className="hidden-md-up">
<span id="_mobile_search_filters_clear_all"></span>
<button className="btn btn-secondary ok">
<i className="material-icons rtl-no-flip">&#xE876;</i>
OK
</button>
</div>
<div id="search_filters" className="block">
<p className="text-uppercase h6 hidden-sm-down title_block">Filter By</p>
<div id="_desktop_search_filters_clear_all" className="hidden-sm-down clear-all-wrapper text-xs-center">
<button data-search-url="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics" className="btn btn-tertiary js-search-filters-clear-all">
<i className="material-icons">&#xE14C;</i>
Clear all
</button>
</div>
<div className="block_content">
<section className="facet clearfix  attr-color">
<p className="h6 facet-title hidden-sm-down">Color</p>
<div className="title hidden-md-up" data-target="#facet_22899" data-toggle="collapse">
<p className="h6 facet-title">Color</p>
<span className="float-xs-right">
<span className="navbar-toggler collapse-icons">
<i className="material-icons add">&#xE313;</i>
<i className="material-icons remove">&#xE316;</i>
</span>
</span>
</div>
<ul id="facet_22899" className="collapse">
<li>
<label className="facet-label" for="facet_input_22899_0">
<span className="custom-checkbox">
<input id="facet_input_22899_0" data-search-url="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Color-Beige" type="checkbox"/>
<span className="color" style={{backgroundColor:"#f5f5dc"}}></span>
</span>
<a href="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Color-Beige" className="_gray-darker search-link js-search-link" rel="nofollow">
Beige
<span className="magnitude">(1)</span>
</a>
</label>
</li>
<li>
<label className="facet-label" for="facet_input_22899_1">
<span className="custom-checkbox">
<input id="facet_input_22899_1" data-search-url="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Color-White" type="checkbox"/>
<span className="color" style={{backgroundColor:"#ffffff"}}></span>
</span>
<a href="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Color-White" className="_gray-darker search-link js-search-link" rel="nofollow">
White
<span className="magnitude">(3)</span>
</a>
</label>
</li>
<li>
<label className="facet-label" for="facet_input_22899_2">
<span className="custom-checkbox">
<input id="facet_input_22899_2" data-search-url="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Color-Black" type="checkbox"/>
<span className="color" style={{backgroundColor:"#434A54"}}></span>
</span>
<a href="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Color-Black" className="_gray-darker search-link js-search-link" rel="nofollow">
Black
<span className="magnitude">(2)</span>
</a>
</label>
</li>
<li>
<label className="facet-label" for="facet_input_22899_3">
<span className="custom-checkbox">
<input id="facet_input_22899_3" data-search-url="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Color-Orange" type="checkbox"/>
<span className="color" style={{backgroundColor:"#F39C11"}}></span>
</span>
<a href="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Color-Orange" className="_gray-darker search-link js-search-link" rel="nofollow">
Orange
<span className="magnitude">(4)</span>
</a>
</label>
</li>
<li>
<label className="facet-label" for="facet_input_22899_4">
<span className="custom-checkbox">
<input id="facet_input_22899_4" data-search-url="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Color-Blue" type="checkbox"/>
<span className="color" style={{backgroundColor:"#5D9CEC"}}></span>
</span>
<a href="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Color-Blue" className="_gray-darker search-link js-search-link" rel="nofollow">
Blue
<span className="magnitude">(2)</span>
</a>
</label>
</li>
<li>
<label className="facet-label" for="facet_input_22899_5">
<span className="custom-checkbox">
<input id="facet_input_22899_5" data-search-url="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Color-Green" type="checkbox"/>
<span className="color" style={{backgroundColor:"#A0D468"}}></span>
</span>
<a href="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Color-Green" className="_gray-darker search-link js-search-link" rel="nofollow">
Green
<span className="magnitude">(1)</span>
</a>
</label>
</li>
<li>
<label className="facet-label" for="facet_input_22899_6">
<span className="custom-checkbox">
<input id="facet_input_22899_6" data-search-url="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Color-Yellow" type="checkbox"/>
<span className="color" style={{backgroundColor:"#F1C40F"}}></span>
</span>
<a href="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Color-Yellow" className="_gray-darker search-link js-search-link" rel="nofollow">
Yellow
<span className="magnitude">(2)</span>
</a>
</label>
</li>
<li>
<label className="facet-label" for="facet_input_22899_7">
<span className="custom-checkbox">
<input id="facet_input_22899_7" data-search-url="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Color-Pink" type="checkbox"/>
<span className="color" style={{backgroundColor:"#FCCACD"}}></span>
</span>
<a href="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Color-Pink" className="_gray-darker search-link js-search-link" rel="nofollow">
Pink
<span className="magnitude">(1)</span>
</a>
</label>
</li>
</ul>
</section>
<section className="facet clearfix ">
<p className="h6 facet-title hidden-sm-down">Price</p>
<div className="title hidden-md-up" data-target="#facet_31141" data-toggle="collapse">
<p className="h6 facet-title">Price</p>
<span className="float-xs-right">
<span className="navbar-toggler collapse-icons">
<i className="material-icons add">&#xE313;</i>
<i className="material-icons remove">&#xE316;</i>
</span>
</span>
</div>
<ul id="facet_31141" className="collapse">
<li>
<label className="facet-label" for="facet_input_31141_0">
<span className="custom-radio">
<input id="facet_input_31141_0" data-search-url="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Price-%24-16-17" type="radio" name="filter Price"/>
<span className="ps-shown-by-js"></span>
</span>
<a href="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Price-%24-16-17" className="_gray-darker search-link js-search-link" rel="nofollow">
$16.00 - $17.00
<span className="magnitude">(1)</span>
</a>
</label>
</li>
<li>
<label className="facet-label" for="facet_input_31141_1">
<span className="custom-radio">
<input id="facet_input_31141_1" data-search-url="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Price-%24-21-22" type="radio" name="filter Price"/>
<span className="ps-shown-by-js"></span>
</span>
<a href="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Price-%24-21-22" className="_gray-darker search-link js-search-link" rel="nofollow">
$21.00 - $22.00
<span className="magnitude">(1)</span>
</a>
</label>
</li>
<li>
<label className="facet-label" for="facet_input_31141_2">
<span className="custom-radio">
<input id="facet_input_31141_2" data-search-url="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Price-%24-25-29" type="radio" name="filter Price"/>
<span className="ps-shown-by-js"></span>
</span>
<a href="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Price-%24-25-29" className="_gray-darker search-link js-search-link" rel="nofollow">
$25.00 - $29.00
<span className="magnitude">(5)</span>
</a>
</label>
</li>
<li>
<label className="facet-label" for="facet_input_31141_3">
<span className="custom-radio">
<input id="facet_input_31141_3" data-search-url="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Price-%24-30-32" type="radio" name="filter Price"/>
<span className="ps-shown-by-js"></span>
</span>
<a href="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Price-%24-30-32" className="_gray-darker search-link js-search-link" rel="nofollow">
$30.00 - $32.00
<span className="magnitude">(1)</span>
</a>
</label>
</li>
<li>
<label className="facet-label" for="facet_input_31141_4">
<span className="custom-radio">
<input id="facet_input_31141_4" data-search-url="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Price-%24-50-53" type="radio" name="filter Price"/>
<span className="ps-shown-by-js"></span>
</span>
<a href="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?q=Price-%24-50-53" className="_gray-darker search-link js-search-link" rel="nofollow">
$50.00 - $53.00
<span className="magnitude">(1)</span>
</a>
</label>
</li>
</ul>
</section>
</div>
</div>
</div>

<div className="row ApRow  " >

<div className="col-sm-12 col-xs-12 col-sp-12 col-md-12 col-lg-12 col-xl-12  ApColumn ">

<div id="image-form_4405794973323754" className="block effect ApImage">
<a href="#">
<img src="/bos_soucer_demo/themes/bos_soucer/assets/img/modules/appagebuilder/images/bn-left.jpg" className title alt style={{ width:"100%",height:"auto"}} />
</a>
</div>
</div> </div>
</div>
<div id="content-wrapper" className="left-column col-xs-12 col-sm-12 col-md-8 col-lg-9">
<section id="main">
<div id="js-product-list-header">

</div>
<section id="products">
<div id>
<div id="js-product-list-top" className="products-selection">
<div className="row">
<div className="col-lg-6 col-md-3 hidden-sm-down total-products">
<div className="display">
<div id="grid" className="leo_grid selected"><a rel="nofollow" href="#" title="Grid"><i className="fa fa-th"></i></a></div>
<div id="list" className="leo_list "><a rel="nofollow" href="#" title="List"><i className="fa fa-list-ul"></i></a></div>
</div>
<p>There are 9 products.</p>
</div>
<div className="col-lg-6 col-md-9">
<div className="row sort-by-row">
<span className="col-sm-3 col-md-3 hidden-sm-down sort-by">Sort by:</span>
<div className="col-sm-9 col-xs-8 col-sp-12  col-md-9 products-sort-order dropdown">
<button className="btn-unstyle select-title" rel="nofollow" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Relevance <i className="material-icons float-xs-right">&#xE5C5;</i>
</button>
<div className="dropdown-menu">
<a rel="nofollow" href="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?order=product.position.asc" className="select-list current js-search-link">
Relevance
</a>
<a rel="nofollow" href="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?order=product.name.asc" className="select-list js-search-link">
Name, A to Z
</a>
<a rel="nofollow" href="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?order=product.name.desc" className="select-list js-search-link">
Name, Z to A
</a>
<a rel="nofollow" href="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?order=product.price.asc" className="select-list js-search-link">
Price, low to high
</a>
<a rel="nofollow" href="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics?order=product.price.desc" className="select-list js-search-link">
Price, high to low
</a>
</div>
</div>
<div className="col-sm-4 col-xs-4 col-sp-12 hidden-md-up filter-button">
<button id="search_filter_toggler" className="btn btn-outline">
Filter
</button>
</div>
</div>
</div>
<div className="col-sm-12 hidden-md-up text-sm-center showing">
Showing 1-9 of 9 item(s)
</div>
</div>
</div>
</div>
<div className="hidden-sm-down">
<section id="js-active-search-filters" className="hide">
<h1 className="h6 hidden-xs-up">Active filters</h1>
</section>
</div>
<div >
<div id="js-product-list">
<div className="products">

<div className="product_list grid  plist-default ">
<div className="row">
{currentHotels &&
                currentHotels.filter(post => {
                    if (query === '') {
                        return post;
                    } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
                        return post;
                    }
                }).map((product,index) => (
<div key={product.id} className="ajax_block_product col-sp-12 col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4
                                                 last-item-of-tablet-line
                                 last-item-of-mobile-line
                                                " 
                 onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}>
<article className="product-miniature js-product-miniature" data-id-product="2" data-id-product-attribute="7" itemscope itemtype="http://schema.org/Product">
<div className="thumbnail-container">
<div className="product-image">
<a href="https://demo1.leotheme.com/bos_soucer_demo/en/basics/2-7-eiusmod-tempor.html#/1-size-s/11-color-black" className="thumbnail product-thumbnail">
{/* <img className="img-fluid" src="https://demo1.leotheme.com/bos_soucer_demo/304-home_default/eiusmod-tempor.jpg" alt data-full-size-image-url="https://demo1.leotheme.com/bos_soucer_demo/304-large_default/eiusmod-tempor.jpg"/> */}
{hoverIndex === index ? (
                    <img
                      className="img-fluid"
                      src={product.image2}
                      data-full-size-image-url={product.image2}
                    />
                  ) : (
                    <img
                      className="img-fluid"
                      src={product.image}
                      data-full-size-image-url={product.image}
                    />
                  )}
<span className="product-additional" data-idproduct="2"></span>
</a>

<ul className="product-flags">
</ul>
<div className="functional-buttons clearfix">

<div className="wishlist">
<a className="leo-wishlist-button btn-product btn-primary btn" href="javascript:void(0)" data-id-wishlist data-id-product="2" data-id-product-attribute="7" title="Add to Wishlist">
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
<a className="leo-compare-button btn-primary btn-product btn" href="javascript:void(0)" data-id-product="2" title="Add to Compare">
<span className="leo-compare-bt-loading cssload-speeding-wheel"></span>
<span className="leo-compare-bt-content">
<i className="icon-btn-product icon-compare material-icons">filter_list</i>
<span className="name-btn-product">Add to Compare</span>
</span>
</a>
</div>
</div></div>
<div className="product-meta">



<h3 className="h3 product-title" itemprop="name"><a href="https://demo1.leotheme.com/bos_soucer_demo/en/basics/2-7-eiusmod-tempor.html#/1-size-s/11-color-black">Eiusmod tempor</a></h3>
<div className="p-price">

<div className="product-price-and-shipping ">
<span className="sr-only">Price</span>
<span className="price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
<span itemprop="priceCurrency" content="USD"></span><span itemprop="price" content="26.99">$26.99</span>
</span>
</div>

<div className="button-container cart">
<form action="https://demo1.leotheme.com/bos_soucer_demo/en/cart" method="post">
<input type="hidden" name="token" value="4cb73f7e0e359184aa7e5ae63052ace7"/>
<input type="hidden" value="292" className="quantity_product quantity_product_2" name="quantity_product"/>
<input type="hidden" value="1" className="minimal_quantity minimal_quantity_2" name="minimal_quantity"/>
<input type="hidden" value="7" className="id_product_attribute id_product_attribute_2" name="id_product_attribute"/>
<input type="hidden" value="2" className="id_product" name="id_product"/>
<input type="hidden" name="id_customization" value className="product_customization_id"/>
<input type="hidden" className="input-group form-control qty qty_product qty_product_2" name="qty" value="1" data-min="1"/>
<button className="btn btn-primary btn-product add-to-cart leo-bt-cart leo-bt-cart_2" data-button-action="add-to-cart" type="submit">
<span className="leo-loading cssload-speeding-wheel"></span>
<span className="leo-bt-cart-content">
<i className="icon-btn-product icon-cart material-icons shopping-cart">card_travel</i>
<span className="name-btn-product">Add to cart</span>
</span>
</button>
</form>
</div>
</div>
<div className="product-description-short" itemprop="description">Nec consul possit delenit ei, illud forensibus vim ea, mei ubique sapientem et. Eos eu idque falli inimicus, ne odio dictas gloriatur sed, ea unum...</div>
</div>
</div>
</article>
</div>
))}

</div>
</div>

</div>
<nav className="pagination d-flex justify-content-between">
<div className="col-xs-12 col-md-6 col-lg-4 text-md-left text-xs-center ">
<Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(products.length / pageSize)}
                onPageChange={onPageChange}
                color="black" // Change the color if needed
                width="50px" // Adjust the width of the page buttons if needed
            /></div>
<div className="col-xs-12 col-md-6 col-lg-8">
</div>
</nav>
<div className="hidden-md-up text-xs-right up">
<a href="#header" className="btn btn-secondary">
Back to top
<i className="material-icons">&#xE316;</i>
</a>
</div>
</div>
</div>
<div id="js-product-list-bottom">
<div id="js-product-list-bottom"></div>
</div>
</section>
</section>
</div>
</div>
</div>
</section>
        </>
    )
}
export default Products