import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import UserOverview from './UserOverview';


class UserProfile extends Component{

    render(){
        return(
            <div className="user-profile">
                <Header />
                <UserOverview userName={"Bob the Builder"} userPic={"/images/BobTheBuilder.jpg"} accountType={"band"} />
                <h1>Inside the user profile app.</h1>
                <Footer />
            </div>
        )
    }
}


export default UserProfile;