import React, {Component} from 'react';
import Option from './Option';


class OptionContainer extends Component{
    
    render(){
        const options = this.props.optionsArray
        return(
            <div className="option-container">
                

                {console.log(options.option1.linkTo)}
                {Object.keys(options).map( (value) => (
                    
                    <Option key={value} index={value} linkTo={options[value].linkTo} linkText={options[value].linkText}
                    optionText={options[value].optionText} />
                    ))
                }

            </div>
        )
    }
}


export default OptionContainer;