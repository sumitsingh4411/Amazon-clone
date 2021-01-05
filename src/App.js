import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from "./Home"
import CheckoutPage from './CheckoutPage';
import Login from './Login';
import { useEffect } from "react";
import {auth} from "./firebase"
import { useStateValue } from "./StateProvider";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    
    auth.onAuthStateChanged((authUser) => {
          if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
    <Switch>
    <Route path="/checkout">
      <Header/>
      <CheckoutPage/>
    </Route>
    <Route path="/login">
       <Login/>
    </Route>
     <Route path="/">
     <Header/>
     <Home/>
     </Route>
    </Switch>
    </div>
  );
}

export default App;
