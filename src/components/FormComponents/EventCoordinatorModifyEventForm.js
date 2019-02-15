import React, {Component} from 'react';


class EventCoordinatorModifyEventForm extends Component{

    eventDateRef = React.createRef();
    openingBandRef = React.createRef();
    closingBandRef = React.createRef();
    approvedVendorsRef = React.createRef();
    vendorsAppliedRef = React.createRef();
    approvedFoodTrucksRef = React.createRef();
    foodTrucksAppliedRef = React.createRef();


    render(){
        return(
            <div className="modify-event-form">
                
            </div>
            
        )
    }
}


export default EventCoordinatorModifyEventForm;


eventDate:"12-May",
                openingBand:"Halsey",
                closingBand:"Florida Georgia Line",
                vendorsAttending:"6 / 20",
                vendorsApplied: "6",
                foodTrucksAttending:"5 / 15",
                foodTrucksApplied:"3",