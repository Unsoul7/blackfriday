import React from "react";
import cart from '../assets/cart.png'
import '../styles/nav.css'
import { Link } from "react-router-dom";
import logo from "../assets/logo-me.svg"

export const Navbar = () => {
    return (
        <nav>
            <img id="logo" src={logo} alt="" />
            <div>
                <Link className="nav-btn" to='#'>HOME</Link>
                <Link className="nav-btn" to='#'>SHOP</Link>
                <Link className="nav-btn" to='#'>ABOUT</Link>
                <Link className="nav-btn" to='#'>CONTACT</Link>
            </div>
            <img src={cart} alt="" />
        </nav>
    )
}