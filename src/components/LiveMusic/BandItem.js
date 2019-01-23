import React from 'react';

function BandItem(props){

    return(
        <div className="event-overview-band">
            <img className="band-item-pic" src={props.bandPicSrc} alt="Band Logo"></img>
            <p className="band-item-name">{props.bandName}</p>
        </div>
    )
}

export default BandItem;