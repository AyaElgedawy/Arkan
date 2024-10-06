import { faRetweet, faRightToBracket, faTruck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Services(){
    return(
        <>
        <div className="wrapper" style={{background: "#ebf4f6 no-repeat"}}>
            <div className="container">
            <div className="row box-fshipping ApRow  has-bg bg-fullwidth-container" >

            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 col-sp-12  ApColumn ">

            <div className="block ApRawHtml">
            <FontAwesomeIcon icon={faTruck} size="lg" /><p> Free shipping over $300 use code 0050</p> </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 col-sp-12  ApColumn ">

            <div className="block ApRawHtml">
            <FontAwesomeIcon icon={faRetweet} size="lg"/><p> Free Returns in Store</p> </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 col-sp-12  ApColumn ">

            <div className="block ApRawHtml">
            <FontAwesomeIcon icon={faRightToBracket} size="lg" /><p> Next Day Delivery</p> </div>
            </div> </div>
            </div>
        </div>
        </>
    )
}
export default Services