import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { NavLink } from 'react-router-dom';
import { useStateValue } from '../Store/StateProvider';
import { auth } from '../firebase';
function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleLogin = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <NavLink to="/">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazonlogo" className="header__icon" />
            </NavLink>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <NavLink to={!user && "/login"}>
                    <div onClick={handleLogin} className="header__option">
                        <span className="header__optionLine1">Hello,{user ? user.email : "Guest"}</span>
                        <span className="header__optionLine2">{user ? "Sign-out" : "Sign-in"}</span>
                    </div>
                </NavLink>

                <div className="header__option">
                    <span className="header__optionLine1">Returns</span>
                    <span className="header__optionLine2">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLine1">Your</span>
                    <span className="header__optionLine2">Prime</span>
                </div>
                <NavLink to="/checkout">
                    <div className="header__optionBasket">
                        <span className="header__cartCount">{basket.length}</span>
                        <ShoppingCartRoundedIcon />
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Header;
