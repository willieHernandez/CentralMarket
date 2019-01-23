import React from 'react';
import FoodTruckItem from './FoodTruckItem';


function FoodTrucksContainer(props){
    return(
        <div className="vendors-container">
            {props.foodTruckssToShow.map( (foodTruck) => (
                <FoodTruckItem foodTruckName={foodTruck.foodTruckName} foodTruckPic={foodTruck.foodTruckPic} />
            ))}
            
                
        </div>
       
    )
}


export default FoodTrucksContainer;