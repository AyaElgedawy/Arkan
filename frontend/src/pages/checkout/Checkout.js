import "../../style.css"

function Checkout() {

    return(
        <>
  {/* <body id="checkout" className="lang-en country-us currency-usd layout-full-width page-order tax-display-enabled"> */}
<section id="wrapper" className="country-us currency-usd layout-full-width page-order tax-display-enabled">
      
    <div className="container">

      
        <section id="content">
            <div className="row">
                <div className="col-md-8">
                
                    <section id= "checkout-addresses-step" className = "checkout-step  -current -reachable ">
                        <h1 className="step-title h3">
                            <span className="step-number" >2</span>
                            Addresses
                            <span className="step-edit text-muted"><i className="material-icons edit">&#xE254;</i> Edit</span>
                        </h1>

                        <div className="content">
                        
                            <div className="js-address-form">
                                <form method="POST" action="https://demo1.leotheme.com/bos_soucer_demo/en/order" data-refresh-url="//demo1.leotheme.com/bos_soucer_demo/en/order?ajax=1&action=addressForm">

                                        <p > The selected address will be used both as your personal address (for invoice) and as your delivery address.</p>
                                
                                        <div id="delivery-address">
                                    
                                            <div className="js-address-form">
                                                
                                                <form method="POST" action="//demo1.leotheme.com/bos_soucer_demo/en/order?id_address=0" data-id-address="0" data-refresh-url="//demo1.leotheme.com/bos_soucer_demo/en/order?ajax=1&action=addressForm">
                                                    <section className="form-fields">
                                                                
                                                        <input type="hidden" name="id_address" value=""/>
                                                    
                                                        <input type="hidden" name="id_customer" value=""/>
                                                    
                                                        <input type="hidden" name="back" value=""/>

                                                        <input type="hidden" name="token" value="49b26395781aeb1cb99086a7abfdda2f"/>

                                                                    
                                                        <div className="form-group row ">
                                                            <label className="col-md-3 form-control-label required">First name</label>
                                                            <div className="col-md-6">

                                                                <input className="form-control" name="firstname" type="text" value="Aya" maxlength="255" required />      
                                                            </div>

                                                            <div className="col-md-3 form-control-comment">    
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="form-group row ">
                                                            <label className="col-md-3 form-control-label required"> Last name </label>
                                                            <div className="col-md-6">
                                                                <input className="form-control" name="lastname" type="text" value="fathi" maxlength="255" required />
                                                                        
                                                            </div>

                                                            <div className="col-md-3 form-control-comment">     
                                                            </div>
                                                        </div>

                                                                    
                                                        <div className="form-group row ">
                                                            <label className="col-md-3 form-control-label"> Company</label>
                                                            <div className="col-md-6">
                                                                <input className="form-control" name="company" type="text" value="" maxlength="255" />
                                                            </div>

                                                            <div className="col-md-3 form-control-comment"> Optional </div>
                                                        </div>
                                                
                                                        <div className="form-group row ">
                                                            <label className="col-md-3 form-control-label required"> Address </label>
                                                            <div className="col-md-6">
                                                                <input className="form-control" name="address1" type="text" value=""  maxlength="128" required />
                                                            </div>

                                                            <div className="col-md-3 form-control-comment">      
                                                            </div>
                                                        </div>
                                                            
                                                        <div className="form-group row ">
                                                            <label className="col-md-3 form-control-label"> Address Complement </label>
                                                            <div className="col-md-6">
                                                                <input className="form-control" name="address2" type="text" value="" maxlength="128" />
                                                            </div>
                                                            <div className="col-md-3 form-control-comment"> Optional </div>
                                                        </div>
                                                        
                                                        <div className="form-group row ">
                                                            <label className="col-md-3 form-control-label required"> City </label>
                                                            <div className="col-md-6">

                                                                <input className="form-control" name="city" type="text" value=""  maxlength="64" required/>
                                                            </div>

                                                            <div className="col-md-3 form-control-comment">     
                                                            </div>
                                                        </div>
                                                    
                                                        <div className="form-group row ">
                                                            <label className="col-md-3 form-control-label required"> State </label>
                                                            <div className="col-md-6">
                                                                <select className="form-control form-control-select" name="id_state" required>
                                                                    <option value disabled selected>-- please choose --</option>
                                                                                <option value="1" >AA</option>
                                                                                <option value="2" >AE</option>
                                                                                <option value="3" >AP</option>
                                                                                <option value="4" >Alabama</option>
                                                                                <option value="5" >Alaska</option>
                                                                                <option value="6" >Arizona</option>
                                                                                <option value="7" >Arkansas</option>
                                                                                <option value="8" >California</option>
                                                                                <option value="9" >Colorado</option>
                                                                                <option value="10" >Connecticut</option>
                                                                                <option value="11" >Delaware</option>
                                                                                <option value="12" >Florida</option>
                                                                                <option value="13" >Georgia</option>
                                                                                <option value="14" >Hawaii</option>
                                                                                <option value="15" >Idaho</option>
                                                                                <option value="16" >Illinois</option>
                                                                                <option value="17" >Indiana</option>
                                                                                <option value="18" >Iowa</option>
                                                                                <option value="19" >Kansas</option>
                                                                                <option value="20" >Kentucky</option>
                                                                                <option value="21" >Louisiana</option>
                                                                                <option value="22" >Maine</option>
                                                                                <option value="23" >Maryland</option>
                                                                                <option value="24" >Massachusetts</option>
                                                                                <option value="25" >Michigan</option>
                                                                                <option value="26" >Minnesota</option>
                                                                                <option value="27" >Mississippi</option>
                                                                                <option value="28" >Missouri</option>
                                                                                <option value="29" >Montana</option>
                                                                                <option value="30" >Nebraska</option>
                                                                                <option value="31" >Nevada</option>
                                                                                <option value="32" >New Hampshire</option>
                                                                                <option value="33" >New Jersey</option>
                                                                                <option value="34" >New Mexico</option>
                                                                                <option value="35" >New York</option>
                                                                                <option value="36" >North Carolina</option>
                                                                                <option value="37" >North Dakota</option>
                                                                                <option value="38" >Ohio</option>
                                                                                <option value="39" >Oklahoma</option>
                                                                                <option value="40" >Oregon</option>
                                                                                <option value="41" >Pennsylvania</option>
                                                                                <option value="42" >Rhode Island</option>
                                                                                <option value="43" >South Carolina</option>
                                                                                <option value="44" >South Dakota</option>
                                                                                <option value="45" >Tennessee</option>
                                                                                <option value="46" >Texas</option>
                                                                                <option value="47" >Utah</option>
                                                                                <option value="48" >Vermont</option>
                                                                                <option value="49" >Virginia</option>
                                                                                <option value="50" >Washington</option>
                                                                                <option value="51" >West Virginia</option>
                                                                                <option value="52" >Wisconsin</option>
                                                                                <option value="53" >Wyoming</option>
                                                                                <option value="54" >Puerto Rico</option>
                                                                                <option value="55" >US Virgin Islands</option>
                                                                                <option value="56" >District of Columbia</option>
                                                                </select>
                                                            </div>

                                                            <div className="col-md-3 form-control-comment">     
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="form-group row ">
                                                            <label className="col-md-3 form-control-label required">
                                                                    Zip/Postal Code
                                                                </label>
                                                            <div className="col-md-6">
                                                                <input className="form-control" name="postcode" type="text" value="" maxlength="12" required/>
                                                            </div>
                                                            <div className="col-md-3 form-control-comment">    
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="form-group row ">
                                                            <label className="col-md-3 form-control-label required"> Country </label>
                                                            <div className="col-md-6">
                                                                <select
                                                                className="form-control form-control-select js-country"
                                                                name="id_country"
                                                                required          >
                                                                    <option value disabled selected>-- please choose --</option>
                                                                    <option value="21"  selected >United States</option>
                                                                </select>

                                                            </div>

                                                            <div className="col-md-3 form-control-comment">    
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="form-group row ">
                                                            <label className="col-md-3 form-control-label">
                                                                    Phone
                                                                </label>
                                                            <div className="col-md-6">
                                                                <input className="form-control" name="phone" type="tel" value="" maxlength="32"/>
                                                            </div>

                                                            <div className="col-md-3 form-control-comment"> Optional </div>
                                                        </div>
                                                            
                                                        <input type="hidden" name="saveAddress" value="delivery"/>
                                                        <div className="form-group row">
                                                            <div className="col-md-9 col-md-offset-3">
                                                                <input name = "use_same_address" id="use_same_address" type = "checkbox" value = "1"  checked />
                                                                <label for="use_same_address">Use this address for invoice too</label>
                                                            </div>
                                                        </div>
                                                    </section>
                                                    <footer className="form-footer clearfix">
                                                        <input type="hidden" name="submitAddress" value="1"/>
                                                        <form>
                                                            <button type="submit" className="continue btn btn-primary float-xs-right" name="confirm-addresses" value="1"> Continue </button>
                                                        </form>
                                                    </footer>
                                                </form>
                                            </div>
                                            </div>
                                </form>
                            </div>

                        </div>
                    </section>

                    <section id="checkout-delivery-step" className="checkout-step  -unreachable js-current-step">
                        <h1 className="step-title h3">
                            <i className="material-icons rtl-no-flip done"></i>
                            <span className="step-number">3</span>
                                Shipping Method
                            <span className="step-edit text-muted"><i className="material-icons edit"></i> Edit</span>
                        </h1>

                        <div className="content">
                        
                            <div id="hook-display-before-carrier">
                                
                            </div>

                            <div className="delivery-options-list">
                                <form className="clearfix" id="js-delivery" data-url-update="//demo1.leotheme.com/bos_soucer_demo/en/order?ajax=1&amp;action=selectDeliveryOption" method="post">
                                    <div className="form-fields">
                                    
                                        <div className="delivery-options">
                                            <div className="row delivery-option">
                                                <div className="col-sm-1">
                                                    <span className="custom-radio float-xs-left">
                                                        <input type="radio" name="delivery_option[23]" id="delivery_option_2" value="2," checked="" />
                                                        <span></span>
                                                    </span>
                                                </div>
                                                <label for="delivery_option_2" className="col-sm-11 delivery-option-2">
                                                <div className="row">
                                                    <div className="col-sm-5 col-xs-12">
                                                    <div className="row">
                                                                                    <div className="col-xs-3">
                                                            <img src="/bos_soucer_demo/img/s/2.jpg" alt="My carrier" /> 
                                                        </div>
                                                                                    <div className="col-xs-9">
                                                        <span className="h6 carrier-name">My carrier</span>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="col-sm-4 col-xs-12">
                                                    <span className="carrier-delay">Delivery next day!</span>
                                                    </div>
                                                    <div className="col-sm-3 col-xs-12">
                                                    <span className="carrier-price">$7.00</span>
                                                    </div>
                                                </div>
                                                </label>
                                            </div>
                                            <div className="row carrier-extra-content">
                                                
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    
                                        <div className="order-options">
                                            <div id="delivery">
                                            <label for="delivery_message">If you would like to add a comment about your order, please write it in the field below.</label>
                                            <textarea rows="2" cols="120" id="delivery_message" name="delivery_message"></textarea>
                                            </div>       
                                        </div>
                                    </div>
                                    <button type="submit" className="continue btn btn-primary float-xs-right" name="confirmDeliveryOption" value="1">
                                    Continue
                                    </button>
                                </form>
                            </div>

                            <div id="hook-display-after-carrier">
                                
                            </div>

                            <div id="extra_carrier"></div>

                        </div>
                    </section>
                    
                    <section id="checkout-payment-step" className="checkout-step -current -reachable js-current-step">
                        <h1 className="step-title h3">
                            <i className="material-icons rtl-no-flip done"></i>
                            <span className="step-number">4</span>
                            Payment
                            <span className="step-edit text-muted"><i className="material-icons edit"></i> Edit</span>
                        </h1>

                        <div className="content">
                            <div style={{display:"none"}} className="js-cart-payment-step-refresh"></div>
                            <div className="payment-options ">
                                <div>
                                    <div id="payment-option-1-container" className="payment-option clearfix">
                                        <span className="custom-radio float-xs-left">
                                            <input className="ps-shown-by-js " id="payment-option-1" data-module-name="ps_checkpayment" name="payment-option" type="radio" required="" />
                                            <span></span>
                                        </span>
                                        <form method="GET" className="ps-hidden-by-js" style={{display:"none"}}>
                                            <button className="ps-hidden-by-js" type="submit" name="select_payment_option" value="payment-option-1" style={{display:"none"}}>
                                                Choose
                                            </button>
                                        </form>
                                        <label for="payment-option-1">
                                            <span>Pay by Check</span>
                                        </label>
                                    </div>
                                </div>

                                <div id="payment-option-1-additional-information" className="js-additional-information definition-list additional-information ps-hidden " style={{display:"none"}}>
                                            <section>
                                                <p>Please send us your check including the following details:
                                                    </p>
                                                    <dl>
                                                        <dt>Amount</dt>
                                                        <dd>$60.50 (tax incl.)</dd>
                                                        <dt>Payee</dt>
                                                        <dd>___________</dd>
                                                        <dt>Send your check to this address</dt>
                                                        <dd>___________</dd>
                                                    </dl>
                                                    <p></p>
                                            </section>

                                </div>
                                
                                <div id="pay-with-payment-option-1-form" className="js-payment-option-form  ps-hidden " style={{display:"none"}}>
                                    <form id="payment-form" method="POST" action="https://demo1.leotheme.com/bos_soucer_demo/en/module/ps_checkpayment/validation">
                                        <button style={{display:"none"}} id="pay-with-payment-option-1" type="submit"></button>
                                    </form>
                                </div>
                                <div>
                                    <div id="payment-option-2-container" className="payment-option clearfix">
                                        <span className="custom-radio float-xs-left">
                                            <input className="ps-shown-by-js " id="payment-option-2" data-module-name="ps_wirepayment" name="payment-option" type="radio" required="" />
                                            <span></span>
                                        </span>
                                        <form method="GET" className="ps-hidden-by-js" style={{display:"none"}}>
                                            <button className="ps-hidden-by-js" type="submit" name="select_payment_option" value="payment-option-2" style={{display:"none"}}>
                                                Choose
                                            </button>
                                        </form>

                                        <label for="payment-option-2">
                                            <span>Pay by bank wire</span>
                                        </label>
                                    </div>
                                </div>

                                <div id="payment-option-2-additional-information" className="js-additional-information definition-list additional-information ps-hidden " style={{display:"none"}}>
                                    <section>
                                        <p>
                                            Please transfer the invoice amount to our bank account. You will receive our order confirmation by email containing bank details and order number.
                                            Goods will be reserved 7 days for you and we'll process the order immediately after receiving the payment.
                                        </p>

                                        <div className="modal fade" id="bankwire-modal" tabindex="-1" role="dialog" aria-labelledby="Bankwire information" aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">×</span>
                                                        </button>
                                                    <h2>Bankwire</h2>
                                                    </div>
                                                    <div className="modal-body">
                                                        <p>Payment is made by transfer of the invoice amount to the following account:</p>
                                                    
                                                        <dl>
                                                            <dt>Amount</dt>
                                                            <dd>$60.50 (tax incl.)</dd>
                                                            <dt>Name of account owner</dt>
                                                            <dd>___________</dd>
                                                            <dt>Please include these details</dt>
                                                            <dd>___________</dd>
                                                            <dt>Bank name</dt>
                                                            <dd>___________</dd>
                                                        </dl>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                </div>
                                
                                <div id="pay-with-payment-option-2-form" className="js-payment-option-form  ps-hidden " style={{display:"none"}}>
                                    <form id="payment-form" method="POST" action="https://demo1.leotheme.com/bos_soucer_demo/en/module/ps_wirepayment/validation">
                                        <button style={{display:"none"}} id="pay-with-payment-option-2" type="submit"></button>
                                    </form>
                                </div>
                            </div>

                            <p className="ps-hidden-by-js" style={{display:"none"}}>
                                By confirming the order, you certify that you have read and agree with all of the conditions below:
                            </p>

                            <form id="conditions-to-approve" method="GET">
                                <ul>
                                    <li>
                                        <div className="float-xs-left">
                                            <span className="custom-checkbox">
                                                <input id="conditions_to_approve[terms-and-conditions]" name="conditions_to_approve[terms-and-conditions]" required="" type="checkbox" value="1" className="ps-shown-by-js" />
                                                <span><i className="material-icons rtl-no-flip checkbox-checked"></i></span>
                                            </span>
                                        </div>
                                        <div className="condition-label">
                                            <label className="js-terms" for="conditions_to_approve[terms-and-conditions]">
                                                I agree to the <a href="https://demo1.leotheme.com/bos_soucer_demo/en/content/3-terms-and-conditions-of-use" id="cta-terms-and-conditions-0">terms of service</a> and <a href="https://demo1.leotheme.com/bos_soucer_demo/en/content/6-aeu-legal-revocation-terms" id="cta-terms-and-conditions-1">revocation terms</a> and will adhere to them unconditionally.
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </form>
                        
                            <section id="order-summary-content" className="page-content page-order-confirmation">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4 className="h4 black">Please check your order before payment</h4>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <h4 className="h4">
                                            Addresses
                                            <span className="step-edit step-to-addresses js-edit-addresses"><i className="material-icons edit"></i> edit</span>
                                        </h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card noshadow">
                                            <div className="card-block">
                                                <h4 className="h5 black addresshead">Your Delivery Address</h4>
                                                Aya fathi<br/>Correct technology<br/>Bani suif Beni-suif<br/>Bani suif, AP 12345<br/>United States<br/>01119681188
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card noshadow">
                                            <div className="card-block">
                                            <h4 className="h5 black addresshead">Your Invoice Address</h4>
                                            Aya fathi<br/>Correct technology<br/>Bani suif Beni-suif<br/>Bani suif, AP 12345<br/>United States<br/>01119681188
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <h4 className="h4">
                                            Shipping Method
                                            <span className="step-edit step-to-delivery js-edit-delivery"><i className="material-icons edit"></i> edit</span>
                                        </h4>

                                        <div className="col-md-12 summary-selected-carrier">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <div className="logo-container">
                                                        <img src="/bos_soucer_demo/img/s/2.jpg" alt="My carrier" />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <span className="carrier-name">My carrier</span>
                                                </div>
                                                <div className="col-md-3">
                                                    <span className="carrier-delay">Delivery next day!</span>
                                                </div>
                                                <div className="col-md-4">
                                                    <span className="carrier-price">$7.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    
                                    <div id="order-items" className="col-md-12">
            
                                        <h3 className="card-title h3">Order items</h3>
                                
                                        <div className="order-confirmation-table">       
                                                <div className="order-line row">
                                                    <div className="col-sm-2 col-xs-3">
                                                        <span className="image">
                                                            <img src="https://demo1.leotheme.com/bos_soucer_demo/298-medium_default/lorem-ipsum.jpg"/>
                                                        </span>
                                                    </div>
                                                <div className="col-sm-4 col-xs-9 details">
                                                    <a href="https://demo1.leotheme.com/bos_soucer_demo/en/nullam-tincidunt/1-6-lorem-ipsum.html#/3-size-l/14-color-blue" target="_blank">              <span>Lorem ipsum</span>
                                                    </a>                        
                                                </div>
                                                <div className="col-sm-6 col-xs-12 qty">
                                                    <div className="row">
                                                    <div className="col-xs-5 text-sm-right text-xs-left">$26.51</div>
                                                    <div className="col-xs-2">1</div>
                                                    <div className="col-xs-5 text-xs-right bold">$26.51</div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="order-line row">
                                                    <div className="col-sm-2 col-xs-3">
                                                        <span className="image">
                                                            <img src="https://demo1.leotheme.com/bos_soucer_demo/304-medium_default/eiusmod-tempor.jpg"/>
                                                        </span>
                                                    </div>
                                                    <div className="col-sm-4 col-xs-9 details">
                                                        <a href="https://demo1.leotheme.com/bos_soucer_demo/en/basics/2-7-eiusmod-tempor.html#/1-size-s/11-color-black" target="_blank">              <span>Eiusmod tempor</span>
                                                        </a>                        
                                                    </div>
                                                    <div className="col-sm-6 col-xs-12 qty">
                                                        <div className="row">
                                                        <div className="col-xs-5 text-sm-right text-xs-left">$26.99</div>
                                                        <div className="col-xs-2">1</div>
                                                        <div className="col-xs-5 text-xs-right bold">$26.99</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                                <hr/>

                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>Subtotal</td>
                                                            <td>$53.50</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Shipping</td>
                                                            <td>$7.00</td>
                                                        </tr>
                                                        <tr className="sub">
                                                            <td>Taxes</td>
                                                            <td>$0.00</td>
                                                        </tr>
                                                        <tr className="font-weight-bold">
                                                            <td><span className="text-uppercase">Total</span> (tax excl.)</td>
                                                            <td>$60.50</td>
                                                        </tr>
                                                    </tbody>
                                                </table>            
                                        </div>
                                    </div>
                                </div>
                            </section>
  
                            <div id="payment-confirmation">
                                <div className="ps-shown-by-js">
                                    <button type="submit" disabled="" className="btn btn-primary center-block">
                                        Order with an obligation to pay
                                    </button>
                                    <article className="alert alert-danger mt-2 js-alert-payment-conditions" role="alert" data-alert="danger">
                                        Please make sure you've chosen a <a href="#checkout-payment-step">payment method</a> and accepted the <a href="#conditions-to-approve">terms and conditions</a>.
                                    </article>
                                </div>
                                <div className="ps-hidden-by-js" style={{display:"none"}}>
                                </div>
                            </div>

                            <div className="modal fade" id="modal">
                                <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                    </button>
                                    <div className="js-modal-content"></div>
                                </div>
                                </div>
                            </div>

                        </div>
                    </section>
            
                </div>
                <div className="col-md-4">

                    <section id="js-checkout-summary" className="card js-cart" data-refresh-url="https://demo1.leotheme.com/bos_soucer_demo/en/cart?ajax=1&action=refresh">
                        <div className="card-block">
                            
                            <h5 className="aeuc_scart"><a href="https://demo1.leotheme.com/bos_soucer_demo/en/cart?action=show">My shopping cart</a></h5>

                            <div className="cart-summary-products">

                                <p>2 items</p>
                                <p>
                                <a href="#" data-toggle="collapse" data-target="#cart-summary-product-list" className="btn btn-outline">show details</a>
                                </p>

                                <div className="collapse" id="cart-summary-product-list">
                                    <ul className="media-list">
                                        <li className="media">
                                            <div className="media-left">
                                                <a href="https://demo1.leotheme.com/bos_soucer_demo/en/nullam-tincidunt/1-6-lorem-ipsum.html#/3-size-l/14-color-blue" title="Lorem ipsum">
                                                <img className="media-object" src="https://demo1.leotheme.com/bos_soucer_demo/298-small_default/lorem-ipsum.jpg" alt="Lorem ipsum"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <span className="product-name">Lorem ipsum</span>
                                                <span className="product-quantity">x1</span>
                                                <span className="product-price float-xs-right">$26.51</span>
                                                
                                                <div className="product-line-info product-line-info-secondary text-muted">
                                                    <span className="label">Size:</span>
                                                    <span className="value">L</span>
                                                </div>
                                                <div className="product-line-info product-line-info-secondary text-muted">
                                                    <span className="label">Color:</span>
                                                    <span className="value">Blue</span>
                                                </div>
                                                    <br/>
                                            </div>

                                        </li>
                                        <li className="media">
                                            <div className="media-left">
                                                <a href="https://demo1.leotheme.com/bos_soucer_demo/en/basics/2-7-eiusmod-tempor.html#/1-size-s/11-color-black" title="Eiusmod tempor">
                                                <img className="media-object" src="https://demo1.leotheme.com/bos_soucer_demo/304-small_default/eiusmod-tempor.jpg" alt="Eiusmod tempor"/>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <span className="product-name">Eiusmod tempor</span>
                                                <span className="product-quantity">x1</span>
                                                <span className="product-price float-xs-right">$26.99</span>
                                                
                                                <div className="product-line-info product-line-info-secondary text-muted">
                                                    <span className="label">Size:</span>
                                                    <span className="value">S</span>
                                                </div>
                                                <div className="product-line-info product-line-info-secondary text-muted">
                                                    <span className="label">Color:</span>
                                                    <span className="value">Black</span>
                                                </div>
                                                <br/>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cart-summary-line cart-summary-subtotals" id="cart-subtotal-products">
                                <span className="label">Subtotal</span>
                                <span className="value">$53.50</span>
                            </div>
                            <div className="cart-summary-line cart-summary-subtotals" id="cart-subtotal-shipping">
                                <span className="label">Shipping</span>
                                <span className="value">$7.00</span>
                            </div>
                                                        
                        </div>

                        <hr className="separator"/>

                        <div className="card-block cart-summary-totals">
                            <div className="cart-summary-line cart-total">
                            <span className="label">Total (tax excl.)</span>
                            <span className="value">$60.50</span>
                            </div>

                            <div className="cart-summary-line">
                            <span className="label sub">Taxes</span>
                            <span className="value sub">$0.00</span>
                            </div>
                        
                        </div>
        

                    </section>
                    
                    <div className="aeuc_cart_custom_text">
                        <p>The order will only be confirmed when you click on the button &#039;Order with an obligation to pay&#039; at the end of the checkout!</p>
                    </div>

                </div>
            </div>
        </section>
      
    </div>
      
</section>

        </>
    )
    
} export default Checkout