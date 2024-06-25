import Categories from "../../component/Home/Categories";
import Footer from "../../component/Home/Footer";
import Header from "../../component/Home/Header";
import Nav from "../../component/Home/Nav";
import NewCollection from "../../component/Home/NewCollection";
import Offers from "../../component/Home/Offers";
import Services from "../../component/Home/Services";
import Slider from "../../component/Home/Slider";
import Products from "../productsOfCategory/Products";

function Home () {

    return(
        <>
            
            <section id='wrapper'>
                <Nav />
            <div className="row">
                <div id="content-wrapper" className="col-lg-12 col-xs-12">
                <section id="main">
                    <section id="content" className="page-home">
                        <Slider />
                        <Services />
                        <Offers />
                        <NewCollection />
                        <Categories />
                        <div className="row box-instagram ApRow  has-bg bg-boxed" data-bg=" no-repeat" style={{background: "no-repeat"}}>

                        <div className="col-sm-12 col-xs-12 col-sp-12 col-md-12 col-lg-12 col-xl-12  ApColumn ">

                        <div className="block ApInstagram instagram-block">
                        <div className="block_content">
                        <div id="instafeed"></div>
                        <p className="link-instagram">
                        </p>
                        </div>
                        </div>

</div>              </div>
                    </section>
                    <footer className="page-footer">

                    </footer>
                </section>
                </div>
            </div>
            </section> 
            
            
        </>
    )
}
export default Home;