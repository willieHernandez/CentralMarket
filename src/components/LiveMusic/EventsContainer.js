import React from 'react';
import EventItem from './EventItem';


function EventsContainer(props){
    return(
        <div className="events-container">
            {props.eventsToShow.map( (event) => (
                <EventItem eventDate={event.eventDate} openingBand={event.openingBand} closingBand={event.closingBand} />
            ))}
            
                
        </div>
       
    )
}


export default EventsContainer;