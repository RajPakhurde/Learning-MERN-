import React from "react";

const Card = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.img} alt={props.name + "image"} />
            <p>{props.tel}</p>
            <p>{props.email}</p>
        </div>
    );
}

export default Card;