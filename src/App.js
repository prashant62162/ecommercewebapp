import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Component/Checkout';
import Login from './Component/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './Store/StateProvider';

function App() {
  const [{ }, dispatch] = useStateValue();


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
    < Router >
      <div className="App">

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
