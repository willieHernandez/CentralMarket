import React from 'react';
import VendorItem from './VendorItem';


function VendorsContainer(props){
    return(
        <div className="vendors-container">
            {props.vendorsToShow.map( (vendor) => (
                <VendorItem vendorName={vendor.vendorName} vendorPic={vendor.vendorPic} />
            ))}
            
                
        </div>
       
    )
}


export default VendorsContainer;