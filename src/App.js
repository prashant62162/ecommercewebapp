import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from './Component/Checkout';
import Login from './Component/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './Store/StateProvider';
import Payment from './Component/Payment';
import Footer from './Component/Footer';
import Orders from './Component/Orders';
import ProductDetail from './Component/ProductDetail';


function App() {
  const [{ basket, user, product_d }, dispatch] = useStateValue();


  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The user is", authUser)
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  return (
    < BrowserRouter >
      <div className="App">

        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Payment />
            <Footer />
          </Route>
          <Route exact path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route exact path="/product/:product_d.id">
            <Header />
            {product_d ? <ProductDetail /> : <Home />
            }
            <Footer />
          </Route>

          <Route exact path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>

      </div>
    </BrowserRouter >
  );
}

export default App;
