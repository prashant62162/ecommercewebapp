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
    };
    function openNav() {
        document.getElementById("mySidepanel").style.width = "50%";
    };
    function closeNav() {
        document.getElementById("mySidepanel").style.width = "0";

    };
    return (
        <>
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
                    <NavLink to="/orders">
                        <div className="header__option">
                            <span className="header__optionLine1">Returns</span>
                            <span className="header__optionLine2">& Orders</span>
                        </div>
                    </NavLink>
                    <NavLink to="/">
                        <div className="header__option">
                            <span className="header__optionLine1">Your</span>
                            <span className="header__optionLine2">Prime</span>
                        </div>
                    </NavLink>
                    <NavLink to="/checkout">
                        <div className="header__optionBasket">
                            <span className="header__cartCount">{basket.length}</span>
                            <ShoppingCartRoundedIcon />
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className="sidepanel__container">
                <div id="mySidepanel" className="sidepanel">
                    <div>what is going on</div>
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                    <div className="sidepanel__heading ">Hello, <br /> {user ? user.email : "Guest"}</div>
                    <NavLink to="/orders">
                        <div className="sidepanel__optionLine">Returns & Orders</div>
                    </NavLink>
                    <NavLink to="/">
                        <div className="sidepanel__optionLine">Your Prime</div>
                    </NavLink>
                    <NavLink to={!user && "/login"}>
                        <div onClick={handleLogin} className="sidepanel__optionLine">{user ? "Sign-out" : "Sign-in"}</div>
                    </NavLink>

                </div>
                <div className="openbtn__container">
                    <button className="openbtn" onClick={openNav}>&#9776;</button>
                    <NavLink to="/">
                        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazonlogo" className="openbtn__container__icon" />
                    </NavLink>
                    <div className="header__search">
                        <input type="text" className="header__searchInput" />
                        <SearchIcon className="header__searchIcon" />
                    </div>
                    <NavLink to="/checkout">
                        <div className="openbtn__header__optionBasket">
                            <span className="header__cartCount">{basket.length}</span>
                            <ShoppingCartRoundedIcon />
                        </div>
                    </NavLink>
                </div>

            </div>

        </>
    )
}

export default Header;
