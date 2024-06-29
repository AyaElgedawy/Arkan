
import { useEffect, useState } from 'react'
 import Pagination from '../../component/Pagination/Pagintaion' 
import { getProductByCategoryId } from '../../Store/Actions/ProductAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getCategory } from '../../Store/Actions/CategoryAction';
import { getColor, getSize } from '../../Store/Actions/ProductVariantAcrion';
function Products(){
  const { category_id } = useParams();
  const [hoverIndex, setHoverIndex] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(3); // Set the number of hotels to display per page
    const dispatch = useDispatch();
    const products = useSelector((state) => state.combineProductByCategory.productByCategory);
    const categorys = useSelector((state) => state.combineCategory.category);
    const colors = useSelector((state) => state.combineProductVariant.colors);
    const sizes = useSelector((state) => state.combineProductVariant.sizes);
    const [filters, setFilters] = useState({
      size: [],
      color: [],
      price: [],
    });
  const [query, setQuery] = useState("")
   
    const currentCategory = categorys.find((category) => category.id == category_id); 
     useEffect(() => {
    // Fetch best seller products data from an API or your own data source
    dispatch(getProductByCategoryId(category_id));
    dispatch(getCategory());
    dispatch(getColor());
    dispatch(getSize());
    console.log(products);
  }, [category_id],dispatch);

  useEffect(()=>{
    console.log(filters.price,"######");
  },[filters])
  
  const indexOfLastProduct = currentPage * pageSize;
  const indexOfFirstProduct = indexOfLastProduct - pageSize;
  const currentProducts = products.filter((product) => {
    const matchesSize = filters.size.length === 0 || product.sizes.some(size => filters.size.includes(size));
    const matchesColor = filters.color.length === 0 || product.colors.some(color => filters.color.includes(color));
    const matchesPrice = filters.price.length === 0 || filters.price.some((priceRange) => {
    const [min, max] = priceRange.split('-');
      return product.current_price >= (min) && product.current_price <= (max);
    })
    return matchesSize && matchesColor && matchesPrice;
  }).slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to handle page changes
  const onPageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
  };

  
  const handleFilterChange = (type, value) => {
    setFilters((filters) => ({
      ...filters,
      [type]: filters[type].includes(value)
        ? filters[type].filter((item) => item != value)
        : [...filters[type], value],
        
    }));
    console.log(value);
  };

  const handleClearFilters = () =>{
    setFilters({
      size: [],
      color: [],
      price: [],
    });
  }
  const [upClass, setUpClass] = useState('hidden-sm-down');
  const [downClass, setDownClass] = useState('');

  const handleDownClick = () => {
      setDownClass('hidden-sm-down');
      upClass== 'hidden-sm-down' && setUpClass('')
  };
  const handleUpClick = () => {
    setDownClass('');
     setUpClass('hidden-sm-down')
};
    return(
        <>
            <section id="wrapper">
<div className="container">

<div className="row">
<div id="left-column" className="sidebar col-xs-12 col-sm-12 col-md-4 col-lg-3">
<div className="block-categories block block-highlighted hidden-sm-down">
<h4 className="title_block"><a href="https://demo1.leotheme.com/bos_soucer_demo/en/7-basics">{currentCategory&& currentCategory.name}</a></h4>
<div className="block_content">
<ul className="category-top-menu">
<li>
</li>
</ul>
</div>
</div>
<div id="search_filters_wrapper" className={`${upClass}`}>
<div id="search_filter_controls" className="hidden-md-up">
<span id="_mobile_search_filters_clear_all"></span>
<button className="btn btn-secondary ok" onClick={handleUpClick}>
<i className="material-icons rtl-no-flip">&#xE876;</i>
OK
</button>
</div>
<div id="search_filters" className="block">
<p className="text-uppercase h6 hidden-sm-down title_block">Filter By</p>
<div id="_desktop_search_filters_clear_all" className=" clear-all-wrapper text-xs-center">
<button className="btn btn-tertiary js-search-filters-clear-all" onClick={handleClearFilters}>
<i className="material-icons">&#xE14C;</i>
Clear all
</button>
</div>
<div className="block_content">
<section className="facet clearfix  attr-color">
<p className="h6 facet-title hidden-sm-down">Color</p>
<div className={`title hidden-md-up  `} data-target="#facet_22899" data-toggle="collapse" 
 >
<p className="h6 facet-title">Color</p>
<span className="float-xs-right">
<span className="navbar-toggler collapse-icons">
</span>
</span>
</div>
<ul id="facet_22899" className='' >
{colors.map((color,index) => (
<li key={index}>
<label className="facet-label" for="facet_input_22899_0">
<span className="custom-checkbox">
<input id="facet_input_22899_0" 
 type="checkbox"
 checked={filters.color.includes(color.id)}
 onChange={() => handleFilterChange('color', color.id)}

 />
<span className="color" 
style={{backgroundColor:color.code,border: filters.color.includes(color.id) ? '2px solid #000' : 'none'}}></span>
</span>
<a  className="_gray-darker search-link js-search-link" rel="nofollow">
{color.name}
<span className="magnitude"></span>
</a>
</label>
</li>
 ))}

</ul>
</section>
<section className="facet clearfix ">
<p className="h6 facet-title hidden-sm-down">Price</p>
<div className="title hidden-md-up" data-target="#facet_31141" data-toggle="collapse">
<p className="h6 facet-title">Price</p>
<span className="float-xs-right">
<span className="navbar-toggler collapse-icons">

</span>
</span>
</div>

<ul id="facet_31141" className="collapse">
          {[
            { min: 16, max: 17 },
            { min: 21, max: 22 },
            { min: 23, max: 29 },
            { min: 30, max: 32 },
            { min: 50, max: 53 },
          ].map((priceRange, index) => (
            <li key={index}>
              <label className="facet-label" htmlFor={`facet_input_31141_${index}`}>
                <span className="custom-checkbo">
                  <input
                    id={`facet_input_31141_${index}`}
                    type="checkbox"
                    name="filter Price"
                    checked={filters.price.includes(`${priceRange.min}-${priceRange.max}`)}
                    onChange={() => handleFilterChange('price', `${priceRange.min}-${priceRange.max}`)}
                  />
                  <span className="ps-shown-by-js"></span>
                </span>
                <a
                 
                  className="_gray-darker search-link js-search-link"
                  rel="nofollow"
                >
                  ${priceRange.min}.00 - ${priceRange.max}.00 <span className="magnitude"></span>
                </a>
              </label>
            </li>
          ))}
        </ul>
</section>
<section className="facet clearfix  attr-color">
<p className="h6 facet-title hidden-sm-down">Size</p>
<div className="title hidden-md-up" data-target="#facet_22899" data-toggle="collapse">
<p className="h6 facet-title">Size</p>
<span className="float-xs-right">
<span className="navbar-toggler collapse-icons">

</span>
</span>
</div>
<ul id="facet_22899" className="collapse">
{sizes.map((size,index) => (
<li key={index}>
<label className="facet-label" for="facet_input_22899_0"
onClick={() => handleFilterChange('size', size.id)}>
<span className="custom-checkbo">
<input id="facet_input_22899_0" 
 type="checkbox"
 checked={filters.size.includes(size.id)}
 onChange={() => handleFilterChange('size', size.id)}/>
</span>
{size.name}
<span className="magnitude"></span>
</label>
</li>
 ))}

</ul>
</section>
</div>
</div>
</div>


</div>
<div id="content-wrapper" className={`left-column col-xs-12 col-sm-12 col-md-8 col-lg-9 ${downClass}`}>
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
<button id="search_filter_toggler"
 className="btn btn-outline"
 onClick={handleDownClick}>
Filter
</button>
</div>
</div>
</div>

</div>
</div>
</div>
<div className="hidden-sm-up">
<section id="js-active-search-filters" className="hide">
<h1 className="h6 hidden-xs-up">Active filters</h1>
</section>
</div>
<div >
<div id="js-product-list">
<div className="products">

<div className="product_list grid  plist-default ">
<div className="row">
{currentProducts &&
                currentProducts.filter(post => {
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
<a href="" className="thumbnail product-thumbnail">
{/* <img className="img-fluid" src="https://demo1.leotheme.com/bos_soucer_demo/304-home_default/eiusmod-tempor.jpg" alt data-full-size-image-url="https://demo1.leotheme.com/bos_soucer_demo/304-large_default/eiusmod-tempor.jpg"/> */}
{hoverIndex === index ? (
                    <img
                      className="img-fluid"
                      src={`http://127.0.0.1:8000/${product.image2}`}
                      data-full-size-image-url={`http://127.0.0.1:8000/${product.image2}`}
                    />
                  ) : (
                    <img
                      className="img-fluid"
                      src={`http://127.0.0.1:8000/${product.image1}`}
                      data-full-size-image-url={`http://127.0.0.1:8000/${product.image1}`}
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



<h3 className="h3 product-title" itemprop="name"><a href="https://demo1.leotheme.com/bos_soucer_demo/en/basics/2-7-eiusmod-tempor.html#/1-size-s/11-color-black">{product.name}</a></h3>
<div className="p-price">

<div className="product-price-and-shipping ">
<span className="sr-only">Price</span>
<span className="price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
<span itemprop="priceCurrency" content="USD"></span><span itemprop="price" content="26.99">{product.current_price}</span>
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
<div className="product-description-short" itemProp="description">{product.description}</div>
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