import React, {Component} from 'react';
import DataTable from '../DataTable/DataTable';


class EventInfoOverview extends Component{

    handleAddEvent = () => {
        this.props.handleDataSelectorValue("addEvent")

    }

    handleModifyAnEvent= () =>{
        this.props.handleDataSelectorValue("modifyEvent")

    }

    handleCancel = () =>{
        this.props.handleDataSelectorValue("cancel")

    }

    handleSelectorChange = (value) =>{
        console.log(value +" was selected")
    }

    render(){

        return(
            <div className ="info-overview">
                <h1>Inside info overview</h1>
                <DataTable headings={this.props.headings} events={this.props.infoToDisplay} />
                <div className="event-info-commands">
                    <button onClick={this.handleAddEvent}>Add Event</button>
                    <button onClick={this.handleModifyAnEvent}>Modify an Event</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </div>
                
            </div>
        )
    }
}


export default EventInfoOverview;