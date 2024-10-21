import React, { useState } from "react";
import cart from '../assets/cart.png'
import '../styles/nav.css'
import { Link } from "react-router-dom";
import logo from "../assets/logo-me.svg"
import menu from '../assets/menu.png'
import close from '../assets/close.png'

export const Navbar = () => {
    const [Nav, setNav] = useState('hidden')

    const openNav = () => {
        if (Nav == '') {
            setNav('hidden')
        }else{
            setNav('')
        }
    }

    return (
        <nav>
            <img id="logo" src={logo} alt="" />
            <img className="menu-btn" onClick={() => {openNav()}} src={menu} alt="" />
            <div className={Nav}>
                <Link className="nav-btn" to='#'>HOME</Link>
                <Link className="nav-btn" to='#'>SHOP</Link>
                <Link className="nav-btn" to='#'>ABOUT</Link>
                <Link className="nav-btn" to='#'>CONTACT</Link>
            </div>
            <img src={cart} alt="" />
        </nav>
    )
}