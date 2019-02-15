import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import UserOverview from './UserOverview';


class UserProfile extends Component{
    constructor(props){
        super(props)

/*  todo: need to a database call when this will load to get the user information.
        this includes:
            
            the first name
            the last name
            the account type
            events the user is signed up for

            needs to be conditional depending on what type of account it is.
            


*/
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

            },
            user1:{
                userPic: "/images/BobTheBuilder.jpg",
                firstName:"Bob",
                lastName:"User",
                userName:"BobUser",
                emailAddress:"bob@user.com",
                phoneNumber:"123-456-7891",
                accountType:"vendor",
                dateAvailable:"12-may-2019",
                eventsSignedUpFor: ["19-may-2019", "26-may-2019", "4-june-2019"]
            }
        }
        
    }



    render(){
        return(
            <div className="container">
                <Header />
                <div className="body-portion">
                    <UserOverview userToDisplay={this.state.user1} accountType={this.state.user1["accountType"]} isAuthenticated={true}/>
                    <h1>Inside the user profile app.</h1>
                    
                </div>
                <Footer />
            </div>
        )
    }
}


export default UserProfile;