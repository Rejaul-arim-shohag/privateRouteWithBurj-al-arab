import React from 'react';
import { Link } from "react-router-dom";
import logo from '../images/icons/logo.png'
import './header.css'
const Header = () => {
    return (
        <div className="header">
            <nav className="nav">
                <ul className="nav-ul">
                    <li>
                        <Link to="/home">
                            <img className="logo" src={logo} alt="" />
                        </Link>
                    </li>
                    <li><Link to="/home">HOME</Link> </li>
                    <li><Link to="/login">LOGIN</Link> </li>
                    <li>
                        <Link to="/bookNow">
                            <button className="bookNowBtn">BOOK</button>
                        </Link> 
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;