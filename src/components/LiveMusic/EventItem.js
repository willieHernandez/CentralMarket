import React from 'react';
import BandItem from './BandItem';

function EventItem(props){

    return(
        <div className="event-overview-item">
            <div className="event-overview-date">{props.eventDate}</div>
            <BandItem bandPicSrc={props.openingBand.bandPicSrc} bandName={props.openingBand.bandName}  />
            <BandItem bandPicSrc={props.closingBand.bandPicSrc} bandName={props.closingBand.bandName}  />
        </div>
    )
}
 
export default EventItem;