import { useContext, useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { OpenSignInModalContext } from "../../Context/Open_SignIn_modal";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { filterUserByEmail, getAllUsers } from "../../Store/Actions/userAction";
import { AuthContext } from "../../Context/AuthContext";
import { LoggedInContext } from "../../Context/loggedUser";

function Sign_in(){
    const {openSignInModalContext, setOpenSignInModalContext} = useContext(OpenSignInModalContext)
    const [activeForm,setActiveForm]  = useState('login')
    const users = useSelector((state) => state.combineUsers.users);
    const dispatch = useDispatch()
    
    // register
  const [signedUp, setSignedUp] = useState(false);
  
  const [userRegister, setUserRegister] = useState({
    username: "",
    email: "",
    password: "",
  });
  //for show password
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("") 
  const [confirm, setConfirm] = useState("") 

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  
  // please enter a valid email
  //messages
  const [errosRegister, setErrorsRegister] = useState({
    usernameError: "",
    emailError: "",
    passwordError: "",
  });

  const [validRegister, setValidRegister] = useState({
    usernameError: true,
    email: true,
    password: true,
  });

  
  const changeUserRegister = (e) => {
    
    if (e.target.name === "email") {
      
      const emailRegex = /^[a-zA-Z0-9_]+@[a-zA-Z0-9]+[.][a-zA-Z]+$/;
      setValidRegister({
        ...validRegister,
        email: emailRegex.test(e.target.value),
      });

      setUserRegister({
        ...userRegister,
        email: e.target.value,
      });
      setErrorsRegister((prevErrors) => ({
        ...prevErrors,
        emailError:
          e.target.value.length === 0
            ? "This Field Is Required"
            : !emailRegex.test(e.target.value)
            ? "Please enter a valid email"
            : users?.some((user) => user.email === e.target.value)
            ? "This email is already signed up before"
            : "",
      }));

    } 
    else if (e.target.name === "password") {
      const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/; 
      setValidRegister({
        ...validRegister,
        password: passRegex.test(e.target.value),
      });
      setUserRegister({
        ...userRegister,
        password: e.target.value,
      });
      setErrorsRegister({
        ...errosRegister,
        passwordError:
          e.target.value.length === 0
            ? "This Field Is Required"
            : !validRegister.password &&
              "please enter at least 8 characters containes special characters",
      });
    } else if (e.target.name == "username" ) {
      const nameRegex = /^[a-zA-Z0-9_]{2,}$/;
      setUserRegister({
        ...userRegister,
        username: e.target.value,
      });
      setValidRegister({
        ...validRegister,
        username: nameRegex.test(e.target.value),
      });
      setErrorsRegister({
        ...errosRegister,
        usernameError:
          e.target.value.length == 0
            ? "This Field Is Required"
            : e.target.value.length < 3
            ? "Enter at least three characters"
            : !validRegister.username && "please enter a valid name",
      });
    } else {
      setUserRegister({
        ...userRegister,
      });

      setErrorsRegister({
        ...errosRegister,
        
      });
    }
  };
  
   useEffect(() => {
    dispatch(getAllUsers())
    
   }, [userRegister.email]);
  const submitRegister = async (e) => {
    e.preventDefault();

    if (
      !errosRegister.emailError ||
      !errosRegister.usernameError ||
      !errosRegister.passwordError
          ) {
    //   e.preventDefault();
      const newUser = {
        username: userRegister.username,
        email: userRegister.email,
        password: userRegister.password,
      };
      try {
      const response = await axios.post(
        "http://127.0.0.1:8000/accounts/register/",
        newUser
      );
      console.log(response);
      if (response.status === 201) {
        
        // localStorage.setItem(userRegister.email, JSON.stringify(userRegister))
        setSignedUp(true);
        setOpenSignInModalContext(false)

      }
    }catch (error) {
      console.log(error)
    //   console.log(error.response.data.email[0]);

    //   if(error.response.data.email[0]  === 'user with this email already exists.') {
    //     setError(error.response.data.email[0])
    //   }
     
    }
    }
  };
//   end register

//login
  const authContext = useContext(AuthContext);

  const [loginError, setLoginError] = useState("") 

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    usernameError: "",
    passwordError: "",
  });

  const [valid, setValid] = useState({
    username: true,
    password: true,
  });

  const changeUserData = (e) => {
    if (e.target.name === "email") {
      const emailRegex = /^[a-zA-Z0-9_]+@[a-zA-Z0-9]+[.][a-zA-Z]+$/;
      // const nameRegex = /^[a-zA-Z0-9_]{2,}$/;
      setValid({
        ...valid,
        username:
          emailRegex.test(e.target.value) ,
      });

      setUserData({
        ...userData,
        username: e.target.value,
      });
      setErrors({
        ...errors,
        usernameError:
          e.target.value.length == 0
            ? "This Field Is Required"
            : !valid.email && "please enter a valid email or username",
      });
    } else if (e.target.name === "password") {
      const passRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/; ///[\D]*.{8,}/;
      
      setValid({
        ...valid,
        password: passRegex.test(e.target.value),
      });
      setUserData({
        ...userData,
        password: e.target.value,
      });
      setErrors({
        ...errors,
        passwordError:
          e.target.value.length === 0
            ? "This Field Is Required"
            : !valid.password &&
              "please enter at least 8 characters containes special characters",
      });
    }
  };
  const submitData = async (e) => {
    e.preventDefault();
    
            try {
              const response = await axios.post(
                "http://127.0.0.1:8000/accounts/login/",
                userData
              );
              console.log(response)
              console.log(response.data.user);
              console.log(response.status);
              
              if (response.status === 200) {
                // authContext.login(response.data.jwt, response.data.user);
                localStorage.setItem("token", response.data.jwt);
                localStorage.setItem("user", JSON.stringify(response.data.user));
                // response.data.user.email_verified && setConfirm('Your Email Verified successfully')

                authContext?.login(response?.data?.jwt, response?.data?.user);
                setOpenSignInModalContext(false)
              }
              
            } catch (error) {
              console.log(error)
              console.log(error.response.data.detail);

              if(error.response.data.detail  === 'User not found!') {
                setError(error.response.data.detail)
              }
              if(error.response.data.detail=== 'Email not verified! Please verify your email.'){
                setError(error.response.data.detail)
              }
              
            }

};
//end login

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
                                <div className={`leo-form leo-login-form col-sm-6 full-width ${activeForm=="login" || activeForm=="reset"?"leo-form-active": "leo-form-inactive"}`}>
                                    <h3 className="leo-login-title">			
                                        <span className="title-both">
                                            Existing Account Login
                                        </span>
                                    
                                        <span className="title-only">
                                            Login to your account
                                        </span>		
                                    </h3>
                                   {/* login */}
                                    <form className="lql-form-content leo-login-form-content"
                                    onSubmit={(e) => submitData(e)}
                                    >
                                        <div className="form-group lql-form-mesg has-success">					
                                        </div>			
                                        <div className="form-group lql-form-mesg has-danger">					
                                        </div>
                                        <div className="form-group lql-form-content-element">
                                            <input type="email" className="form-control lql-email-login"
                                             name="email"
                                             onChange={(e) => changeUserData(e)}
                                             error={errors.usernameError}
                                             required="" placeholder="Email Address"/>
                                             {errors.usernameError && (  
                                                <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                                                    {errors.usernameError}
                                                </p>)}
                                        </div>
                                        <div className="form-group lql-form-content-element">
                                            <input type="password" className="form-control lql-pass-login"
                                             onChange={(e) => changeUserData(e)}
                                             error={errors.passwordError}
                                             name="password" required="" placeholder="Password"/>
                                             {errors.passwordError && (  
                                                <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                                                    {errors.passwordError}
                                                </p>)}
                                        </div>
                                        <div className="form-group row lql-form-content-element">				
                                            <div className="col-xs-6">
                                                <input type="checkbox" className="lql-rememberme" name="lql-rememberme"/>
                                                <label className="form-control-label"><span>Remember Me</span></label>
                                            </div>				
                                            <div className="col-xs-6 text-sm-right">
                                                <a role="button" onClick={()=>setActiveForm("reset")} className="leoquicklogin-forgotpass">Forgot Password ?</a>
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
                                            <a role="button" onClick={()=>setActiveForm("register")} className="lql-callregister-action">No account? Create one here ?</a>
                                        </div>
                                    </form>
                        <div className="leo-resetpass-form" style={{display: activeForm=="reset"? "block":"none"}}>
                            <h3>Reset Password</h3>
                        {/* reset password */}
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
                    
                                <div className={`leo-form leo-register-form col-sm-6 ${activeForm=="register"?"leo-form-active": "leo-form-inactive"} full-width`}>
                                    <h3 className="leo-register-title">
                                        New Account Register
                                    </h3>
                                    {/* register */}
                                    <form className="lql-form-content leo-register-form-content" onSubmit={(e) => submitRegister(e)}>
                                        <div className="form-group lql-form-mesg has-success">					
                                        </div>			
                                        <div className="form-group lql-form-mesg has-danger">					
                                        </div>
                                        <div className="form-group lql-form-content-element">
                                            <input type="text" className="form-control lql-register-firstname"
                                             name="username"
                                             onChange={(e) => changeUserRegister(e)}
                                            error={errosRegister.usernameError}
                                            placeholder="User Name"/>
                                            {errosRegister.usernameError && (  
                                                <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                                                    {errosRegister.usernameError}
                                                </p>
                                            )}
                                        </div>
                                        {/* <div className="form-group lql-form-content-element">
                                            <input type="text" className="form-control lql-register-lastname" name="lastname"  placeholder="Last Name"/>
                                        </div> */}
                                        <div className="form-group lql-form-content-element">
                                            <input type="email" className="form-control lql-register-email"
                                             name="email" 
                                             onChange={(e) => changeUserRegister(e)}
                                            error={errosRegister.emailError}
                                            placeholder="Email Address"/>
                                            {errosRegister.emailError && ( 
                                                <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                                                    {errosRegister.emailError}
                                                </p>
                                            )}
                                        </div>
                                        <div className="form-group lql-form-content-element">
                                            <input type="password" className="form-control lql-register-pass" 
                                            name="password" 
                                            onChange={(e) => changeUserRegister(e)}
                                            error={errosRegister.passwordError}
                                            placeholder="Password"/>
                                            {errosRegister.passwordError && (  
                                                <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                                                    {errosRegister.passwordError}
                                                </p>
                                            )}
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
                                            <div> Already have an account? </div>
                                            <a role="button"  onClick={()=>setActiveForm("login")} className="lql-calllogin-action ">Log in instead </a>
                                            Or
                                            <a role="button" onClick={()=>setActiveForm("reset")} className="lql-calllogin-action lql-callreset-action"> Reset password</a>
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