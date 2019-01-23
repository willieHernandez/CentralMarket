import React from 'react';



function BeerItem(props){
    return(
        <div className="beer-item">
            <p className="beer-item-name">{props.beerName}</p>
            <img className="beer-item-picture" src={props.beerPicture} alt={props.beerName} />
            <p className="beer-item-caption">Number of tickets: {props.numberOfTickets}</p>
        </div>
    )
}


export default BeerItem;