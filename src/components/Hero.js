import React,{useState} from "react";

import { Navbar } from "./Navbar";
import '../styles/hero.css'

export const Hero = () => {
    const [days, setDays] = useState()
    const [hours, sethours] = useState()
    const [minutes, setminutes] = useState()
    const [seconds, setseconds] = useState()
    
    // Set the date we're counting down to
    const countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();
    
    // Update the countdown every 1 second
    const countdownFunction = setInterval(function () {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the difference between now and the countdown date
        const distance = countdownDate - now;

        // Time calculations for days, hours, minutes, and seconds
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
        sethours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        setminutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
        setseconds(Math.floor((distance % (1000 * 60)) / 1000))

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(countdownFunction);
            // document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);


    return(
        <div className="hero-section">
            <Navbar/>
            <div className="main-headings">
                <h2>Hurry, Black Friday is Almost Here!</h2>
                <h1>Time Left Until Our <span>Biggest Sale of the Year Begins</span></h1>
                <a href="#">SET REMINDER</a>
            </div>
            <div className="countdown">
                <div className="c-container" id="day">
                    <h1>{days}</h1>
                    <p>DAYS</p>
                </div>
                <div className="c-container" id="hours">
                    <h1>{hours}</h1>
                    <p>HOURS</p>
                </div>
                <div className="c-container" id="minutes">
                    <h1>{minutes}</h1>
                    <p>MINUTES</p>
                </div>
                <div className="c-container" id="seconds">
                    <h1>{seconds}</h1>
                    <p>SECONDS</p>
                </div>
            </div>
        </div>
    )
}