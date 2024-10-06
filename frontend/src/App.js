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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={myStore}>
      <Header />
      
      <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/products/:category_id"} component={Products} />
      <Route exact path={"/mycart"} component={MyCart} />
      <Route exact path={"/product_details/:product_id"} component={ProductDetails} />
      <Route exact path={"/product"} component={Product} />

      </Switch>
      <Footer />
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
