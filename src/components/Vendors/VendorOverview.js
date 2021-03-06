import React from 'react';
import VendorsContainer from './VendorsContainer';


class VendorOverview extends React.Component {
    constructor(props){
        super(props)
        this.state={
            containerToShow:0,
        }


        this.containerArray=[]

        this.calculateEventContainers = this.calculateEventContainers.bind(this);
        this.calculateEventContainers(props.numVendorsToShow, props.allowNavigate)
        // this.increment = this.increment.bind(this)
    }

    calculateEventContainers = (numEventsToShow, allowNavigate) => {
        let numberOfEvents = Object.keys(this.props.vendorList).length
        console.log("\n Number of events: " + numberOfEvents)

        function willHaveUnevenRows(){
            return (numberOfEvents % numEventsToShow > 0) ? true : false;
        }
        
        let hasUnevenRows = willHaveUnevenRows()
        console.log("\nWill have uneven rows " + hasUnevenRows)
        
        function getNumContainers(){
            let tempNum = 0
            if (allowNavigate){
                tempNum =  numberOfEvents / numEventsToShow;
                if(hasUnevenRows){
                    tempNum++
                }
            } else {
                tempNum = 1;
            }
                return tempNum
        }

        let numContainers = parseInt(getNumContainers())
        console.log("\nNumber of containers " + numContainers)

        let index = 0;
        let counter =1;
        let vendorsArray = Object.values(this.props.vendorList);
        

        while (counter <= numContainers){

            if (hasUnevenRows){
                // will be an even row 
                if (counter < numContainers){
                    this.containerArray.push(vendorsArray.slice(index, index+numEventsToShow))
                    index += numEventsToShow
                } else if ((counter = numContainers) && !allowNavigate) {
                    this.containerArray.push(vendorsArray.slice(index,index+numEventsToShow))
                    console.log("\t\t\tthe containerarray" + this.containerArray)
                    index += numEventsToShow
                }
                // will be an uneven row
                else {
                    this.containerArray.push(vendorsArray.slice(index))
                    // don't need to increment index because we won't come back to it. 

                }
            } 
            // won't have any uneven rows
            else {
                vendorsArray.slice(index, index+numEventsToShow).map(() => {
                    // Render event
                    console.log("Rendering element number " + vendorsArray[index])
                })
            }
            counter++;
        }
    }

    // calculateEventContainers(props.numEventsToShow, props.allowNavigate)

    increment= () => {
        if (this.state.containerToShow < this.containerArray.length-1){
            this.setState( (prevState) => {
                return {containerToShow: prevState.containerToShow + 1}
            })
            
        } 

        // this.setState( (prevState) => {
        //     return {containerToShow: prevState.containerToShow + incrementValue}
        // })
    }

    decrement = () => {
        if (this.state.containerToShow > 0){
            this.setState( (prevState) => {
                return {containerToShow: prevState.containerToShow -1}
            })
        }
    }
    render(){
        
        return(
           
            <div className="vendor-overview-section">

                <h2 className="vendor-overview-title">Past Vendors that came to Central Market before</h2>

                
                {/* {this.containerArray.map( (array) => (
                    
                    <EventsContainer eventsToShow={array}>
                    {console.log("The array being passed in is " + array)}
                    Hello World
                    </EventsContainer>
                ))} */}

                {(this.props.allowNavigate) ?
                        <button class="vendor-container-button" onClick={this.decrement}>{"<"}</button> 
                        :
                        <span className="vendor-overview-spanner"/>
                        
                }


                
                {console.log(this.containerArray)}
                <VendorsContainer vendorsToShow={this.containerArray[this.state.containerToShow]}  />
                {(this.props.allowNavigate) &&
                    <button class="vendor-container-button" onClick={this.increment}>{">"}</button>
                }
                
                
                {console.log("container array length" + this.containerArray.length)}
                

                
                
                
                {/* <EventItem eventDate={event1Info.eventDate} openingBand={event1Info.openingBand} closingBand={event1Info.closingBand} />
                <EventItem eventDate={event2Info.eventDate} openingBand={event2Info.openingBand} closingBand={event2Info.closingBand} /> */}
            </div>
    )
    }
}

export default VendorOverview;
