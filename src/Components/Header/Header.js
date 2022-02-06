import React from 'react';
import { Link } from "react-router-dom";
import useFirebase from '../../Hooks/useFirebase';
import logo from '../images/icons/logo.png'
import './header.css'
const Header = () => {
    const {user} = useFirebase();
    console.log("header user",user)
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
                            <button className="main-btn">BOOK</button>
                        </Link>
                    </li>
                    <li className="userDsiplayName">{user.displayName}</li> 
                </ul>
            </nav>
        </div>
    );
};

export default Header;