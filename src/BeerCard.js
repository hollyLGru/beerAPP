import React,  { useState } from 'react';
import "./beercard.css";




function BeerCard(props) {
const [likes, setLikes] = useState(0);
const [isClicked, setIsClicked] = useState(false);

const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
};

    return(
    <li>
        <img src={props.image_url} alt=""></img>
        <h3> 
            {props.name} <span> {props.first_brewed}</span> 
        </h3>
        <h4>{props.tagline}</h4>
        <p>
            <span>{props.abv}</span>
            {props.description}
        </p>
        <br></br>
        <button className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>
            <span className="likes-counter">{ `Like | ${likes}` }</span>
        </button>
    </li>
    )
};

export default BeerCard; 