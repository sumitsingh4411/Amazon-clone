import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase"
function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
      if (user) {
        auth.signOut();
      }
    }
    return (
        <div className="header">
        <Link to="/">
           <img
           className="header_logo"
               src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
               alt=""
           />
        </Link>
        <div className="header_search">
        <input type="text" className="header_input"/>
        <SearchIcon className="header_searchicon"/>
        </div>
        <div className="header_nav">
            <Link className="header_link" to="/login">
           <div className="header_option">
           <Link to={!user && '/login'}>
           <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
           </Link>
           </div>
            </Link>
            <Link className="header_link" to="/">
           <div className="header_option">
               <span className="headeroption_one">Returns</span>
               <span className="headeroption_two">& Orders</span>
           </div>
            </Link>
            <Link className="header_link" to="/">
           <div className="header_option">
               <span className="headeroption_one">Your</span>
               <span className="headeroption_two">Prime</span>
           </div>
            </Link>
           <Link to="/checkout" className="header_link">
           <div className="header_checkout">
           <ShoppingBasketIcon/>
           <span className="headeroption_two headerbasket_count">{basket?.length}</span>
           </div>
           </Link> 
        </div>
        </div>
    )
}

export default Header
