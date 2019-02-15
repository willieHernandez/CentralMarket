import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import UserOverview from '../UserProfile/UserOverview';
import ControlPanel from './ControlPanel';


class EventCoordinator extends Component{
    constructor(props){
        super(props)

        this.state = {
            coordinator1:{
                userPic: "/images/BobTheBuilder.jpg",
                firstName:"Bob",
                lastName:"Coordinator",
                userName:"BobCoordinator",
                emailAddress:"bob@coordinator.com",
                phoneNumber:"123-456-7891",
                accountType:"coordinator",
                dateAvailable:"12-may-2019",
                eventsSignedUpFor:""
            },
            commandSelected:"viewEvents",
        }
    }

    handleChangeCommand = (value) => {
        
        // if (value === "viewEvents"){
        //     this.setState( {
        //         commandSelected:"viewEvents"
        //     })
        // } else if (value === "viewApplications") {
        //     this.setState({
        //         commandSelected:"viewApplications"
        //     })

        // } else if (value === "viewParticipants") {
        //     this.setState( {
        //         commandSelected:"viewParticipants"
        //     })
        // } else {
        //     this.setState( {
        //         commandSelected:"viewBeers"
        //     })
        // }
    }

    render(){
        return(
            <div className="container">
                {/* {{console.log(this.state.coordinator1)}} */}
                <Header />
                <div className="body-portion">
                    <UserOverview 
                        userToDisplay={this.state.coordinator1} accountType={this.state.coordinator1["accountType}"]} />
                    <ControlPanel handleChangeCommand={this.handleChangeCommand}/>
                    
                </div>
                <Footer />
            </div>
        )
    }
}


export default EventCoordinator;
