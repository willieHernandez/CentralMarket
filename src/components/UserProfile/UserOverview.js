import React, {Component} from 'react';
import {Link} from 'react-router-dom';





class UserOverview extends Component{
    // constructor(props){
    //     super(props)

    //     // this.eventsSignedUpFor = this.eventsSignedUpFor.bind(this);
    // }
    
    // eventsSignedUpForString = "";

    // EventsSignedUpFor = (props) => ( 
    //     props.userToDisplay["eventsSignedUpFor"].foreach((item) => (
    //         console.log(item)
    //         eventsSignedUpForString += item + " | "
    //     ))
    //     return eventsSignedUpForString;
    // )
    


    


    render(){ 
        let updateUserInfo;

        const UserProfileInfo = (props) => (    
                <div className="user-profile-overview-info">
                    <div className ="user-profile-overview-info-col">
                        <p>First Name: {this.props.userToDisplay["firstName"]}</p>
                        <p>Last Name: {this.props.userToDisplay["lastName"]}</p>
                        <p>User Name: {this.props.userToDisplay["userName"]}</p>
                    </div>
                    <div className ="user-profile-overview-info-col">
                        <p>Email Address: {this.props.userToDisplay["emailAddress"]}</p>
                        <p>Phone Number: {this.props.userToDisplay["phoneNumber"]}</p>
                        <p>Account Type: {this.props.userToDisplay["accountType"]} </p>
                    </div>
                    <div className ="user-profile-overview-info-col">
                        <p>Date available: {this.props.userToDisplay["dateAvailable"]}</p>
                        <p>Events signed up for: {this.eventsSignedUpFor}</p>
                        {updateUserInfo}
                    </div>
                    
                    
                </div>
        )
        

        if (this.props.accountType === "band"){
            updateUserInfo = <Link to={"/band-apply"}>Update user info</Link>
        } else if (this.props.accountType === "brewery") {
            updateUserInfo = <Link to={"/brewery-apply"}>Update user info</Link>
        } else if (this.props.accountType === "vendor") {
            updateUserInfo = <Link to={"/vendor-apply"}>Update user info</Link>
        } else if (this.props.accountType === "foodTruck") {
            updateUserInfo = <Link to={"/foodtruck-apply"}>Update user info</Link>
        } else {
            updateUserInfo = <Link to={"/login"}>Update user info</Link>
        }
    
        return(
            <div className="user-profile-overview">
                <img className="user-profile-pic" src={this.props.userToDisplay["userPic"]} alt="User Logo" />
                <UserProfileInfo />
                {/* <div className="user-profile-overview-info">
                    <p>User Name: {this.props.userName}</p>
                    <p>Account Type: {this.props.accountType}</p>
                    {updateUserInfo}
                </div> */}
            </div>
        )
    }    
}


export default UserOverview;