import React from "react";
import airbnbLogo from "../img/icons8-airbnb-100.png";


function Nav(){
    return(
        <nav>
           <img src={airbnbLogo}  alt="" className="nav--logo"/>
           <h3 className="nav--title">airbnb</h3>
        </nav>

    )
}

export default Nav; 