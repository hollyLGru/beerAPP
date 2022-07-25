import React,  { useState } from 'react';
import "./beercard.css";

function BeerCard(props) {
const [liked, setLiked] = useState(true);

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
        
        <button onClick={() => {
          console.log('click');
          liked ? setLiked(false) : setLiked(true);
          }}>
            ❤ 
        </button>
    </li>
    )
    
};

export default BeerCard; 