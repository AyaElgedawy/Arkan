
import { useContext, useEffect, useState } from 'react'
 import Pagination from '../../component/Pagination/Pagintaion' 
import { getProductByCategoryId } from '../../Store/Actions/ProductAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getCategory } from '../../Store/Actions/CategoryAction';
import { getAllVariants, getColor, getSize, getVariantsProduct } from '../../Store/Actions/ProductVariantAcrion';
import { UpdateToAddToCart, addToCart, getCartItems } from '../../Store/Actions/CartAction';
import "../../style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { OpenModalContext } from '../../Context/Open_modal';
import { AuthContext } from '../../Context/AuthContext';
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
    const cart = useSelector((state) => state.combineCart.cart);
    const variants  =useSelector((state)=> state.combineProductVariant.allVariants)
    const [filters, setFilters] = useState({
      size: [],
      color: [],
      price: [],
    });
  const [query, setQuery] = useState("")
    const currentCategory = categorys.find((category) => category.id == category_id); 
    const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };
     useEffect(() => {
    // Fetch best seller products data from an API or your own data source
    dispatch(getProductByCategoryId(category_id));
    dispatch(getCategory());
    dispatch(getColor());
    dispatch(getSize());

    dispatch(getAllVariants())
    console.log(products);
  console.log("All Variants",variants);

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

useEffect(()=>{
  dispatch(getCartItems(currentUser))
},[])
const [hoverIndexCard, setHoverIndexCard] = useState(null);
    const variantProduct = useSelector((state) => state.combineProductVariant.variantsProduct);
    const [quantity, setQuantity] = useState(1);

  const [selectedProduct, setSelectedProduct] = useState(null); // Manage the selected product for options
  const {openModalContext, setOpenModalContext} = useContext(OpenModalContext);
  const [cartDictItem,setCartDictItem] = useState()
  const [apologyToAddToCart,setAbologyToAddToCart]=useState(false)
  const {currentUser, setCurrentUser} = useContext(AuthContext);


  
   
  // const handleAddToCart = (e) => {
  //   e.preventDefault();
  //   dispatch(getCartItems())
  //   if (cartDictItem) {
  //     if(cartDictItem.quantity + +quantity <= product.quantity){
  //     // Dispatch the update action with the cart item ID and the updated quantity
  //        dispatch(UpdateToAddToCart(cartDictItem.id, cartDictItem.quantity + +quantity));
      
  //        setOpenModalContext(true)
  //     }
  //     else{
  //       setAbologyToAddToCart(true)
  //     }
  //   } else {
  //     if(+quantity <= product.quantity){
  //       const productObj = {
  //         product: product_id,
  //         quantity: quantity,  // Initial quantity
  //         size: selectedSize,
  //         color: selectedColor,
  //       };
  //       // Dispatch the add to cart action with the new product
  //       dispatch(addToCart(productObj));
  //       console.log("Adding new product to cartDictionary:", product_id);
  //       setOpenModalContext(true)
  //     }
  //     else{
  //       setAbologyToAddToCart(true)
  //     }
  //   }
  
  //   console.log("Product found in cartDictionary:", cartDictItem);
  //   setOpenModalContext(true)
  //  console.log("modal context",openModalContext);
  //   // Reset selected product, color, and size
  //   // setSelectedColor(null);
  //   // setSelectedSize(null);
  //   // setQuantity(1)
  // };
  
  const handleAddToCart = async(product) => {
    
    // Find if the product is already in the local cartDictionary state
    //const cartDictItem = cart.find(
    //  (item) => item.product === product.id && item.size === selectedSize && item.color === selectedColor
    //);
  
    //if (cartDictItem) {
     // if(cartDictItem.quantity + +quantity <= product.quantity)
      // Dispatch the update action with the cart item ID and the updated quantity
     // {dispatch(UpdateToAddToCart(cartDictItem.id, cartDictItem.quantity + 1));
    //    setOpenModalContext(true)
    //  console.log("Product found in cartDictionary:", cartDictItem);}
     // else{
    //    setAbologyToAddToCart(true)
    //  }
   // } 
    //else {
      const productObj = {
        user: currentUser?.id || null ,
        product: product.id,
        quantity: 1,  // Initial quantity
        size: selectedSize,
        color: selectedColor,
      };
  
     
  
      // Dispatch the add to cart action with the new product
      dispatch(addToCart(productObj,currentUser,productObj.quantity));
      setOpenModalContext(true)
      console.log("Adding new product to cartDictionary:", product);
   // }
   
    // Reset selected product, color, and size
    setSelectedProduct(null);
    setSelectedColor(null);
    setSelectedSize(null);
  };
  

const handleFirstAddToCart = (product) => {
  setSelectedProduct(product); // Show options for the clicked product
  dispatch(getVariantsProduct(product.id))

  setSelectedSize(null)
  setSelectedColor(null)
};

const handleClickOutside = (event) => {
  // If user clicks anywhere outside the product options, hide the options
  if (!event.target.closest('.product-options')) {
    setSelectedProduct(null);
  }
};
// useEffect(() => {
//   // dispatch(getProductDetails(product_id));
//   // product_id??setSelectedImage(product.image1);
//   dispatch(getVariantsProduct(selectedProduct.id))
// }, [selectedProduct]);
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
              <label className="facet-label" htmlFor="facet_input_22899_0">
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
              <label className="facet-label" htmlFor="facet_input_22899_0"
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
                      currentProducts
                        .filter((post) => {
                          if (query === '') {
                            return post;
                          } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
                            return post;
                          }
                        })
                        .map((product, index) => (
                          <div
                          key={product.id}
                          className="ajax_block_product col-sp-12 col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4"
                          onMouseEnter={() => setHoverIndex(index)}
                          onMouseLeave={() => setHoverIndex(null)}
                        >
                          <article
                            className="product-miniature js-product-miniature"
                            data-id-product="2"
                            data-id-product-attribute="7"
                            itemScope
                            itemType="http://schema.org/Product"
                          >
                            <div className="thumbnail-container">
                              <div className="product-image">
                              <Link
                                  to={`/product_details/${product.id}`}
                                  className="thumbnail product-thumbnail"
                                  onClick={() => setSelectedProduct(null)} // Close options on image click
                                >
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
                                  </Link>
                                  
                                
                                <span className="product-additional" data-idproduct="2"></span>
                      
                                {/* Moved product-options inside product-image */}
                                {selectedProduct?.id === product.id && hoverIndex === index &&<div className="product-options">
                                  <div className="sizes">
                                    <label>Sizes:</label>
                                    <ol className="horizontal-list">
                                      {variantProduct.map((item) => (
                                        <li key={item.size.id} onClick={() => handleSizeSelect(item.size.id)}
                                        style={{
                                          cursor: 'pointer',
                                          fontWeight: selectedSize === item.size.id ? 'bold' : 'normal',
                                          borderColor: selectedSize === item.size.id && "#cba146",    
                                          backgroundColor:selectedSize === item.size.id && "#f0f0f0",
                                        }}>
                                          {sizes.find((size)=>(size.id===item.size.id)).name}
                                        </li>
                                      ))}
                                    </ol>
                                  </div>
                                  <div className="colors">
                                    <label>Colors:</label>
                                    <ol className="horizontal-list">
                                      {variantProduct.map((item) => (
                                        <li key={item.color.id} onClick={() => handleColorSelect(item.color.id)}
                                        style={{
                                          cursor: 'pointer',
                                          fontWeight: selectedColor === item.color.id ? 'bold' : 'normal',
                                          borderColor: selectedColor === item.color.id && "#cba146",    
                                          backgroundColor: selectedColor === item.color.id && "#f0f0f0",
                                        }}>
                                          {colors.find((color)=>(color.id===item.color.id)).name}

                                        </li>
                                      ))}
                                    </ol>
                                  </div>
                                </div>
                                }
                              </div>
                      
                              <div className="product-meta">
                              
                                  <h3 className="h3 product-title" itemProp="name">
                                    <Link
                                  to={`/product_details/${product.id}`}
                                  
                                >{product.name}</Link>
                                  </h3>
                                
                                <div className="p-price">
                                  
                                    <div className="product-price-and-shipping">
                                      <span className="sr-only">Price</span>
                                      <span className="price">${product.current_price}</span>
                                    </div>
                                  
                                  <div className="button-container cart">
                                    {selectedProduct?.id !== product.id ? (
                                      <button
                                        className="btn btn-primary btn-product add-to-cart leo-bt-cart"
                                        onClick={() => handleFirstAddToCart(product)}
                                      >
                                        <FontAwesomeIcon icon={faCartShopping} size="xl" />
                                        <span className="name-btn-product">Add to cart</span>
                                      </button>
                                    ) : (
                                      <>
                                        <button
                                          className="btn btn-primary btn-product add-to-cart leo-bt-cart"
                                          onClick={() => handleAddToCart(product)}
                                        >
                                          <FontAwesomeIcon icon={faCartShopping} size="xl" />
                                          <span className="name-btn-product">Add second to cart</span>
                                        </button>
                                      </>
                                    )}
                                  </div>
                                </div>
                      
                                <div className="product-description-short" itemProp="description">
                                  {product.description}
                                </div>
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
            <div id="blockcart-modal" class={openModalContext?`modal fade in` :`modal fade`} style={{visibility: openModalContext ? 'block' : 'none'}}>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header" style={{backgroundColor: apologyToAddToCart? "red":"#4cbb6c"}}>
        <button type="button" class="close" onClick={()=>{setOpenModalContext(false)}}>
          <span>×</span>
        </button>
       {apologyToAddToCart?<h4 class="modal-title h6 text-sm-center" id="myModalLabel"><FontAwesomeIcon icon={faXmark} style={{color: "white"}} /> Unsuccessful adding to cart</h4>
       :
        <h4 class="modal-title h6 text-sm-center" id="myModalLabel"><FontAwesomeIcon icon={faCheck} style={{color: "white"}} /> Product successfully added to your shopping cart</h4>}
      </div>
      <div class="modal-body">
        {apologyToAddToCart? <div>Sorry, There is no more of this product </div>:<div class="row">
          <div class="col-md-5 divide-right">
            <div class="row">
              <div class="col-md-6">
                <img class="product-image" src={selectedProduct?.image1} alt={selectedProduct?.name} title="" itemProp="image"/>
              </div>
              <div class="col-md-6">
                <h6 class="h6 product-name">{selectedProduct?.name}</h6>
                <p>${selectedProduct?.current_price}</p>
                
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
              to={`/products/${selectedProduct?.category}`}
                                  
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
        </div>}
      </div>
    </div>
  </div>
</div>
<div class={openModalContext?"modal-backdrop fade in":""}></div>
        </>
    )
}
export default Products