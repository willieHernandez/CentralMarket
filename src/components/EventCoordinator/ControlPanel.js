import React, {Component} from 'react';
import EventInfoOverview from './EventInfoOverview';
import EventInfoArea from './EventInfoArea';


/*
    The control panel has a native option panel that allows the coordinator to select what they want to look at and when they select an item then it will create an 
        Child components: EventInfoOverview component and passes it 
*/
class ControlPanel extends Component{
    state = {
        events:{
            event1:{
                eventDate:"12-May",
                openingBand:"Halsey",
                closingBand:"Florida Georgia Line",
                vendorsAttending:"6 / 20",
                vendorsApplied: "6",
                foodTrucksAttending:"5 / 15",
                foodTrucksApplied:"3",
            },
            event2:{
                eventDate:"19-May",
                openingBand:"Panic Disco",
                closingBand:"Imagine Dragons",
                vendorsAttending:"10 / 20",
                vendorsApplied: "4",
                foodTrucksAttending:"7 / 15",
                foodTrucksApplied:"0",
            },
            event3:{
                eventDate:"26-May",
                openingBand:"Halsey",
                closingBand:"Florida Georgia Line",
                vendorsAttending:"8 / 20",
                vendorsApplied: "1",
                foodTrucksAttending:"8 / 15",
                foodTrucksApplied:"0",
            },
            event4:{
                eventDate:"4-June",
                openingBand:"Panic Disco",
                closingBand:"Imagine Dragons",
                vendorsAttending:"3 / 20",
                vendorsApplied: "12",
                foodTrucksAttending:"10 / 15",
                foodTrucksApplied:"2",
            },
        },
        appcliations:{},
        participants:{},
        beers:{},
        eventHeadings:[
            "Event Date",
            "Opening Band",
            "Closing Band",
            "Vendors Attending",
            "Vendors Applied",
            "Food Trucks Attending",
            "Food Trucks Applied"
        ],
        infoToDisplay:"events",
        dataSelectorValue: null,
    }

    handleViewEvent = () =>{  
        // this.props.handleChangeCommand("viewEvent")
        this.setState({
            infoToDisplay: "events"
        })
 
    }

    handleViewApplications = () =>{
        this.setState({
            infoToDisplay:"applications"
        })
        
        // this.props.handleChangeCommand("viewApplications")
    }
    handleViewParticipants = () =>{
        this.setState({
            infoToDisplay:"participants"
        })
        
        // this.props.handleChangeCommand("viewParticipants")
    }
    handleViewBeers = () =>{
        this.setState({
            infoToDisplay: "beers"
        })
        
        // this.props.handleChangeCommand("viewBeers")
    }


    handleDataSelectorValue = (commandSelected) =>{
        console.log("The command value selected is " + commandSelected)
        this.setState({
            dataSelectorValue: commandSelected
        })
    }

    handleAddAnEvent = (eventToAdd) =>{
        console.log("I made it home")
        const events = { ...this.state.events}

        console.log(events)

        console.log("Trying to add" )
        console.log(eventToAdd)
        events[`event${Date.now()}`] = eventToAdd
        console.log("Just added the new event" )
        console.log(events)
        this.setState({
            events: events
        })
    }



    render(){   
        /*
            Logic for conditionally rendering the info overview area. 
        */
        let overView;
        if (this.state.infoToDisplay === "events"){
            overView = <EventInfoOverview infoToDisplay={this.state.events} headings={this.state.eventHeadings} handleDataSelectorValue={this.handleDataSelectorValue}  />
        }

        /*
            Need to finish the rest of this if statement just uncomment the information below. Then create a component for viewing each of the different commands and then render those for overview instead of messing around with using just one component. 

            Then I need to create each of the components for each command and then work on pulling the data out of the array and display it. 
        */

        // ----------------------------------------------------------

        /*
            Logic for conditionally rendering the info area. 
        */

        let infoDisplayArea;

        if(this.state.dataSelectorValue === "addEvent"){
            infoDisplayArea = <EventInfoArea command={"addEvent"} handleAddAnEvent={this.handleAddAnEvent} />

        } else if ( this.state.dataSelectorValue === "modifyEvent"){
            infoDisplayArea = <EventInfoArea command={"modifyEvent"} selectorChange={this.handleSelectorChange} events={this.state.events}/>
        } 

        


        // } else if (this.state.infoToDisplay === "applications"){
        //     overView = <InfoOverview infoToDisplay={this.state.applications} />
        // } else if (this.state.infoToDisplay === "participants"){
        //     overView = <InfoOverview infoToDisplay={this.state.participants} />
        // } else {
        //     overView = <InfoOverview infoToDisplay={this.state.beers} />
        // }
        return(
            <div className="control-panel">
                <div className="control-panel-commands">
                    <button onClick={this.handleViewEvent}>View Event</button>
                    <button onClick={this.handleViewApplications}>View Applications</button>
                    <button onClick={this.handleViewParticipants}>View Participants</button>
                    <button onClick={this.handleViewBeers}>View Beers</button>
                </div>
                {overView}

                <div className="info-display">
                    {infoDisplayArea}
                </div>
            </div>
        )
    }
}


export default ControlPanel;