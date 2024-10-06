import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../Store/Actions/CartAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleChevronDown, faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from "../../appagebuilder/images/logo.jpg"
function Header() {
    const cart = useSelector((state) => state.combineCart.cart);
    const dispatch = useDispatch()
useEffect(()=>{
    dispatch(getCartItems())
},[])
    return(
       <>
        <header id="header">
            <div className="header-container">
            <div className="header-banner">
            <div className="container">
            <div className="inner"></div>
            </div>
            </div>
            <nav className="header-nav">
            <div className="topnav">
            <div className="inner"></div>
            </div>
            <div className="bottomnav">
            <div className="inner">
            <div id="form_8601286547965313" className="row box-navh1     position-relative ApRow  has-bg bg-fullwidth" data-bg=" #111111 no-repeat" >

            <div className="col-sm-4 col-xs-4 col-sp-4 col-md-4 col-lg-4 col-xl-4  ApColumn ">

            <div className="block ApHtml">
            <div className="block_content"><div>Store Location <strong>*</strong></div></div>
            </div>
            </div>
            <div className="col-sm-4 col-xs-4 col-sp-4 col-md-4 col-lg-4 col-xl-4  ApColumn ">

            <div className="block-social">
            <h4 className="social-title">
            Follow us
            </h4>
            <ul>
            <li className="facebook"><a href="https://www.facebook.com/prestashop/" title="Facebook" target="_blank"><span>Facebook</span></a></li>
            <li className="twitter"><a href="https://twitter.com/prestashop" title="Twitter" target="_blank"><span>Twitter</span></a></li>
            <li className="youtube"><a href="https://www.youtube.com/user/prestashop" title="YouTube" target="_blank"><span>YouTube</span></a></li>
            <li className="pinterest"><a href="https://www.pinterest.com/prestashop/" title="Pinterest" target="_blank"><span>Pinterest</span></a></li>
            <li className="instagram"><a href="https://www.instagram.com/prestashop/" title="Instagram" target="_blank"><span>Instagram</span></a></li>
            </ul>
            </div>
            </div>
            <div className="col-sm-4 col-xs-4 col-sp-4 col-md-4 col-lg-4 col-xl-4  ApColumn ">


            <div id="leo_block_top" className="popup-over dropdown js-dropdown">
            <a href="javascript:void(0)" data-toggle="dropdown" className="popup-title" title="Setting">
            <i className="fa fa-cog"></i>
            <span className="hidden-md-down">Setting</span>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
            </a>
            <div className="popup-content dropdown-menu">
            <div className="language-selector">
            <span>Language:</span>
            <ul className="link">
            <li className="current">
            <a href="https://demo1.leotheme.com/bos_soucer_demo/en/module/appagebuilder/appagebuilderhome" className="dropdown-item">
            <span className="lang-img"><img src="/bos_soucer_demo/img/l/1.jpg" alt="en" width="16" height="11" /></span>
            <span className="lang-name">English</span>
            </a>
            </li>
            <li>
            <a href="https://demo1.leotheme.com/bos_soucer_demo/fr/module/appagebuilder/appagebuilderhome" className="dropdown-item">
            <span className="lang-img"><img src="/bos_soucer_demo/img/l/2.jpg" alt="fr" width="16" height="11" /></span>
            <span className="lang-name">Français</span>
            </a>
            </li>
            <li>
            <a href="https://demo1.leotheme.com/bos_soucer_demo/de/module/appagebuilder/appagebuilderhome" className="dropdown-item">
            <span className="lang-img"><img src="/bos_soucer_demo/img/l/3.jpg" alt="de" width="16" height="11" /></span>
            <span className="lang-name">Deutsch</span>
            </a>
            </li>
            <li>
            <a href="https://demo1.leotheme.com/bos_soucer_demo/it/module/appagebuilder/appagebuilderhome" className="dropdown-item">
            <span className="lang-img"><img src="/bos_soucer_demo/img/l/4.jpg" alt="it" width="16" height="11" /></span>
            <span className="lang-name">Italiano</span>
            </a>
            </li>
            <li>
            <a href="https://demo1.leotheme.com/bos_soucer_demo/es/module/appagebuilder/appagebuilderhome" className="dropdown-item">
            <span className="lang-img"><img src="/bos_soucer_demo/img/l/5.jpg" alt="es" width="16" height="11" /></span>
            <span className="lang-name">Español</span>
            </a>
            </li>
            <li>
            <a href="https://demo1.leotheme.com/bos_soucer_demo/ar/module/appagebuilder/appagebuilderhome" className="dropdown-item">
            <span className="lang-img"><img src="/bos_soucer_demo/img/l/6.jpg" alt="ar" width="16" height="11" /></span>
            <span className="lang-name">اللغة العربية</span>
            </a>
            </li>
            </ul>
            </div>
            <div className="currency-selector">
            <span>Currency:</span>
            <ul className="link">
            <li>
            <a title="Euro" rel="nofollow" href="https://demo1.leotheme.com/bos_soucer_demo/en/module/appagebuilder/appagebuilderhome?SubmitCurrency=1&amp;id_currency=2" className="dropdown-item">
            <span className="cur-code">EUR</span>
            <span className="cur-name">€</span>
            </a>
            </li>
            <li className="current">
            <a title="US Dollar" rel="nofollow" href="https://demo1.leotheme.com/bos_soucer_demo/en/module/appagebuilder/appagebuilderhome?SubmitCurrency=1&amp;id_currency=1" className="dropdown-item">
            <span className="cur-code">USD</span>
            <span className="cur-name">$</span>
            </a>
            </li>
            </ul>
            </div>
            </div>
            </div>


            <div className="userinfo-selector dropdown js-dropdown popup-over">
            <a href="javascript:void(0)" data-toggle="dropdown" className="popup-title" title="Account">
            <i className="fa fa-user"></i>
            <span className="hidden-md-down">My account</span>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
            </a>
            <ul className="popup-content dropdown-menu user-info">
            <li>
            <a className="signin leo-quicklogin" data-enable-sociallogin="enable" data-type="popup" data-layout="login" href="javascript:void(0)" title="Log in to your customer account" rel="nofollow">
            <i className="fa fa-lock"></i>
            <span>Sign in</span>
            </a>
            </li>
            </ul>
            </div>
            </div> </div>
            </div>
            </div>
            </nav>
            <div className="header-top">
            <div className="inner">
            <div className="row box-toph1 box-h2 position-relative ApRow  has-bg bg-boxed" data-bg=" no-repeat" style={{background: "no-repeat"}}>

            <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12 col-sp-12 col-logo ApColumn ">

            <div className="h-logo">
                  <img className="img-fluid" src={logo} alt="Bos Soucer"/>
            </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-3 col-sm-3 col-xs-3 col-sp-3 col-menu position-static ApColumn ">

            <div id="memgamenu-form_9184166521380958" className="ApMegamenu">
            <nav data-megamenu-id="9184166521380958" className="leo-megamenu cavas_menu navbar navbar-default enable-canvas " role="navigation">

            <div className="navbar-header">
            <button type="button" className="navbar-toggler hidden-lg-up" data-toggle="collapse" data-target=".megamenu-off-canvas-9184166521380958">
            <span className="sr-only">Toggle navigation</span>
            &#9776;

            </button>
            </div>

            <div className="leo-top-menu collapse navbar-toggleable-md megamenu-off-canvas megamenu-off-canvas-9184166521380958">
                <ul className="nav navbar-nav megamenu horizontal">
                    <li className="nav-item parent dropdown">
                        <a className="nav-link has-category"  href="https://demo1.leotheme.com/bos_soucer_demo/en/index.php" target="_self">
                            <span className="menu-title">home </span>
                            {/* <FontAwesomeIcon icon={faCircleChevronDown} /> */}
                        </a>
                    </li>
                    <li className="nav-item  parent dropdown aligned-fullwidth  ">
                        <a href="https://demo1.leotheme.com/bos_soucer_demo/en/3-scelerisque-magna" className="nav-link has-category" target="_self">
                            <span className="menu-title">shop </span>

                        </a>
                    </li>
                   
                    <li className="nav-item parent dropdown    ">
                        <a className="nav-link has-category" href="https://demo1.leotheme.com/bos_soucer_demo/en/blog.html" target="_self">
                            <span className="menu-title">Blog </span>

                        </a>
            {/* <b className="caret">
            </b>
            <div className="dropdown-menu level1">
            <div className="dropdown-menu-inner">
            <div className="row">
            <div className="col-sm-12 mega-col" data-colwidth="12" data-type="menu">
            <div className="inner">
            <ul>
                <li className="nav-item   ">
                    <a className="nav-link" href="https://demo1.leotheme.com/bos_soucer_demo/en/#" target="_self"><span className="menu-title">viris exerci</span></a></li><li className="nav-item parent dropdown-submenu  "><a className="nav-link dropdown-toggle" data-toggle="dropdown" href="https://demo1.leotheme.com/bos_soucer_demo/en/#"><span className="menu-title">vidit menandri</span></a><b className="caret"></b><div className="dropdown-menu level2"><div className="dropdown-menu-inner"><div className="row"><div className="col-sm-12 mega-col" data-colwidth="12" data-type="menu"><div className="inner"><ul><li className="nav-item   "><a className="nav-link" href="https://demo1.leotheme.com/bos_soucer_demo/en/#" target="_self"><span className="menu-title">invenire partiendo</span></a></li><li className="nav-item   "><a className="nav-link" href="https://demo1.leotheme.com/bos_soucer_demo/en/#" target="_self"><span className="menu-title">gloriatur reprimique</span></a></li><li className="nav-item   "><a className="nav-link" href="https://demo1.leotheme.com/bos_soucer_demo/en/#" target="_self"><span className="menu-title">quo lorem</span></a></li></ul></div></div></div></div></div></li><li className="nav-item   "><a className="nav-link" href="https://demo1.leotheme.com/bos_soucer_demo/en/#" target="_self"><span className="menu-title">omnes partem</span></a></li><li className="nav-item parent dropdown-submenu  "><a className="nav-link dropdown-toggle" data-toggle="dropdown" href="https://demo1.leotheme.com/bos_soucer_demo/en/#"><span className="menu-title">reque fierent</span></a><b className="caret"></b><div className="dropdown-menu level2"><div className="dropdown-menu-inner"><div className="row"><div className="col-sm-12 mega-col" data-colwidth="12" data-type="menu"><div className="inner"><ul><li className="nav-item   "><a className="nav-link" href="https://demo1.leotheme.com/bos_soucer_demo/en/#" target="_self"><span className="menu-title">dolor omittantur</span></a></li></ul></div></div></div></div></div></li><li className="nav-item   "><a className="nav-link" href="https://demo1.leotheme.com/bos_soucer_demo/en/#" target="_self"><span className="menu-title">has graeco</span></a></li></ul></div></div></div></div></div> */}
                    </li>
                    <li className="nav-item   ">
                        <a href="https://demo1.leotheme.com/bos_soucer_demo/en/contact-us" target="_self" className="nav-link has-category">
                            <span className="menu-title">Contact us </span>
                        </a>
                    </li>
                </ul>
             </div>
            </nav>

            </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-9 col-sm-9 col-xs-9 col-sp-9 col-info ApColumn ">


            <div id="search_widget" className=" js-dropdown popup-over" >
            <a href="javascript:void(0)" data-toggle="dropdown" className="popup-title">
            <i className="material-icons">search</i>
            </a>
            <form method="get" action="//demo1.leotheme.com/bos_soucer_demo/en/search" className="popup-content dropdown-menu" id="search_form">
            <div className="search-inner">
            <input type="hidden" name="controller" value="search"/>
            <input type="text" name="s" value placeholder="Search" aria-label="Search"/>
            <button type="submit">
            {/* <i className="material-icons">search</i> */}
            <FontAwesomeIcon icon={faMagnifyingGlass} />  
            </button>          
            </div>
            </form>
            </div>


            <a className="ap-btn-wishlist" href="//demo1.leotheme.com/bos_soucer_demo/en/module/leofeature/mywishlist" title="Wishlist"><FontAwesomeIcon icon={faHeart} size="xl" /> <span className="total-wapper">(<span className="ap-total-wishlist ap-total"></span>)</span> </a>

            <div id="cart-block">
            <div className="blockcart cart-preview inactive" >
            <div className="header">
            <span className="text-top">
            <FontAwesomeIcon icon={faCartShopping} size="xl" />
            <span className="text-cart">My Cart</span>
            <span className="cart-products-count"> {`(${cart.length})`} </span>
                            <FontAwesomeIcon icon={faCircleChevronDown} />
            </span>
            </div>
            </div>
            </div>
            </div> </div>
            </div>
            </div>
            </div>
        </header>
        </>
    );
} 
export default Header;