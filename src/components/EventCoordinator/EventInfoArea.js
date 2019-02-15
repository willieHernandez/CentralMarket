import React, {Component, Fragment} from 'react';
import EventCoordinatorAddEventForm from '../FormComponents/EventCoordinatorAddEventForm';
import EventCoordinatorModifyEventForm from '../FormComponents/EventCoordinatorModifyEventForm';


/*
    The info area component is called when the control panel sends a command to display information. 
        The information can be: addEvent, modifyEvent, and cancel
*/
class EventInfoArea extends Component{
    constructor(props){
        super(props)
        
        if (props.events){
            this.events = Object.values(this.props.events)
        }
    }
    state = {
        eventToShow:undefined
    }

    selectorRef = React.createRef()
    
    


    handleSelectorChange = () => {
        if (this.selectorRef.current.value){
            console.log(this.events[this.selectorRef.current.value])
            this.setState({
                eventToShow:this.events[this.selectorRef.current.value]
            })
            
        }
    }

    render(){
        let modifyEventComponent
        if(this.state.eventToShow){
            
            //Display EventCoordinatorModifyEventForm
            modifyEventComponent = <EventCoordinatorModifyEventForm currentEvent={this.state.eventToShow}/>
        }
        return(
            (this.props.command === "addEvent") ? (
                <EventCoordinatorAddEventForm handleAddAnEvent={this.props.handleAddAnEvent}/>

            ) : "modifyEvent" ?(
                <Fragment>
                    <div className="modify-event-section">
                        
                            <h1 className="modify-event-section-header">Select an event to modify</h1>
                            
                            <select onChange={this.handleSelectorChange}className="modify-event-section-selector"  ref={this.selectorRef}>
                            
                            <option value={undefined}></option>
                            {Object.values(this.props.events).map((event, key) => {
                                return(
                                    <option key={key} value={key}>{event.eventDate} </option>
                                )
                            })}
                            </select>
                    </div>
                    
                    {modifyEventComponent}
                </Fragment>
            ) : null
            
            
        )
    }
}


export default EventInfoArea;