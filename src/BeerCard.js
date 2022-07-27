import React, { useState} from 'react';
import "./beercard.css";

function BeerCard(props) {
const [like, setLike] = useState(false);
const results = useState(false);
// const like = results[0];
// const setLike = results[1];
console.log(results)

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
        <p>

        </p>
        <button onClick={() => setLike(!like)} >
            {like ? 'UnLiked!' : 'LIKE ME!'}
        </button>

    </li>
    )
    
};

export default BeerCard; 