import React from 'react';


function FoodTruckItem(props){

    return(
        <div className="vendor-item">
            <img className="vendor-pic" src={props.foodTruckPic} alt="Food Truck Logo"></img>
            <p className="vendor-name">{props.foodTruckName}</p>
        </div>
    )
}
 
export default FoodTruckItem;

