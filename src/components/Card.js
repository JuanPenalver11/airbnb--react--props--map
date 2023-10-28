import React from "react";


function Card(props) {

    let condition = ""

    if (props.openSpots === 0 ){
        condition = "SOLD OUT"
    } else if (props.location === "Online"){
        condition = "Online"
    }
  return (
    <div className="card">
        {condition && <div className="card--condition">{condition }</div>}
      <img src={`../img/${props.coverImg}`} alt="" />
      <div className="card--status">
        <span><i class="fa-solid fa-heart"></i></span>
        <span>{props.stats.rating}</span>
        <span className="grey">({props.stats.reviewCount}) • </span>
        <span className="grey">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
