import React from 'react';
import "./beercard.css";



function BeerCard(props) {
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
        </li>
    )
};

export default BeerCard; 