import React, {useContext} from 'react';
import NavIcon from './NavIcon';
import { Link } from "react-router-dom";
import MainContext from '../Context/Main/MainContext';

const Navbar = () => {
    const mainContext = useContext(MainContext);
    const { user, basket, isLogin } = mainContext;

    return (
        <nav className="navbar">
            {/* Nav logo */}
            <Link to="/">
                <NavIcon className="nav-logo" />
            </Link>

            {/* Left links */}
            <div style={{display: "flex", flexDirection: "row", color: "white"}}>
                <div className="nav-links to-hide mr-2">
                    <p>Hello</p>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <i className="fa-solid fa-location-dot mc-1 mr-1" style={{color: "white"}}></i>
                        <p style={{fontWeight: "bold"}}>Select your address</p>
                    </div>
                </div>
            </div>

            {/* Search bar */}
            <div class="nav-search-container to-hide">
                <input type="text" className="navbar-search" />
                <i className="fa-solid fa-magnifying-glass nav-search-icon"></i>
            </div>
        
            {/* Right links */}
            <div style={{display: "flex", flexDirection: "row", color: "white"}}>
                
                {!isLogin ? 
                    <Link to="/login" style={{textDecoration: "none", color: "white"}}>
                        <div className="nav-links to-hide mr-2">
                            <p>Hello, sign in</p>
                            <p style={{fontWeight: "bold"}}>Acccount &amp; Lists</p>
                        </div>
                    </Link>
                    :
                    <Link to="/user" style={{textDecoration: "none", color: "white"}}>
                        <div className="nav-links to-hide mr-2">
                            <p>Hello, {user.username}</p>
                            <p style={{fontWeight: "bold"}}>My Account</p>
                        </div>
                    </Link>
                }

                <div className="nav-links to-hide mr-2">
                    <p>Returns</p>
                    <p style={{fontWeight: "bold"}}>&amp; Orders</p>
                </div>

                <Link to="/checkout">
                    <div className="nav-links mr-2">
                        <p 
                            style={{fontWeight: "bolder", justifyContent: "center", alignItems: "center", color: "orange", fontSize: "1.2em", marginLeft: "5px"}}
                        >
                           {basket.length}  
                        </p>
                        <i className="fa-solid fa-cart-shopping nav-logo-shopping-cart" 
                            style={{color: "white", fontSize: "20px"}}
                        ></i>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;