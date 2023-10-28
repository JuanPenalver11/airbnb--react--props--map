import React from "react";
import Collage from "../img/collage.jpg``"

function Hero(){
    return (
        <section className="hero">
            
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
            <img src={Collage} className="hero--img" alt=""/>
        </section>
    )
}

export default Hero;