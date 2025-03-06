import logo from './logo.svg';
import './App.css';
import Home from "../src/pages/homePage/home"
import Products from './pages/productsOfCategory/Products';
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
import Header from './component/Home/Header';
import Footer from './component/Home/Footer';
import MyCart from './pages/cart/MyCart';
import { Provider } from 'react-redux';
import myStore from './Store/Store';
import ProductDetails from './pages/productDetails/ProductDetails';
import Product from './pages/productDetails/Product';
import { OpenModalContext } from './Context/Open_modal';
import { useEffect, useState } from 'react';
import Sign_in from './pages/sign_in/sign_in';
import { OpenSignInModalContext } from './Context/Open_SignIn_modal';
import { LoggedInContext } from './Context/loggedUser';
import { AuthProvider } from './Context/AuthContext';

function App() {
  const [openModalContext, setOpenModalContext] = useState(false)
  const [openSignInModalContext, setOpenSignInModalContext] = useState(false)
  const [contextLoggedIn, setContextLoggenIn] = useState("");

  useEffect(()=>{
    openModalContext? document.body.classList.add("modal-open") :document.body.classList.remove("modal-open")
  })
  return (
    <div className="App">
      <LoggedInContext.Provider value={{contextLoggedIn, setContextLoggenIn}}>

      <OpenSignInModalContext.Provider value={{openSignInModalContext,setOpenSignInModalContext}} >

      <OpenModalContext.Provider value={{openModalContext,setOpenModalContext}} >
      <BrowserRouter>
      <AuthProvider>
      <Provider store={myStore}>
      <Header />
      
      <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/products/:category_id"} component={Products} />
      <Route exact path={"/mycart"} component={MyCart} />
      <Route exact path={"/product_details/:product_id"} component={ProductDetails} />
      <Route exact path={"/product"} component={Product} />

      </Switch>
      <Sign_in/>
      <Footer />
      </Provider>
      </AuthProvider>

      </BrowserRouter>
      </OpenModalContext.Provider>
      </OpenSignInModalContext.Provider>
    </LoggedInContext.Provider>
    </div>
  );
}

export default App;
