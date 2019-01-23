import React from 'react';
import {Link} from 'react-router-dom';

function Option(props){
    return(
        <div className='option'>
            <p>{props.optionText}</p>
            <div className='option-container-button'>
                {console.log(props.linkTo)}
                <Link to={props.linkTo}>{props.linkText}</Link>
            </div>
        </div>
    )
}


export default Option;