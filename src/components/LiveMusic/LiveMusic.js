import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import PictureWithDescription from '../PictureWithDescription';
import EventOverview from './EventOverview';
import OptionContainer from '../OptionContainer';


class LiveMusic extends Component{
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
            },
            options:{
                option1:{
                    linkTo:"/band-apply",
                    linkText:"Band Apply",
                    optionText:"If your band would like to perform at an upcoming Central Market event, please click the button below to apply.",
                }
            }
        }
    }
    


    render(){
           
        return(
            <div className="container">
                <Header />
                <div className="body-portion">
                    <PictureWithDescription 
                        containerClass="picture-with-description" pictureClass="picture-with-description-img" source="/images/liveMusic.jpg" 
                        altText="Beer Garden at Central Market" captionClass="picture-with-description-caption" 
                        caption="The Beer Garden at Central Market has national beers on tap like Budweiser and Heineken. We also support local breweries like WildRose and 3 Floyd's. The Beer Garden uses a ticket system that you get outside the Beer Garden. Each ticket is worth 1 dollar and you can buy up to five tickets at a time."
                    />
                    <EventOverview eventList={this.state.eventList} numEventsToShow={4} allowNavigate={true}/>
                    <OptionContainer optionsArray={this.state.options}/>
                </div>
                <Footer />
            </div>
        )
    }
}


export default LiveMusic;





// The way to segment the Event array into bites for the component:
//     will have an object with all the EventS.


/*eventsToDisplay =4;
numberOfEvents = Object.keys(eventObject).length;

willHaveUnevenRows = () => {
    numberOfEvents % eventsToDisplay > 0 ? true : false;
}

numContainers = () => {
    let tempNum =  numberOfEvents / eventsToDisplay;
    return willHaveUnevenRows ? tempNum + 1 : tempNum;
}

let index = 0;
let counter =1;
liveMusicArray = Object.keys(eventObject);

while (counter <= numContainers){
    
    // use this to set the displayContainer prop
    displayFirst = () =>{counter === 1 ? true : false}
    if (willHaveUnevenRows){
        // will be an even row 
        if (counter < numContainers){
            liveMusicArray.slice(index, index+eventsToDisplay-1).map(() => {
                Render event
                Component Props:
                    displayFirst = displayFirst
                    containerNumber = counter
            })
            index += eventsToDisplay;
        } 
        // will be an uneven row
        else {
            liveMusicArray.slice(index, index+(numberOfEvents%eventsToDisplay)-1).map(() => {
                Render event
            })
            // don't need to increment index because we won't come back to it. 

        }
    } 
    // won't have any uneven rows
    else {
        liveMusicArray.slice(index, index+eventsToDisplay-1).map(() => {
            Render event
        })
        index += eventsToDisplay;
    }
    counter++;
}*/

