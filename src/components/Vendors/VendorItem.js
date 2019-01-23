import React from 'react';


function VendorItem(props){

    return(
        <div className="vendor-item">
            <img className="vendor-pic" src={props.vendorPic} alt="Vendor Logo"></img>
            <p className="vendor-name">{props.vendorName}</p>
        </div>
    )
}
 
export default VendorItem;

