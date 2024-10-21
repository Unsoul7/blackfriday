import React, { useState } from "react";
import { Hero } from "../components/Hero";
import '../styles/homepage.css'
import { Link } from "react-router-dom";
import { Product } from "../components/Product";
import { Footer } from "../components/Footer";

export const Homepage = () => {


    return (
        <div className="main">
            <Hero />
            <section id="homepage-ad1">
                <div>
                    <h2>Up to 50% Off</h2>
                    <h1>Grab Your Favorites Before They're Gone</h1>
                    <p>You can trust us to bring you the latest technology at unbeatable prices. Don’t miss this limited-time opportunity to upgrade your audio game. Grab your perfect pair now!</p>
                    <Link id="ad1-btn" to='#'>SHOW NOW</Link>
                </div>
                <img src="https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/headphone-01.png" />
            </section>

            <section id="homepage-ad2">
                <div>
                    <h2>Black Friday Exclusive</h2>
                    <h1>Save big: <span>Up to 75% Off</span> on Headphones</h1>
                    <p>You can trust us to bring you the latest technology at unbeatable prices. Don’t miss this limited-time opportunity to upgrade your audio game. Grab your perfect pair now!</p>
                    <Link id="ad1-btn" to='#'>SHOW NOW</Link>
                </div>
                <img src="https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/headphones-img-02.jpg" alt="" />
                <img src="https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/image.jpg" alt="" />
            </section>

            <div id="homepage-ad3">
                <div>
                    <h2>Unbelievable Discounts Await You</h2>
                    <h1>Black Friday Madness is Here!</h1>
                    <div></div>
                </div>
                <div className="pro-container">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>

            <div id="homepage-ad4">
                <h2>Limited-Time Offer
                </h2>
                <h1>Save Big: Up to <span>60% Off</span> on All Headphones</h1>
                <p>Act Fast Before They're Gone</p>
                <Link id="ad4-btn" to='#'>SHOP NOW</Link>
            </div>

            <Footer/>

            <div className="copyright-section">
                <p>Copyright Independent | Powered by RotCode90 Developer</p>
                <div>
                    <Link className="nav-btn" to=''>HOME</Link>
                    <Link className='nav-btn' to=''>SHOP</Link>
                    <Link className="nav-btn" to=''>ABOUT</Link>
                    <Link className="nav-btn" to=''>CONTACT</Link>
                </div>
            </div>
        </div>
    )
}