import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';



class EventCoordinator extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div >
                <Header />
                <h1>Inside the event coordinator page. </h1>
                <Footer />
            </div>
        )
    }
}


export default EventCoordinator;
