import { useContext } from "react";
import ReactDOM from 'react-dom';
import { OpenSignInModalContext } from "../../Context/Open_SignIn_modal";

function Sign_in(){
    const {openSignInModalContext, setOpenSignInModalContext} = useContext(OpenSignInModalContext)


    return ReactDOM.createPortal(
        <>
            <div className={`modal leo-quicklogin-modal fade ${openSignInModalContext ? 'in' : ''}`}
                tabIndex="-1"
                role="dialog"
                style={{ visibility: openSignInModalContext ? 'block' : 'none' }}>
        
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" onClick={()=>setOpenSignInModalContext(false)} data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        
                        <div className="modal-body">
                            <div className="leo-quicklogin-form row">
                            <div className="leo-form leo-login-form col-sm-6 full-width leo-form-active">
                                <h3 className="leo-login-title">			
                                    <span className="title-both">
                                        Existing Account Login
                                    </span>
                                
                                    <span className="title-only">
                                        Login to your account
                                    </span>		
                                </h3>
                                <form className="lql-form-content leo-login-form-content" action="#" method="post">
                                    <div className="form-group lql-form-mesg has-success">					
                                    </div>			
                                    <div className="form-group lql-form-mesg has-danger">					
                                    </div>
                                    <div className="form-group lql-form-content-element">
                                        <input type="email" className="form-control lql-email-login" name="lql-email-login" required="" placeholder="Email Address"/>
                                    </div>
                                    <div className="form-group lql-form-content-element">
                                        <input type="password" className="form-control lql-pass-login" name="lql-pass-login" required="" placeholder="Password"/>
                                    </div>
                                    <div className="form-group row lql-form-content-element">				
                                        <div className="col-xs-6">
                                            <input type="checkbox" className="lql-rememberme" name="lql-rememberme"/>
                                            <label className="form-control-label"><span>Remember Me</span></label>
                                        </div>				
                                        <div className="col-xs-6 text-sm-right">
                                            <a role="button" href="#" className="leoquicklogin-forgotpass">Forgot Password ?</a>
                                        </div>
                                    </div>
                                    <div className="form-group text-right">
                                        <button type="submit" className="form-control-submit lql-form-bt lql-login-bt btn btn-primary">			
                                            <span className="leoquicklogin-loading leoquicklogin-cssload-speeding-wheel"></span>
                                            <i className="leoquicklogin-icon leoquicklogin-success-icon material-icons"></i>
                                            <i className="leoquicklogin-icon leoquicklogin-fail-icon material-icons"></i>
                                            <span className="lql-bt-txt">					
                                                Login
                                            </span>
                                        </button>
                                    </div>
                                    <div className="form-group lql-callregister">
                                        <a role="button" href="#" className="lql-callregister-action">No account? Create one here ?</a>
                                    </div>
                                </form>
                    <div className="leo-resetpass-form">
                        <h3>Reset Password</h3>
                        <form className="lql-form-content leo-resetpass-form-content" action="#" method="post">
                            <div className="form-group lql-form-mesg has-success">					
                            </div>			
                            <div className="form-group lql-form-mesg has-danger">					
                            </div>
                            <div className="form-group lql-form-content-element">
                                <input type="email" className="form-control lql-email-reset" name="lql-email-reset" required="" placeholder="Email Address"/>
                            </div>
                            <div className="form-group">					
                                <button type="submit" className="form-control-submit lql-form-bt leoquicklogin-reset-pass-bt btn btn-primary">			
                                    <span className="leoquicklogin-loading leoquicklogin-cssload-speeding-wheel"></span>
                                    <i className="leoquicklogin-icon leoquicklogin-success-icon material-icons"></i>
                                    <i className="leoquicklogin-icon leoquicklogin-fail-icon material-icons"></i>
                                    <span className="lql-bt-txt">					
                                        Reset Password
                                    </span>
                                </button>
                            </div>
                            
                        </form>
                    </div>
                </div>
                
                <div className="leo-form leo-register-form col-sm-6 leo-form-inactive full-width">
                    <h3 className="leo-register-title">
                        New Account Register
                    </h3>
                    <form className="lql-form-content leo-register-form-content" action="#" method="post">
                        <div className="form-group lql-form-mesg has-success">					
                        </div>			
                        <div className="form-group lql-form-mesg has-danger">					
                        </div>
                        <div className="form-group lql-form-content-element">
                            <input type="text" className="form-control lql-register-firstname" name="lql-register-firstname" required="" placeholder="First Name"/>
                        </div>
                        <div className="form-group lql-form-content-element">
                            <input type="text" className="form-control lql-register-lastname" name="lql-register-lastname" required="" placeholder="Last Name"/>
                        </div>
                        <div className="form-group lql-form-content-element">
                            <input type="email" className="form-control lql-register-email" name="lql-register-email" required="" placeholder="Email Address"/>
                        </div>
                        <div className="form-group lql-form-content-element">
                            <input type="password" className="form-control lql-register-pass" name="lql-register-pass" required="" placeholder="Password"/>
                        </div>
                        <div className="form-group text-right">				
                            <button type="submit" className="form-control-submit lql-form-bt lql-register-bt btn btn-primary">			
                                <span className="leoquicklogin-loading leoquicklogin-cssload-speeding-wheel"></span>
                                <i className="leoquicklogin-icon leoquicklogin-success-icon material-icons"></i>
                                <i className="leoquicklogin-icon leoquicklogin-fail-icon material-icons"></i>
                                <span className="lql-bt-txt">					
                                    Create an Account
                                </span>
                            </button>
                        </div>
                        <div className="form-group lql-calllogin">
                            <div>Already have an account?</div>
                            <a role="button" href="#" className="lql-calllogin-action">Log in instead</a>
                            Or
                            <a role="button" href="#" className="lql-calllogin-action lql-callreset-action">Reset password</a>
                        </div>
                    </form>
                </div>
                </div>


                        </div> 
                        <div className="modal-footer">
                                
                        </div>
                        
                    </div>
                </div>
            
            </div>
        </>,
    document.getElementById('modal-root') 
    )
}export default Sign_in