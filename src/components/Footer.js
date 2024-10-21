import React from "react";
import { Link } from "react-router-dom";

export const Footer = ( ) => {
    return(
        <footer>
            <h2>Black Friday Sale</h2>
            <h1>Save Big: Up to <span>60% Off</span> on All Products</h1>
            <p>Don’t miss this exclusive opportunity to embark on a journey of unbeatable savings and cutting-edge technology. It’s time to secure the best deals and upgrade your experience, so seize the moment and start shopping now!</p>
            <Link id="footer-ad-btn" to='#'>SHOP NOW</Link>
        </footer>
    )
}