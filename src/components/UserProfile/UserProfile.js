import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import UserOverview from './UserOverview';


class UserProfile extends Component{
    constructor(props){
        super(props)

        this.state = {
            eventDates:{
                event1:{
                    eventDate:"12 May",
                },
                event2:{
                    eventDate:"19 May",
                },
                event3:{
                    eventDate:"26 May",
                },
                event4:{
                    eventDate:"3 June",
                },
                event5:{
                    eventDate:"10 June",
                },
                event6:{
                    eventDate:"17 June",
                },
                event7:{
                    eventDate:"24 June",
                },
                event8:{
                    eventDate:"1 July",
                },
                event9:{
                    eventDate:"8 July",
                },
                event10:{
                    eventDate:"15 July",
                },
                event11:{
                    eventDate:"22 July",
                },
                event12:{
                    eventDate:"29 July",
                },
                event13:{
                    eventDate:"5 August",
                },
                event14:{
                    eventDate:"12 August",
                },
                event15:{
                    eventDate:"19 August",
                },
            },
            eventsSignedUpFor:{
                
            }
        }
    }
    render(){
        return(
            <div className="user-profile">
                <Header />
                <UserOverview userName={"Bob the Builder"} userPic={"/images/BobTheBuilder.jpg"} accountType={"band"} isAuthenticated={true}/>
                <h1>Inside the user profile app.</h1>
                <Footer />
            </div>
        )
    }
}


export default UserProfile;