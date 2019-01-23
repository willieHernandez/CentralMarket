import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserOverview extends Component{
    
    render(){ 
        let updateUserInfo;
    
        if (this.props.accountType == "band"){
            updateUserInfo = <Link to={"/band-apply"}>Update user info</Link>
        } else if (this.props.accountType == "brewery") {
            updateUserInfo = <Link to={"/brewery-apply"}>Update user info</Link>
        } else if (this.props.accountType == "vendor") {
            updateUserInfo = <Link to={"/vendor-apply"}>Update user info</Link>
        } else {
            updateUserInfo = <Link to={"/foodtruck-apply"}>Update user info</Link>
        }
    
        return(
            <div className="user-profile-overview">
                <img className="user-profile-pic" src={this.props.userPic} alt="User Picture" />
                <div className="user-profile-overview-info">
                    <p>User Name: {this.props.userName}</p>
                    <p>Account Type: {this.props.accountType}</p>
                    {updateUserInfo}
                </div>
            </div>
        )
    }    
}


export default UserOverview;