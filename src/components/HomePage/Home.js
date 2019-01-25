import React, {Component} from 'react';
import Header from "../Header";
import PictureWithDescription from "../PictureWithDescription";
import TabContainer from "./TabContainer";
import EventOverview from '../LiveMusic/EventOverview';
import Footer from '../Footer';

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            eventList:{
                event1:{
                    eventDate:"12 May",
                    openingBand:{
                        bandPicSrc:"/images/halsey.jpg",
                        bandName:"Halsey",
                    },
                    closingBand:{
                        bandPicSrc:"/images/florida-georgia-line.jpg",
                        bandName:"Florida Georgia Line",
                    }
                },
                event2:{
                    eventDate:"19 May",
                    openingBand:{
                        bandPicSrc:"/images/panic-at-the-disco.jpg",
                        bandName:"Panic at the Disco!",
                    },
                    closingBand:{
                        bandPicSrc:"/images/imagine-dragons.jpg",
                        bandName:"Imagine Dragons",
                    }
                },
                event3:{
                    eventDate:"26 May",
                    openingBand:{
                        bandPicSrc:"/images/halsey.jpg",
                        bandName:"Halsey",
                    },
                    closingBand:{
                        bandPicSrc:"/images/florida-georgia-line.jpg",
                        bandName:"Florida Georgia Line",
                    }
                },
                event4:{
                    eventDate:"3 June",
                    openingBand:{
                        bandPicSrc:"/images/panic-at-the-disco.jpg",
                        bandName:"Panic at the Disco!",
                    },
                    closingBand:{
                        bandPicSrc:"/images/imagine-dragons.jpg",
                        bandName:"Imagine Dragons",
                    }
                },
                event5:{
                    eventDate:"10 June",
                    openingBand:{
                        bandPicSrc:"/images/halsey.jpg",
                        bandName:"Halsey",
                    },
                    closingBand:{
                        bandPicSrc:"/images/florida-georgia-line.jpg",
                        bandName:"Florida Georgia Line",
                    }
                },
                event6:{
                    eventDate:"17 June",
                    openingBand:{
                        bandPicSrc:"/images/panic-at-the-disco.jpg",
                        bandName:"Panic at the Disco!",
                    },
                    closingBand:{
                        bandPicSrc:"/images/imagine-dragons.jpg",
                        bandName:"Imagine Dragons",
                    }
                },
                event7:{
                    eventDate:"24 June",
                    openingBand:{
                        bandPicSrc:"/images/halsey.jpg",
                        bandName:"Halsey",
                    },
                    closingBand:{
                        bandPicSrc:"/images/florida-georgia-line.jpg",
                        bandName:"Florida Georgia Line",
                    }
                },
                event8:{
                    eventDate:"1 July",
                    openingBand:{
                        bandPicSrc:"/images/panic-at-the-disco.jpg",
                        bandName:"Panic at the Disco!",
                    },
                    closingBand:{
                        bandPicSrc:"/images/imagine-dragons.jpg",
                        bandName:"Imagine Dragons",
                    }
                },
                event9:{
                    eventDate:"8 July",
                    openingBand:{
                        bandPicSrc:"/images/halsey.jpg",
                        bandName:"Halsey",
                    },
                    closingBand:{
                        bandPicSrc:"/images/florida-georgia-line.jpg",
                        bandName:"Florida Georgia Line",
                    }
                },
                event10:{
                    eventDate:"15 July",
                    openingBand:{
                        bandPicSrc:"/images/panic-at-the-disco.jpg",
                        bandName:"Panic at the Disco!",
                    },
                    closingBand:{
                        bandPicSrc:"/images/imagine-dragons.jpg",
                        bandName:"Imagine Dragons",
                    }
                },
                event11:{
                    eventDate:"22 July",
                    openingBand:{
                        bandPicSrc:"/images/halsey.jpg",
                        bandName:"Halsey",
                    },
                    closingBand:{
                        bandPicSrc:"/images/florida-georgia-line.jpg",
                        bandName:"Florida Georgia Line",
                    }
                },
                event12:{
                    eventDate:"29 July",
                    openingBand:{
                        bandPicSrc:"/images/panic-at-the-disco.jpg",
                        bandName:"Panic at the Disco!",
                    },
                    closingBand:{
                        bandPicSrc:"/images/imagine-dragons.jpg",
                        bandName:"Imagine Dragons",
                    }
                },
                event13:{
                    eventDate:"5 August",
                    openingBand:{
                        bandPicSrc:"/images/halsey.jpg",
                        bandName:"Halsey",
                    },
                    closingBand:{
                        bandPicSrc:"/images/florida-georgia-line.jpg",
                        bandName:"Florida Georgia Line",
                    }
                },
                event14:{
                    eventDate:"12 August",
                    openingBand:{
                        bandPicSrc:"/images/panic-at-the-disco.jpg",
                        bandName:"Panic at the Disco!",
                    },
                    closingBand:{
                        bandPicSrc:"/images/imagine-dragons.jpg",
                        bandName:"Imagine Dragons",
                    }
                },
                event15:{
                    eventDate:"19 August",
                    openingBand:{
                        bandPicSrc:"/images/halsey.jpg",
                        bandName:"Halsey",
                    },
                    closingBand:{
                        bandPicSrc:"/images/florida-georgia-line.jpg",
                        bandName:"Florida Georgia Line",
                    }
                },
            }
        }
    }

    render(){
        return(
            <div className="container">
                <Header />
                <div className="body-portion">
                    {/* Get a new image so that way it is wider and shorter. */}
                    <PictureWithDescription containerClass="picture-with-description" pictureClass="picture-with-description-img" source="/images/centralMarket.jpg" altText="Main picture of Central Market" captionClass="picture-with-description-caption" caption="Welcome to Central Market, a place where families in Northwest Indiana can come to hang out with friends, support local artists and restaurants."/>
                    <TabContainer />
                    <EventOverview eventList={this.state.eventList} numEventsToShow={2} allowNavigate={false}/>
                    <Footer />
                </div>
            </div>
        )
    }
}


export default Home;